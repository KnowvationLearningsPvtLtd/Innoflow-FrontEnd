"use client"

import { useState, useEffect } from "react"
import { Handle, Position } from "reactflow"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function APIInputNode({ data, isConnectable }: { data: any; isConnectable?: boolean }) {
  const [apiUrl, setApiUrl] = useState((data.inputs && data.inputs.apiUrl) || "")
  const [method, setMethod] = useState((data.inputs && data.inputs.method) || "GET")
  const [headers, setHeaders] = useState((data.inputs && data.inputs.headers) || "")
  const [body, setBody] = useState((data.inputs && data.inputs.body) || "")
  const [autoFetch, setAutoFetch] = useState((data.inputs && data.inputs.autoFetch) || false)
  const [pollingInterval, setPollingInterval] = useState((data.inputs && data.inputs.pollingInterval) || 0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [responseData, setResponseData] = useState<any>(null)
  const [isClient, setIsClient] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    setApiUrl((data.inputs && data.inputs.apiUrl) || "")
    setMethod((data.inputs && data.inputs.method) || "GET")
    setHeaders((data.inputs && data.inputs.headers) || "")
    setBody((data.inputs && data.inputs.body) || "")
    setAutoFetch((data.inputs && data.inputs.autoFetch) || false)
    setPollingInterval((data.inputs && data.inputs.pollingInterval) || 0)
    setIsClient(true)
  }, [data])

  // Update parent data when input changes
  useEffect(() => {
    if (data.onInputChange) {
      data.onInputChange({
        apiUrl,
        method,
        headers,
        body,
        autoFetch,
        pollingInterval
      })
    }
  }, [apiUrl, method, headers, body, autoFetch, pollingInterval, data])

  // Parse headers from string to object
  const parseHeaders = (): Record<string, string> => {
    try {
      return headers ? JSON.parse(headers) : {}
    } catch (err) {
      setError('Invalid JSON in headers')
      return {}
    }
  }

  // Make the API request
  const fetchData = async () => {
    if (!apiUrl) {
      setError('API URL is required')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const parsedHeaders = parseHeaders()
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...parsedHeaders,
        },
      }

      if (method !== 'GET' && body) {
        options.body = body
      }

      const response = await fetch(apiUrl, options)
      
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const contentType = response.headers.get('content-type')
      let data
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
      } else {
        data = await response.text()
      }

      setResponseData(data)
      
      // Send data to flow if available
      if (data.onDataReceived) {
        data.onDataReceived(data)
      }
      
      // Show dialog with response
      if (responseData) {
        setShowDialog(true)
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to fetch data'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  // Set up polling if enabled
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null
    
    if (autoFetch && pollingInterval > 0 && apiUrl) {
      fetchData() // Initial fetch
      intervalId = setInterval(fetchData, pollingInterval * 1000)
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [autoFetch, pollingInterval, apiUrl])

  const getPathname = (url: string): string => {
    try {
      return new URL(url).pathname;
    } catch {
      return "";
    }
  };

  return (
    <>
      <div className="min-w-[240px] max-w-[320px] rounded-md border border-blue-500/40 bg-black/80 shadow-lg backdrop-blur-sm">
        <div className="border-b border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/20 text-xs text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <span>{data.label || "API Input"}</span>
        </div>
        <div className="space-y-3 p-4">
          <div className="space-y-1">
            <label className="text-xs text-white/70">API URL</label>
            <input
              type="text"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              placeholder="https://api.example.com/data"
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-white/70">Method</label>
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger className="h-8 bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select method" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-white/10 text-white">
                <SelectItem value="GET">GET</SelectItem>
                <SelectItem value="POST">POST</SelectItem>
                <SelectItem value="PUT">PUT</SelectItem>
                <SelectItem value="PATCH">PATCH</SelectItem>
                <SelectItem value="DELETE">DELETE</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-white/70">Headers (JSON)</label>
            <textarea
              value={headers}
              onChange={(e) => setHeaders(e.target.value)}
              placeholder='{"Authorization": "Bearer token"}'
              className="w-full min-h-[60px] rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50"
            />
          </div>

          {method !== 'GET' && (
            <div className="space-y-1">
              <label className="text-xs text-white/70">Body (JSON)</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder='{"key": "value"}'
                className="w-full min-h-[60px] rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50"
              />
            </div>
          )}

          <div className="flex flex-row items-center gap-x-2">
            <input
              type="checkbox"
              id="auto-fetch"
              checked={autoFetch}
              onChange={(e) => setAutoFetch(e.target.checked)}
              className="mr-2 h-4 w-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500/50"
            />
            <label htmlFor="auto-fetch" className="text-xs text-white/70">Auto-fetch</label>
            {autoFetch && (
              <>
                <label htmlFor="polling-interval" className="text-xs text-white/70 ml-2">Interval (s):</label>
                <input
                  id="polling-interval"
                  type="number"
                  value={pollingInterval}
                  onChange={(e) => setPollingInterval(Number(e.target.value))}
                  min="0"
                  className="w-16 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white outline-none focus:border-blue-500/50"
                />
              </>
            )}
          </div>

          <button
            onClick={fetchData}
            disabled={isLoading || !apiUrl}
            className={`w-full rounded-md py-2 text-sm font-medium ${
              isLoading || !apiUrl ? 'bg-white/10 text-white/50 cursor-not-allowed' : 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30'
            }`}
          >
            {isLoading ? 'Fetching...' : 'Fetch Data'}
          </button>

          {error && (
            <div className="mt-2 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-400">
              <span className="font-medium">Error:</span> {error}
            </div>
          )}

          {responseData && (
            <div className="mt-2 space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs text-white/70">Response Preview</label>
                <button
                  onClick={() => setShowDialog(true)}
                  className="text-xs text-blue-400 hover:text-blue-300"
                >
                  View Full Response
                </button>
              </div>
              <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-green-400 font-mono overflow-auto max-h-[100px]">
                {typeof responseData === 'object' 
                  ? JSON.stringify(responseData, null, 2).slice(0, 500) + (JSON.stringify(responseData, null, 2).length > 500 ? '...' : '')
                  : responseData.slice(0, 500) + (responseData.length > 500 ? '...' : '')
                }
              </div>
            </div>
          )}

          <div className="flex justify-between items-center text-xs text-white/50">
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-1 ${isLoading ? "bg-yellow-500" : error ? "bg-red-500" : responseData ? "bg-green-500" : "bg-gray-500"}`}></div>
              <span>{isLoading ? "Fetching" : error ? "Error" : responseData ? "Success" : "Ready"}</span>
            </div>
            <div>{method} {apiUrl ? getPathname(apiUrl) : ""}</div>
          </div>
        </div>

        {isClient && (
          <Handle
            type="source"
            position={Position.Bottom}
            id="out"
            isConnectable={isConnectable}
            className="w-3 h-3 bg-blue-500 border-2 border-black node-handle"
          />
        )}
      </div>

      {/* API Settings and Response Dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="w-[600px] max-w-[90vw] rounded-md border border-blue-500/40 bg-black/95 shadow-lg backdrop-blur-sm">
            <div className="border-b border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-medium text-blue-500 flex items-center justify-between">
              <span>API Details - {data.label || "API Input"}</span>
              <button 
                onClick={() => setShowDialog(false)}
                className="text-white/70 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
              {/* Polling Configuration Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-white/90">Auto-fetch Configuration</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="auto-fetch-dialog"
                      checked={autoFetch}
                      onChange={(e) => setAutoFetch(e.target.checked)}
                      className="mr-2 h-4 w-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500/50"
                    />
                    <label htmlFor="auto-fetch-dialog" className="text-sm text-white/70">Enable Auto-fetch</label>
                  </div>
                  
                  {autoFetch && (
                    <div>
                      <label className="text-sm text-white/70">Polling Interval (seconds)</label>
                      <input
                        type="number"
                        value={pollingInterval}
                        onChange={(e) => setPollingInterval(Number(e.target.value))}
                        min="0"
                        className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-blue-500/50"
                      />
                      <p className="text-xs text-white/50 mt-1">
                        Set to 0 to disable automatic polling and fetch only once.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="p-3 rounded border border-amber-500/30 bg-amber-500/10 text-xs text-amber-400">
                  <p className="font-medium mb-1">Note:</p>
                  <p>Setting a very low interval (under 5 seconds) may result in API rate limiting or excessive resource usage.</p>
                </div>
              </div>
              
              {/* Response Preview Section */}
              {responseData && (
                <div className="space-y-3 mt-6 pt-4 border-t border-white/10">
                  <h3 className="text-sm font-medium text-white/90">Response Preview</h3>
                  
                  <div className="flex items-center justify-between text-xs text-white/50 mb-1">
                    <span>URL: {apiUrl}</span>
                    <span>Method: {method}</span>
                  </div>
                  
                  <div className="rounded border border-white/10 bg-white/5 p-4">
                    <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap overflow-auto max-h-[300px]">
                      {typeof responseData === 'object' 
                        ? JSON.stringify(responseData, null, 2)
                        : responseData
                      }
                    </pre>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end gap-2 pt-4">
                <button
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 rounded bg-blue-500/20 text-sm text-blue-500 hover:bg-blue-500/30"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default APIInputNode