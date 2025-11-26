"use client";
import { CldVideoPlayer as CloudinaryVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export function CldVideoPlayer() {
  return (
    <CloudinaryVideoPlayer
      id="adaptive-bitrate-streaming"
      autoplay="always"
      loop
      muted
      controls={false}
      className="absolute w-full h-full object-cover"
      transformation={{
        quality: "auto",
        fetch_format: "auto",
      }}
      // crop="fill"
      src="12597611_3838_2160_30fps_m7atby"
    />
  );
}
