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
- [x] New dark/white/grey color scheme
- [x] Interactive wireframe dotted globe (D3.js) - CENTERED in hero
- [x] Clean "FesaGlobal" branding (no boxed icon)
- [x] Original tagline "Your Career in Europe Starts Here"
- [x] **CLEAN HERO** - No header/navigation on initial load (elegant focus)
- [x] **HEADER APPEARS ON SCROLL** - Navigation shows after scrolling past hero
- [x] Immediate CTA section on scroll ("Ready to Work in Europe?")
- [x] User-submitted testimonials with photo upload (no fake AI testimonials)
- [x] **FULL MOBILE OPTIMIZATION**:
  - Touch-friendly globe with drag/rotate
  - Responsive sizing (280px mobile, 500px desktop)
  - Stacked buttons on mobile
  - Proper text sizing (sm: breakpoints)
  - No horizontal scroll
- [x] Modern minimalist UI with glass-morphism effects
- [x] All sections rebuilt with new aesthetic
- [x] Mobile-responsive navigation
- [x] Contact form with Gmail integration
- [x] WhatsApp consultation button
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
