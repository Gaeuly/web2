"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Shield,
  Music,
  Gamepad2,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
  Zap,
  Crown,
  Bot,
  Calendar,
  Gift,
} from "lucide-react"

export default function FeaturesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      icon: Shield,
      title: "Advanced Moderation",
      description: "AI-powered moderation with auto-ban, spam detection, and custom filters to keep your server safe.",
      color: "from-red-500 to-red-700",
    },
    {
      icon: Music,
      title: "High-Quality Music",
      description: "Crystal clear audio streaming from multiple sources with queue management and playlist support.",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Gamepad2,
      title: "Fun & Games",
      description: "Interactive games, trivia, and entertainment commands to keep your community engaged.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Users,
      title: "Role Management",
      description: "Automated role assignment, reaction roles, and advanced permission management systems.",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      icon: MessageSquare,
      title: "Custom Commands",
      description: "Create personalized commands with variables, conditions, and advanced scripting capabilities.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Detailed server statistics, member activity tracking, and comprehensive analytics dashboard.",
      color: "from-cyan-500 to-cyan-700",
    },
    {
      icon: Settings,
      title: "Server Utilities",
      description: "Polls, announcements, auto-moderation, and essential server management tools.",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with minimal latency and instant command responses.",
      color: "from-pink-500 to-pink-700",
    },
    {
      icon: Crown,
      title: "Premium Features",
      description: "Exclusive premium commands, priority support, and advanced customization options.",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: Bot,
      title: "AI Integration",
      description: "Smart AI responses, chatbot functionality, and intelligent conversation management.",
      color: "from-teal-500 to-teal-700",
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Schedule events, set reminders, and manage community activities with ease.",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: Gift,
      title: "Rewards System",
      description: "Level up system, achievements, daily rewards, and gamification features.",
      color: "from-rose-500 to-rose-700",
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
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6"
              variants={itemVariants}
            >
              Powerful Features
            </motion.h1>
            <motion.p className="text-xl text-gray-300 mb-8 leading-relaxed" variants={itemVariants}>
              Discover the comprehensive suite of tools and features that make Moonveil the ultimate Discord bot for
              your server.
            </motion.p>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full"
              variants={itemVariants}
            />
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Sharp pointed edges card */}
                  <div className="glass-effect rounded-lg p-6 h-full relative overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                    {/* Top-left corner accent */}
                    <div className="absolute top-0 left-0 w-8 h-8">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent" />
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent" />
                    </div>

                    {/* Bottom-right corner accent */}
                    <div className="absolute bottom-0 right-0 w-8 h-8">
                      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-purple-500 to-transparent" />
                      <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-purple-500 to-transparent" />
                    </div>

                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-4 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">{feature.description}</p>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="glass-effect rounded-2xl p-8" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of servers already using Moonveil to enhance their Discord experience.
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl shadow-2xl glow-purple-hover transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Invite Moonveil Now
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
