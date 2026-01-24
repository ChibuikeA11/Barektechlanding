# Design Guide — Barek UI System
Version: 1.0
Audience: Codex, Frontend Engineers, Designers
Stack: Next.js (App Router), Tailwind CSS, Radix Themes + Primitives

---

## 0) Core Philosophy (NON-NEGOTIABLE)
Design must feel engineered, not decorated.
If an element doesn’t improve clarity, hierarchy, or depth — remove it.

- ✅ Calm, confident, expensive
- ❌ Loud gradients, decorative motion, Dribbble-style gimmicks

---

## 1) Color System
### 1.1 Base Palette (Always First)
- Background: `var(--color-background)` (Radix Themes)
- Panel: `var(--color-panel)`
- Surface: `var(--color-surface)`
- Text: `var(--color-text)` / Secondary: `var(--color-text-secondary)`
- Borders: `var(--color-border)`

Rules:
- Primary text > Secondary > Muted (never reverse).
- Borders are low-contrast; no pure gray lines.

### 1.2 Accent Colors (Strict)
Use **one** accent family per screen.
Allowed:
- Slate/Stone (default)
- Blue or Indigo (sparingly)
- Emerald (sparingly)

---

## 2) Gradients (MOST IMPORTANT)
### 2.1 Philosophy
Gradients are **light diffusion**, never paint.
They **sit behind content**, low opacity, blurred.

### 2.2 Approved Patterns
**A) Ambient Glow (Hero/Headers)**
```tsx
<div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,_rgba(99,102,241,0.12),_transparent)]" />
```

**B) Large Soft Orb**
```tsx
<div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px]
  bg-gradient-to-br from-indigo-500/15 to-transparent blur-3xl rounded-full" />
```

**C) Gradient Border**
```tsx
<div className="relative rounded-xl p-[1px] bg-gradient-to-r from-white/15 to-white/5">
  <div className="rounded-xl bg-panel p-6">
    <h3>Analytics</h3>
  </div>
</div>
```

### 2.3 Forbidden
- Gradient button fills
- Gradient card fills
- High saturation (500+)
- Multiple gradients competing on one screen

---

## 3) Layout & Spacing
- Max width: 1200–1280px
- Padding: `px-6` (mobile), `px-8` (desktop)
- Vertical rhythm: multiples of 8px

Every section must have:
- Clear heading hierarchy
- A visual anchor (light / contrast / spacing)
- Controlled density (no clutter)

---

## 4) Typography
Fonts (max 2 families):
- Display: DM Sans (headlines)
- Body: Inter (system fallback)

Type scale:
- Hero H1: `text-5xl` → `text-7xl`
- Section Title: `text-3xl` → `text-5xl`
- Card Title: `text-lg` → `text-xl`
- Body: `text-sm` → `text-base`
- Muted: `text-xs`

Rules:
- Relaxed line-height on large type
- No more than 3 font sizes per component

---

## 5) Components (Radix-First)
Must use Radix Themes for:
- Buttons, Cards, Dialogs, Inputs, Menus, Tabs

Rules:
- Keep default Radix behaviors
- Tailwind only for layout/spacing/light layers
- Don’t recreate primitives already in Radix

---

## 6) Motion & Interaction
Motion communicates state, not personality.
Allowed:
- Fade
- 2–4px translate
- Opacity shifts

Timing:
- 150–250ms
- `ease-out`

Forbidden:
- Bounce, elastic, looping

---

## 7) Texture (Anti-AI Rule)
Optional grain:
```tsx
<div className="pointer-events-none absolute inset-0 opacity-[0.04]
  bg-[url('/noise.png')] mix-blend-overlay" />
```
Keep it subtle — never noticeable.

---

## 8) Accessibility
- WCAG AA contrast
- Visible focus states
- No color-only meaning

---

## 9) AI-Generic Checklist (FAIL IF YES)
- Are gradients the first thing you notice?
- More than 2 gradients visible at once?
- UI relies on color for interest?
- Looks impressive but unclear?

If yes → simplify.

---

## 10) Approved References (Style Only)
- Linear — spacing discipline
- Stripe — gradient restraint
- Vercel — ambient light
- Framer — modern polish
- Apple — hierarchy & restraint

No Dribbble. No copying trend templates.

---

## 11) Final Instruction to Codex
Build UI that feels inevitable.
If removing an element improves clarity — remove it.
Prefer boring excellence over flashy novelty.
