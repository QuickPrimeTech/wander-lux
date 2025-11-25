const stats = [
  { value: "15K+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations" },
  { value: "200+", label: "Tours Completed" },
  { value: "4.9", label: "Average Rating" },
]

export function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
