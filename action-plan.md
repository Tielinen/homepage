# Action Plan — from “highest‑impact, lowest‑dependency” to “nice‑to‑have”

| Phase | Goal | Why it comes **now** | Key tasks (in sequence) |
|-------|------|----------------------|-------------------------|
| **2. Instant credibility (½ day)** | Show proof *while interest is hottest* | Social proof near the promise converts quickest. | 1. Place **Shopify Foundations**, **Liquid Storefronts**, and **Upwork Top‑Rated +** badges in a tight row under the hero CTA (max 4).<br>2. Surface 2‑3 ⭐⭐⭐⭐⭐ reviews with star icons directly below badges.<br>3. Keep full carousel lower. |
| **3. Content depth (1 day)** | Back the promise with detail | Follows once top section is settled. | 1. Portfolio cards → add tech badges + 1‑line results (“↑ 22 % conv.”—keep numeric).<br>2. **Add “starting‑at” price ranges for productized services (e.g., “Store setup – from $1.5 k”).**<br>3. Insert “Working With Me” block (trimmed copy).<br>4. Add collapsible “Tool Stack & Analytics” for secondary badges (Hotjar L1, etc.). |
| **4. HTML & SEO foundations (½ day)** | Help bots & assistive tech understand page | Doesn’t affect visuals; can be parallel but simple enough to batch. | 1. Add `<meta name="description">` and `og:image`.<br>2. Move 11ty‑reload script to end of `<head>`.<br>3. Fix heading order: one real `<h1>`, hero becomes `<h2>`. |
| **5. Accessibility (½ day)** | Make site usable for everyone | Builds on correct structure from Phase 4. | 1. `aria-label` on logo link (“Homepage – …”).<br>2. Mobile‑nav toggle: `aria-controls`, toggle `aria-expanded` via JS.<br>3. Video: brighter **poster** + `aria-label="60‑sec intro video"`. |
| **6. Performance & cleanliness (1 day)** | Speed & maintainability | Safe once markup settled; yields Lighthouse wins. | 1. `loading="lazy"`/`decoding="async"` for off‑screen images.<br>2. Serve hero image as AVIF/WebP; verify `sizes` attr.<br>3. Minify inline SVGs.<br>4. `html` vs `body` background conflict → keep one.<br>5. Extract repeated Tailwind utilities into `@apply` components.<br>6. Unify asset paths. |
| **7. Semantic polish (½ day)** | Rich results & future proofing | After structure/performance locked. | 1. Replace visible “Sections” `<h6>` with `sr-only` text.<br>2. Wrap each review in `<article itemtype="Review">`. |
| **8. Post‑launch optimizations (ongoing)** | Iterate with real users | Needs traffic & data. | • Hotjar recordings & polls.<br>• Scroll‑based image swaps on portfolio grid.<br>• Schedule periodic performance audits.<br>• A/B test alternative CTAs once traffic allows. |


+ Finish Phases 0‑2 before you spend a cent on ads.
That gets the promise + proof in place—minimum viable credibility.

+ Add Phase 3 (pricing & depth) before you scale spend beyond a test budget.
Cold visitors need price anchoring and deeper content to feel safe booking a call.

+ Wrap up Phase 4 in the same sprint, ideally within the first week of live traffic.
Meta tags and heading structure improve ad CTR and future‑proof your SEO; they rarely affect visuals, so you can finish them with the site live.

+ Run Phases 5‑7 as background sprints while campaigns are running.
They’re mostly invisible improvements—just schedule deployments during low‑traffic hours or use feature flags.

+ Phase 8 is continuous.
Use the traffic you’re paying for to feed Hotjar recordings, polls, and A/B tests—the very data you need for the next round of wins.