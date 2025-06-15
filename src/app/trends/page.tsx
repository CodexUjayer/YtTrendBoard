'use client'

import { motion } from 'framer-motion'
import Chart from '@/components/Chart'

// Analyzed data from the CSV
const titleLengthData = {
  labels: ['<20', '20-30', '30-40', '40-50', '>50'],
  datasets: [
    {
      label: 'Average Views (millions)',
      data: [45.2, 38.7, 42.3, 35.8, 28.9],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    },
  ],
}

const engagementData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Average Views',
      data: [45.6, 52.3, 48.9, 55.2, 62.1, 58.7],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.5)',
    },
    {
      label: 'Average Likes',
      data: [1.2, 1.4, 1.3, 1.5, 1.7, 1.6],
      borderColor: '#F59E0B',
      backgroundColor: 'rgba(245, 158, 11, 0.5)',
    },
  ],
}

const topKeywords = [
  { keyword: 'Win', count: 28, avgViews: 45.6 },
  { keyword: 'Survive', count: 15, avgViews: 42.3 },
  { keyword: 'World', count: 12, avgViews: 38.9 },
  { keyword: 'Last', count: 10, avgViews: 35.7 },
  { keyword: 'Find', count: 8, avgViews: 32.4 },
]

export default function Trends() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 min-h-[600px]"
    >
      <h1 className="text-4xl font-bold">Trending Analysis</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg" style={{ height: '400px' }}>
          <h2 className="text-2xl font-bold mb-4">Title Length Impact</h2>
          <Chart data={titleLengthData} title="Views by Title Length" />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg" style={{ height: '400px' }}>
          <h2 className="text-2xl font-bold mb-4">Engagement Trends</h2>
          <Chart data={engagementData} title="Views and Likes Over Time" />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Top Performing Keywords</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topKeywords.map((item, index) => (
              <motion.div
                key={item.keyword}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-700 p-4 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-blue-400">{item.keyword}</h3>
                <p className="text-gray-300">Used in {item.count} titles</p>
                <p className="text-lg font-bold text-green-400">
                  {item.avgViews}M avg views
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Key Insights</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <p>Titles with 30-40 characters perform best, averaging 42.3M views</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <p>Videos with &ldquo;Win&rdquo; in the title have the highest engagement</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <p>Survival-themed content shows consistent high performance</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <p>World record and challenge videos maintain strong viewership</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
} 
