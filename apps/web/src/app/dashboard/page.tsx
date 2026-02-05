import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's how your referral program is performing.</p>
        </div>
        <Link
          href="/dashboard/campaigns/new"
          className="btn-primary"
        >
          + New Campaign
        </Link>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Clicks</p>
              <p className="text-3xl font-bold text-gray-900">2,847</p>
              <p className="text-sm text-accent-600">↑ 12% from last week</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👆</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Signups</p>
              <p className="text-3xl font-bold text-gray-900">432</p>
              <p className="text-sm text-accent-600">↑ 8% from last week</p>
            </div>
            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Conversions</p>
              <p className="text-3xl font-bold text-gray-900">89</p>
              <p className="text-sm text-accent-600">↑ 23% from last week</p>
            </div>
            <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎉</span>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Rewards Paid</p>
              <p className="text-3xl font-bold text-gray-900">$4,250</p>
              <p className="text-sm text-gray-500">This month</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* AI Insights */}
      <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <span className="text-2xl">🤖</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">AI Prediction Ready</h3>
            <p className="text-gray-600 mt-1">
              Our AI analyzed your customer base and found <strong>47 customers</strong> with 
              <strong>80%+ likelihood</strong> to refer. 
            </p>
            <div className="mt-4 flex gap-3">
              <Link href="/dashboard/ai" className="btn-primary text-sm">
                View AI Insights
              </Link>
              <button className="btn-secondary text-sm">
                Export List
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New conversion', detail: 'john@example.com referred sarah@example.com', time: '2 min ago', reward: '$50' },
            { action: 'Campaign created', detail: 'Summer Sale Referral Program', time: '1 hour ago', reward: null },
            { action: 'Reward paid', detail: 'mike@example.com earned $75', time: '3 hours ago', reward: '$75' },
            { action: 'New signup', detail: 'jane@example.com signed up via referral', time: '5 hours ago', reward: null },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-500">•</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.action}</p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                </div>
              </div>
              <div className="text-right">
                {item.reward && (
                  <span className="inline-block px-2 py-1 text-sm font-medium text-accent-700 bg-accent-100 rounded">
                    +{item.reward}
                  </span>
                )}
                <p className="text-sm text-gray-400 mt-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
