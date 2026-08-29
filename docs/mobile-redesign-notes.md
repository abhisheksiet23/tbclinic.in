# Mobile Redesign — Concept Notes (from reference image)

**Scope: mobile only. Desktop stays exactly as it is.** Reference image = 1 long mobile home screen.
Nothing here is implemented yet — this is the read of the reference plus how it maps onto the current code.

---

## 0. Hard constraint: how to not break desktop

`home.component.scss` (and most components) are written **mobile-first with `min-width` media
queries** — base styles ARE the mobile styles, and desktop inherits from them. So editing base
rules leaks straight into desktop.

Rule for this work:
- All new mobile styling goes inside `@media (max-width: 767px) { … }` blocks, appended after the
  existing rules — never by editing base declarations.
- New markup that only exists on mobile gets a `--mobile` class, hidden with `display:none` at
  `min-width: 768px`.
- Layout order changes done with flex `order` inside the mobile query, not by moving DOM nodes,
  wherever moving nodes would reshuffle desktop.
- Breakpoint: **767px** for phone. (Existing code also uses 599/639/899/900 — keep those alone.)

---

## 1. Visual language read from the reference

| Token | Value seen |
|---|---|
| Page background | very light blue-white (`#F4F7FD`-ish), sections sit as white cards on it |
| Primary navy | headings + primary button (`#0B2E70` → `#1449B0` range) |
| Accent green | "We Cure TB.", check icons, WhatsApp button (`#16A34A`-ish) |
| Card radius | ~14–16px, soft 1px light-blue border, very light shadow |
| Eyebrow | ALL CAPS, ~11px, letter-spaced; **green** in hero, **blue** in every later section |
| Section heading | ~20–22px, bold navy, centred (except hero + empathy card = left) |
| Body | ~13–14px, gray-slate, generous line-height |
| Section rhythm | white/tinted card, ~16px page gutters, ~28–32px vertical gaps |

Overall feel: **calmer and more "app-like" than the current mobile page** — everything is a
self-contained rounded card, less long-form prose, more scannable rows.

---

## 2. Section-by-section notes

### 2.1 Header
- White, thin bottom hairline, sticky.
- Left: shield logo + **TB CLINIC** / `Expert TB Care` (small gray sub-line).
- Right: phone icon + two-line **Call Us / 011 4160 0202**, then hamburger.
- Current header is close — mainly needs the two-line call block and tighter height.

### 2.2 Hero (`hero-carousel`)
- Eyebrow: `EXPERT TUBERCULOSIS CARE` (green).
- H1 on three lines: **We Find.** / **We Treat.** (navy) / **We Cure TB.** (green).
- Sub: "From difficult diagnosis to complete recovery, we stand by you at every step of your TB journey."
- Photo: rounded rectangle, doctor + patient, with a translucent dark pill overlay bottom-right —
  play icon + **Meet Our Experts** / `Expert care you can trust` (video entry point).
- ❓ In the reference the text and photo sit side by side. At a real 360–430px viewport that
  won't hold. **Assumption unless you say otherwise: stack — text block, then photo below.**

### 2.3 Stats strip *(new on mobile)*
One white bordered card, four cells (2×2 on phone), thin dividers:
- 👥 **17,000+** — Patients Treated
- 🛡 **16+** — Years of Expertise
- 🫁 **All Forms of TB** — Including Drug-Resistant TB
- 🔒 **Confidential Care** — No stigma, no judgement

### 2.4 Primary CTA row
- Filled navy **Book Consultation** (calendar icon) + outlined white **Chat on WhatsApp** (green icon).
- Reference shows them side by side; on a phone, stack full-width.
- Under it, two small trust lines: 🕐 `Mon – Sat · 9:30 AM – 5:00 PM` and
  🔒 `We'll call you back shortly · 100% confidential`.

### 2.5 Empathy card *(replaces the "The Uncertainty" question list)*
Light blue-gray rounded panel, left-aligned, faint line-art of a coughing man + doctor behind it.
- Eyebrow `YOU DON'T HAVE TO FACE THIS ALONE`
- H2 "We understand what you are going through"
- Body: "TB is not just an illness. It's the confusion, the wait, the wrong advice and the fear of
  the unknown. We are here to change that."
- Four check rows (green circle-check, dotted separator between):
  1. Accurate diagnosis with advanced tests
  2. Personalised treatment for every type of TB
  3. Expert guidance until you are completely cured
  4. Support with compassion and respect

Maps to the existing `why-card--worry` / `problem-q-list` — the copy flips from *questions* to
*reassurances*. Confirm whether the questions stay on desktop (yes, per "don't touch desktop").

### 2.6 The TB Journey *(replaces `problem-approach-list`)*
- Eyebrow `THE TB JOURNEY – HOW WE HELP YOU`, H2 "It's everything that happens before it" + short
  centred underline (already exists as `.title-underline-center`).
- Four tinted cards, each: number badge (01–04) top-left, line icon, bold title, 2-line body:
  - **01** green tint — *Symptoms get dismissed* — "Cough. Fever. Weight loss. Often ignored."
  - **02** amber tint — *Diagnosis gets delayed* — "Multiple consultations. Conflicting answers. More uncertainty."
  - **03** pink tint — *Treatment gets complicated* — "Wrong or incomplete treatment can make TB harder to treat."
  - **04** blue tint — *Expert care makes the difference* — "Accurate diagnosis, right treatment and complete support."
- Arrows between the cards. On phone: either a **horizontal snap-scroll rail** (arrows stay
  pointing right, cards ~78vw wide) or a **vertical stack with down-chevrons**. My pick: snap-scroll
  rail — keeps the 4-step "journey" reading and avoids a very tall section.
- Closing bar under it: light blue rounded strip, hand-heart icon,
  **"That's exactly where TB Clinic expertise."** + "We don't just treat TB. We guide you all the
  way to recovery." (This is the mobile stand-in for `.why-tb-close`.)

### 2.7 Locations (`network`)
- Eyebrow `EXPERT TB & CHEST CARE ACROSS DELHI`, H2 "Expert care, closer to you".
- Static map thumbnail with pins (image, not an embed — keeps it cheap), then one location card:
  pin + **Mayur Vihar (E)** + address + `›` chevron, and a 3-action footer row:
  **Call · Directions · Timing** with icons.
- On phone: map on top, card below; card is a swipeable rail if we show more than one branch.
- Full-width outlined **View All Locations** button with a pin icon on the right.

### 2.8 Patient stories
- Eyebrow `WHAT OUR PATIENTS SAY`, H2 "Real stories. Real recoveries."
- One card, two zones: rating block (**4.8 / 5**, five gold stars, "From 1,250+ Patient Reviews")
  and the quote (large quote glyph, text, avatar, "— Ramesh K. / TB Patient").
- On phone: rating on top as a compact row, quote below.
- Three dot pagination under the card (current component already carousels — reuse it).

### 2.9 Final CTA
Deep navy rounded card, illustration of a woman coughing bleeding off the left edge, faint lungs
watermark right.
- **Not sure if your symptoms could be TB?**
- "Take our quick symptom check. It's private, quick and could be the first step towards the right care."
- Two buttons: green **Chat on WhatsApp**, outlined white **Take Symptom Check ›**.
- Note: current mobile CTA has **three** buttons (WhatsApp / Call / Book Appointment) and no
  symptom-check flow. Reference drops Call+Book down to two and introduces a *symptom check*.

### 2.10 Floating speed dial
Not visible in the reference. Assumption: **keep it as is** on mobile.

---

## 2.11 Implemented — decisions taken

All six open questions were answered and the work is built:

| Question | Decision |
|---|---|
| Hero on a phone | Stacked: text → photo. Video pill kept over the photo. |
| Take Symptom Check | Points at the existing booking modal (`hero.openForm()`); one handler to swap later. |
| Journey cards | Horizontal snap-scroll rail. |
| Copy | Reference wording used verbatim. |
| Assets | Inline SVG stand-ins for the two illustrations, styled to match the reference. |
| Founder quote + Read Our Full Story | Dropped on mobile. |

Files: `*.mobile.scss` per component (hero-carousel, home, network, patient-stories), each
appended to that component's `styleUrls` after the desktop sheet.

Verified: `ng build --configuration production` passes and prerenders all 14 routes; a Playwright
check asserts every mobile-only node is visible only ≤767px and every desktop node only ≥768px.

---

## 3. Open questions for you

1. **Hero on a real phone** — stack text over photo (my assumption), or keep the side-by-side
   squeeze from the reference?
2. **"Take Symptom Check"** — does that page/flow exist, or should it point at the booking modal
   for now?
3. **Journey cards** — horizontal snap rail (my pick) or vertical stack?
4. **Copy** — is the reference copy final, or placeholder to be replaced with the current site's
   wording? (The empathy card and journey cards are new copy, not a restyle of existing text.)
5. **Assets needed** — doctor+patient hero photo, the two line-art illustrations (coughing man +
   doctor, coughing woman), the Delhi map thumbnail, the patient avatar. Send them, or I use
   placeholders / SVG stand-ins.
6. **Sections not in the reference** — founder quote ("Every patient deserves clarity…") and the
   `/about-us` "Read Our Full Story" CTA. Keep on mobile, or drop them?
