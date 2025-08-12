"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Mail, Book, HelpCircle, ExternalLink, Send } from "lucide-react"

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const faqs = [
    {
      question: "How do I invite Moonveil to my server?",
      answer:
        "Click the 'Invite Bot' button on our homepage or navigation menu. You'll be redirected to Discord's authorization page where you can select your server and grant the necessary permissions.",
    },
    {
      question: "What permissions does Moonveil need?",
      answer:
        "Moonveil requires basic permissions like Send Messages, Read Message History, and Embed Links. For advanced features like moderation, it may need additional permissions like Manage Messages, Ban Members, and Manage Roles.",
    },
    {
      question: "Is Moonveil free to use?",
      answer:
        "Yes! Moonveil offers a comprehensive free tier with most features available. We also offer premium subscriptions for advanced features, priority support, and increased limits.",
    },
    {
      question: "How do I set up custom commands?",
      answer:
        "Use the `!command create` command followed by your custom command name and response. You can also use variables, conditions, and advanced scripting through our web dashboard.",
    },
    {
      question: "Why is the bot not responding to commands?",
      answer:
        "Check if the bot has the necessary permissions, ensure you're using the correct prefix, and verify the bot is online. If issues persist, join our support server for assistance.",
    },
    {
      question: "How do I report a bug or request a feature?",
      answer:
        "You can report bugs or request features through our support server, contact form below, or by creating an issue on our GitHub repository.",
    },
    {
      question: "Can I customize the bot's prefix?",
      answer:
        "Yes! Server administrators can change the bot prefix using the `!prefix` command followed by the new prefix. The default prefix is `!`.",
    },
    {
      question: "How do I get premium features?",
      answer:
        "Visit our premium page or use the `!premium` command to learn about available plans and upgrade options. Premium features include advanced moderation, custom branding, and priority support.",
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
              Support Center
            </motion.h1>
            <motion.p className="text-xl text-gray-300 mb-8 leading-relaxed" variants={itemVariants}>
              Get help, find answers, and connect with our community. We're here to ensure you have the best experience
              with Moonveil.
            </motion.p>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full"
              variants={itemVariants}
            />
          </motion.div>
        </section>

        {/* Support Options */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div
                className="glass-effect rounded-xl p-8 text-center group hover:border-purple-400/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Discord Support</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Join our official Discord server for real-time support, community discussions, and updates.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join Server
                </Button>
              </motion.div>

              <motion.div
                className="glass-effect rounded-xl p-8 text-center group hover:border-purple-400/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Comprehensive guides, tutorials, and API documentation to help you get the most out of Moonveil.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Book className="w-4 h-4 mr-2" />
                  View Docs
                </Button>
              </motion.div>

              <motion.div
                className="glass-effect rounded-xl p-8 text-center group hover:border-purple-400/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Send us a detailed message using the contact form below for personalized assistance.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
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
                <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-gray-300">
                  Have a specific question or need personalized help? Send us a message and we'll get back to you as
                  soon as possible.
                </p>
              </motion.div>

              <motion.form onSubmit={handleSubmit} className="space-y-6" variants={itemVariants}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-black/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="Your name"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-black/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-black/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                    placeholder="What's this about?"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-black/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 resize-none"
                    placeholder="Tell us more about your question or issue..."
                    required
                  />
                </motion.div>

                <motion.div className="text-center" variants={itemVariants}>
                  <Button
                    type="submit"
                    size="lg"
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl shadow-2xl glow-purple-hover transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h2 className="text-4xl font-bold text-white mb-4" variants={itemVariants}>
                Frequently Asked Questions
              </motion.h2>
              <motion.p className="text-xl text-gray-300" variants={itemVariants}>
                Find quick answers to common questions about Moonveil
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="glass-effect rounded-lg border-purple-500/20 px-6"
                    >
                      <AccordionTrigger className="text-left text-white hover:text-purple-400 transition-colors">
                        <div className="flex items-center space-x-3">
                          <HelpCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 leading-relaxed pt-2">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
