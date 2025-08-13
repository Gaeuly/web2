"use client"

import { motion } from "framer-motion"
import { useState, useCallback, useEffect } from "react"
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
  Bot,
  Settings,
  Activity,
  Globe
} from "lucide-react"

export default function HomePage() {
  const [clickedCards, setClickedCards] = useState<Set<string>>(new Set())
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])

  // Generate floating particles
  useEffect(() => {
    const particleCount = 15
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6
    }))
    setParticles(newParticles)
  }, [])

  const handleCardClick = useCallback((cardId: string) => {
    setClickedCards(prev => new Set(prev.add(cardId)))
    
    setTimeout(() => {
      setClickedCards(prev => {
        const newSet = new Set(prev)
        newSet.delete(cardId)
        return newSet
      })
    }, 800)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.165, 0.84, 0.44, 1],
      },
    },
  }

  const features = [
    { 
      id: 'moderation',
      title: "AI Moderation", 
      desc: "Advanced AI-powered moderation with smart detection, auto-moderation, and custom punishment systems",
      icon: Shield,
      color: "from-purple-500 to-indigo-600",
      stats: "99.8% accuracy"
    },
    { 
      id: 'commands',
      title: "Custom Commands", 
      desc: "Create unlimited personalized commands with advanced scripting, variables, and conditional logic",
      icon: Zap,
      color: "from-indigo-500 to-purple-600",
      stats: "Unlimited commands"
    },
    { 
      id: 'music',
      title: "Premium Audio", 
      desc: "Crystal-clear 320kbps audio streaming with queue management, lyrics, and multi-platform support",
      icon: Music,
      color: "from-purple-600 to-pink-500",
      stats: "320kbps quality"
    },
    { 
      id: 'support',
      title: "Premium Support", 
      desc: "Lightning-fast 24/7 premium support team with average response time under 5 minutes",
      icon: Headphones,
      color: "from-pink-500 to-purple-500",
      stats: "<5min response"
    },
    {
      id: 'premium',
      title: "Premium Features",
      desc: "Exclusive tools, advanced analytics, custom branding, and priority feature access for power users",
      icon: Crown,
      color: "from-yellow-400 to-purple-500",
      stats: "50+ features"
    }
  ]

  const stats = [
    { id: 'servers', value: '25K+', label: 'Active Servers', icon: Globe, color: 'from-blue-400 to-purple-500' },
    { id: 'users', value: '2.5M+', label: 'Happy Users', icon: Users, color: 'from-green-400 to-blue-500' },
    { id: 'uptime', value: '99.99%', label: 'Uptime', icon: Activity, color: 'from-emerald-400 to-cyan-500' },
    { id: 'commands', value: '50M+', label: 'Commands Daily', icon: Zap, color: 'from-yellow-400 to-red-500' }
  ]

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="grid-background"></div>
      <div className="floating-orbs"></div>
      
      {/* Floating Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, -120],
              x: [-10, 10],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
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
            <motion.div variants={itemVariants} className="mb-16">
              <div className="flex justify-center mb-8">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-48 h-48 bg-gradient-to-br from-purple-400 via-purple-600 to-indigo-800 rounded-3xl flex items-center justify-center shadow-2xl animate-modern-pulse relative overflow-hidden">
                    {/* Multiple inner glow layers */}
                    <div className="absolute inset-4 bg-gradient-to-br from-purple-300/30 to-transparent rounded-2xl"></div>
                    <div className="absolute inset-8 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
                    <span className="text-white font-bold text-7xl relative z-10 drop-shadow-2xl">M</span>
                    
                    {/* Enhanced sparkle effects */}
                    <div className="absolute top-6 right-8 w-3 h-3 bg-white rounded-full animate-ping opacity-80"></div>
                    <div className="absolute bottom-8 left-6 w-2 h-2 bg-purple-200 rounded-full animate-pulse opacity-60"></div>
                    <div className="absolute top-12 left-12 w-1 h-1 bg-white rounded-full animate-bounce opacity-90"></div>
                  </div>
                  
                  {/* Floating elements around logo */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-4 h-4 bg-purple-400 rounded-full"
                    animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-indigo-400 rounded-full"
                    animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </motion.div>
              </div>

              <motion.h1
                className="text-8xl md:text-9xl lg:text-[12rem] font-black gradient-text-modern mb-8 tracking-tighter leading-none"
                variants={itemVariants}
              >
                Moonveil
              </motion.h1>
              
              <motion.div
                className="relative inline-block mb-6"
                variants={itemVariants}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-xl rounded-full"></div>
                <p className="text-4xl md:text-5xl font-bold text-white relative z-10 tracking-wide">
                  Next-Generation Discord Bot
                </p>
              </motion.div>
              
              <motion.p 
                className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light" 
                variants={itemVariants}
              >
                Transform your Discord server with our premium space-themed bot featuring 
                <span className="text-purple-300 font-semibold"> advanced AI moderation</span>, 
                <span className="text-indigo-300 font-semibold"> crystal-clear music streaming</span>, and 
                <span className="text-pink-300 font-semibold"> unlimited customization options</span>.
              </motion.p>
            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24" 
              variants={itemVariants}
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="btn-premium px-16 py-8 text-xl font-bold text-white group relative overflow-hidden rounded-2xl"
                >
                  <ExternalLink className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Invite Bot Now
                  <Sparkles className="w-5 h-5 ml-3 group-hover:scale-125 transition-transform duration-300" />
                </Button>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="btn-outline-modern px-16 py-8 text-xl font-bold group relative overflow-hidden rounded-2xl"
                >
                  <Heart className="w-6 h-6 mr-3 group-hover:scale-110 group-hover:text-pink-300 transition-all duration-300" />
                  Vote & Support
                </Button>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="btn-outline-modern px-16 py-8 text-xl font-bold group relative overflow-hidden rounded-2xl"
                >
                  <Users className="w-6 h-6 mr-3 group-hover:bounce transition-transform duration-300" />
                  Join Community
                </Button>
              </motion.div>
            </motion.div>

            {/* Ultra Modern Stats Section */}
            <motion.div
              className="mb-28 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
              variants={itemVariants}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.id}
                    className={`stats-card rounded-3xl p-8 text-center cursor-pointer relative overflow-hidden group ${
                      clickedCards.has(stat.id) ? 'card-blink' : ''
                    }`}
                    whileHover={{ scale: 1.08, y: -12, rotateY: 8 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => handleCardClick(stat.id)}
                    initial={{ opacity: 0, y: 60, rotateX: -20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Dynamic gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-400 shadow-2xl`}>
                        <Icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      
                      <div className="text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      
                      <div className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>

                    {/* Enhanced floating elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-indigo-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-200"></div>
                    <div className="absolute top-8 left-8 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-bounce transition-opacity duration-300 delay-400"></div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Enhanced Features Section */}
            <motion.div className="mb-28" variants={itemVariants}>
              <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-6xl font-black gradient-text-modern mb-6 tracking-tight">
                  Revolutionary Features
                </h2>
                <p className="text-2xl text-gray-200 mb-4 max-w-3xl mx-auto font-light">
                  Discover cutting-edge Discord bot technology designed for modern communities
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={feature.id}
                      className={`feature-card rounded-3xl p-10 text-left cursor-pointer relative group ${
                        clickedCards.has(feature.id) ? 'card-blink' : ''
                      }`}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -15,
                        rotateY: 8,
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => handleCardClick(feature.id)}
                      initial={{ opacity: 0, y: 80, rotateX: -20 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div className="relative z-10">
                        {/* Enhanced Icon Section */}
                        <div className="relative mb-8">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-400 shadow-2xl`}>
                            <Icon className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            ✨
                          </div>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-300">
                          {feature.desc}
                        </p>

                        {/* Stats badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 mb-6">
                          <Star className="w-4 h-4 text-purple-300 mr-2" />
                          <span className="text-purple-200 text-sm font-semibold">{feature.stats}</span>
                        </div>

                        {/* Learn more section */}
                        <div className="flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-4 group-hover:translate-y-0">
                          <span className="text-base font-semibold mr-3">Explore Feature</span>
                          <ExternalLink className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Enhanced floating elements */}
                      <div className="absolute top-6 right-6 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-opacity duration-300"></div>
                      <div className="absolute bottom-8 left-8 w-2 h-2 bg-purple-300 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-300 delay-300"></div>
                      <div className="absolute top-16 left-16 w-1 h-1 bg-indigo-300 rounded-full opacity-0 group-hover:opacity-90 group-hover:animate-bounce transition-opacity duration-300 delay-500"></div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Ultra Premium CTA Section */}
            <motion.div 
              className="cta-background rounded-[2rem] p-16 max-w-5xl mx-auto text-center relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {/* Dynamic background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/15 via-indigo-600/20 to-purple-600/15"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full"></div>
              
              <div className="relative z-10">
                <motion.div
                  className="w-28 h-28 bg-gradient-to-br from-purple-400 via-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Rocket className="w-14 h-14 text-white" />
                </motion.div>

                <h3 className="text-5xl font-black text-white mb-6 tracking-tight">
                  Ready to <span className="gradient-text-modern">Transform</span> Your Discord?
                </h3>
                
                <p className="text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                  Join over <span className="font-bold text-purple-300">25,000 communities</span> already using Moonveil 
                  to create extraordinary Discord experiences. Setup takes less than 30 seconds.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.div 
                    whileHover={{ scale: 1.08, y: -4 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="btn-premium px-16 py-8 text-xl font-bold text-white group relative overflow-hidden rounded-2xl glow-purple-modern"
                    >
                      <Crown className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      Get Premium Access
                      <motion.div
                        className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </Button>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.08, y: -4 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="btn-outline-modern px-16 py-8 text-xl font-bold group rounded-2xl"
                    >
                      <Bot className="w-6 h-6 mr-3 group-hover:bounce transition-transform duration-300" />
                      View Docs
                    </Button>
                  </motion.div>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
                  <div className="flex items-center text-gray-400">
                    <Shield className="w-5 h-5 mr-2 text-green-400" />
                    <span className="text-sm font-medium">Verified Bot</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Activity className="w-5 h-5 mr-2 text-blue-400" />
                    <span className="text-sm font-medium">99.99% Uptime</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Settings className="w-5 h-5 mr-2 text-purple-400" />
                    <span className="text-sm font-medium">Easy Setup</span>
                  </div>
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute top-12 left-12 w-4 h-4 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
              <div className="absolute top-16 right-16 w-3 h-3 bg-indigo-400 rounded-full animate-ping opacity-30"></div>
              <div className="absolute bottom-12 left-16 w-2 h-2 bg-purple-300 rounded-full animate-bounce opacity-50"></div>
              <div className="absolute bottom-16 right-12 w-3 h-3 bg-indigo-300 rounded-full animate-pulse opacity-40"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500/30 rounded-tl-[2rem]"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-indigo-500/30 rounded-tr-[2rem]"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-indigo-500/30 rounded-bl-[2rem]"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 rounded-br-[2rem]"></div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
