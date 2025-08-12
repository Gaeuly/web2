"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Server, Activity, Users, Zap, Globe, Shield } from "lucide-react"

export default function ShardsPage() {
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

  // Fake shard data for demo
  const shards = [
    {
      id: 1,
      name: "Shard Alpha",
      region: "North America",
      status: "online",
      servers: 342,
      users: 15420,
      latency: 23,
      uptime: 99.9,
      load: 45,
    },
    {
      id: 2,
      name: "Shard Beta",
      region: "Europe",
      status: "online",
      servers: 298,
      users: 12850,
      latency: 18,
      uptime: 99.8,
      load: 38,
    },
    {
      id: 3,
      name: "Shard Gamma",
      region: "Asia Pacific",
      status: "online",
      servers: 256,
      users: 11200,
      latency: 31,
      uptime: 99.9,
      load: 52,
    },
    {
      id: 4,
      name: "Shard Delta",
      region: "South America",
      status: "maintenance",
      servers: 189,
      users: 8340,
      latency: 45,
      uptime: 98.5,
      load: 0,
    },
    {
      id: 5,
      name: "Shard Epsilon",
      region: "Australia",
      status: "online",
      servers: 167,
      users: 7890,
      latency: 28,
      uptime: 99.7,
      load: 41,
    },
    {
      id: 6,
      name: "Shard Zeta",
      region: "Middle East",
      status: "online",
      servers: 134,
      users: 6120,
      latency: 35,
      uptime: 99.6,
      load: 33,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-400"
      case "maintenance":
        return "text-yellow-400"
      case "offline":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500/20 border-green-500/30"
      case "maintenance":
        return "bg-yellow-500/20 border-yellow-500/30"
      case "offline":
        return "bg-red-500/20 border-red-500/30"
      default:
        return "bg-gray-500/20 border-gray-500/30"
    }
  }

  const getLoadColor = (load: number) => {
    if (load < 30) return "text-green-400"
    if (load < 70) return "text-yellow-400"
    return "text-red-400"
  }

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
              Server Shards
            </motion.h1>
            <motion.p className="text-xl text-gray-300 mb-8 leading-relaxed" variants={itemVariants}>
              Monitor the real-time status of Moonveil's distributed server infrastructure across global regions.
            </motion.p>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full"
              variants={itemVariants}
            />
          </motion.div>
        </section>

        {/* Global Stats */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div className="glass-effect rounded-xl p-6 text-center" variants={itemVariants}>
                <Server className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">
                  {shards.reduce((acc, shard) => acc + shard.servers, 0)}
                </div>
                <div className="text-gray-300 text-sm">Total Servers</div>
              </motion.div>

              <motion.div className="glass-effect rounded-xl p-6 text-center" variants={itemVariants}>
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">
                  {shards.reduce((acc, shard) => acc + shard.users, 0).toLocaleString()}
                </div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </motion.div>

              <motion.div className="glass-effect rounded-xl p-6 text-center" variants={itemVariants}>
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{shards.length}</div>
                <div className="text-gray-300 text-sm">Global Regions</div>
              </motion.div>

              <motion.div className="glass-effect rounded-xl p-6 text-center" variants={itemVariants}>
                <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">
                  {(shards.reduce((acc, shard) => acc + shard.uptime, 0) / shards.length).toFixed(1)}%
                </div>
                <div className="text-gray-300 text-sm">Average Uptime</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Shards List */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {shards.map((shard, index) => (
                <motion.div
                  key={shard.id}
                  className="glass-effect rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                        <Server className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {shard.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{shard.region}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBg(shard.status)}`}>
                      <span className={getStatusColor(shard.status)}>
                        {shard.status.charAt(0).toUpperCase() + shard.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">{shard.servers}</div>
                      <div className="text-gray-300 text-xs">Servers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">{shard.users.toLocaleString()}</div>
                      <div className="text-gray-300 text-xs">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{shard.latency}ms</div>
                      <div className="text-gray-300 text-xs">Latency</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold ${getLoadColor(shard.load)}`}>
                        {shard.status === "maintenance" ? "0%" : `${shard.load}%`}
                      </div>
                      <div className="text-gray-300 text-xs">Load</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-purple-500/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">Uptime: {shard.uptime}%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">
                          {shard.status === "online" ? "Operational" : "Under Maintenance"}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
