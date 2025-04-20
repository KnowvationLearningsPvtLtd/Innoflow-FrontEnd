import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Check, Clock, Info, X } from "lucide-react"

const NotificationsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <DashboardSidebar />
      <div className="md:pl-64 transition-all duration-300">
        <DashboardHeader />
        <main className="pt-16 p-4 md:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-white">Notifications</h1>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                Mark All as Read
              </Button>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-4 max-w-md mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="mentions">Mentions</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">All Notifications</CardTitle>
                    <CardDescription className="text-white/60">View all your recent notifications.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex gap-4 p-3 rounded-md border border-white/10 bg-black/30">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Info className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-white">Flow deployed successfully</p>
                            <span className="text-xs text-white/60">2 minutes ago</span>
                          </div>
                          <p className="text-sm text-white/70 mt-1">
                            Your flow "Customer Support Bot" has been deployed to production.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-3 rounded-md border border-white/10 bg-black/30">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-white">New team member added</p>
                            <span className="text-xs text-white/60">1 hour ago</span>
                          </div>
                          <p className="text-sm text-white/70 mt-1">
                            Jane Smith (jane.smith@example.com) has joined your workspace.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-3 rounded-md border border-white/10 bg-black/30">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                          <Bell className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-white">API usage limit reached 80%</p>
                            <span className="text-xs text-white/60">Yesterday</span>
                          </div>
                          <p className="text-sm text-white/70 mt-1">
                            You've used 80% of your monthly API quota. Consider upgrading your plan.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-3 rounded-md border border-white/10 bg-black/30">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-white">Flow execution failed</p>
                            <span className="text-xs text-white/60">2 days ago</span>
                          </div>
                          <p className="text-sm text-white/70 mt-1">
                            Your flow "Data Processing Pipeline" failed during execution. Check the logs for details.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-3 rounded-md border border-white/10 bg-black/30">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-purple-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-white">Scheduled maintenance</p>
                            <span className="text-xs text-white/60">3 days ago</span>
                          </div>
                          <p className="text-sm text-white/70 mt-1">
                            Scheduled maintenance will occur on April 20, 2023, from 2:00 AM to 4:00 AM UTC.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center pt-4">
                      <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                        Load More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="unread">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Unread Notifications</CardTitle>
                    <CardDescription className="text-white/60">Notifications you haven't read yet.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex gap-4 p-3 rounded-md border border-white/10 bg-black/30">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Info className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-white">Flow deployed successfully</p>
                            <span className="text-xs text-white/60">2 minutes ago</span>
                          </div>
                          <p className="text-sm text-white/70 mt-1">
                            Your flow "Customer Support Bot" has been deployed to production.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-3 rounded-md border border-white/10 bg-black/30">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-white">New team member added</p>
                            <span className="text-xs text-white/60">1 hour ago</span>
                          </div>
                          <p className="text-sm text-white/70 mt-1">
                            Jane Smith (jane.smith@example.com) has joined your workspace.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mentions">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Mentions</CardTitle>
                    <CardDescription className="text-white/60">Notifications where you were mentioned.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-40 text-white/60">No mentions to display</div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="system">
              <Card className="bg-black/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">System Notifications</CardTitle>
                  <CardDescription className="text-white/60">Important system updates and alerts.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex gap-4 p-3 rounded-md border border-white/10 bg-black/30">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <Bell className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <p className="font-medium text-white">API usage limit reached 80%</p>
                          <span className="text-xs text-white/60">Yesterday</span>
                        </div>
                        <p className="text-sm text-white/70 mt-1">
                          You've used 80% of your monthly API quota. Consider upgrading your plan.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-3 rounded-md border border-white/10 bg-black/30">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <p className="font-medium text-white">Scheduled maintenance</p>
                          <span className="text-xs text-white/60">3 days ago</span>
                        </div>
                        <p className="text-sm text-white/70 mt-1">
                          Scheduled maintenance will occur on April 20, 2023, from 2:00 AM to 4:00 AM UTC.
                        </p>
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
  );
};

export default NotificationsPage;
