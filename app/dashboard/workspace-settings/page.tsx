import React from "react";

export default function WorkspaceSettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Workspace Settings</h1>
      <p className="text-white/70 mb-8 text-center max-w-lg">
        Configure your workspace settings, manage team members, and set permissions here.
      </p>
      <div className="w-full max-w-4xl space-y-6">
        {/* General Settings */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">General Settings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Workspace Name</span>
              <input
                type="text"
                className="bg-black/20 text-white rounded px-4 py-2 w-1/2"
                placeholder="Enter workspace name"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Workspace Description</span>
              <textarea
                className="bg-black/20 text-white rounded px-4 py-2 w-1/2"
                placeholder="Enter workspace description"
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Team Management */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Team Management</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">John Doe (Admin)</span>
              <button className="text-sm text-primary hover:underline">Remove</button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Jane Smith (Member)</span>
              <button className="text-sm text-primary hover:underline">Remove</button>
            </div>
            <button className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary/90">
              Add Team Member
            </button>
          </div>
        </div>

        {/* Permissions */}
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Permissions</h2>
          <p className="text-white/70 mb-4">
            Manage permissions for your workspace to control access levels for team members.
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">View Only</span>
              <input type="checkbox" className="form-checkbox text-primary" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Edit Access</span>
              <input type="checkbox" className="form-checkbox text-primary" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Admin Access</span>
              <input type="checkbox" className="form-checkbox text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}