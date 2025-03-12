"use client"

import { useState } from "react"
import { Search, Filter, Play, Eye, ChevronDown, ChevronRight, FileText, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TestTimeline from "@/components/test-timeline"
import DomSnapshot from "@/components/dom-snapshot"
import TestActions from "@/components/test-actions"
import TestSource from "@/components/test-source"
import TestConsole from "@/components/test-console"
import TestNetwork from "@/components/test-network"
import TestMetadata from "@/components/test-metadata"

export default function PlaywrightUI() {
  const [selectedTest, setSelectedTest] = useState("example.spec.ts")
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["tests"])

  const toggleFolder = (folder: string) => {
    if (expandedFolders.includes(folder)) {
      setExpandedFolders(expandedFolders.filter((f) => f !== folder))
    } else {
      setExpandedFolders([...expandedFolders, folder])
    }
  }

  return (
    <div className="flex h-screen bg-zinc-900 text-zinc-100">
      {/* Sidebar */}
      <div className="w-80 border-r border-zinc-800 flex flex-col">
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-4 h-4 text-zinc-400" />
            <Input placeholder="Filter by test name or @tag" className="h-8 bg-zinc-800 border-zinc-700 text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-7 text-xs bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
              <Filter className="w-3 h-3 mr-1" />
              All
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
              Passed
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
              Failed
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
              Skipped
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="p-2">
            <div className="flex items-center justify-between p-2 hover:bg-zinc-800 rounded">
              <div className="flex items-center">
                <Play className="w-4 h-4 mr-2 text-zinc-400" />
                <span className="text-sm">Run all</span>
              </div>
              <Eye className="w-4 h-4 text-zinc-400" />
            </div>

            {/* Test folders */}
            <div className="mt-2">
              <div
                className="flex items-center p-2 hover:bg-zinc-800 rounded cursor-pointer"
                onClick={() => toggleFolder("tests")}
              >
                {expandedFolders.includes("tests") ? (
                  <ChevronDown className="w-4 h-4 mr-1 text-zinc-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 mr-1 text-zinc-400" />
                )}
                <Folder className="w-4 h-4 mr-2 text-zinc-400" />
                <span className="text-sm">tests</span>
              </div>

              {expandedFolders.includes("tests") && (
                <div className="ml-6">
                  <div
                    className={`flex items-center p-2 hover:bg-zinc-800 rounded cursor-pointer ${selectedTest === "example.spec.ts" ? "bg-blue-900/30" : ""}`}
                    onClick={() => setSelectedTest("example.spec.ts")}
                  >
                    <FileText className="w-4 h-4 mr-2 text-zinc-400" />
                    <span className="text-sm">example.spec.ts</span>
                    <div className="ml-auto flex items-center gap-2">
                      <Play className="w-3 h-3 text-zinc-400" />
                      <Eye className="w-3 h-3 text-zinc-400" />
                    </div>
                  </div>
                  <div
                    className={`flex items-center p-2 hover:bg-zinc-800 rounded cursor-pointer ${selectedTest === "login.spec.ts" ? "bg-blue-900/30" : ""}`}
                    onClick={() => setSelectedTest("login.spec.ts")}
                  >
                    <FileText className="w-4 h-4 mr-2 text-zinc-400" />
                    <span className="text-sm">login.spec.ts</span>
                    <div className="ml-auto flex items-center gap-2">
                      <Play className="w-3 h-3 text-zinc-400" />
                      <Eye className="w-3 h-3 text-zinc-400" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Test header */}
        <div className="p-4 border-b border-zinc-800">
          <h1 className="text-lg font-semibold">{selectedTest}</h1>
        </div>

        {/* Test content */}
        <div className="flex-1 overflow-auto p-4">
          {/* Timeline */}
          <TestTimeline />

          {/* DOM Snapshot and Tabs */}
          <div className="flex mt-4 gap-4 h-[calc(100%-80px)]">
            <div className="w-1/2">
              <DomSnapshot />
            </div>

            <div className="w-1/2">
              <Tabs defaultValue="actions" className="h-full flex flex-col">
                <TabsList className="bg-zinc-800 border-b border-zinc-700 rounded-none justify-start">
                  <TabsTrigger value="actions" className="data-[state=active]:bg-zinc-700">
                    Actions
                  </TabsTrigger>
                  <TabsTrigger value="source" className="data-[state=active]:bg-zinc-700">
                    Source
                  </TabsTrigger>
                  <TabsTrigger value="console" className="data-[state=active]:bg-zinc-700">
                    Console
                  </TabsTrigger>
                  <TabsTrigger value="network" className="data-[state=active]:bg-zinc-700">
                    Network
                  </TabsTrigger>
                  <TabsTrigger value="metadata" className="data-[state=active]:bg-zinc-700">
                    Metadata
                  </TabsTrigger>
                </TabsList>

                <div className="flex-1 overflow-auto">
                  <TabsContent value="actions" className="h-full m-0 p-0">
                    <TestActions />
                  </TabsContent>
                  <TabsContent value="source" className="h-full m-0 p-0">
                    <TestSource />
                  </TabsContent>
                  <TabsContent value="console" className="h-full m-0 p-0">
                    <TestConsole />
                  </TabsContent>
                  <TabsContent value="network" className="h-full m-0 p-0">
                    <TestNetwork />
                  </TabsContent>
                  <TabsContent value="metadata" className="h-full m-0 p-0">
                    <TestMetadata />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

