'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { Loader2 } from 'lucide-react';

export default function PilotAfter() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleAuthRedirect = async () => {
      try {
        // 1. Get current user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        
        if (userError) {
          console.error('Error getting user:', userError);
          router.replace('/pilot/login');
          return;
        }

        if (!user) {
          router.replace('/pilot/login');
          return;
        }

        // 2. Fetch profile
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role,onboarding_completed')
          .eq('id', user.id)
          .maybeSingle();

        if (profileError) {
          console.error('Error fetching profile:', profileError);
          setError('Failed to load profile');
          setIsLoading(false);
          return;
        }

        // 3. Routing logic
        if (!profile) {
          // No profile exists - go to role selection
          router.replace('/onboarding/role');
        } else if (!profile.onboarding_completed) {
          // Profile exists but onboarding not completed - go to profile completion
          router.replace(`/onboarding/profile?role=${profile.role}`);
        } else {
          // Onboarding completed - go to dashboard
          router.replace(`/dashboard/${profile.role}`);
        }

      } catch (err) {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred');
        setIsLoading(false);
      }
    };

    handleAuthRedirect();
  }, [router]);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/pilot/login')}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
        <h2 className="text-xl font-semibold mb-2">Setting up your account...</h2>
        <p className="text-muted-foreground">Please wait while we redirect you</p>
      </div>
    </div>
  );
} 