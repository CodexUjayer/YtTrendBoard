'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Chart from '@/components/Chart'

// Dynamically import the 3D scene component to avoid SSR issues
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false })

// Sample data for the chart
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Video Views (millions)',
      data: [45.6, 52.3, 48.9, 55.2, 62.1, 58.7],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      tension: 0.4,
    },
    {
      label: 'Engagement Rate (%)',
      data: [2.5, 3.2, 2.8, 3.5, 3.1, 3.8],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.5)',
      tension: 0.4,
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        YouTube Title Analysis Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 3D Visualization Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-[600px] bg-gray-800 rounded-lg overflow-hidden"
        >
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <OrbitControls enableZoom={true} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Scene3D />
            </Suspense>
          </Canvas>
        </motion.div>

        {/* Dashboard Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 min-h-[600px]"
        >
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Analysis Summary</h2>
            <p className="text-gray-300">
              Welcome to the YouTube Title Analysis Dashboard. This interactive visualization
              provides insights into video title patterns and performance metrics.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Key Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold">Total Channels</h3>
                <p className="text-3xl font-bold text-blue-400">100,000</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-lg font-semibold">Avg. Views</h3>
                <p className="text-3xl font-bold text-green-400">1.5M</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg" style={{ height: '400px' }}>
            <Chart data={chartData} title="Performance Metrics" />
          </div>
        </motion.div>
      </div>
    </main>
  )
}
