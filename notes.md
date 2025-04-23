### Notes:
+ rething section order
+ check/unify section margins/paddings
+ hero cta margin, between images and subheading
+ need something else banner
+ short caption (“60 sec intro”).
+ titel review standarx smaller font (italic)
+ Preview image should be the full URL to your image (ideally 1200×630 px).
+ Condense footer images

+ pad views.



### Susan?


# DONE
+ swap whatsapp hover color
+ reorganize sections


### ChatGPT
## Quick wins content:

2. Hero: swap the mock‑ups and your photo side‑by‑side on desktop; add a single big “Start your store” CTA under the headline.
4. Video: auto‑thumbnail looks dark—upload a brighter frame and add a short caption (“60 sec intro”).

Credibility boosts
7. Move 2‑3 best reviews (with star icons) directly under the hero; keep the carousel lower.
8. Show your Upwork “Top‑Rated +” badge near the logo; link to profile.

## What to show high on the page
- **Shopify Foundations Certification** (core platform)  
- **Liquid Storefronts – Verified Skill Badge** (directly proves your theme‑dev expertise)  

These two speak straight to store‑building clients, so place the badges near your **Top‑Rated +** Upwork badge or inside the **Working With Me** block. Small icons + one‑line tooltip (“Issued 2024 by Shopify”) keep it tidy.

### Where to place Hotjar Foundations L1
- Put it lower (e.g., in a collapsible **Tool Stack & Analytics** section or in the footer skills list). It’s useful but secondary; you don’t want to dilute the Shopify focus in the hero area.

### Tips
- Use official badge images (SVG/PNG) at ~40 px height for crispness.  
- Link each badge to the issuing credential page for verification.  
- Keep the total row ≤ 4 badges; beyond that, move extras to an **About** page.

This keeps authority high without clutter.

## Quick wins HTML

### 1. Head / SEO
- Add a `<meta name="description">` (≤ 160 chars) and `<meta property="og:image">` for richer sharing.  
- Move the **11ty reload** script to the end of the `<head>` so it doesn’t block other downloads.

### 2. Heading order
- There are two `<h1>` elements (logo **and** hero).  
  - Keep the logo as plain text or wrap it in a `<span>`.  
  - Change the hero title to an `<h2>` — one top‑level heading per page helps screen‑readers *and* SEO.

### 3. Accessibility
- Add `aria-label="Homepage – Janne Tielinen"` to the logo link.  
- Give the mobile‑nav toggle `aria-controls="header‑nav"` and update `aria‑expanded` in your JS.  
- Provide a descriptive `poster` or `aria-label` for the `<video>` so non‑visual users grasp its purpose.

### 4. Performance
- Add `loading="lazy"` and `decoding="async"` to off‑screen images.  
- Minify inline SVGs (remove Font‑Awesome license comments).  
- Serve the hero screenshot as AVIF/WebP and audit your `sizes` so only the first matching source is downloaded.

### 5. CSS cleanup
- `html` has `bg‑black` while `body` uses `bg‑softWhite` — drop the conflicting one.  
- Move repeated Tailwind utility clusters into component classes with `@apply` (smaller HTML, faster diffing).

### 6. HTML semantics
- Replace the visible “**Sections**” `<h6>` with a hidden `<span class="sr-only">Sections</span>`.  
- Wrap each review card in `<article>` (or `<section>`) and consider adding Schema.org `itemtype="Review"` for rich results.

### 7. Minor consistency
- Unify asset paths (`/assets/…` vs `./assets/…`) to avoid 404s in some hosting setups.

---


### After launch
+ On scroll down images change on portfolio

# Techniques for low-traffic websites
## Why conversion is hard for low-traffic websites

If you are a startup or a small company, you are in a chicken-and-egg situation:
+ To afford visitors, you need a good conversion rate.
+ But it’s hard to improve your conversion rate if you have no visitors.

Low-traffic websites have two problems:
+ Problem 1: How can you understand your visitors? For example, how can you find out what’s stopping them from taking action? It’s not easy when there aren’t many of them to ask. Tumbleweed can’t tell you how it feels.
+ Problem 2: How can you measure what works? High-traffic websites rely on A/B tests to measure whether their changes make a statistically significant difference. But A/B tests often don’t reach significance when there isn’t enough traffic.

If you’re feeling overwhelmed, take heart in the knowledge that every successful company has had to pass through this stage at one point.

We’ll tackle the first of those problems now. We’ll address Problem 2 later, in the chapter on A/B testing.

## The solution to Problem 1: The techniques you should use to understand your visitors if your website doesn’t get much traffic

Some of the techniques we mention in this section rely upon a website getting lots of traffic. Some surveys, for example, typically get a completion rate of 3%. If your business is small, we recommend that you make the most of the following techniques, which can be carried out even if your website gets just a few visitors per day. Each of them is described in detail in the following chapters:
+ User tests tend to be the most fruitful technique. Ask a friend—or anyone you can get your hands on—to participate. Once your website is refined enough, aim to user test it on people who are from your target demographic and psychographic.
+ Watch session recordings of the visitors you have. Doing so will give you insight into how web visitors see your website. Plus, you’ll see your creation through fresh eyes.
+ Speak to salespeople (what we call “VOC Aggregators”)—people who have sold face-to-face the same type of product—or similar products.
+ Analyze competitors’ websites. Or, if you don’t have any obvious competitors, look at companies that are successful within adjacent fields. For example, if you sell B2B software, look at other B2B software vendors.
+ Add your phone number prominently to the top of every page. Even if you have no plans to encourage phone calls on an ongoing basis, it can help to get at least a few of them. In fact, you may be able to charm your early callers into becoming long-term user testers.
+ Increase the incentives for visitors to complete surveys. The more you offer as an incentive, the higher percentage of responses you are likely to get.

Blanks, Karl; Jesson, Ben. Making Websites Win: Apply the Customer-Centric Methodology That Has Doubled the Sales of Many Leading Websites (pp. 84-86). Conversion Rate Experts. Kindle Edition. 