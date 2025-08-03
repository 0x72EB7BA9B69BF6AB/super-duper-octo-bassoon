import { PageLayout } from "@/components/page-layout"

export default function Terms() {
  return (
    <PageLayout 
      title="Terms of Service" 
      subtitle="Please read these terms carefully before using Harmony TV"
    >
      <div className="prose prose-invert max-w-none">
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using Harmony TV, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p className="leading-relaxed mb-4">
              Harmony TV provides AI-powered business validation tools, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AI funnel creation and optimization</li>
              <li>Facebook ads performance analysis</li>
              <li>Competitor analysis and insights</li>
              <li>Marketing tool integrations</li>
              <li>Expert support and consultation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <p className="leading-relaxed mb-4">
              To access certain features of Harmony TV, you must register for an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your password and identification</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Subscription Plans</h2>
            <p className="leading-relaxed mb-4">
              Harmony TV offers multiple subscription tiers:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Free Plan:</strong> Basic features with limited usage</li>
              <li><strong>Pro Plan ($4.99/month):</strong> Enhanced features and priority support</li>
              <li><strong>Premium Plan ($29.99/month):</strong> Full feature access and dedicated support</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Subscription fees are billed monthly and are non-refundable except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Usage and Privacy</h2>
            <p className="leading-relaxed">
              Your privacy is important to us. We collect and use your data as described in our Privacy Policy. 
              By using our service, you consent to the collection and use of your information as outlined in our privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Prohibited Uses</h2>
            <p className="leading-relaxed mb-4">
              You may not use Harmony TV for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Illegal activities or violation of any laws</li>
              <li>Spam, harassment, or abuse of other users</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Reverse engineering or copying our proprietary technology</li>
              <li>Creating competing services using our data or insights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, features, and functionality of Harmony TV are owned by us and are protected by copyright, 
              trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative 
              works from our content without explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Harmony TV is provided "as is" without warranties of any kind. We shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
            <p className="leading-relaxed">
              We may terminate or suspend your account immediately, without prior notice, for conduct that we believe 
              violates these Terms of Service or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of significant changes 
              via email or through our service. Continued use of Harmony TV after such modifications constitutes 
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our Contact page 
              or email us at legal@harmonytv.com.
            </p>
          </section>

          <section className="border-t border-gray-500 pt-6">
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  )
}