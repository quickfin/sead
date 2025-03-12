"use client"

import { useState } from "react"
import { ExternalLink, Crosshair } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DomSnapshot() {
  const [isPicking, setIsPicking] = useState(false)

  return (
    <div className="h-full flex flex-col border border-zinc-700 rounded-md overflow-hidden">
      <div className="bg-zinc-800 p-2 flex items-center justify-between border-b border-zinc-700">
        <span className="text-sm font-medium">DOM Snapshot</span>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className={`h-7 px-2 ${isPicking ? "bg-blue-900/50" : ""}`}
            onClick={() => setIsPicking(!isPicking)}
          >
            <Crosshair className="w-4 h-4 mr-1" />
            Pick locator
          </Button>
          <Button variant="ghost" size="sm" className="h-7 px-2">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 bg-white overflow-auto">
        {/* Mock webpage content */}
        <div className="p-4 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <header className="py-4 border-b border-gray-200">
              <h1 className="text-2xl font-bold">Example Website</h1>
              <nav className="mt-4">
                <ul className="flex gap-4">
                  <li className="font-medium text-blue-600">Home</li>
                  <li>Products</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </header>

            <main className="py-6">
              <h2 className="text-xl font-semibold mb-4">Welcome to our site</h2>
              <p className="mb-4">This is an example website being tested with Playwright.</p>

              <div className="mb-6 p-4 border border-gray-200 rounded">
                <h3 className="font-medium mb-2">Login Form</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">Username</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Enter username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Password</label>
                    <input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Enter password"
                    />
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded">
                  <h3 className="font-medium mb-2">Feature 1</h3>
                  <p className="text-sm">Description of feature 1</p>
                </div>
                <div className="p-4 border border-gray-200 rounded">
                  <h3 className="font-medium mb-2">Feature 2</h3>
                  <p className="text-sm">Description of feature 2</p>
                </div>
                <div className="p-4 border border-gray-200 rounded">
                  <h3 className="font-medium mb-2">Feature 3</h3>
                  <p className="text-sm">Description of feature 3</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {isPicking && (
        <div className="absolute bottom-4 left-4 right-4 bg-zinc-800 border border-zinc-700 rounded-md p-3">
          <div className="text-sm mb-2">Locator Playground</div>
          <div className="flex gap-2">
            <input
              type="text"
              value="page.getByRole('button', { name: 'Login' })"
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded p-2 text-sm"
              readOnly
            />
            <Button size="sm">Copy</Button>
          </div>
          <div className="mt-2 text-xs text-green-500">1 match</div>
        </div>
      )}
    </div>
  )
}

