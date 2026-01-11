"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import DashboardIcon from '@/components/dashboard/dashboardIcon'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black">

       <DashboardIcon />
      
      <div className="md:pl-64 transition-all duration-300">
        <DashboardHeader />
        <main className="pt-24 p-4 md:p-6 mt-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6">Help and Support</h1>
            <p className="text-gray-300 mb-4">
              Welcome to the help center. Here you can find answers to common questions, troubleshooting tips, and
              guides to using Innoflow effectively.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white">How do I create a new flow?</h3>
                  <p className="text-gray-300">
                    To create a new flow, navigate to the dashboard and click on the "Create New Project" button. You
                    can then select a template or start from scratch.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white">How do I add components to a flow?</h3>
                  <p className="text-gray-300">
                    You can add components to a flow by dragging them from the component sidebar onto the canvas.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white">How do I connect components?</h3>
                  <p className="text-gray-300">
                    To connect components, drag from the output handle of one component to the input handle of another.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white">How do I test my flow?</h3>
                  <p className="text-gray-300">
                    You can test your flow by clicking on the "Playground" button in the top right corner. This will
                    open the testing interface where you can send inputs and view the outputs.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Troubleshooting</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white">My flow is not working as expected</h3>
                  <p className="text-gray-300">If your flow is not working as expected, check the following:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Make sure all components are properly configured</li>
                    <li>Check the connections between components</li>
                    <li>Review the logs for any error messages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white">I am getting an API error</h3>
                  <p className="text-gray-300">
                    If you are getting an API error, make sure your API key is valid and that you have not exceeded your
                    API usage limits.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Contact Support</h2>
              <p className="text-gray-300">
                If you are still having trouble, please contact our support team at{" "}
                <a href="mailto:support@innoflow.ai" className="text-primary hover:underline">
                  support@innoflow.ai
                </a>
                .
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
