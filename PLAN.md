# Diogo Jota Memorial Page - Project Plan

## Project Overview
A tasteful memorial webpage dedicated to Diogo Jota (4 December 1996 - 3 July 2025), the Liverpool FC forward who tragically passed away in a car accident in Spain alongside his brother Andre Silva.

## Technical Stack

### Core Technologies
- **React** (Latest version with Vite)
- **shadcn/ui** - Professional UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **TypeScript** - Type safety

### Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^4.4.0",
  "@tailwindcss/typography": "^0.5.0",
  "lucide-react": "^0.263.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^1.14.0"
}
```

## Component Architecture

### 1. App Layout
```
src/
├── components/
│   ├── ui/           # shadcn components
│   ├── sections/     # Page sections
│   └── layout/       # Layout components
├── lib/
│   └── utils.ts      # Utility functions
├── assets/
│   └── images/       # Local images (if any)
└── styles/
    └── globals.css   # Global styles
```

### 2. Main Components

#### Header Component
- **Purpose**: Navigation and memorial banner
- **shadcn Components**: Badge, Button
- **Features**:
  - Subtle Liverpool branding
  - Memorial dates banner
  - Smooth scroll navigation

#### Hero Section
- **Purpose**: Main memorial tribute
- **shadcn Components**: Card, Avatar
- **Features**:
  - Large hero image of Diogo Jota
  - Name and dates (4 December 1996 - 3 July 2025)
  - "In Loving Memory" subtitle
  - Opening tribute quote

#### Career Timeline Component
- **Purpose**: Professional career journey
- **shadcn Components**: Card, Badge, Separator
- **Content**:
  - Paços de Ferreira (2013-2016)
  - Atlético Madrid (2016-2018)
  - Porto (2016-2017, loan)
  - Wolves (2017-2020)
  - Liverpool (2020-2025)
- **Features**:
  - Key statistics for each club
  - Achievement highlights
  - Responsive timeline layout

#### Achievements Gallery
- **Purpose**: Career accomplishments
- **shadcn Components**: Card, Badge, Grid
- **Content**:
  - Club trophies: Premier League (2024-25), FA Cup (2022), Carabao Cup (2022, 2024)
  - Personal stats: 182 appearances, 65 goals for Liverpool
  - International: 49 caps, 14 goals for Portugal
  - Recent Nations League victory (June 2025)

#### Personal Life Section
- **Purpose**: Family and character tribute
- **shadcn Components**: Card, Avatar
- **Content**:
  - Recent marriage to Rute Cardoso (June 22, 2025)
  - Father of three children
  - Character testimonials
  - Community involvement

#### Tributes Section
- **Purpose**: Quotes and remembrances
- **shadcn Components**: Accordion, Card, Blockquote
- **Content**:
  - Jürgen Klopp's tribute
  - Arne Slot's statement
  - Cristiano Ronaldo's tribute
  - Ian Rush's praise
  - Fan messages

#### Legacy Section
- **Purpose**: Impact and remembrance
- **shadcn Components**: Card, Badge
- **Content**:
  - Liverpool FC impact
  - Memorable goals and moments
  - Philanthropy and community work
  - Coaching aspirations

#### Final Tribute
- **Purpose**: Closing memorial
- **shadcn Components**: Card, Button
- **Content**:
  - Memorial message
  - "You'll Never Walk Alone" reference
  - Condolences section

## Design System

### Color Palette
- **Primary**: Liverpool Red (#C8102E)
- **Secondary**: White (#FFFFFF)
- **Accent**: Gold (#FFD700) for achievements
- **Neutral**: Gray shades for text and backgrounds
- **Background**: Subtle gradients and patterns

### Typography
- **Headlines**: Bold, professional fonts
- **Body Text**: Readable, clean typography
- **Quotes**: Italicized, distinguished styling
- **Statistics**: Prominent, easy-to-read numbers

### Layout Principles
- **Responsive**: Mobile-first design
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized images and lazy loading
- **Smooth Interactions**: Subtle animations and transitions

## Content Strategy

### Image Sources (Web URLs)
1. **Hero Image**: Professional Liverpool FC photo
2. **Career Timeline**: Action shots from each club
3. **Achievements**: Trophy celebrations, goal moments
4. **Personal**: Wedding photo, family moments (tasteful)
5. **Portugal**: National team photos
6. **Memorable Moments**: Goal celebrations, key matches

### Key Content Sections

#### Opening Quote
> "He took us to victory" - Liverpool fans' chant for Diogo Jota

#### Career Statistics
- **Liverpool FC**: 182 appearances, 65 goals, 22 assists
- **Premier League**: 123 appearances, 47 goals
- **Portugal**: 49 caps, 14 goals
- **Career Total**: 216 appearances, 71 goals (all clubs)

#### Notable Quotes
- Jürgen Klopp: "Diogo was on my list for 2-3 years... he's an incredible package"
- Ian Rush: "He reminds me of Kevin Keegan... most natural finisher at the club"
- Cristiano Ronaldo: "This makes no sense. We will all miss you."

#### Personal Highlights
- Married Rute Cardoso on June 22, 2025
- Father of three children: Dinis and two others
- Recently won UEFA Nations League with Portugal
- Pursuing coaching badges during playing career

## Technical Implementation

### Project Setup
```bash
npm create vite@latest diogo-jota-memorial -- --template react-ts
cd diogo-jota-memorial
npm install
npx shadcn-ui@latest init
```

### shadcn Components to Install
```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add button
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add scroll-area
```

### Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Performance Considerations
- Lazy loading for images
- Optimized image formats (WebP)
- Minimal JavaScript bundle
- Efficient CSS with Tailwind purging

## Content Guidelines

### Tone and Voice
- **Respectful**: Dignified and appropriate
- **Celebratory**: Focusing on achievements and positive impact
- **Personal**: Including family and character elements
- **Professional**: Maintaining high standards

### Accessibility
- Alt text for all images
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## Launch Considerations

### Final Checklist
- [ ] All images properly sourced and optimized
- [ ] Content proofread and factually accurate
- [ ] Responsive design tested across devices
- [ ] Accessibility standards met
- [ ] Performance optimized
- [ ] SEO meta tags added

### Post-Launch
- Monitor for any content corrections needed
- Ensure respectful community engagement
- Consider adding visitor book/memorial messages feature

---

*This memorial page is created with love and respect for Diogo Jota's memory, celebrating his life, career, and the joy he brought to football fans worldwide.* 