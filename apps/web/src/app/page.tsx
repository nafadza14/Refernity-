import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-xl">Refernity</span>
            </div>
            <div className="flex gap-4">
              <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900">
                Sign In
              </Link>
              <Link href="/auth/signup" className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turn Your Customers Into
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Your Growth Team
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              AI-powered referral programs that predict who will share. 
              Launch in 5 minutes, not 5 hours.
            </p>
            
            <div className="flex gap-4 justify-center">
              <Link href="/auth/signup" className="btn-primary text-lg px-8 py-3">
                Start Free Trial
              </Link>
              <Link href="#demo" className="btn-secondary text-lg px-8 py-3">
                See Demo
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              14-day free trial • No credit card required
            </p>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Everything you need for viral growth</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'One-Click Setup',
                description: 'Install our widget with a single line of code. No developers needed, no complex configuration. Go live in 5 minutes.'
              },
              {
                icon: '🤖',
                title: 'AI-Powered Predictions',
                description: 'Our AI analyzes your customers to predict who is most likely to refer. Focus on the top 20% for 3x better results.'
              },
              {
                icon: '🎁',
                title: 'Automatic Rewards',
                description: 'Set it and forget it. Refernity automatically tracks referrals and sends rewards via Stripe, PayPal, or store credits.'
              }
            ].map((feature) => (
              <div key={feature.title} className="card">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Pricing */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Simple pricing, no hidden fees</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$49',
                description: 'For small businesses just getting started',
                features: ['Up to 500 customers', 'Basic analytics', 'Email notifications', 'Stripe integration']
              },
              {
                name: 'Growth',
                price: '$79',
                description: 'For growing businesses with AI features',
                features: ['Unlimited customers', 'AI-powered suggestions', 'Advanced analytics', 'Zapier integration', 'Remove branding'],
                popular: true
              },
              {
                name: 'Scale',
                price: '$149',
                description: 'For large teams with custom needs',
                features: ['Everything in Growth', 'White-label option', 'API access', 'Dedicated support', 'Custom AI training']
              }
            ].map((plan) => (
              <div key={plan.name} className={`card ${plan.popular ? 'ring-2 ring-primary-500' : ''}`}>
                {plan.popular && (
                  <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="font-semibold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                
                <p className="text-gray-600 mt-2 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-accent-500">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/auth/signup" 
                  className={`block text-center py-2 px-4 rounded-lg font-medium ${
                    plan.popular 
                      ? 'btn-primary' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-xl">Refernity</span>
            </div>
            <p className="text-gray-400">© 2026 Refernity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
