import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Sparkles, Target, CheckCircle } from 'lucide-react';

export default function EligibilityChecker() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen font-sans flex flex-col items-center justify-center p-4 pt-32">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10">
            <Search className="w-16 h-16 text-blue-400" />
          </div>
          <div className="absolute top-20 right-20">
            <Target className="w-12 h-12 text-purple-400" />
          </div>
          <div className="absolute bottom-20 left-20">
            <CheckCircle className="w-14 h-14 text-green-400" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Sparkles className="w-10 h-10 text-yellow-400" />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Search className="w-12 h-12 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Eligibility Checker Tool
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8">
            Our smart AI-powered tool is getting ready to help you find the perfect grants! 🚀
          </p>

          {/* Cute message */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span className="text-lg font-semibold text-gray-700">Coming Soon!</span>
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-gray-600">
              We're putting the finishing touches on our intelligent eligibility checker. 
              Soon you'll be able to answer a few simple questions and instantly see which 
              grants you qualify for! ✨
            </p>
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Smart Matching</h3>
              <p className="text-sm text-gray-600">AI-powered grant matching in seconds</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Easy Process</h3>
              <p className="text-sm text-gray-600">Simple questions, instant results</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <Sparkles className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 mb-1">Always Updated</h3>
              <p className="text-sm text-gray-600">Latest grant criteria & requirements</p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
              asChild
            >
              <Link href="/pilot-trial-signup">Join Pilot Program</Link>
            </Button>
            <div>
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
                asChild
              >
                <Link href="/target-grants">Back to Grants</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 