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

## Custom domain (`asbcreativehybrid.com`)

The Namecheap domain is **asbcreativehybrid.com**. Nameservers are already **Namecheap BasicDNS**. The Wix site used **asbcreativehybrid.co**, which still points at Wix — cancelling Wix can drop that `.co` name. Use `.com` for this portfolio.

`.com` currently points at Webflow. Connecting it to Vercel replaces that. Keep the Namecheap email-forwarding MX and SPF records so `@asbcreativehybrid.com` mail still forwards.

Do this in order:

1. In Namecheap, manage `asbcreativehybrid.com` (not `.co`). Auto-renew is on; the name expires 24 Aug 2026.
2. In Vercel [Domains](https://vercel.com/soundandmoving-images/creative-hybrid-portfolio/settings/domains), **Add Existing** → `asbcreativehybrid.com`, leave **Redirect apex domains to www** checked, Production. Copy the A record (`@`) and the `www` CNAME from those cards.
3. In Namecheap **Advanced DNS**, replace the Webflow website records:
   - A record, host `@`, value from the Vercel **.com** card
   - CNAME, host `www`, value from the Vercel www card
   - Leave MX (`eforward*.registrar-servers.com`) and SPF TXT as they are
4. In Vercel, **Refresh** until both `.com` rows are Valid Configuration. Public URL: `https://www.asbcreativehybrid.com`.
5. You can remove `asbcreativehybrid.co` from Vercel. Cancel Wix when you no longer need the old site or the `.co` name.

The first contact-form submission via FormSubmit sends a confirmation to `hello@asbcreativehybrid.com`. That address is independent of Wix.

In Namecheap: **Domain List → asbcreativehybrid.com → Redirect Email** (or Email Forwarding). Add:

- Alias: `hello`
- Forward to: an inbox you will still have after Wix is gone (Gmail is not Wix — `boydanthony58@gmail.com` still works if you keep that Google account)

Then open https://www.asbcreativehybrid.com/contact, send one test, and confirm the FormSubmit email that lands in the forwarded inbox.

## Content sources

- Public Wix site: `https://boydanthony58.wixstudio.com/asbcreative`
- LinkedIn: [linkedin.com/in/anthonyboyduxui](https://www.linkedin.com/in/anthonyboyduxui)

Wix account credentials were used only to migrate public content. They are **not** stored in this repository. Rotate that password if it was shared in chat.
