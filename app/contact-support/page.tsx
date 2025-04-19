import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSupportPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Support</h1>
      <p className="text-white/70 mb-8 text-center max-w-lg">
        If you have any questions, issues, or feedback, feel free to reach out to our support team. We are here to help!
      </p>
      <form className="w-full max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
            Your Name
          </label>
          <Input id="name" placeholder="Enter your name" className="w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
            Your Email
          </label>
          <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
            Your Message
          </label>
          <Textarea id="message" placeholder="Write your message here..." className="w-full" rows={5} />
        </div>
        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
          Submit
        </Button>
      </form>
    </div>
  );
}