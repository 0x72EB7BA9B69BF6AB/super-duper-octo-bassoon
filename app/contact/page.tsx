"use client"

import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Get in touch with our team - we're here to help you succeed"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Contact Form */}
        <Card className="bg-transparent backdrop-blur-2xl border-gray-500 text-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
              Send us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-transparent border-gray-500 text-white placeholder-gray-400 focus:border-white h-9"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-transparent border-gray-500 text-white placeholder-gray-400 focus:border-white h-9"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-transparent border-gray-500 text-white placeholder-gray-400 focus:border-white h-9"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-transparent border-gray-500 text-white placeholder-gray-400 focus:border-white resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 transition-colors duration-300 font-medium py-2"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-4">
          <Card className="bg-transparent backdrop-blur-2xl border-gray-500 text-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1">Email Support</h3>
                  <p className="text-gray-300 mb-1 text-sm">
                    Get direct support from our team
                  </p>
                  <a 
                    href="mailto:support@harmonytv.com" 
                    className="text-white hover:text-gray-300 transition-colors text-sm"
                  >
                    support@harmonytv.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-transparent backdrop-blur-2xl border-gray-500 text-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1">Response Time</h3>
                  <p className="text-gray-300 mb-1 text-sm">
                    We typically respond within
                  </p>
                  <ul className="space-y-1 text-white text-sm">
                    <li>• Free Plan: 48 hours</li>
                    <li>• Pro Plan: 24 hours</li>
                    <li>• Premium Plan: 4 hours</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-transparent backdrop-blur-2xl border-gray-500 text-white">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1">Our Location</h3>
                  <p className="text-gray-300 mb-1 text-sm">
                    Based in the heart of innovation
                  </p>
                  <p className="text-white text-sm">
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white">Frequently Asked Questions</h3>
            <div className="space-y-2">
              <details className="group">
                <summary className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="font-medium text-white text-sm">How do I upgrade my plan?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-3 text-gray-300 bg-white/5 rounded-b-lg text-sm">
                  You can upgrade your plan anytime from your account dashboard. Changes take effect immediately.
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="font-medium text-white text-sm">Do you offer refunds?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-3 text-gray-300 bg-white/5 rounded-b-lg text-sm">
                  We offer a 14-day satisfaction guarantee for all paid plans. Contact us for refund requests.
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="font-medium text-white text-sm">Can I cancel anytime?</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-3 text-gray-300 bg-white/5 rounded-b-lg text-sm">
                  Yes, you can cancel your subscription at any time. Your access continues until the end of your billing period.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}