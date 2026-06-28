"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[150px]" />

      <div className="max-w-7xl mx-auto grid gap-16 px-6 lg:grid-cols-2 lg:px-10">

        <div className="flex flex-col justify-center">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-purple-400"
          >
            LUXURY FASHION FOR MEN & WOMEN
          </motion.span>

          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold leading-tight md:text-7xl"
          >
            Fashion
            <br />
            Beyond
            <span className="text-purple-500"> Ordinary.</span>
          </motion.h1>

          <p className="mt-8 max-w-xl text-lg text-gray-300">
            Discover timeless elegance crafted for men and women who appreciate luxury, confidence, and impeccable style.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-full bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-700">
              Explore Collection
            </button>

            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
              Book Consultation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="relative h-[700px] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <img
            src="/hero.jpg"
            alt="Jalulu Fashion"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-8 left-8 rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
            <p className="text-gray-300">Luxury Since</p>
            <h3 className="text-4xl font-bold">2021</h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}