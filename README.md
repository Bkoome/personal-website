# Kirimi Kooome Brian - Portfolio (Vite + React)

## Current Status
This project has been converted from a Figma export into a runnable and deployable React app.

Latest branch: `main`  
Latest known pushed work includes:
- Full runnable Vite + TypeScript setup
- Portfolio content updates and structure improvements
- Working contact form via API endpoint (`/api/contact`) using Resend
- Added chatbot widget with friendly website-scoped responses
- Added certifications, volunteering, and academic training sections
- Added real project images and custom visuals for project cards

## Tech Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS v4-style setup
- Motion (`motion/react`)
- Lucide React icons
- Vercel serverless function for contact API
- Resend email delivery

## Run Locally
```bash
npm install
npm run dev -- --host 127.0.0.1 --port 5177 --strictPort
```

Local URL:
- http://127.0.0.1:5177

Production build:
```bash
npm run build
```

## Contact Form (API)
Frontend form posts to:
- `POST /api/contact`

Backend file:
- `api/contact.ts`

Required environment variables:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Example values are in:
- `.env.example`

## Key Implemented Sections
- Hero, identity, experience, projects, map, skills, future direction, github, contact, footer
- Academic training section (`app/components/AcademicTrainingSection.tsx`)
- Certifications section (`app/components/CertificationsSection.tsx`)
- Volunteering section (`app/components/VolunteeringSection.tsx`)
- Chatbot widget (`app/components/ChatbotWidget.tsx`)

## Project Images
Images currently used from `public/`:
- `stac.png`
- `Eco-dashboard.png`
- `lulc.png`
- `project-indicators.svg`
- `project-burned-sar.svg`
- `project-deformation-sar.svg`
- `project-cnn-bayesian.svg`

## Important Notes
- If email sending fails in production, check:
  1. Vercel env vars are set correctly
  2. Resend API key is valid
  3. Sender email/domain is verified in Resend
- If a key was exposed publicly, rotate it in Resend and update Vercel.

## Next Session Suggested Continuation
1. Improve chatbot intelligence with better intent coverage and optional context memory.
2. Add analytics for contact submissions and chatbot interactions.
3. Add unit tests for `api/contact.ts` and chatbot response logic.
4. Polish responsive behavior and accessibility details.
5. Optional: replace rule-based chatbot with AI endpoint constrained to portfolio data.
