"use client"

import { motion } from "framer-motion"
import { useState, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  ExternalLink, 
  Heart, 
  Users, 
  Shield, 
  Music, 
  Zap, 
  Headphones,
  Star,
  Sparkles,
  Rocket,
  Crown,
  Bot
} from "lucide-react"

export default function HomePage() {
  const [clickedCards, setClickedCards] = useState<Set<string>>(new Set())

  const handleCardClick = useCallback((cardId: string) => {
    setClickedCards(prev => new Set(prev.add(cardId)))
    
    // Remove the blink effect after animation completes
    setTimeout(() => {
      setClickedCards(prev => {
        const newSet = new Set(prev)
        newSet.delete(cardId)
        return newSet
      })
    }, 600)
  }, [])

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
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
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
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.08,
      y: -4,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  }

  const logoVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.15,
      rotate: 10,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const features = [
    { 
      id: 'moderation',
      title: "Advanced Moderation", 
      desc: "AI-powered moderation with smart filters and auto-punishment system",
      icon: Shield,
      color: "from-purple-500 to-indigo-600"
    },
    { 
      id: 'commands',
      title: "Custom Commands", 
      desc: "Create unlimited personalized commands with advanced scripting",
      icon: Zap,
      color: "from-indigo-500 to-purple-600"
    },
    { 
      id: 'music',
      title: "Premium Music", 
      desc: "Crystal-clear 320kbps audio streaming with queue management",
      icon: Music,
      color: "from-purple-600 to-pink-500"
    },
    { 
      id: 'support',
      title: "24/7 Support", 
      desc: "Lightning-fast premium support team always ready to help",
      icon: Headphones,
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 'ai',
      title: "AI Assistant",
      desc: "Smart AI-powered chat companion with context awareness",
      icon: Bot,
      color: "from-cyan-400 to-purple-500"
    },
    {
      id: 'premium',
      title: "Premium Features",
      desc: "Exclusive tools and customizations for power users",
      icon: Crown,
      color: "from-yellow-400 to-purple-500"
    }
  ]

  const stats = [
    { id: 'servers', value: '10K+', label: 'Active Servers', icon: Star },
    { id: 'users', value: '500K+', label: 'Happy Users', icon: Users },
    { id: 'uptime', value: '99.99%', label: 'Uptime', icon: Sparkles },
    { id: 'commands', value: '1M+', label: 'Commands Daily', icon: Rocket }
  ]

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <div className="starfield"></div>
      
      <Navbar />
      <main className="flex-1 pt-16 relative z-10">
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
          <motion.div
            className="text-center max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Logo Section */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex justify-center mb-8">
                <motion.div
                  className="relative"
                  variants={logoVariants}
                  whileHover="hover"
                >
                  <div className="w-40 h-40 bg-gradient-to-br from-purple-400 via-purple-600 to-indigo-800 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow-enhanced relative overflow-hidden">
                    {/* Inner glow effect */}
                    <div className="absolute inset-2 bg-gradient-to-br from-purple-300/20 to-transparent rounded-full"></div>
                    <span className="text-white font-bold text-5xl relative z-10">M</span>
                    {/* Sparkle effects */}
                    <div className="absolute top-4 right-6 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-4 w-1 h-1 bg-purple-200 rounded-full animate-pulse"></div>
                  </div>
                  {/* Floating particles around logo */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-80"></div>
                </motion.div>
              </div>

              <motion.h1
                className="text-8xl md:text-9xl lg:text-10xl font-bold gradient-text mb-6 tracking-tight"
                variants={itemVariants}
              >
                Moonveil
              </motion.h1>
              
              <motion.p 
                className="text-3xl md:text-4xl text-purple-200 mb-4 font-light tracking-wide" 
                variants={itemVariants}
              >
                Next-Gen Discord Bot
              </motion.p>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" 
                variants={itemVariants}
              >
                Experience the future of Discord automation with our premium space-themed bot featuring 
                advanced AI moderation, crystal-clear music streaming, and unlimited customization.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20" 
              variants={itemVariants}
            >
              <motion.div 
                variants={buttonVariants} 
                whileHover="hover" 
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="px-14 py-7 text-xl font-bold glass-button glow-purple-hover group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-400/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <ExternalLink className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Invite Bot
                  <Sparkles className="w-4 h-4 ml-2 group-hover:scale-125 transition-transform duration-300" />
                </Button>
              </motion.div>

              <motion.div 
                variants={buttonVariants} 
                whileHover="hover" 
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="px-14 py-7 text-xl font-bold glass-button border-2 border-purple-400/50 hover:border-purple-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-400/10 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Heart className="w-6 h-6 mr-3 group-hover:scale-110 group-hover:text-pink-300 transition-all duration-300" />
                  Vote Now
                </Button>
              </motion.div>

              <motion.div 
                variants={buttonVariants} 
                whileHover="hover" 
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="px-14 py-7 text-xl font-bold glass-button border-2 border-blue-400/50 hover:border-blue-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Users className="w-6 h-6 mr-3 group-hover:bounce transition-transform duration-300" />
                  Join Server
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div
              className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
              variants={itemVariants}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.id}
                    className={`glossy-card rounded-2xl p-6 text-center cursor-pointer relative overflow-hidden group ${
                      clickedCards.has(stat.id) ? 'card-blink' : ''
                    }`}
                    whileHover={{ scale: 1.08, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleCardClick(stat.id)}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-125 group-hover:text-purple-300 transition-all duration-300" />
                      <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>

                    {/* Floating sparkles */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-indigo-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-200"></div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Enhanced Features Section */}
            <motion.div className="mb-24" variants={itemVariants}>
              <motion.h2 
                className="text-5xl font-bold gradient-text mb-4"
                variants={itemVariants}
              >
                Why Choose Moonveil?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Discover the most advanced Discord bot with cutting-edge features designed for modern communities
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={feature.id}
                      className={`glossy-card rounded-2xl p-8 text-left cursor-pointer relative overflow-hidden group ${
                        clickedCards.has(feature.id) ? 'card-blink' : ''
                      }`}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10,
                        rotateY: 5,
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => handleCardClick(feature.id)}
                      initial={{ opacity: 0, y: 60, rotateX: -15 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      style={{ 
                        animationDelay: `${index * 0.15}s`,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                      
                      <div className="relative z-10">
                        {/* Icon with background */}
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {feature.desc}
                        </p>

                        {/* Learn more indicator */}
                        <div className="mt-6 flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-sm font-medium mr-2">Explore Feature</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
                      <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-300 delay-300"></div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div 
              className="glossy-card rounded-3xl p-12 max-w-4xl mx-auto text-center relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-purple-600/10 opacity-50"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Rocket className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-4xl font-bold gradient-text mb-4">
                  Ready to Transform Your Discord?
                </h3>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of communities already using Moonveil to create amazing Discord experiences. 
                  Get started in seconds with our easy setup process.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="px-12 py-6 text-lg font-bold glass-button glow-purple-intense group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/30 to-purple-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <Crown className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Get Premium Access
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="px-12 py-6 text-lg font-medium text-purple-300 hover:text-white hover:bg-purple-500/10 border border-purple-500/30 hover:border-purple-400 group"
                    >
                      <Bot className="w-5 h-5 mr-2 group-hover:bounce transition-transform duration-300" />
                      View Documentation
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute top-12 right-12 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-40"></div>
              <div className="absolute bottom-8 left-12 w-1 h-1 bg-purple-300 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute bottom-12 right-8 w-2 h-2 bg-indigo-300 rounded-full animate-pulse opacity-60"></div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
      }
