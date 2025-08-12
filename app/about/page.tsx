"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Rocket, Shield, Zap, Users, Star, Globe } from "lucide-react"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const features = [
    {
      icon: Rocket,
      title: "Advanced Technology",
      description: "Built with cutting-edge technology for optimal performance and reliability.",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Enterprise-grade security to protect your server and community.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with minimal latency and maximum efficiency.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Designed to enhance community interaction and engagement.",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "High-quality features and exceptional user experience.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving Discord communities worldwide with 24/7 availability.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6"
              variants={itemVariants}
            >
              About Moonveil
            </motion.h1>
            <motion.p className="text-xl text-gray-300 mb-8 leading-relaxed" variants={itemVariants}>
              Moonveil is a premium Discord bot that brings the cosmos to your server. Designed with a space-themed
              aesthetic and powered by advanced technology, we provide an unparalleled Discord experience.
            </motion.p>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full"
              variants={itemVariants}
            />
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We believe that every Discord server deserves exceptional tools to build thriving communities.
                  Moonveil was created to bridge the gap between functionality and aesthetics, providing powerful
                  features wrapped in an elegant, space-inspired interface.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  From advanced moderation capabilities to entertainment features, we're committed to delivering a bot
                  that not only meets your needs but exceeds your expectations.
                </p>
              </motion.div>
              <motion.div
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-effect rounded-2xl p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Innovation First</h3>
                  <p className="text-gray-300">
                    Constantly evolving with the latest Discord features and community feedback.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 className="text-4xl font-bold text-white mb-4" variants={itemVariants}>
                Why Choose Moonveil?
              </motion.h2>
              <motion.p className="text-xl text-gray-300" variants={itemVariants}>
                Discover what makes us different from other Discord bots
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass-effect rounded-xl p-6 text-center group hover:border-purple-400/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-effect rounded-2xl p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 className="text-3xl font-bold text-center text-white mb-8" variants={itemVariants}>
                Trusted by Communities Worldwide
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "1,000+", label: "Active Servers" },
                  { number: "50,000+", label: "Happy Users" },
                  { number: "99.9%", label: "Uptime" },
                  { number: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
