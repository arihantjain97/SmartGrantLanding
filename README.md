# SmartGrant - AI-Powered Grant Automation Platform

SmartGrant automates the entire grant process for Singapore SMEs. Match grants in minutes, auto-draft proposals, and track compliance in real-time.

## Features

- **AI-Powered Grant Matching** - Match your business to eligible grants in under 5 minutes
- **Automated Proposal Generation** - AI-drafted custom grant proposals
- **Real-Time Compliance Tracking** - Automated deadline reminders and compliance checks
- **Grant Feasibility Checker** - 5-step wizard to assess grant eligibility and readiness

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SmartGrantLanding
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run Vitest tests

## Grant Feasibility Checker

The feasibility checker is a 5-step wizard that helps businesses assess their grant eligibility and readiness:

1. **Project** - Define business area and project summary
2. **Business** - Basic company information
3. **Eligibility** - Confirm eligibility criteria (shareholding, employees, operating time)
4. **Expansion** - Overseas expansion plans
5. **Readiness** - Display readiness score and top grant match

### Accessing the Checker

Navigate to `/feasibility-checker` or click "Grant Checker" in the navigation menu.

### Data Storage

Currently uses in-memory storage via `LeadStore` class. Data is stored only in development mode.

## Integration with Supabase

To replace the in-memory `LeadStore` with Supabase:

1. Install Supabase client:
```bash
pnpm add @supabase/supabase-js
```

2. Set up environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Create the leads table in Supabase:
```sql
CREATE TABLE leads (
  id TEXT PRIMARY KEY,
  business_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  eligibility JSONB NOT NULL,
  expand_overseas BOOLEAN NOT NULL,
  readiness INTEGER NOT NULL,
  top_grant TEXT NOT NULL,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

4. Replace the `LeadStore` implementation in `lib/lead-store.ts` with Supabase calls (see TODO comments in the file).

## OpenAI Integration

To enable intelligent grant matching:

1. Install OpenAI SDK:
```bash
pnpm add openai
```

2. Set up environment variables:
```env
OPENAI_API_KEY=your_openai_api_key
```

3. Update `lib/grant-matcher.ts` to use OpenAI API (see TODO comments in the file).

## Testing

Run tests with:
```bash
pnpm test
```

Tests cover:
- Grant matching logic
- Lead store functionality
- Component rendering

## Tech Stack

- **Frontend**: Next.js 13 (App Router), React 18, TypeScript
- **Styling**: TailwindCSS, shadcn/ui components
- **Animations**: Framer Motion
- **Testing**: Vitest
- **State Management**: React hooks + in-memory store
- **Icons**: Lucide React

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── feasibility-checker/ # Grant feasibility checker
│   ├── pilot-program/      # Pilot program page
│   └── ...
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   └── navbar.tsx         # Navigation component
├── lib/                   # Utility functions and stores
│   ├── lead-store.ts      # In-memory lead storage
│   ├── grant-matcher.ts   # Grant matching logic
│   └── constants.ts       # App constants
├── __tests__/             # Test files
└── hooks/                 # Custom React hooks
```

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests: `pnpm test`
4. Run linting: `pnpm lint`
5. Commit with conventional commits: `git commit -m "feat: add new feature"`
6. Push and create a pull request

## License

Private - All rights reserved 