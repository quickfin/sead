"use client"

import type React from "react"

import { useState } from "react"

export default function TestTimeline() {
  const [selectedTimeRange, setSelectedTimeRange] = useState([20, 40])

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    setSelectedTimeRange([value - 10, value + 10])
  }

  return (
    <div className="bg-zinc-800 rounded-md p-3 border border-zinc-700">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-zinc-400">Timeline</span>
        <span className="text-xs text-zinc-400">2.5s</span>
      </div>

      <div className="relative h-8">
        {/* Timeline bars */}
        <div className="absolute top-0 left-0 h-4 w-full bg-zinc-700 rounded">
          <div className="absolute top-0 left-[10%] h-full w-[15%] bg-blue-500 rounded-l" />
          <div className="absolute top-0 left-[25%] h-full w-[20%] bg-purple-500" />
          <div className="absolute top-0 left-[45%] h-full w-[15%] bg-green-500" />
          <div className="absolute top-0 left-[60%] h-full w-[25%] bg-yellow-500 rounded-r" />

          {/* Selected range indicator */}
          <div
            className="absolute top-0 h-full bg-white/10 border-l border-r border-white/30"
            style={{
              left: `${selectedTimeRange[0]}%`,
              width: `${selectedTimeRange[1] - selectedTimeRange[0]}%`,
            }}
          />
        </div>

        {/* Slider */}
        <input
          type="range"
          min="10"
          max="90"
          value={(selectedTimeRange[0] + selectedTimeRange[1]) / 2}
          onChange={handleSliderChange}
          className="absolute top-0 w-full h-4 opacity-0 cursor-pointer"
        />
      </div>

      {/* Time markers */}
      <div className="flex justify-between mt-1">
        <span className="text-xs text-zinc-500">0s</span>
        <span className="text-xs text-zinc-500">0.5s</span>
        <span className="text-xs text-zinc-500">1.0s</span>
        <span className="text-xs text-zinc-500">1.5s</span>
        <span className="text-xs text-zinc-500">2.0s</span>
        <span className="text-xs text-zinc-500">2.5s</span>
      </div>
    </div>
  )
}

