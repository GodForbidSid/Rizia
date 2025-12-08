import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { getCompetitionById, addSubmission } from '../data/mockData';
import { Upload, ArrowLeft } from 'lucide-react';

interface SubmissionProps {
  user: any;
}

export default function Submission({ user }: SubmissionProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const competition = id ? getCompetitionById(id) : null;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null as File | null,
  });

  if (!competition) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header user={user} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-gray-900 mb-4">Competition Not Found</h1>
            <button
              onClick={() => navigate(-1)}
              className="text-blue-600 hover:text-blue-700"
            >
              Go Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getAcceptedFormats = (category: string) => {
    const formats: Record<string, string> = {
      Art: '.jpg,.png,.pdf',
      Dance: '.mp4,.mov',
      Music: '.mp3,.wav',
      Writing: '.pdf,.doc,.docx',
      Photography: '.jpg,.png',
      Film: '.mp4,.mov',
    };
    return formats[category] || '.jpg,.png,.pdf';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.file) {
      alert('Please upload a file');
      return;
    }

    const submission = {
      id: Date.now().toString(),
      competitionId: competition.id,
      competitionName: competition.title,
      userId: user.id,
      title: formData.title,
      description: formData.description,
      fileUrl: URL.createObjectURL(formData.file),
      timestamp: new Date().toISOString(),
      status: 'Submitted' as const,
    };

    addSubmission(user.id, submission);
    navigate('/submission-success', { state: { submission } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      
      <main className="flex-1 py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
            <h1 className="text-gray-900 mb-2">Submit Your Work</h1>
            <p className="text-gray-600 mb-8">
              Competition: <span className="text-gray-900">{competition.title}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div>
                <label htmlFor="file" className="block text-gray-700 mb-2">
                  Upload File *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-600 transition-colors">
                  <input
                    type="file"
                    id="file"
                    required
                    accept={getAcceptedFormats(competition.category)}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFormData({ ...formData, file });
                      }
                    }}
                    className="hidden"
                  />
                  <label htmlFor="file" className="cursor-pointer">
                    <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                    {formData.file ? (
                      <div>
                        <p className="text-gray-900 mb-1">{formData.file.name}</p>
                        <p className="text-sm text-gray-600">
                          {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-gray-900 mb-1">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-600">
                          Accepted formats: {getAcceptedFormats(competition.category)}
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-gray-700 mb-2">
                  Submission Title *
                </label>
                <input
                  type="text"
                  id="title"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Give your submission a title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-gray-700 mb-2">
                  Description (Optional)
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your submission..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
