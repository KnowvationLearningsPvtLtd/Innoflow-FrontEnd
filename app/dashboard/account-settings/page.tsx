import React from "react";

export default function AccountSettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      <p className="text-white/70 mb-8 text-center max-w-lg">
        Manage your account details, update your profile, and change your password here.
      </p>
      <div className="w-full max-w-4xl space-y-6">
        {/* Profile Information */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Full Name</span>
              <input
                type="text"
                className="bg-black/20 text-white rounded px-4 py-2 w-1/2"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Email Address</span>
              <input
                type="email"
                className="bg-black/20 text-white rounded px-4 py-2 w-1/2"
                placeholder="Enter your email address"
              />
            </div>
          </div>
        </div>

        {/* Password Management */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Password Management</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Current Password</span>
              <input
                type="password"
                className="bg-black/20 text-white rounded px-4 py-2 w-1/2"
                placeholder="Enter your current password"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">New Password</span>
              <input
                type="password"
                className="bg-black/20 text-white rounded px-4 py-2 w-1/2"
                placeholder="Enter your new password"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Confirm New Password</span>
              <input
                type="password"
                className="bg-black/20 text-white rounded px-4 py-2 w-1/2"
                placeholder="Confirm your new password"
              />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Email Notifications</span>
              <input type="checkbox" className="form-checkbox text-primary" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">SMS Notifications</span>
              <input type="checkbox" className="form-checkbox text-primary" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Push Notifications</span>
              <input type="checkbox" className="form-checkbox text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}