import { PageLayout } from "@/components/page-layout"

export default function Privacy() {
  return (
    <PageLayout 
      title="Privacy Policy" 
      subtitle="How we collect, use, and protect your personal information"
    >
      <div className="prose prose-invert max-w-none">
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Name and email address</li>
              <li>Billing and payment information</li>
              <li>Business information and marketing data</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pages visited and features used</li>
              <li>Time spent on our platform</li>
              <li>Click-through rates and engagement metrics</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect to provide, maintain, and improve our services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Deliver AI-powered business insights and recommendations</li>
              <li>Process payments and manage your subscription</li>
              <li>Send important service updates and notifications</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Analyze platform usage to improve our features</li>
              <li>Prevent fraud and ensure platform security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
            <p className="leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> With trusted partners who help us operate our platform</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to sharing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p className="leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>End-to-end encryption for sensitive data</li>
              <li>Secure socket layer (SSL) technology</li>
              <li>Regular security audits and monitoring</li>
              <li>Limited access to personal information</li>
              <li>Secure data centers with physical protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to provide our services 
              and fulfill the purposes outlined in this privacy policy. We will delete or anonymize 
              your information when it is no longer needed, unless we are required to retain it by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
            <p className="leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
            <p className="leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="leading-relaxed mt-4">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Services</h2>
            <p className="leading-relaxed mb-4">
              Our platform integrates with third-party services to provide enhanced functionality:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Payment processors (Stripe) for secure transactions</li>
              <li>Analytics services to improve our platform</li>
              <li>Marketing tools for ad performance analysis</li>
              <li>Customer support platforms</li>
            </ul>
            <p className="leading-relaxed mt-4">
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
            <p className="leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your information during such transfers, 
              in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our service is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If you are a parent or guardian 
              and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any 
              material changes by posting the new policy on this page and updating the "last updated" 
              date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your personal 
              information, please contact us through our Contact page or email us at privacy@harmonytv.com.
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