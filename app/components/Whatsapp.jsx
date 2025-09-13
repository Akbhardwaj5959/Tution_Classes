"use client";
import Image from "next/image";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/919625145845?text=Hello%20I%20want%20to%20know%20more%20about%20your%20classes"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp.webp"
        alt="WhatsApp"
        width={56}
        height={56}
        className="drop-shadow-lg hover:scale-110 transition rounded-full"
      />
    </a>
  );
}