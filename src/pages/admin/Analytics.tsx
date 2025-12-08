import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Trophy, 
  Users, 
  FileText, 
  LogOut,
  Settings,
  Bell,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Activity,
  DollarSign,
  Eye,
  Ticket,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { RiziaLogo } from '../../components/RiziaLogo';
import { mockEvents, getAllSubmissions } from '../../data/mockData';

interface AnalyticsProps {
  onLogout: () => void;
}

export default function Analytics({ onLogout }: AnalyticsProps) {
  const submissions = getAllSubmissions();

  const stats = [
    {
      label: 'Total Revenue',
      value: '₹2,45,670',
      change: '+18.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      label: 'Total Bookings',
      value: submissions.length.toString(),
      change: '+23.5%',
      trend: 'up',
      icon: Ticket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Total Events',
      value: mockEvents.length.toString(),
      change: '+12.0%',
      trend: 'up',
      icon: Trophy,
      color: 'from-purple-500 to-pink-500'
    },
    {
      label: 'Page Views',
      value: '45,234',
      change: '-3.2%',
      trend: 'down',
      icon: Eye,
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const topEvents = [
    { name: 'Sunburn Arena ft. Martin Garrix', bookings: 234, revenue: '₹58,500', growth: '+24%' },
    { name: 'Zakir Khan Live', bookings: 189, revenue: '₹47,250', growth: '+18%' },
    { name: 'Bollywood Dance Workshop', bookings: 156, revenue: '₹31,200', growth: '+15%' },
    { name: 'Classical Music Evening', bookings: 142, revenue: '₹28,400', growth: '+12%' },
    { name: 'Stand-up Comedy Night', bookings: 128, revenue: '₹25,600', growth: '+10%' }
  ];

  const cityPerformance = [
    { city: 'Mumbai', bookings: 345, revenue: '₹86,250', percentage: 28 },
    { city: 'Delhi', bookings: 298, revenue: '₹74,500', percentage: 24 },
    { city: 'Bengaluru', bookings: 267, revenue: '₹66,750', percentage: 22 },
    { city: 'Hyderabad', bookings: 189, revenue: '₹47,250', percentage: 15 },
    { city: 'Chennai', bookings: 134, revenue: '₹33,500', percentage: 11 }
  ];

  const categoryBreakdown = [
    { category: 'Concert', count: 412, color: 'from-pink-500 to-rose-500', percentage: 35 },
    { category: 'Comedy', count: 298, color: 'from-amber-500 to-orange-500', percentage: 25 },
    { category: 'Dance', count: 235, color: 'from-purple-500 to-violet-500', percentage: 20 },
    { category: 'Art', count: 142, color: 'from-cyan-500 to-blue-500', percentage: 12 },
    { category: 'Festival', count: 96, color: 'from-indigo-500 to-purple-500', percentage: 8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Top Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-gray-800/80">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <RiziaLogo size="md" />
            </Link>

            <div className="flex items-center gap-3">
              <button className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors relative">
                <Bell size={20} className="text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
                <Settings size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all shadow-lg"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-[calc(100vh-73px)] p-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-2xl border border-purple-200 dark:border-purple-800">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white">
                A
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white truncate">Admin</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Administrator</p>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors group"
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/admin/manage-competitions"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors group"
            >
              <Trophy size={20} />
              <span>Manage Events</span>
            </Link>

            <Link
              to="/admin/bookings"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors group"
            >
              <FileText size={20} />
              <span>All Bookings</span>
            </Link>

            <Link
              to="/admin/analytics"
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl shadow-lg group"
            >
              <BarChart3 size={20} />
              <span>Analytics</span>
            </Link>

            <Link
              to="/admin/users"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors group"
            >
              <Users size={20} />
              <span>Users</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-gray-900 dark:text-white text-3xl">Analytics Dashboard</h1>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  <Calendar size={18} />
                  <span>Last 30 Days</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all shadow-lg">
                  <Download size={18} />
                  <span>Export Report</span>
                </button>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive insights into your platform performance</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                    stat.trend === 'up' 
                      ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400' 
                      : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    <span className="text-xs">{stat.change}</span>
                  </div>
                </div>
                <div className="text-3xl text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Top Performing Events */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-gray-900 dark:text-white mb-6 text-xl">Top Performing Events</h2>
              <div className="space-y-4">
                {topEvents.map((event, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-900/50 dark:to-purple-950/30 rounded-2xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 dark:text-white truncate">{event.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{event.bookings} bookings</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-900 dark:text-white">{event.revenue}</p>
                      <p className="text-xs text-green-600 dark:text-green-400">{event.growth}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-gray-900 dark:text-white mb-6 text-xl">Bookings by Category</h2>
              <div className="space-y-4">
                {categoryBreakdown.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-900 dark:text-white">{item.category}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.count} ({item.percentage}%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* City Performance */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-gray-900 dark:text-white mb-6 text-xl">City-wise Performance</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">City</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Bookings</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Revenue</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600 dark:text-gray-400">Performance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {cityPerformance.map((city, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                      <td className="px-4 py-4 text-gray-900 dark:text-white">{city.city}</td>
                      <td className="px-4 py-4 text-gray-600 dark:text-gray-400">{city.bookings}</td>
                      <td className="px-4 py-4 text-gray-600 dark:text-gray-400">{city.revenue}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden max-w-xs">
                            <div 
                              className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"
                              style={{ width: `${city.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-12">{city.percentage}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-900 dark:text-white text-xl">Revenue Trend</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg text-sm">
                  30 Days
                </button>
                <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-sm">
                  90 Days
                </button>
                <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-sm">
                  1 Year
                </button>
              </div>
            </div>
            <div className="h-80 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl">
              <div className="text-center">
                <Activity className="mx-auto mb-3 text-purple-500" size={64} />
                <p className="text-gray-600 dark:text-gray-400 text-lg">Revenue chart visualization</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Integration with charting library would display detailed trends here</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
