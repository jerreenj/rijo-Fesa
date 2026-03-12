# Fesa Global - Product Requirements Document

## Original Problem Statement
Revamp the RJ Associates website (from GitHub repo) with:
1. Complete rebrand to "Fesa Global"
2. New dark and white/grey aesthetic
3. Integration of wireframe dotted rotating globe component
4. Maintain all recruitment agency functionality

## Architecture
- **Frontend**: React.js with Tailwind CSS
- **Styling**: Dark theme (black background, white/grey text)
- **Interactive Element**: D3.js-powered rotating 3D wireframe globe
- **No Backend Required**: Static frontend with Gmail integration for contact

## User Personas
1. **Healthcare Professionals** - Doctors, nurses, medical technicians seeking European opportunities
2. **Construction Professionals** - Skilled workers looking for international placements
3. **Fresh Graduates** - Entry-level candidates exploring career abroad

## Core Requirements (Static)
- [x] Hero section with interactive rotating globe
- [x] Services showcase (Healthcare Recruitment, CV Support, Interview Coaching, Relocation)
- [x] Regions section with Europe/Americas tabs
- [x] About section with company stats
- [x] Testimonials carousel
- [x] FAQ accordion
- [x] CTA section
- [x] Contact form (Gmail integration)
- [x] WhatsApp integration for quick contact
- [x] Responsive design with mobile navigation

## What's Been Implemented
**Date: Jan 2026**
- [x] Complete visual rebrand from RJ Associates to Fesa Global
- [x] **Custom logo image** in footer (bottom left)
- [x] **Empty/clean header** - no logo, just centered navigation
- [x] **Centered navigation** (Home, Services, Regions, About, Stories, Get Started)
- [x] **"FESA GLOBAL"** text centered below globe (FESA in cyan #00CED1, GLOBAL in white)
- [x] "Recruitment Services LLP" tagline
- [x] New dark/white/grey color scheme
- [x] Interactive wireframe dotted globe (D3.js) - properly centered
- [x] **Continuous testimonials marquee** - auto-scrolling without gaps
- [x] **"Share Your Story" button** - modal form to add testimonials
- [x] **Auto-replacement of sample testimonials** - real stories replace AI samples
- [x] **FULL MOBILE OPTIMIZATION**:
  - Touch-friendly globe with drag/rotate
  - Responsive sizing for all viewports
  - No horizontal overflow
  - Proper touch targets on modals
- [x] Modern minimalist UI
- [x] All sections: Hero, CTA, Services, Regions, About, Testimonials, FAQ, Contact
- [x] Mobile-responsive navigation with hamburger menu
- [x] Contact form with Gmail integration
- [x] WhatsApp consultation buttons
- [x] Social media links (LinkedIn, Twitter, Instagram)

## Tech Stack
- React.js (CRA)
- Tailwind CSS
- D3.js (for globe visualization)
- Lucide React (icons)
- React Hot Toast (notifications)

## Prioritized Backlog

### P0 (Critical) - COMPLETED
- [x] Rebrand to Fesa Global
- [x] Dark theme implementation
- [x] Globe integration

### P1 (High Priority) - Future
- [ ] Supabase integration for testimonials (currently static)
- [ ] Blog/News section
- [ ] Job listings page
- [ ] Candidate portal

### P2 (Medium Priority) - Future
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Live chat integration
- [ ] Newsletter signup

## Next Tasks
1. Add Supabase backend for dynamic testimonials
2. Create job listings page with filters
3. Add blog section for industry news
4. Implement candidate application portal
