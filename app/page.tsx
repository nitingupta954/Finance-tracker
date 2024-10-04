import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "../data";
// import HeroSection from "@/components/hero";
import Link from "next/link";
import HeroSection from "@/components/ui/Hero";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-24 bg-white/50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="mb-4 p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon()}
                </div>
                <div className="text-5xl font-bold tracking-tight mb-2 text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative overflow-hidden mesh-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title leading-tight">
              Everything you need to <br />
              <span className="text-blue-600">manage your finances</span>
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools and AI-driven insights to help you track spending, save more, and build wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card group p-8 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100/50 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  {feature.icon()}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple 3-Step Process</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-blue-200 -translate-y-1/2 hidden md:block" />
            
            {howItWorksData.map((step, index) => (
              <div key={index} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center shadow-lg mb-8 ring-8 ring-white group hover:scale-110 transition-transform">
                  <div className="text-blue-600">
                    {step.icon()}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">Loved by Thousands</h2>
            <p className="text-xl text-gray-600">Join a community of users taking control of their financial future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 rounded-[2rem] border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
                <p className="text-gray-600 italic text-lg mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400 blur-md opacity-20" />
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full relative border-2 border-white shadow-md"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-blue-600 font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 overflow-hidden relative">
        <div className="container mx-auto">
          <div className="relative glass-card rounded-[3rem] p-12 md:p-20 overflow-hidden bg-blue-600 text-white border-0">
             {/* Background shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Ready to take control of your <br />
                <span className="text-blue-200">financial future?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join thousands of users who are already managing their finances smarter with Welth. Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-12 py-8 text-lg rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-xl font-bold"
                  >
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-12 py-8 text-lg rounded-full border-white/40 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;