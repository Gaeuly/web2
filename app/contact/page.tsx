"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Clock, Send, MessageCircle, Github, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "support@moonveil.bot",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: MessageCircle,
      title: "Discord Server",
      description: "Join our community",
      value: "discord.gg/moonveil",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within",
      value: "24 hours",
      color: "from-green-500 to-green-700",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/moonveil",
      color: "hover:text-gray-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/moonveil",
      color: "hover:text-blue-400",
    },
    {
      icon: MessageCircle,
      name: "Discord",
      url: "https://discord.gg/moonveil",
      color: "hover:text-indigo-400",
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
              Contact Us
            </motion.h1>
            <motion.p className="text-xl text-gray-300 mb-8 leading-relaxed" variants={itemVariants}>
              Have questions, feedback, or need assistance? We'd love to hear from you. Reach out and let's start a
              conversation.
            </motion.p>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full"
              variants={itemVariants}
            />
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="glass-effect rounded-xl p-8 text-center group hover:border-purple-400/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{info.description}</p>
                  <p className="text-purple-400 font-medium">{info.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-effect rounded-2xl p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div className="text-center mb-8" variants={itemVariants}>
                <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                <p className="text-gray-300">Fill out the form below and we'll get back to you as soon as possible.</p>
              </motion.div>

              <motion.form onSubmit={handleSubmit} className="space-y-6" variants={itemVariants}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-black/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 transition-all duration-300 hover:border-purple-400/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-black/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 transition-all duration-300 hover:border-purple-400/50"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-black/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 transition-all duration-300 hover:border-purple-400/50"
                    placeholder="What's this about?"
                    required
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-black/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 resize-none transition-all duration-300 hover:border-purple-400/50"
                    placeholder="Tell us more about your question, feedback, or how we can help you..."
                    required
                  />
                </motion.div>

                <motion.div className="text-center pt-4" variants={itemVariants}>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="px-12 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl shadow-2xl glow-purple-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                        Sending...
                      </motion.div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 className="text-3xl font-bold text-white mb-8" variants={itemVariants}>
                Connect With Us
              </motion.h2>
              <motion.div className="flex justify-center space-x-8" variants={itemVariants}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center space-y-2 text-gray-400 ${social.color} transition-colors group`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-full flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-purple-700/40 transition-all duration-300">
                      <social.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
