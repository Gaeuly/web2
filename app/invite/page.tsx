"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Shield,
  Users,
  MessageSquare,
  Settings,
  Star,
  CheckCircle,
  Crown,
  Zap,
  Heart,
} from "lucide-react"

export default function InvitePage() {
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

  const permissions = [
    {
      icon: MessageSquare,
      name: "Send Messages",
      description: "Allow Moonveil to send messages and respond to commands",
      required: true,
    },
    {
      icon: Shield,
      name: "Manage Messages",
      description: "Enable moderation features like message deletion and filtering",
      required: true,
    },
    {
      icon: Users,
      name: "Manage Roles",
      description: "Automatic role assignment and reaction roles",
      required: false,
    },
    {
      icon: Settings,
      name: "Manage Channels",
      description: "Create temporary channels and manage channel settings",
      required: false,
    },
  ]

  const testimonials = [
    {
      name: "Alex Chen",
      server: "Gaming Paradise",
      avatar: "/diverse-gaming-avatars.png",
      rating: 5,
      text: "Moonveil transformed our server! The moderation features are incredible and the space theme fits perfectly with our community aesthetic.",
    },
    {
      name: "Sarah Johnson",
      server: "Creative Hub",
      avatar: "/creative-avatar.png",
      rating: 5,
      text: "Best Discord bot we've ever used. The custom commands and music features keep our 2000+ members engaged daily.",
    },
    {
      name: "Mike Rodriguez",
      server: "Tech Community",
      avatar: "/tech-avatar.png",
      rating: 5,
      text: "The analytics and insights help us understand our community better. Plus, the 24/7 uptime is exactly what we needed.",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started in seconds with our automated setup process",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Protect your server with AI-powered moderation tools",
    },
    {
      icon: Crown,
      title: "Premium Features",
      description: "Access exclusive features and priority support",
    },
    {
      icon: Heart,
      title: "Community Focused",
      description: "Built by the community, for the community",
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
              Invite Moonveil
            </motion.h1>
            <motion.p className="text-xl text-gray-300 mb-8 leading-relaxed" variants={itemVariants}>
              Ready to elevate your Discord server? Add Moonveil and unlock powerful features that will transform your
              community experience.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" variants={itemVariants}>
              <Button
                size="lg"
                className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 rounded-xl shadow-2xl glow-purple-hover transition-all duration-300 group"
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Add to Discord
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-4 text-lg font-semibold bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-300 rounded-xl shadow-lg transition-all duration-300"
              >
                View Demo
              </Button>
            </motion.div>
            <motion.p className="text-sm text-gray-400" variants={itemVariants}>
              Trusted by 1,000+ servers • Free to use • Premium features available
            </motion.p>
          </motion.div>
        </section>

        {/* Benefits Section */}
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
                Join thousands of servers already using Moonveil
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="glass-effect rounded-xl p-6 text-center group hover:border-purple-400/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Permissions Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-effect rounded-2xl p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div className="text-center mb-8" variants={itemVariants}>
                <h2 className="text-3xl font-bold text-white mb-4">Required Permissions</h2>
                <p className="text-gray-300">
                  Moonveil needs these permissions to function properly. Don't worry - we only use what's necessary.
                </p>
              </motion.div>

              <motion.div className="space-y-4" variants={itemVariants}>
                {permissions.map((permission, index) => (
                  <motion.div
                    key={permission.name}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <permission.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-white font-medium">{permission.name}</h3>
                        {permission.required ? (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">
                            Required
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm">{permission.description}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                What Our Users Say
              </motion.h2>
              <motion.p className="text-xl text-gray-300" variants={itemVariants}>
                Don't just take our word for it
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="glass-effect rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-purple-500/30"
                    />
                    <div>
                      <h3 className="text-white font-medium">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.server}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{testimonial.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="glass-effect rounded-2xl p-12" variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the thousands of servers already using Moonveil to create amazing Discord experiences.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                <Button
                  size="lg"
                  className="px-16 py-4 text-xl font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0 rounded-xl shadow-2xl glow-purple-hover transition-all duration-300"
                >
                  <ExternalLink className="w-6 h-6 mr-3" />
                  Add Moonveil to Discord
                </Button>
              </motion.div>
              <p className="text-sm text-gray-400 mt-4">
                Free forever • No credit card required • Setup in under 60 seconds
              </p>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
