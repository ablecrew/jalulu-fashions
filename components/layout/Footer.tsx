"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
return ( <footer className="relative mt-32 border-t border-white/10">
{/* Top Glow */} <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

  <div className="container-width section-padding py-20">
    <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-purple-500 text-2xl font-bold shadow-lg shadow-purple-600/30">
            J
          </div>

          <div>
            <h2 className="font-serif text-3xl tracking-[0.25em]">
              JALULU
            </h2>

            <p className="text-sm tracking-[0.4em] text-gray-400">
              FASHIONS
            </p>
          </div>
        </div>

        <p className="max-w-sm text-gray-400">
          Premium fashion for men and women, crafted to embody elegance,
          confidence and timeless luxury.
        </p>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="mb-6 text-xl font-semibold">
          Navigation
        </h3>

        <ul className="space-y-4 text-gray-400">
          <li>
            <Link href="#" className="transition hover:text-purple-400">
              Home
            </Link>
          </li>

          <li>
            <Link href="#" className="transition hover:text-purple-400">
              Collections
            </Link>
          </li>

          <li>
            <Link href="#" className="transition hover:text-purple-400">
              Gallery
            </Link>
          </li>

          <li>
            <Link href="#" className="transition hover:text-purple-400">
              About
            </Link>
          </li>

          <li>
            <Link href="#" className="transition hover:text-purple-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Collections */}
      <div>
        <h3 className="mb-6 text-xl font-semibold">
          Collections
        </h3>

        <ul className="space-y-4 text-gray-400">
          <li>Men's Suits</li>
          <li>Women's Fashion</li>
          <li>Wedding Attire</li>
          <li>Custom Tailoring</li>
          <li>Luxury Accessories</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="mb-6 text-xl font-semibold">
          Contact
        </h3>

        <div className="space-y-5 text-gray-400">

          <div className="flex gap-3">
            <Phone className="mt-1 text-purple-500" size={18} />
            <span>+254 704 24 440</span>
          </div>

          <div className="flex gap-3">
            <Mail className="mt-1 text-purple-500" size={18} />
            <span>jeluufashions@gmail.com</span>
          </div>

          <div className="flex gap-3">
            <MapPin className="mt-1 text-purple-500" size={18} />
            <span>Nairobi, Kenya</span>
          </div>

        </div>
      </div>
    </div>

    {/* Social Icons */}
    <div className="mt-16 flex items-center justify-center gap-6">

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/18tJGEcpfA/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="glass rounded-full p-4 transition hover:-translate-y-2 hover:border-purple-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M22 12A10 10 0 1 0 10.44 21.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/jalulu_fashions?igsh=MWl3Zm8zdHAyNDVjdA=="
        target="_blank"
        rel="noopener noreferrer"
        className="glass rounded-full p-4 transition hover:-translate-y-2 hover:border-purple-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-white"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@jalulu.habiliment?_r=1&_t=ZS-97W2qjBWIeD"
        target="_blank"
        rel="noopener noreferrer"
        className="glass rounded-full p-4 transition hover:-translate-y-2 hover:border-purple-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M19.59 6.69A4.83 4.83 0 0 1 16 5.26V16a5 5 0 1 1-5-5c.17 0 .34.01.5.03v2.54a2.5 2.5 0 1 0 2 2.43V2h2.5a4.84 4.84 0 0 0 3.59 4.69z"/>
        </svg>
      </a>

    </div>

    {/* Bottom */}
    <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} JALULU FASHIONS. All Rights Reserved.
    </div>
  </div>
</footer>

);
}
