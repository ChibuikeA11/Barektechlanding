# Context → Aesthetic Commitment (MANDATORY BEFORE CODING)

Before writing any code, you MUST understand the context and commit to a BOLD aesthetic direction.

## 1) Purpose (Context)
- What problem does this interface solve?
- Who uses it (persona)? What do they need to feel (trust, speed, clarity, confidence)?
- What is the single most important action the user should take?

Write a 3–6 line summary of the context before you implement UI.

## 2) Tone (Pick One Extreme — No Middle)
Pick ONE extreme aesthetic direction and commit to it. Examples:
- brutally minimal
- luxury/refined
- industrial/utilitarian
- editorial/magazine
- retro-futuristic
- brutalist/raw
- art deco/geometric
- organic/natural
- maximalist chaos
- playful/toy-like
- soft/pastel

CRITICAL: Choose a clear conceptual direction and execute it with precision.
Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

### Default direction for this product (venture studio portfolio):
**Luxury/Refined + Industrial/Utilitarian**
- Feels: calm, inevitable, engineered, credible
- Avoids: trendy “startup gradient” vibes, playful consumer-app patterns

## 3) Constraints (Non-Negotiables)
- Framework: Next.js (App Router), React, TypeScript.
- Component system: Radix Themes (primary) + Radix Primitives.
- Performance: prioritize fast load, minimal heavy effects, avoid layout shift.
- Accessibility: keep focus states, keyboard nav, WCAG-friendly contrast.

## 4) Differentiation (Make it Unforgettable)
Define ONE memorable signature that users will remember after 3 seconds.

Examples (choose one, not all):
- A “Portfolio Decoupling” hero: one anchored stack that separates into products as you scroll
- A “System Frame” hero: a single frame whose contents swap between ventures
- A typography-led identity: distinctive display type + disciplined body type + editorial spacing
- A distinctive navigation model: calm, structured, minimal but unmistakable

Write the chosen signature in one sentence before coding.

---

# Frontend Aesthetics Guidelines (Enforced)

## A) Typography (Character > Generic)
- Choose fonts that feel designed for the brand.
- Avoid generic defaults (Arial, Roboto) and avoid overly common “tech fonts” as the only identity.
- Use a distinctive DISPLAY font for headings + a disciplined BODY font for readability.
- Keep hierarchy strict: H1/H2/H3 must be obviously different.

Rules:
- No more than 2 font families total.
- Use CSS variables for fonts.
- Typography must carry the brand, not gradients.

## B) Color & Theme (Cohesion > Variety)
- Commit to ONE dominant palette with 1 accent family.
- Use CSS variables for consistency.
- Gradients (if used) must represent LIGHT (ambient background) and must not be used as decoration.

Hard bans:
- Clichéd purple gradients on clean white backgrounds.
- Multiple accent families on one screen.
- Gradient-filled buttons/cards.

## C) Motion (State-driven, not decorative)
- Use motion to clarify state and progress (hover, focus, open/close, scroll-storytelling).
- Prefer scroll-driven storytelling over random micro-animations.
- Keep motion intentional and minimal; one orchestrated moment beats scattered effects.

Hard bans:
- bounce, elastic, playful easing
- continuous floating elements
- "attention-seeking" animations

## D) Spatial Composition (Structure with confidence)
- Use deliberate composition: asymmetric grids, overlap, controlled density OR generous negative space.
- Avoid predictable “three cards in a row” layouts everywhere.
- Let spacing and alignment feel engineered.

## E) Backgrounds & Visual Detail (Atmosphere, not noise)
Create depth and atmosphere without visual clutter:
- subtle noise/grain overlays (low opacity)
- ambient lighting behind hero sections
- thin borders, soft highlights, layered translucency

Hard bans:
- heavy shadows everywhere
- loud textures
- background gimmicks without purpose

---

# Implementation Rules (Radix-first)

## MUST
- Use Radix Themes components for Buttons, Cards, Dialogs, Inputs, Menus, Tabs.
- Keep default Radix behaviors and accessibility intact.
- Use Tailwind only for layout, spacing, and “environmental light layers” behind components.

## MUST NOT
- Rebuild component primitives already solved by Radix.
- Create gradient-filled components.
- Copy cookie-cutter component patterns without adapting to context.

---

# Output Requirements (What "Done" Means)
The implemented code must be:
- Production-grade and functional
- Visually striking and memorable (through concept + typography + composition)
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in spacing, hierarchy, and interaction states

If it looks impressive before it looks clear, simplify.
If removing an element improves clarity, remove it.
