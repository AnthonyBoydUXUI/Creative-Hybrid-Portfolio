# A.S.B. Creative

Personal portfolio of **Anthony S. Boyd**, product service designer in Los Angeles.

This site replaces the Wix Studio original. It keeps the work, voice, testimonials, fashion and graphic studies, and the Aria onboarding voice — rebuilt as a fast, accessible Next.js app.

## Principles

- **Dieter Rams:** useful, understandable, unobtrusive, honest, thorough, as little design as possible.
- **Apple Human Interface:** clarity, deference, consistent controls, respect for appearance and reduced motion.
- **Don Norman:** discoverability, feedback, affordances, mapping, and a clear conceptual model.
- **WCAG 2.2 AA:** semantic structure, keyboard access, contrast, transcripts, labeled forms.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy on Vercel Hobby (free)

This portfolio is sized for Vercel’s **Hobby** plan: $0/month, personal use, GitHub connected, HTTPS included. Do not start a Pro trial or add a credit card.

1. Sign in at [vercel.com/signup](https://vercel.com/signup) with **GitHub** (`AnthonyBoydUXUI`). Hobby is the default personal plan.
2. If Vercel offers a Pro trial, choose **Continue with Hobby** / skip the trial.
3. Open [vercel.com/new](https://vercel.com/new) and import **AnthonyBoydUXUI/Creative-Hybrid-Portfolio**.
4. Leave Root Directory as `.` and Framework as **Next.js**. Deploy.
5. After it is live you get a free `*.vercel.app` URL. A custom domain is optional and also free on Hobby if you already own one.

Hobby only deploys commits from the GitHub account that owns the Vercel project. After you merge the pull request, open the project in Vercel and click **Deploy** once if Git did not auto-build.

## Custom domain (`asbcreativehybrid.co`)

The domain is registered at Wix through December 2027. Keep it there. Point only the **website** records at Vercel. Do **not** change nameservers to Vercel — that would break Google mail (`@asbcreativehybrid.co`). Leave MX and SPF TXT records as they are.

1. In the Hobby project [Domains](https://vercel.com/soundandmoving-images/creative-hybrid-portfolio/settings/domains), add `asbcreativehybrid.co`. Accept the `www` alias if Vercel offers it.
2. Copy the **A record** and **www CNAME** from that domain card. Newer projects sometimes use an IP other than `76.76.21.21` — use whatever the card shows.
3. In Wix: **Account Settings → Domains → asbcreativehybrid.co → DNS Records**.
   - Apex (`@` / blank host): delete the current Wix A records (`185.230.63.*`) and add one A record to the Vercel IP.
   - `www`: change the CNAME from `cdn3.wixdns.net` to the Vercel CNAME target (often `cname.vercel-dns.com`).
   - Do not edit nameservers, MX (`aspmx.l.google.com`), or the Google SPF / site-verification TXT records.
4. Wait for Vercel to show a valid configuration and issue HTTPS. Until then, the site stays at [creative-hybrid-portfolio.vercel.app](https://creative-hybrid-portfolio.vercel.app).
5. After it resolves, you can cancel the Wix **Premium plan** if you no longer need the Wix site. Keep the **domain** subscription. Keep **Business email** if you still use `@asbcreativehybrid.co`.

The first contact-form submission via FormSubmit sends a confirmation to `boydanthony58@gmail.com`. Confirm that email so messages arrive.

## Content sources

- Public Wix site: `https://boydanthony58.wixstudio.com/asbcreative`
- LinkedIn: [linkedin.com/in/anthonyboyduxui](https://www.linkedin.com/in/anthonyboyduxui)

Wix account credentials were used only to migrate public content. They are **not** stored in this repository. Rotate that password if it was shared in chat.
