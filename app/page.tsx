"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart, Users } from "lucide-react"

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Logo Section */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex justify-center mb-6">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-bold text-4xl">M</span>
                </motion.div>
              </div>
              <motion.h1
                className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-4"
                variants={itemVariants}
              >
                Moonveil
              </motion.h1>
              <motion.p className="text-2xl md:text-3xl text-gray-300 mb-2" variants={itemVariants}>
                Premium Discord Bot
              </motion.p>
              <motion.p className="text-lg text-gray-400 max-w-2xl mx-auto" variants={itemVariants}>
                Experience the future of Discord automation with our space-themed bot featuring advanced moderation,
                entertainment, and utility commands.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={itemVariants}>
              <motion.div variants={buttonVariants} whileHover="hover">
                <Button
                  size="lg"
                  className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 rounded-xl shadow-2xl glow-purple-hover transition-all duration-300 group"
                >
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Invite Bot
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants} whileHover="hover">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-12 py-6 text-lg font-semibold bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-300 rounded-xl shadow-lg transition-all duration-300 group"
                >
                  <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Vote
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants} whileHover="hover">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-12 py-6 text-lg font-semibold bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-300 rounded-xl shadow-lg transition-all duration-300 group"
                >
                  <Users className="w-5 h-5 mr-2 group-hover:bounce transition-transform" />
                  Support Server
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              <motion.div
                className="glass-effect rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">1,000+</div>
                <div className="text-gray-300">Servers</div>
              </motion.div>

              <motion.div
                className="glass-effect rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">50,000+</div>
                <div className="text-gray-300">Users</div>
              </motion.div>

              <motion.div
                className="glass-effect rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </motion.div>
            </motion.div>

            {/* Features Preview */}
            <motion.div className="mt-20" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose Moonveil?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { title: "Advanced Moderation", desc: "AI-powered moderation tools" },
                  { title: "Custom Commands", desc: "Create personalized commands" },
                  { title: "Music & Entertainment", desc: "High-quality audio streaming" },
                  { title: "24/7 Support", desc: "Always here to help you" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="glass-effect rounded-lg p-4 text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
