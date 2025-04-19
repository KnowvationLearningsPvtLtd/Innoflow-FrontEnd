"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeftRight, RefreshCw } from "lucide-react"

export default function FeatureShowcasePage() {
  const [temperature, setTemperature] = useState(0.5)
  const [selectedModel, setSelectedModel] = useState("gpt-4o-mini")
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <div className="container mx-auto py-8 px-4 bg-[#0a0a0a] min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white text-center">Ditch the Black Boxes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Control the complexity */}
        <div className="space-y-4">
          <Card className="bg-[#121212] border-[#2a2a2a] text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-white/70">Model</label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="bg-[#1a1a1a] border-[#333] text-white">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#333] text-white">
                    <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
                    <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                    <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                    <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                    <SelectItem value="llama-3-70b">Llama 3 70B</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm text-white/70">Temperature</label>
                  <span className="text-sm text-white/70">{temperature.toFixed(2)}</span>
                </div>
                <Slider
                  min={0}
                  max={1}
                  step={0.01}
                  value={[temperature]}
                  onValueChange={(value) => setTemperature(value[0])}
                  className="[&>span]:bg-emerald-500"
                />
              </div>

              <div className="flex justify-between pt-2">
                <Button
                  variant="outline"
                  className="bg-transparent border-[#333] text-white hover:bg-[#333] hover:text-white"
                >
                  Save
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-[#333] text-white hover:bg-[#333] hover:text-white"
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
          <h2 className="text-xl font-medium text-white">Control the complexity</h2>
          <p className="text-gray-400">Fine-tune model parameters and customize your AI workflows with precision.</p>
        </div>

        {/* Swap and compare */}
        <div className="space-y-4">
          <Card className="bg-[#121212] border-[#2a2a2a] text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative pt-6 pb-2">
                <div className="absolute top-0 left-0 w-full flex justify-between">
                  <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-xs">A</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-xs">B</span>
                  </div>
                </div>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[sliderValue]}
                  onValueChange={(value) => setSliderValue(value[0])}
                  className="[&>span]:bg-purple-600"
                />
              </div>

              <div className="flex justify-center gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-[#333] text-white hover:bg-[#333] hover:text-white"
                >
                  <ArrowLeftRight className="h-4 w-4 mr-2" />
                  Swap
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-[#333] text-white hover:bg-[#333] hover:text-white"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </CardContent>
          </Card>
          <h2 className="text-xl font-medium text-white">Swap and compare</h2>
          <p className="text-gray-400">
            Easily switch between different models and compare their performance in real-time.
          </p>
        </div>

        {/* Python under the hood */}
        <div className="space-y-4">
          <Card className="bg-[#121212] border-[#2a2a2a] text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Python under the hood</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-xs bg-[#1a1a1a] p-3 rounded-md overflow-auto text-emerald-400">
                {`def process_input(text):
    tokens = tokenize(text)
    return {
        "tokens": tokens,
        "length": len(tokens)
    }`}
              </pre>
            </CardContent>
          </Card>
          <h2 className="text-xl font-medium text-white">Python under the hood</h2>
          <p className="text-gray-400">
            Access and customize the underlying Python code for maximum flexibility and control.
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">More Features</h2>

        <Tabs defaultValue="drag-drop" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="drag-drop">Drag, Drop, Deploy</TabsTrigger>
            <TabsTrigger value="limitless">Limitless Control</TabsTrigger>
            <TabsTrigger value="agents">Agents at Your Service</TabsTrigger>
            <TabsTrigger value="flow-api">Flow as an API</TabsTrigger>
          </TabsList>

          <TabsContent value="drag-drop" className="bg-[#121212] p-6 rounded-lg border border-[#2a2a2a]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">Drag, Drop, Deploy</h3>
                <p className="text-gray-400 mb-4">
                  Don't waste time coding when you can build visual flows easily. Thousands of components and reusable
                  templates let you iterate rapidly.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    <span>Visual data flows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    <span>Reusable components</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    <span>Rapid iteration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Flow Editor Visualization</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="limitless" className="bg-[#121212] p-6 rounded-lg border border-[#2a2a2a]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">Limitless Control</h3>
                <p className="text-gray-400 mb-4">
                  Use Python to customize anything and everything. Access the full power of the language without
                  limitations.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span>Custom Python scripts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span>Full language access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span>Unlimited customization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4">
                <pre className="text-xs text-emerald-400 overflow-auto h-56">
                  {`import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

def preprocess_data(data_path):
    # Load the data
    df = pd.read_csv(data_path)
    
    # Clean missing values
    df = df.fillna(df.mean())
    
    # Feature engineering
    df['new_feature'] = df['feature1'] * df['feature2']
    
    # Split data
    X = df.drop('target', axis=1)
    y = df['target']
    
    return train_test_split(X, y, test_size=0.2, random_state=42)`}
                </pre>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="agents" className="bg-[#121212] p-6 rounded-lg border border-[#2a2a2a]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">Agents at Your Service</h3>
                <p className="text-gray-400 mb-4">
                  Run a single or fleet of agents with access to all your components in code. Python and JavaScript APIs
                  with examples included.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span>Multi-agent systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span>Component integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span>Python & JavaScript APIs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Agent Flow Visualization</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="flow-api" className="bg-[#121212] p-6 rounded-lg border border-[#2a2a2a]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">Flow as an API</h3>
                <p className="text-gray-400 mb-4">
                  Every flow is an API. Use our simple GUI to manage your API settings and deploy with ease.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span>Automatic API generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span>Simple management GUI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span>Easy deployment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4">
                <pre className="text-xs text-blue-400 overflow-auto h-56">
                  {`// Example API call to your flow
fetch('https://api.innoflow.ai/flows/my-flow', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    input: "What are the latest trends in AI?",
    parameters: {
      temperature: 0.7,
      max_tokens: 500
    }
  })
})
.then(response => response.json())
.then(data => {
  console.log(data.output);
})
.catch(error => {
  console.error('Error:', error);
});`}
                </pre>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
