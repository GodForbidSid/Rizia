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
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Calendar,
  UserCheck,
  UserX,
  Shield,
  Crown,
  Edit,
  Trash2
} from 'lucide-react';
import { RiziaLogo } from '../../components/RiziaLogo';

interface UsersManagementProps {
  onLogout: () => void;
}

export default function UsersManagement({ onLogout }: UsersManagementProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  // Mock user data
  const users = [
    {
      id: '1',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      city: 'Mumbai',
      role: 'User',
      status: 'Active',
      joinDate: '2024-01-15',
      bookings: 12,
      spent: '₹15,400'
    },
    {
      id: '2',
      name: 'Rahul Verma',
      email: 'rahul.verma@email.com',
      phone: '+91 98765 43211',
      city: 'Delhi',
      role: 'User',
      status: 'Active',
      joinDate: '2024-02-20',
      bookings: 8,
      spent: '₹9,800'
    },
    {
      id: '3',
      name: 'Anjali Patel',
      email: 'anjali.patel@email.com',
      phone: '+91 98765 43212',
      city: 'Bengaluru',
      role: 'VIP',
      status: 'Active',
      joinDate: '2023-11-10',
      bookings: 24,
      spent: '₹32,500'
    },
    {
      id: '4',
      name: 'Vikram Singh',
      email: 'vikram.singh@email.com',
      phone: '+91 98765 43213',
      city: 'Hyderabad',
      role: 'User',
      status: 'Inactive',
      joinDate: '2024-03-05',
      bookings: 3,
      spent: '₹3,200'
    },
    {
      id: '5',
      name: 'Sneha Reddy',
      email: 'sneha.reddy@email.com',
      phone: '+91 98765 43214',
      city: 'Chennai',
      role: 'User',
      status: 'Active',
      joinDate: '2024-01-28',
      bookings: 15,
      spent: '₹18,900'
    },
    {
      id: '6',
      name: 'Arjun Malhotra',
      email: 'arjun.malhotra@email.com',
      phone: '+91 98765 43215',
      city: 'Pune',
      role: 'VIP',
      status: 'Active',
      joinDate: '2023-09-15',
      bookings: 31,
      spent: '₹45,600'
    },
    {
      id: '7',
      name: 'Kavya Nair',
      email: 'kavya.nair@email.com',
      phone: '+91 98765 43216',
      city: 'Kochi',
      role: 'User',
      status: 'Active',
      joinDate: '2024-02-12',
      bookings: 7,
      spent: '₹8,400'
    },
    {
      id: '8',
      name: 'Rohan Gupta',
      email: 'rohan.gupta@email.com',
      phone: '+91 98765 43217',
      city: 'Mumbai',
      role: 'Admin',
      status: 'Active',
      joinDate: '2023-06-01',
      bookings: 0,
      spent: '₹0'
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'All' || user.role === roleFilter;
    
    return matchesSearch && matchesRole;
  });

  const stats = [
    {
      label: 'Total Users',
      value: users.length.toString(),
      change: '+12%',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Active Users',
      value: users.filter(u => u.status === 'Active').length.toString(),
      change: '+8%',
      icon: UserCheck,
      color: 'from-green-500 to-emerald-500'
    },
    {
      label: 'VIP Members',
      value: users.filter(u => u.role === 'VIP').length.toString(),
      change: '+15%',
      icon: Crown,
      color: 'from-purple-500 to-pink-500'
    },
    {
      label: 'Inactive Users',
      value: users.filter(u => u.status === 'Inactive').length.toString(),
      change: '-5%',
      icon: UserX,
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const getRoleBadge = (role: string) => {
    const styles = {
      'Admin': 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400',
      'VIP': 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400',
      'User': 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400'
    };
    return styles[role as keyof typeof styles] || styles.User;
  };

  const getStatusBadge = (status: string) => {
    return status === 'Active'
      ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400'
      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Top Navigation */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-gray-800/80">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <RiziaLogo size="md" />
            </Link>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all"
                />
              </div>
            </div>

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
              className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors group"
            >
              <BarChart3 size={20} />
              <span>Analytics</span>
            </Link>

            <Link
              to="/admin/users"
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-xl shadow-lg group"
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
            <h1 className="text-gray-900 dark:text-white text-3xl mb-2">User Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage and monitor all registered users</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex gap-2">
              {['All', 'User', 'VIP', 'Admin'].map((role) => (
                <button
                  key={role}
                  onClick={() => setRoleFilter(role)}
                  className={`px-4 py-2 rounded-xl transition-all ${
                    roleFilter === role
                      ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
            <button className="ml-auto flex items-center gap-2 px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
              <Download size={20} />
              <span>Export Users</span>
            </button>
          </div>

          {/* Users Table */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">User</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Contact</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Location</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Role</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Status</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600 dark:text-gray-400">Activity</th>
                    <th className="px-6 py-4 text-right text-sm text-gray-600 dark:text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                            {user.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <p className="text-gray-900 dark:text-white truncate">{user.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Joined {user.joinDate}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Mail size={14} />
                            <span className="truncate">{user.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Phone size={14} />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                          <MapPin size={14} className="text-gray-400" />
                          <span>{user.city}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm ${getRoleBadge(user.role)}`}>
                          {user.role === 'Admin' && <Shield size={14} />}
                          {user.role === 'VIP' && <Crown size={14} />}
                          <span>{user.role}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-sm ${getStatusBadge(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <p className="text-gray-900 dark:text-white">{user.bookings} bookings</p>
                          <p className="text-gray-500 dark:text-gray-400">{user.spent} spent</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit size={18} className="text-gray-600 dark:text-gray-400" />
                          </button>
                          <button
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            title="More"
                          >
                            <MoreVertical size={18} className="text-gray-600 dark:text-gray-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredUsers.length} of {users.length} users
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
    </div>
  );
}
