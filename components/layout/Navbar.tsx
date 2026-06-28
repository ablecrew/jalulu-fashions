"use client";

import { Menu, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mt-5 flex h-20 items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 backdrop-blur-xl">

          {/* LOGO PLACEHOLDER */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-700 to-purple-500 text-xl font-bold">
              J
            </div>

            <div>
              <h1 className="font-serif text-2xl tracking-[0.25em]">
                JALULU
              </h1>
              <p className="text-xs text-gray-400">
                FASHIONS
              </p>
            </div>
          </div>

          <div className="hidden gap-10 lg:flex">
            <a href="#">Home</a>
            <a href="#">Collections</a>
            <a href="#">Gallery</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="flex gap-4">
            <ShoppingBag />
            <button className="lg:hidden">
              <Menu />
            </button>
          </div>

        </div>
      </nav>
    </motion.header>
  );
}