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

The domain is paid at **Namecheap**. Wix only hosted the site and currently holds the **nameservers** (`ns6.wixdns.net` / `ns7.wixdns.net`). Cancelling Wix does **not** cancel the Namecheap registration — but you must move DNS off Wix **before** you cancel, or the domain will stop resolving.

Do this in order:

1. In Namecheap, open **Domain List** and confirm `asbcreativehybrid.co` is there, with **Auto-Renew** on.
2. Open the Vercel Domains page: [soundandmoving-images / creative-hybrid-portfolio / Domains](https://vercel.com/soundandmoving-images/creative-hybrid-portfolio/settings/domains). Click **Add Domain**, enter `asbcreativehybrid.co`, leave **Redirect apex domains to www** checked, **Connect to an environment → Production**, then click **Add Domain**. On the next screen, copy the A record IP and the `www` CNAME from the domain card (often `76.76.21.21` and `cname.vercel-dns.com` — use whatever the card shows).
3. In Namecheap: **Manage → Nameservers → Namecheap BasicDNS** (`dns1.registrar-servers.com` / `dns2.registrar-servers.com`). Save.
4. In Namecheap **Advanced DNS**, add:
   - A record, host `@`, value = Vercel IP
   - CNAME, host `www`, value = Vercel CNAME target
   - MX records for Google (same as today: `aspmx.l.google.com` priority 10, then `alt1`–`alt4`)
   - TXT, host `@`, `v=spf1 include:_spf.google.com ~all`
5. Wait until Vercel shows a valid configuration and HTTPS. The public URL will be `https://www.asbcreativehybrid.co` (apex redirects to www). Confirm mail still works.
6. Then cancel Wix Premium, Wix domain-connect, and Wix Business Email if you no longer need them. Keep paying Namecheap for the domain. If `@asbcreativehybrid.co` mail is billed through Wix’s Google bundle, keep that Google / Workspace billing separately or the mailbox can go away even though the domain stays yours.

The first contact-form submission via FormSubmit sends a confirmation to `boydanthony58@gmail.com`. Confirm that email so messages arrive.

## Content sources

- Public Wix site: `https://boydanthony58.wixstudio.com/asbcreative`
- LinkedIn: [linkedin.com/in/anthonyboyduxui](https://www.linkedin.com/in/anthonyboyduxui)

Wix account credentials were used only to migrate public content. They are **not** stored in this repository. Rotate that password if it was shared in chat.
