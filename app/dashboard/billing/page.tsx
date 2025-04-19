import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardSidebar />
      <div className="md:pl-64 transition-all duration-300">
        <DashboardHeader />
        <main className="pt-16 p-4 md:p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6">Billing & Subscription</h1>

            <Tabs defaultValue="subscription" className="w-full">
              <TabsList className="grid grid-cols-3 max-w-md mb-8">
                <TabsTrigger value="subscription">Subscription</TabsTrigger>
                <TabsTrigger value="payment">Payment Methods</TabsTrigger>
                <TabsTrigger value="history">Billing History</TabsTrigger>
              </TabsList>

              <TabsContent value="subscription">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Current Plan</CardTitle>
                    <CardDescription className="text-white/60">
                      Manage your subscription plan and usage.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-4 rounded-md bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-medium text-white">Pro Plan</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">Active</span>
                      </div>
                      <p className="text-white/70 mb-4">$49/month, billed monthly</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/70">Renewal Date</span>
                          <span className="text-white">May 15, 2023</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/70">Plan Status</span>
                          <span className="text-white">Active</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                          Change Plan
                        </Button>
                        <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                          Cancel Subscription
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Usage & Limits</h3>

                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/70">API Calls</span>
                            <span className="text-white">12,450 / 50,000</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: "25%" }}></div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/70">Data Storage</span>
                            <span className="text-white">5GB / 10GB</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: "50%" }}></div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/70">Bandwidth Usage</span>
                            <span className="text-white">50GB / 100GB</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: "50%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="payment">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Payment Methods</CardTitle>
                    <CardDescription className="text-white/60">Manage your payment methods.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">Payment methods content goes here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="history">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Billing History</CardTitle>
                    <CardDescription className="text-white/60">
                      View your billing history and download invoices.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">Billing history content goes here.</p>
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
