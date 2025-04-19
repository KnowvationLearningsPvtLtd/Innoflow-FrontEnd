// app/dashboard/settings/page.tsx
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <DashboardSidebar />
      <div className="md:pl-64 transition-all duration-300">
        <DashboardHeader />
        <main className="pt-16 p-4 md:p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid grid-cols-4 max-w-md mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="api">API Keys</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">General Settings</CardTitle>
                    <CardDescription className="text-white/60">
                      Configure your workspace and default preferences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="workspace-name" className="text-white">
                        Workspace Name
                      </Label>
                      <Input
                        id="workspace-name"
                        defaultValue="My Workspace"
                        className="bg-black/30 border-white/10 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="default-model" className="text-white">
                        Default AI Model
                      </Label>
                      <select
                        id="default-model"
                        className="w-full h-10 rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white"
                      >
                        <option value="gpt-4">GPT-4</option>
                        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                        <option value="claude-2">Claude 2</option>
                        <option value="llama-2">Llama 2</option>
                      </select>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Default Flow Settings</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="auto-save-interval" className="text-white">
                            Auto-save Interval (seconds)
                          </Label>
                          <Input
                            id="auto-save-interval"
                            type="number"
                            defaultValue="30"
                            min="5"
                            className="bg-black/30 border-white/10 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="max-nodes" className="text-white">
                            Maximum Nodes Per Flow
                          </Label>
                          <Input
                            id="max-nodes"
                            type="number"
                            defaultValue="100"
                            min="10"
                            className="bg-black/30 border-white/10 text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Save Settings</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="api">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">API Keys</CardTitle>
                    <CardDescription className="text-white/60">
                      Manage your API keys for various services.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="openai-key" className="text-white">
                          OpenAI API Key
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            id="openai-key"
                            type="password"
                            defaultValue="sk-••••••••••••••••••••••••••••••"
                            className="flex-1 bg-black/30 border-white/10 text-white"
                          />
                          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                            Update
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="huggingface-key" className="text-white">
                          Hugging Face API Key
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            id="huggingface-key"
                            type="password"
                            defaultValue="hf_••••••••••••••••••••••••••••••"
                            className="flex-1 bg-black/30 border-white/10 text-white"
                          />
                          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                            Update
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pinecone-key" className="text-white">
                          Pinecone API Key
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            id="pinecone-key"
                            placeholder="Not configured"
                            className="flex-1 bg-black/30 border-white/10 text-white"
                          />
                          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                        + Add New API Key
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Team Management</CardTitle>
                    <CardDescription className="text-white/60">
                      Manage your team members and their permissions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-white">Team Members</h3>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Invite Member
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-md border border-white/10 bg-black/30">
                          <div>
                            <p className="font-medium text-white">John Doe (You)</p>
                            <p className="text-sm text-white/60">john.doe@example.com</p>
                          </div>
                          <div className="text-sm text-white/80">Owner</div>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-md border border-white/10 bg-black/30">
                          <div>
                            <p className="font-medium text-white">Jane Smith</p>
                            <p className="text-sm text-white/60">jane.smith@example.com</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <select className="text-sm rounded border border-white/10 bg-black/50 px-2 py-1 text-white">
                              <option value="admin">Admin</option>
                              <option value="editor">Editor</option>
                              <option value="viewer">Viewer</option>
                            </select>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-white/60 hover:text-white hover:bg-white/10"
                            >
                              Remove
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-md border border-white/10 bg-black/30">
                          <div>
                            <p className="font-medium text-white">Alex Johnson</p>
                            <p className="text-sm text-white/60">alex.johnson@example.com</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <select className="text-sm rounded border border-white/10 bg-black/50 px-2 py-1 text-white">
                              <option value="admin">Admin</option>
                              <option value="editor" selected>
                                Editor
                              </option>
                              <option value="viewer">Viewer</option>
                            </select>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-white/60 hover:text-white hover:bg-white/10"
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="billing">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Billing & Subscription</CardTitle>
                    <CardDescription className="text-white/60">
                      Manage your subscription plan and billing information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-4 rounded-md bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-medium text-white">Current Plan: Pro</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">Active</span>
                      </div>
                      <p className="text-white/70 mb-4">$49/month, billed monthly</p>
                      <div className="flex gap-2">
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                          Change Plan
                        </Button>
                        <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                          Cancel Subscription
                        </Button>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Payment Method</h3>
                      <div className="flex items-center justify-between p-3 rounded-md border border-white/10 bg-black/30">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-white">
                            VISA
                          </div>
                          <div>
                            <p className="font-medium text-white">Visa ending in 4242</p>
                            <p className="text-sm text-white/60">Expires 12/2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                          Edit
                        </Button>
                      </div>
                      <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                        + Add Payment Method
                      </Button>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Billing History</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-3 rounded-md border border-white/10 bg-black/30">
                          <div>
                            <p className="font-medium text-white">April 1, 2023</p>
                            <p className="text-sm text-white/60">Pro Plan - Monthly</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-white">$49.00</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-white/60 hover:text-white hover:bg-white/10"
                            >
                              Receipt
                            </Button>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-3 rounded-md border border-white/10 bg-black/30">
                          <div>
                            <p className="font-medium text-white">March 1, 2023</p>
                            <p className="text-sm text-white/60">Pro Plan - Monthly</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-white">$49.00</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-white/60 hover:text-white hover:bg-white/10"
                            >
                              Receipt
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SettingsPage
