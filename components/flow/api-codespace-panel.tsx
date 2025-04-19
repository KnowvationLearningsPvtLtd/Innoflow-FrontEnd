"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ApiCodespacePanelProps {
  onClose?: () => void
}

export function ApiCodespacePanel({ onClose }: ApiCodespacePanelProps) {
  const [activeTab, setActiveTab] = useState<"python" | "javascript" | "curl">("javascript")
  const { toast } = useToast()

  const handleCopyCode = () => {
    let codeToCopy = ""

    switch (activeTab) {
      case "javascript":
        codeToCopy = javascriptCode
        break
      case "python":
        codeToCopy = pythonCode
        break
      case "curl":
        codeToCopy = curlCode
        break
    }

    navigator.clipboard.writeText(codeToCopy)
    toast({
      title: "Code copied",
      description: "API code copied to clipboard",
    })
  }

  const javascriptCode = `// JavaScript/TypeScript example
import axios from 'axios';

async function callFlowApi() {
const API_KEY = 'your_api_key_here';
const FLOW_ID = 'flow-1';

try {
  const response = await axios.post(
    \`https://api.innoflow.ai/v1/flows/\${FLOW_ID}/invoke\`,
    {
      input: {
        message: "Hello, how can you help me today?"
      },
      options: {
        temperature: 0.7
      }
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${API_KEY}\`
      }
    }
  );
  
  console.log(response.data);
  return response.data;
} catch (error) {
  console.error('Error calling Flow API:', error);
  throw error;
}
}`

  const pythonCode = `# Python example
import requests
import json

def call_flow_api():
  API_KEY = "your_api_key_here"
  FLOW_ID = "flow-1"
  
  url = f"https://api.innoflow.ai/v1/flows/{FLOW_ID}/invoke"
  
  headers = {
      "Content-Type": "application/json",
      "Authorization": f"Bearer {API_KEY}"
  }
  
  payload = {
      "input": {
          "message": "Hello, how can you help me today?"
      },
      "options": {
          "temperature": 0.7
      }
  }
  
  try:
      response = requests.post(url, headers=headers, data=json.dumps(payload))
      response.raise_for_status()
      return response.json()
  except requests.exceptions.RequestException as e:
      print(f"Error calling Flow API: {e}")
      raise`

  const curlCode = `# cURL example
curl -X POST \\
https://api.innoflow.ai/v1/flows/flow-1/invoke \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer your_api_key_here" \\
-d '{
  "input": {
    "message": "Hello, how can you help me today?"
  },
  "options": {
    "temperature": 0.7
  }
}'`

  return (
    <div className="flex-1 flex flex-col h-full bg-[#050505] relative">
      <div className="flex items-center justify-between border-b border-white/10 p-4">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-white">API Integration</h3>
        </div>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white/70 hover:bg-white/10">
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-auto p-4">
        <div className="mb-6">
          <h4 className="text-lg font-medium text-white mb-2">Integrate your flow into applications</h4>
          <p className="text-white/70">
            Use the code examples below to call your flow from external applications. Make sure to replace the API key
            with your own.
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/30 overflow-hidden">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
            <div className="flex items-center justify-between border-b border-white/10 px-4">
              <TabsList className="bg-transparent border-0">
                <TabsTrigger
                  value="javascript"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                >
                  JavaScript
                </TabsTrigger>
                <TabsTrigger
                  value="python"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                >
                  Python
                </TabsTrigger>
                <TabsTrigger
                  value="curl"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                >
                  cURL
                </TabsTrigger>
              </TabsList>
              <Button variant="ghost" size="sm" onClick={handleCopyCode} className="text-white/70 hover:bg-white/10">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>

            <TabsContent value="javascript" className="mt-0">
              <pre className="p-4 text-sm text-white/90 font-mono overflow-auto max-h-[500px]">
                <code>{javascriptCode}</code>
              </pre>
            </TabsContent>

            <TabsContent value="python" className="mt-0">
              <pre className="p-4 text-sm text-white/90 font-mono overflow-auto max-h-[500px]">
                <code>{pythonCode}</code>
              </pre>
            </TabsContent>

            <TabsContent value="curl" className="mt-0">
              <pre className="p-4 text-sm text-white/90 font-mono overflow-auto max-h-[500px]">
                <code>{curlCode}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-6 space-y-4">
          <h4 className="text-lg font-medium text-white">API Settings</h4>

          <div className="rounded-lg border border-white/10 bg-black/30 p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h5 className="font-medium text-white">API Access</h5>
                <p className="text-sm text-white/70">Enable or disable API access to this flow</p>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background data-[state=checked]:bg-primary">
                <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition-transform" />
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="font-medium text-white">API Key</h5>
              <div className="flex items-center gap-2">
                <div className="flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
                  ••••••••••••••••••••••••••••••
                </div>
                <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                  Regenerate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
