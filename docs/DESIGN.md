---
version: "1.0"
name: "My Akhirah Account"
description: "Islamic charity design system extracted from the My Akhirah Account logo and current web app tokens."
colors:
  primary: "#045D56"
  primary-dark: "#031F1D"
  accent: "#F9AA27"
  background: "#FFFFFF"
  surface: "#E8F4F2"
  text: "#000000"
  logo-teal: "#0C6964"
  logo-gold: "#FBAC25"
  logo-white: "#FFFFFF"
typography:
  body-md:
    fontFamily: "Montserrat"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  heading-lg:
    fontFamily: "Montserrat"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.15
  label-sm:
    fontFamily: "Montserrat"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.2
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
components:
  button-primary:
    background: "{colors.accent}"
    text: "{colors.text}"
    rounded: "{rounded.sm}"
  button-secondary:
    background: "{colors.primary}"
    text: "{colors.background}"
    rounded: "{rounded.sm}"
  card:
    background: "{colors.background}"
    border: "1px solid rgba(4, 93, 86, 0.10)"
    rounded: "{rounded.sm}"
assets:
  logo-primary: "public/Logo Png White@3x.png"
  logo-alternate: "public/Logo Png Black@3x.png"
---

# Design System

## Overview

My Akhirah Account is an Islamic charity website focused on trusted giving, African charity work, Zakat, Sadaqah, donor clarity, and visible impact.

The interface should feel dignified, calm, and trustworthy. Use deep teal for structure and trust, controlled gold for generosity and primary donation actions, and white or soft mint backgrounds for clarity.

## Colors

- **Primary** (`#045D56`): Header, footer, major section backgrounds, headings, secondary buttons, and trust surfaces.
- **Primary Dark** (`#031F1D`): Footer depth, high-contrast dark surfaces, and browser theme color.
- **Accent** (`#F9AA27`): Main donation CTAs, campaign progress, badges, and small emphasis details. Use sparingly.
- **Background** (`#FFFFFF`): Default page background and calm content areas.
- **Surface** (`#E8F4F2`): Soft section backgrounds, statistics bands, and low-emphasis information areas.
- **Text** (`#000000`): Primary text on white, mint, and gold surfaces.
- **Logo Teal** (`#0C6964`): Extracted from logo calligraphy and hands.
- **Logo Gold** (`#FBAC25`): Extracted from logo ring.
- **Logo White** (`#FFFFFF`): Extracted from logo inner field.

Use white text on deep teal surfaces. Use black or deep teal text on gold. Do not use small gold text on white because contrast can be weak.

## Typography

- **Primary font**: Montserrat, already configured in `src/app/layout.tsx`.
- **Headlines**: Montserrat, bold, compact line-height, calm authority. Avoid decorative display fonts for English UI.
- **Body**: Montserrat, regular, 16px baseline, generous line-height for readability.
- **Labels**: Montserrat, semibold, 12px, uppercase only for small category labels or form helper labels.
- **Arabic text**: If Arabic body copy is added, use a proper Arabic font. Do not imitate calligraphy in UI text.

Copy should be specific, transparent, and warm without exaggeration. Use Islamic terms accurately: Zakat, Sadaqah, Sadaqah Jariyah, Amanah.

## Layout

- Use mobile-first layouts with clear vertical rhythm.
- Keep important donation CTAs visible without forcing users through dense content.
- Use structured sections: hero, trust, campaigns, impact, updates, events, forms, footer.
- Keep max content widths readable. Long prose should not stretch full-width on desktop.
- Use grid for card lists and strict single-column layouts on mobile.
- Keep important pages within 3 clicks of the homepage.

Spacing scale:

- `4px`: micro gaps, icon alignment
- `8px`: tight control spacing
- `16px`: default component spacing
- `24px`: card and form group spacing
- `32px`: section inner spacing
- `48px`: section spacing on mobile/tablet
- `64px`: large desktop section spacing

## Elevation & Depth

- Prefer borders, color contrast, and spacing over heavy shadows.
- Cards should use a subtle teal-tinted border and minimal or no elevation.
- Use shadows only when elevation communicates hierarchy, such as dropdowns or overlays.
- Do not add glow effects to buttons, cards, or the logo.

## Shapes

- Use small, practical radii. Current UI uses `rounded-sm` patterns.
- Buttons, cards, badges, form inputs, and image containers should feel consistent.
- Do not mix highly rounded pill styles with sharp cards in the same surface.
- Preserve the circular form inside the logo; do not recreate the logo shape as generic decoration.

## Components

- **Primary buttons**: Gold background, black text, bold label, minimum 44px touch target. Use for donation and main conversion actions.
- **Secondary buttons**: Deep teal background, white text. Use for supporting navigation and content actions.
- **Text links**: Teal on light surfaces, white or gold on dark teal surfaces. Labels must describe the destination.
- **Cards**: Use for campaigns, blog posts, events, and impact items. Include clear title, summary, image or icon, and one action.
- **Forms**: Label above input, helper/error text below input, clear submit state, no placeholder-only labels.
- **Campaign progress**: Use gold for progress fill and teal/black for labels. Do not imply financial totals unless backed by approved data.
- **Logo**: Use the full logo on white, deep teal, or calm neutral backgrounds. Preserve aspect ratio and clear space.

## Imagery

- Use respectful project photography that preserves beneficiary dignity.
- Prefer real delivery work: clean water, food, education, healthcare, emergency response, and local partner activity.
- Avoid exploitative poverty imagery, dark manipulation, generic stock photos, and images that distract from donation decisions.

## Do's and Don'ts

- Do use teal for trust, structure, and brand recognition.
- Do use gold only for primary CTAs, progress, badges, and small emphasis.
- Do keep donation flows simple, clear, and confidence-building.
- Do maintain accessible contrast and visible focus states.
- Do use specific action labels such as "Donate to Clean Water" instead of vague labels.
- Do keep card grids, page headings, and footer navigation consistent across pages.
- Don't stretch, crop, rotate, recolor, shadow, or outline the logo.
- Don't place the logo over busy photography without a solid overlay.
- Don't create a teal-only interface; balance teal with white, mint, and controlled gold.
- Don't use generic charity claims such as "100% impact" unless verified by Mikhail.
- Don't use flashy animation, glowing buttons, or overdramatic donation counters.
- Don't change payment provider, Convex, Clerk/auth, admin, webhook, receipt, or donor-data UI without Mikhail approval.
