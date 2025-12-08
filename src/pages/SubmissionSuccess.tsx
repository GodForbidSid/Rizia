import { useLocation, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CheckCircle, Clock } from 'lucide-react';

interface SubmissionSuccessProps {
  user: any;
}

export default function SubmissionSuccess({ user }: SubmissionSuccessProps) {
  const location = useLocation();
  const submission = location.state?.submission;

  if (!submission) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header user={user} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-gray-900 mb-4">No Submission Found</h1>
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
              Go to Dashboard
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 bg-gray-50">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="text-green-600" size={32} />
            </div>

            <h1 className="text-gray-900 mb-4">Submission Successful!</h1>
            
            <p className="text-gray-600 mb-8">
              Your submission has been successfully uploaded and is now under review.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-left">
              <h3 className="text-gray-900 mb-4">Submission Details</h3>
              
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600">Competition:</span>
                  <p className="text-gray-900">{submission.competitionName}</p>
                </div>

                <div>
                  <span className="text-gray-600">Title:</span>
                  <p className="text-gray-900">{submission.title}</p>
                </div>

                {submission.description && (
                  <div>
                    <span className="text-gray-600">Description:</span>
                    <p className="text-gray-900">{submission.description}</p>
                  </div>
                )}

                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={16} />
                  <span>Submitted: {formatDate(submission.timestamp)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to="/my-submissions"
                className="block w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Submissions
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
