import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[85vh] overflow-hidden flex items-center justify-center px-4">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-pink/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 py-12">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-card border border-luxury-pink/40 text-luxury-pink text-xs font-bold uppercase">
            <Sparkles className="w-4 h-4" /> Small Budget. Big Surprises.
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            You Choose The Emotion. <br />
            <span className="bg-gradient-to-r from-luxury-pink via-pink-400 to-purple-500 bg-clip-text text-transparent">
              We Deliver The Magic.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl">
            Tell us your budget, favorite colors, and person to surprise. We’ll
            curate, package, and deliver a personalized surprise box.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/shop"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-luxury-pink to-purple-600 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-luxury-pink/30 hover:scale-105 transition"
            >
              Create My Surprise <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/special-surprise"
              className="px-8 py-4 rounded-xl bg-luxury-card border border-luxury-border text-neutral-200 font-semibold flex items-center justify-center"
            >
              Plan Special Setup
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="w-80 h-80 sm:w-96 sm:h-96 glass-panel-glow rounded-3xl p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-tr from-luxury-pink to-purple-600 rounded-2xl flex items-center justify-center shadow-xl mb-6">
              <Gift className="w-12 h-12 text-white animate-bounce" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Curated Emotion Box
            </h3>
            <p className="text-neutral-400 text-sm">
              Flowers • Chocolates • Custom Cards • Luxury Ribbon
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
