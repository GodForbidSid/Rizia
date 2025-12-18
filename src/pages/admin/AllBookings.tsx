import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Trophy, 
  Users, 
  FileText, 
  LogOut,
  Settings,
  Bell,
  Search,
  BarChart3,
  Filter,
  Download,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { RiziaLogo } from '../../components/RiziaLogo';
import { getAllSubmissions, getEventById } from '../../data/mockData';
import { AdminMobileNav } from '../../components/AdminMobileNav';

interface AllBookingsProps {
  onLogout: () => void;
}

export default function AllBookings({ onLogout }: AllBookingsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const allSubmissions = getAllSubmissions();

  const filteredSubmissions = allSubmissions.filter(submission => {
    const event = getEventById(submission.competitionId);
    const matchesSearch = event?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         submission.userId.includes(searchQuery);
    const matchesStatus = statusFilter === 'All' || submission.status === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  const stats = [
    {
      label: 'Total Bookings',
      value: allSubmissions.length,
      change: '+12%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Approved',
      value: allSubmissions.filter(s => s.status === 'approved').length,
      change: '+8%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      label: 'Pending',
      value: allSubmissions.filter(s => s.status === 'pending').length,
      change: '-5%',
      color: 'from-orange-500 to-amber-500'
    },
    {
      label: 'Rejected',
      value: allSubmissions.filter(s => s.status === 'rejected').length,
      change: '0%',
      color: 'from-red-500 to-rose-500'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'rejected': return XCircle;
      default: return Clock;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400';
      case 'rejected': return 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400';
      default: return 'bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Top Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-gray-800/80">
        <div className="px-4 md:px-6 py-4">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <RiziaLogo size="sm" />
            </Link>

            <div className="flex items-center gap-2 md:gap-3">
              <button className="p-2 md:p-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors relative">
                <Bell size={18} className="text-gray-600 dark:text-gray-400 md:w-5 md:h-5" />
                <span className="absolute top-1 right-1 md:top-1.5 md:right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all shadow-lg"
              >
                <LogOut size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="hidden sm:inline text-sm">Logout</span>
              </button>
            </div>
          </div>
          
          {/* Mobile Search Bar */}
          <div className="mt-3 md:hidden">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search bookings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-[calc(100vh-73px)] p-6">
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
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl shadow-lg group"
            >
              <FileText size={20} />
              <span>All Bookings</span>
            </Link>

            <Link
              to="/admin/analytics"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors group"
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
        <main className="flex-1 p-4 md:p-6 pb-20 lg:pb-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-gray-900 dark:text-white text-2xl sm:text-3xl mb-2">All Bookings</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Manage and review all event bookings</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <FileText className="text-white" size={24} />
                </div>
                <div className="text-3xl text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {['All', 'Pending', 'Approved', 'Rejected'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 sm:px-4 py-2 rounded-xl transition-all text-sm ${
                    statusFilter === status
                      ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <button className="sm:ml-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-sm">
              <Download size={18} />
              <span>Export</span>
            </button>
          </div>

          {/* Bookings Table */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Mobile Card View */}
            <div className="lg:hidden p-4 space-y-4">
              {filteredSubmissions.map((submission) => {
                const event = getEventById(submission.competitionId);
                const StatusIcon = getStatusIcon(submission.status);

                return (
                  <div key={submission.id} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-md">
                    {/* Booking Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-gray-500 dark:text-gray-400">#{submission.id.substring(0, 8)}</span>
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs ${getStatusColor(submission.status)}`}>
                            <StatusIcon size={12} />
                            <span className="capitalize">{submission.status}</span>
                          </span>
                        </div>
                        <h3 className="text-gray-900 dark:text-white mb-1">{event?.title}</h3>
                      </div>
                    </div>

                    {/* Booking Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin size={14} />
                        <span>{event?.city}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={14} />
                        <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Mail size={14} />
                        <span>user@example.com</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Link
                        to={`/admin/review-submissions/${submission.competitionId}`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all text-sm"
                      >
                        <Eye size={16} />
                        <span>View</span>
                      </Link>
                      {submission.status === 'pending' && (
                        <>
                          <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors text-sm">
                            <CheckCircle size={16} />
                            <span>Approve</span>
                          </button>
                          <button className="p-2 bg-red-50 dark:bg-red-950/30 text-red-500 rounded-xl hover:bg-red-100 dark:hover:bg-red-950/50 transition-all">
                            <XCircle size={18} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Booking ID</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Event</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">User</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Date</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Status</th>
                    <th className="px-6 py-4 text-right text-sm text-gray-600 dark:text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredSubmissions.map((submission) => {
                    const event = getEventById(submission.competitionId);
                    const StatusIcon = getStatusIcon(submission.status);

                    return (
                      <tr key={submission.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-gray-900 dark:text-white">#{submission.id.substring(0, 8)}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="min-w-0">
                            <p className="text-gray-900 dark:text-white truncate">{event?.title}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                              <MapPin size={12} />
                              <span>{event?.city}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div className="text-gray-900 dark:text-white">User #{submission.userId}</div>
                            <div className="text-gray-500 dark:text-gray-400">user@example.com</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-gray-900 dark:text-white text-sm">
                            <Calendar size={14} className="text-gray-400" />
                            <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm ${getStatusColor(submission.status)}`}>
                            <StatusIcon size={14} />
                            <span className="capitalize">{submission.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/admin/review-submissions/${submission.competitionId}`}
                              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                              title="View Details"
                            >
                              <Eye size={18} className="text-gray-600 dark:text-gray-400" />
                            </Link>
                            {submission.status === 'pending' && (
                              <>
                                <button
                                  className="px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                                  title="Approve"
                                >
                                  Approve
                                </button>
                                <button
                                  className="px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                                  title="Reject"
                                >
                                  Reject
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredSubmissions.length} bookings
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all">
                  1
                </button>
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <AdminMobileNav />
    </div>
  );
}