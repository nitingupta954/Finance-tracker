"use client";

import React from "react"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; 
import { Sparkles, ReceiptText, Tag, CreditCard } from "lucide-react"; 

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-20 px-4 overflow-hidden mesh-background">
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-100 animate-bounce">
          <Sparkles className="w-4 h-4" />
          <span>Next-Gen AI Finance Tracker</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[110px] pb-6 gradient-title leading-[1.1]">
          Manage Your <br />
          <span className="text-gradient">Wealth Smarter</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The ultimate AI-powered financial management platform. Track spending,
          scan receipts, and get predictive insights—all powered by your own AI keys for maximum privacy.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <Link href="/dashboard">
            <Button size="lg" className="px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-blue-600 hover:bg-blue-700">
              Get Started for Free
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline" className="px-10 py-7 text-lg rounded-full glass-card hover:bg-white/50 transition-all duration-300">
              Watch Demo
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <span className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/40 shadow-sm text-sm font-medium text-gray-700">
            <ReceiptText className="w-4 h-4 text-blue-500" /> Smart Scanner
          </span>
          <span className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/40 shadow-sm text-sm font-medium text-gray-700">
            <Tag className="w-4 h-4 text-purple-500" /> Auto-Categorize
          </span>
          <span className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/40 shadow-sm text-sm font-medium text-gray-700">
            <CreditCard className="w-4 h-4 text-emerald-500" /> Cash Flow AI
          </span>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute -inset-1 bg-conic-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white rounded-[2rem] p-2 shadow-2xl border border-white/20 glass-card">
            <Image
              src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
              width={1280}
              height={720}
              alt="Welth Dashboard Preview"
              className="rounded-[1.7rem] shadow-inner border border-gray-100/50"
              priority
            />
          </div>
          
          {/* Floating Action Cards */}
          <div className="absolute -left-12 top-1/4 hidden lg:block floating">
            <div className="glass-card p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Tag className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Auto-Categorized</p>
                <p className="text-sm font-bold">Grocery: ₹1,200</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-12 bottom-1/4 hidden lg:block floating animation-delay-700">
            <div className="glass-card p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <ReceiptText className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Recent Receipt</p>
                <p className="text-sm font-bold">Scan Complete ✓</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
