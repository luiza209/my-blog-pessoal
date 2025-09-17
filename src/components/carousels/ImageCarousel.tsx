// src/components/carousels/ImageCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Array de imagens de Recife. Adicione quantas quiser!
const images = [
  "/images/recife1.jpg",
  "/images/recife2.jpg",
  "/images/recife3.jpg",
  "/images/recife4.jpg",
  "/images/recife5.jpg",
  "/images/recife6.jpg",
];

export default function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Muda a imagem a cada 5 segundos
    
    // Limpa o timer quando o componente é desmontado
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((src, index) => (
        <div
          key={src}
          className={`carousel-image-wrapper ${index === currentImageIndex ? "active" : ""}`}
        >
          <Image
            src={src}
            alt={`Imagem de Recife ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}