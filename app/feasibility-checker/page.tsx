import dynamic from 'next/dynamic';

// Dynamically import the client component with no SSR
const FeasibilityCheckerClient = dynamic(
  () => import('@/components/feasibility-checker-client'),
  { 
    ssr: false,
    loading: () => (
      <div className="bg-gray-100 min-h-screen font-sans flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200">
          <div className="text-center">
            <div className="animate-spin mx-auto mb-4 w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full"></div>
            <h1 className="text-2xl font-bold text-gray-800">Loading Grant Checker...</h1>
            <p className="text-gray-600 mt-2">Please wait while we load the feasibility checker</p>
          </div>
        </div>
      </div>
    )
  }
);

export default function FeasibilityCheckerPage() {
  return <FeasibilityCheckerClient />;
} 