import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <DashboardSidebar />
      <div className="md:pl-64 transition-all duration-300">
        <DashboardHeader />
        <main className="pt-16 p-4 md:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
              <Avatar className="h-20 w-20 border-2 border-white/10">
                <AvatarImage src="/placeholder.svg" alt="Profile Picture" />
                <AvatarFallback className="bg-primary/20 text-primary text-xl">JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-white">John Doe</h1>
                <p className="text-white/60">john.doe@example.com</p>
              </div>
            </div>

            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid grid-cols-3 max-w-md mb-8">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="account">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Account Information</CardTitle>
                    <CardDescription className="text-white/60">
                      Update your account details and profile information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Full Name
                        </Label>
                        <Input id="name" defaultValue="John Doe" className="bg-black/30 border-white/10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          defaultValue="john.doe@example.com"
                          className="bg-black/30 border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-white">
                          Username
                        </Label>
                        <Input
                          id="username"
                          defaultValue="johndoe"
                          className="bg-black/30 border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">
                          Company
                        </Label>
                        <Input
                          id="company"
                          defaultValue="Acme Inc."
                          className="bg-black/30 border-white/10 text-white"
                        />
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-white">
                        Bio
                      </Label>
                      <textarea
                        id="bio"
                        rows={4}
                        className="w-full rounded-md border border-white/10 bg-black/30 p-3 text-white"
                        defaultValue="AI developer and workflow automation specialist."
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Security Settings</CardTitle>
                    <CardDescription className="text-white/60">
                      Manage your password and security preferences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="current-password" className="text-white">
                        Current Password
                      </Label>
                      <Input id="current-password" type="password" className="bg-black/30 border-white/10 text-white" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="new-password" className="text-white">
                          New Password
                        </Label>
                        <Input id="new-password" type="password" className="bg-black/30 border-white/10 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-white">
                          Confirm Password
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          className="bg-black/30 border-white/10 text-white"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Update Password
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences">
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">User Preferences</CardTitle>
                    <CardDescription className="text-white/60">
                      Customize your experience and notification settings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Email Notifications</h3>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="flow-updates" className="text-white cursor-pointer">
                          Flow updates and changes
                        </Label>
                        <input type="checkbox" id="flow-updates" defaultChecked className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="team-invites" className="text-white cursor-pointer">
                          Team invitations
                        </Label>
                        <input type="checkbox" id="team-invites" defaultChecked className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="product-updates" className="text-white cursor-pointer">
                          Product updates and announcements
                        </Label>
                        <input type="checkbox" id="product-updates" defaultChecked className="h-4 w-4" />
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-white">Interface Preferences</h3>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="dark-mode" className="text-white cursor-pointer">
                          Always use dark mode
                        </Label>
                        <input type="checkbox" id="dark-mode" defaultChecked className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="auto-save" className="text-white cursor-pointer">
                          Auto-save flows (every 30 seconds)
                        </Label>
                        <input type="checkbox" id="auto-save" defaultChecked className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Save Preferences
                      </Button>
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

export default ProfilePage
