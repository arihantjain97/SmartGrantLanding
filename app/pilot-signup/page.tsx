'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PilotSignup() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Pilot Sign-Up</h1>
        <p className="text-gray-600 mb-6">
          This is a placeholder page for the pilot sign-up process. 
          The full sign-up flow will be implemented here.
        </p>
        <Button asChild className="w-full">
          <Link href="/pilot-trial-signup">
            Go to Pilot Trial Sign-Up
          </Link>
        </Button>
        <Button variant="outline" asChild className="w-full mt-4">
          <Link href="/feasibility-checker">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Checker
          </Link>
        </Button>
      </div>
    </div>
  );
} 