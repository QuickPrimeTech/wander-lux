"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const mockResponses: Record<string, string> = {
  "popular tours":
    "Our most popular tours include the Santorini Sunset Experience in Greece, the Japanese Cherry Blossom Tour, the African Safari Adventure in Kenya, and the Amalfi Coast Escape in Italy. Each offers unique experiences with our signature luxury service!",
  "best destinations":
    "Our top destinations right now are: Greece (especially Santorini), Japan during cherry blossom season, the Amalfi Coast in Italy, Morocco for desert adventures, and Patagonia for breathtaking landscapes. Where would you like to explore?",
  "luxury packages":
    "Our luxury packages include 5-star accommodations, private transfers, exclusive experiences, and dedicated concierge service. Popular options include the Santorini Sunset Experience starting at $2,899 and the Amalfi Coast Escape at $3,299. Would you like more details on any specific package?",
  default:
    "Thank you for your interest in Wanderlux Tours! We offer curated travel experiences to destinations worldwide including Europe, Asia, Africa, and South America. Our packages include luxury accommodations, expert guides, and unforgettable experiences. How can I help you plan your dream trip?",
};

function getResponse(input: string): string {
  const lowerInput = input.toLowerCase();

  if (
    lowerInput.includes("popular") ||
    lowerInput.includes("best seller") ||
    lowerInput.includes("top tour")
  ) {
    return mockResponses["popular tours"];
  }
  if (
    lowerInput.includes("destination") ||
    lowerInput.includes("where") ||
    lowerInput.includes("country") ||
    lowerInput.includes("place")
  ) {
    return mockResponses["best destinations"];
  }
  if (
    lowerInput.includes("luxury") ||
    lowerInput.includes("premium") ||
    lowerInput.includes("package") ||
    lowerInput.includes("price") ||
    lowerInput.includes("cost")
  ) {
    return mockResponses["luxury packages"];
  }
  if (
    lowerInput.includes("hello") ||
    lowerInput.includes("hi") ||
    lowerInput.includes("hey")
  ) {
    return "Hello! Welcome to Wanderlux Tours. I'm here to help you discover amazing travel experiences. What kind of adventure are you looking for?";
  }
  if (lowerInput.includes("book") || lowerInput.includes("reserve")) {
    return "To book a tour, you can browse our packages on the website and click 'Book Now', or I can help you find the perfect tour based on your preferences. What destinations or experiences interest you?";
  }
  if (
    lowerInput.includes("contact") ||
    lowerInput.includes("support") ||
    lowerInput.includes("help")
  ) {
    return "You can reach our travel experts at support@wanderlux.com or call us at 1-800-WANDERLUX. We're available 24/7 to assist with your travel plans!";
  }

  return mockResponses["default"];
}

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationDismissed, setNotificationDismissed] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [notificationDismissed]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node)
      ) {
        const floatingButton = document.getElementById("chat-floating-button");
        if (floatingButton && floatingButton.contains(event.target as Node)) {
          return;
        }
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getResponse(text),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
  };

  const handleSendClick = () => {
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendClick();
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowNotification(false);
    setNotificationDismissed(true);
  };

  const handleDismissNotification = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowNotification(false);
    setNotificationDismissed(true);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {showNotification && !isOpen && (
        <div
          className="absolute bottom-20 right-0 w-72 max-w-[calc(100vw-2rem)] bg-card border border-border rounded-lg p-4 shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300 cursor-pointer"
          onClick={handleOpenChat}
        >
          <button
            onClick={handleDismissNotification}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Need help planning your trip?
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Chat with our AI travel assistant for personalized
                recommendations!
              </p>
            </div>
          </div>
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
        </div>
      )}

      {isOpen && (
        <div
          ref={chatWindowRef}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] h-[calc(100vh-2rem)] sm:h-[500px] max-h-[600px] bg-card border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300"
        >
          {/* Header - Fixed height */}
          <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-secondary border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  Wanderlux Assistant
                </h3>
                <p className="text-xs text-muted-foreground">
                  Your AI travel guide
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages - Flexible height with scroll */}
          <ScrollArea className="flex-1 min-h-0">
            <div className="p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">
                    Welcome to Wanderlux!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Ask me about our tours, destinations, or get personalized
                    travel recommendations.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {[
                      "Popular tours",
                      "Best destinations",
                      "Luxury packages",
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => {
                          sendMessage(suggestion);
                        }}
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-xl px-4 py-2.5 text-sm wrap-break-word",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-xl px-4 py-2.5">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.1s]" />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:0.2s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input form - Fixed height */}
          <div className="shrink-0 p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about tours, destinations..."
                className="flex-1 bg-secondary text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary min-w-0"
                disabled={isLoading}
              />
              <Button
                type="button"
                size="icon"
                onClick={handleSendClick}
                disabled={!input.trim() || isLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <button
        id="chat-floating-button"
        onClick={handleOpenChat}
        className={cn(
          "w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl",
          isOpen && "rotate-0",
          showNotification && !isOpen && "animate-pulse"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
