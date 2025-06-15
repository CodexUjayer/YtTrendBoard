'use client'

import { motion } from 'framer-motion'
import Chart from '@/components/Chart'

const analysisData = {
  labels: ['Title Length', 'Keywords', 'Emojis', 'Questions', 'Numbers'],
  datasets: [
    {
      label: 'Engagement Impact',
      data: [0.8, 0.9, 0.7, 0.85, 0.75],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    },
  ],
}

export default function Analysis() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-bold">Title Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg h-[400px]">
          <h2 className="text-2xl font-bold mb-4">Title Components Impact</h2>
          <Chart data={analysisData} title="Engagement by Title Component" />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Key Findings</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <p>Titles with 40-60 characters perform best</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <p>Questions in titles increase click-through rate by 25%</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <p>Strategic emoji placement can boost engagement</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <p>Numbers in titles improve memorability</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 