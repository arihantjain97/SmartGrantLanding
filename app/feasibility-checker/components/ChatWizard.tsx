"use client";
import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";
import { useWizard } from "../hooks/useWizard";
import type { WizardStep } from "../types";
import { toast } from "@/components/ui/sonner";

const industryChips = ["F&B", "Retail", "Tech", "Manufacturing", "Others"];
const challengeChips = [
  "Digitalise Ops",
  "Export Overseas",
  "Improve Productivity",
  "Upskill Team",
  "Other",
];
const headcountOptions = ["1-10", "11-50", "51-200", ">200"];

const stepPrompts = [
  "Hi! Let’s check your grant fit. What’s your business name?",
  "Quick one: your industry sector?",
  "What challenge are you tackling?",
  "Rough headcount?",
  "Based on what you shared, the Productivity Solutions Grant (PSG) is your best starting point.",
];

export default function ChatWizard() {
  const { step, answers, updateAnswer, nextStep } = useWizard();
  const chatRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [challengeText, setChallengeText] = useState("");
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [step]);

  // Step validation logic
  const validate = () => {
    if (step === 1 && !input.trim()) return "Business name is required.";
    if (step === 2 && !input.trim()) return "Please select or enter your industry.";
    if (step === 3 && (challengeText.trim().length < 10 || challengeText.trim().length > 280))
      return "Describe your challenge (10-280 chars).";
    if (step === 4 && !input.trim()) return "Please select your headcount.";
    if (step === 5 && !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return "Enter a valid email.";
    return "";
  };

  // Handle advancing steps
  const handleNext = () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    if (step === 1) {
      updateAnswer("businessName", input);
      setInput("");
      nextStep();
    } else if (step === 2) {
      updateAnswer("industry", input);
      setInput("");
      nextStep();
    } else if (step === 3) {
      updateAnswer("challenge", challengeText);
      setChallengeText("");
      nextStep();
    } else if (step === 4) {
      updateAnswer("headcount", input);
      setInput("");
      nextStep();
    } else if (step === 5) {
      // Email submit
      setEmailSent(true);
      toast.success("Email sent!");
    }
  };

  // Render chat bubbles for bot and user
  const renderBubbles = () => {
    const bubbles = [];
    for (let i = 1; i <= step; i++) {
      // Bot bubble
      bubbles.push(
        <div key={`bot-${i}`} className="flex justify-start">
          <div className="bg-muted rounded-lg px-4 py-2 max-w-[80%]">
            {stepPrompts[i - 1]}
          </div>
        </div>
      );
      // User bubble (if answered)
      if (i === 1 && answers.businessName) {
        bubbles.push(
          <div key="user-1" className="flex justify-end">
            <div className="bg-primary/10 rounded-lg px-4 py-2 max-w-[80%]">
              {answers.businessName}
            </div>
          </div>
        );
      }
      if (i === 2 && answers.industry) {
        bubbles.push(
          <div key="user-2" className="flex justify-end">
            <div className="bg-primary/10 rounded-lg px-4 py-2 max-w-[80%]">
              {answers.industry}
            </div>
          </div>
        );
      }
      if (i === 3 && answers.challenge) {
        bubbles.push(
          <div key="user-3" className="flex justify-end">
            <div className="bg-primary/10 rounded-lg px-4 py-2 max-w-[80%]">
              {answers.challenge}
            </div>
          </div>
        );
      }
      if (i === 4 && answers.headcount) {
        bubbles.push(
          <div key="user-4" className="flex justify-end">
            <div className="bg-primary/10 rounded-lg px-4 py-2 max-w-[80%]">
              {answers.headcount}
            </div>
          </div>
        );
      }
    }
    return bubbles;
  };

  // Render input for current step
  const renderInput = () => {
    if (step === 1) {
      return (
        <form onSubmit={e => { e.preventDefault(); handleNext(); }} className="flex gap-2">
          <Input
            aria-label="Business Name"
            placeholder="e.g. Acme Pte Ltd"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1"
            autoFocus
          />
          <Button type="submit">Next</Button>
        </form>
      );
    }
    if (step === 2) {
      return (
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {industryChips.map(chip => (
              <Badge
                key={chip}
                className={`cursor-pointer ${input === chip ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setInput(chip)}
                tabIndex={0}
                aria-label={chip}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setInput(chip); }}
              >
                {chip}
              </Badge>
            ))}
          </div>
          <form onSubmit={e => { e.preventDefault(); handleNext(); }} className="flex gap-2">
            <Input
              aria-label="Industry Sector"
              placeholder="Other (type to specify)"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">Next</Button>
          </form>
        </div>
      );
    }
    if (step === 3) {
      return (
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {challengeChips.map(chip => (
              <Badge
                key={chip}
                className={`cursor-pointer ${challengeText === chip ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setChallengeText(chip)}
                tabIndex={0}
                aria-label={chip}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setChallengeText(chip); }}
              >
                {chip}
              </Badge>
            ))}
          </div>
          <form onSubmit={e => { e.preventDefault(); handleNext(); }} className="flex gap-2">
            <Input
              aria-label="Challenge Description"
              placeholder="Describe your challenge"
              value={challengeText}
              onChange={e => setChallengeText(e.target.value)}
              className="flex-1"
              minLength={10}
              maxLength={280}
            />
            <Button type="submit">Next</Button>
          </form>
        </div>
      );
    }
    if (step === 4) {
      return (
        <form onSubmit={e => { e.preventDefault(); handleNext(); }} className="flex flex-wrap gap-2">
          {headcountOptions.map(opt => (
            <Button
              key={opt}
              type="button"
              variant={input === opt ? "default" : "outline"}
              className="flex-1 min-w-[80px]"
              onClick={() => setInput(opt)}
              aria-label={opt}
            >
              {opt}
            </Button>
          ))}
          <Button type="submit" className="w-full mt-2">Next</Button>
        </form>
      );
    }
    if (step === 5) {
      return (
        <form onSubmit={e => { e.preventDefault(); handleNext(); }} className="flex flex-col gap-2">
          <Input
            aria-label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <div className="flex gap-2">
            <Button type="submit" disabled={emailSent}>Send to my inbox</Button>
            <Button type="button" variant="outline" onClick={() => window.location.href = '/pilot-signup'}>Continue to Pilot Sign-Up</Button>
          </div>
        </form>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-lg mx-auto py-16">
      <div className="text-xs mb-2 flex justify-center">
        <span className="bg-muted px-3 py-1 rounded-full">Step {step} of 5</span>
      </div>
      <Card>
        <CardContent className="p-4 flex flex-col gap-4">
          <div
            ref={chatRef}
            className="flex flex-col gap-2 overflow-y-auto max-h-[70vh]"
            aria-live="polite"
          >
            {renderBubbles()}
          </div>
          {error && <Alert className="text-red-600 bg-red-50 border-red-200">{error}</Alert>}
          {renderInput()}
        </CardContent>
      </Card>
    </div>
  );
} 