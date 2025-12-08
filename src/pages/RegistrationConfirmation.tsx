import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { getCompetitionById } from '../data/mockData';
import { CheckCircle, Calendar } from 'lucide-react';

interface RegistrationConfirmationProps {
  user: any;
}

export default function RegistrationConfirmation({ user }: RegistrationConfirmationProps) {
  const { id } = useParams<{ id: string }>();
  const competition = id ? getCompetitionById(id) : null;

  if (!competition) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header user={user} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-gray-900 mb-4">Competition Not Found</h1>
            <Link to="/competitions" className="text-blue-600 hover:text-blue-700">
              Back to Competitions
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 bg-gray-50">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-green-600" size={32} />
            </div>

            <h1 className="text-gray-900 mb-4">Registration Successful!</h1>
            
            <p className="text-gray-600 mb-8">
              You have successfully registered for <span className="text-gray-900">{competition.title}</span>
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-2 text-blue-900">
                <Calendar size={20} />
                <span>Deadline: {competition.deadline}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to={`/submission/${id}`}
                className="block w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Your Work Now
              </Link>

              <Link
                to="/dashboard"
                className="block w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
