export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  client: string;
  summary: string;
  thumbnail: string;
  thumbnailAlt: string;
  hero: string;
  heroAlt: string;
  video?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "vehicle-onboarding",
    title: "Vehicle Onboarding App",
    subtitle: "Voice, safety, and personalization for new EV owners",
    year: "2025",
    role: "Product, UX, voice design",
    client: "Concept — Voltique",
    summary:
      "An onboarding system that helps hybrid and EV owners feel confident from the first interaction — with family profiles, proactive safety, and a voice companion named Aria.",
    thumbnail: "/media/voa-hero.jpg",
    thumbnailAlt:
      "Dark studio rendering of a sleek electric sedan lit by a red taillight glow.",
    hero: "/media/voa-hero.jpg",
    heroAlt:
      "Minimal studio scene of a dark electric vehicle with a continuous red light bar.",
    video: "/video/voa-aria.mp4",
    featured: true,
  },
  {
    slug: "lioness",
    title: "Paramount+ Lioness",
    subtitle: "Interactive video product for IMDb",
    year: "2024",
    role: "CX visual designer",
    client: "IMDb Creative Studio · Paramount+",
    summary:
      "A high-performance video wall for Lioness — consistent across devices, aligned to Paramount+ brand, and built for a smooth client approval path.",
    thumbnail: "/media/lioness-hero.jpg",
    thumbnailAlt:
      "Promotional still for Lioness with Zoe Saldaña in tactical gear against a desert and D.C. skyline.",
    hero: "/media/lioness-hero.jpg",
    heroAlt:
      "Cinematic Lioness key art contrasting a desert operation with the Washington, D.C. skyline.",
    video: "/video/lioness-preview.mp4",
    featured: true,
  },
  {
    slug: "modular",
    title: "Modular Design System",
    subtitle: "Figma system for asynchronous stakeholder alignment",
    year: "2024",
    role: "Design systems · visual design",
    client: "IMDb Creative Studio",
    summary:
      "A responsive Figma system that produces polished, on-brand PDFs so teams stay aligned without a live presentation.",
    thumbnail: "/media/modular-hero.jpg",
    thumbnailAlt:
      "Furiosa Custom Solutions cover with IMDb Creative Studio and Warner Brothers branding.",
    hero: "/media/modular-hero.jpg",
    heroAlt:
      "Cover sheet for Furiosa Custom Solutions with a technical CS monogram.",
    video: "/video/modular-preview.mp4",
    featured: true,
  },
  {
    slug: "maria",
    title: "StudioCanal Maria",
    subtitle: "UK video product for a prestige film launch",
    year: "2024",
    role: "CX visual designer",
    client: "IMDb Creative Studio · StudioCanal",
    summary:
      "A plug-and-play Video Wall 2.0 for Maria — sticky banners, autoplay, and predefined layouts that balanced craft, performance, and stakeholder feedback.",
    thumbnail: "/media/maria-hero.jpg",
    thumbnailAlt:
      "Elegant portrait of Angelina Jolie as Maria Callas in a cream top and dark cape.",
    hero: "/media/maria-hero.jpg",
    heroAlt:
      "Editorial portrait of Angelina Jolie as Maria Callas against a pale background.",
    video: "/video/maria-preview.mp4",
    featured: true,
  },
];

export const testimonials = [
  {
    quote:
      "Thanks Anthony for being customer obsessed and going above and beyond for the client. The client was very happy with the final results and the IMDb performance, which led to being able to secure another placement for HOTD2.",
    name: "Christine Heinz",
    context: "Stakeholder · IMDb campaign",
  },
  {
    quote:
      "Anthony thank you so much for all your hard work on Booking.com’s Prime Video sponsorship. The IMDb placements turned out beautiful and you were such a joy to work with.",
    name: "Maura Feeney",
    context: "Stakeholder · Prime Video sponsorship",
  },
  {
    quote:
      "I want to thank Anthony, not only for supporting an under-SLA launch, but for all the times we have gotten to work together. He has the best approach and attitude. I appreciate all you have done for us at the P+ team. Very grateful to be working together.",
    name: "Jeff Barrantes",
    context: "Stakeholder · Paramount+",
  },
  {
    quote:
      "Anthony was selected to do the UX/UI for our e-learning LMS website, Elites Class. This project included enhancing the UX/UI, onboarding experience, and call-to-action buttons for the mobile and desktop websites as well as the MVP. I appreciated his passion for human-centered design and professionalism.",
    name: "Kendric Harrison",
    context: "Founder · Elites Class",
  },
];

export const values = [
  {
    title: "Empathy",
    body: "I listen deeply to understand, then solve thoughtfully.",
  },
  {
    title: "Innovation",
    body: "I learn new tools so the work can stay ahead of the problem.",
  },
  {
    title: "Purpose",
    body: "I design experiences that inspire and empower people.",
  },
  {
    title: "Creativity",
    body: "I pair analytical thinking with a fashion-honed visual sense.",
  },
  {
    title: "Authenticity",
    body: "I value genuine connection and honest communication.",
  },
  {
    title: "Discipline",
    body: "I bring structure and focus to every design challenge.",
  },
];

export const about = {
  kicker: "About",
  headline: "Crafts connections.",
  quote: "Good design is unobtrusive.",
  quoteBy: "Dieter Rams",
  body: [
    "I’m a Product Service Designer passionate about crafting meaningful, customer-centered experiences both digitally and in the real world. Combining creative flair with analytical insight, military discipline, and a touch of fashion design, I bring a unique perspective to every project. I value trust, transparency, and empathetic problem-solving. Explore my portfolio to see my work, learn about my design process, and discover how we can collaborate to create impactful and inspiring designs together.",
    "My path started in fashion — product development and styling with Guess Jeans, Yi Zhou Studio, A&O, and HauteLook. The Army Reserve taught me discipline, collaboration, and how to keep people whole under pressure. Those two educations still shape how I work: aesthetic judgment plus structure.",
    "At IMDb Creative Studio I designed interactive advertising experiences for studios and brands — video walls, modular systems, and campaign craft across every device. I completed Amazon’s UX Design & Research apprenticeship along the way.",
    "I’m now founder and product designer at OurnAI, shaping how people and companies work with intelligent tools. Off hours I draw from design philosophy, music, family, and Akira.",
  ],
  portrait: "/media/about-portrait.jpg",
  portraitAlt:
    "Anthony Boyd photographing plants in an urban garden, locs gathered, black shirt and crossbody bag.",
  studio: "/media/portrait-fashion.jpg",
  studioAlt:
    "Fashion portrait of Anthony Boyd in a sage blazer, wrapped in translucent green mesh.",
};

export const fashion = [
  {
    src: "/media/fashion-tunic-1.jpg",
    alt: "Black-and-white studio look: sleeveless white extended tunic, dark trousers, mid-stride.",
    caption: "01 Extended Tunic",
    meta: "ALEKSANDR capsule",
  },
  {
    src: "/media/fashion-tunic-2.jpg",
    alt: "Look from the ALEKSANDR capsule collection.",
    caption: "01 Extended Tunic",
    meta: "ALEKSANDR capsule",
  },
  {
    src: "/media/fashion-tunic-3.jpg",
    alt: "Tunic and pant look from the ALEKSANDR capsule collection.",
    caption: "01 Tunic & Fig.1 Pant",
    meta: "ALEKSANDR capsule",
  },
];

export const graphics = [
  {
    src: "/media/graphic-absence.jpg",
    alt: "Back of a black hoodie with a red-and-white glitch graphic reading Absence of Content and Empty Frames.",
    caption: "Absence of Content Hoody",
    meta: "Graphic design · vector",
  },
  {
    src: "/media/graphic-caution.jpg",
    alt: "Black hoodie with a white square, red line drawing, and the words Caution High Freq.",
    caption: "Caution High Freq. Hoody",
    meta: "Graphic design · vector",
  },
  {
    src: "/media/graphic-vivid.jpg",
    alt: "Black t-shirt with a grayscale photo collage and red Vivid Dreams lettering.",
    caption: "Vivid Dreams T-shirt",
    meta: "Graphic design · vector",
  },
];

export const experience = [
  {
    role: "Founder & Product Designer",
    org: "OurnAI",
    dates: "Nov 2024 — Present",
    location: "Valencia / Los Angeles, CA",
    bullets: [
      "Lead product vision, UX, and early-stage strategy for a platform that helps people create AI-driven solutions.",
      "Shape design, partnerships, and go-to-market while defining how people and companies interact with intelligent tools.",
    ],
  },
  {
    role: "CX Visual Designer",
    org: "IMDb · Amazon",
    dates: "Jun 2021 — Apr 2025",
    location: "Los Angeles, CA",
    bullets: [
      "Designed interactive advertiser and studio experiences across IMDb properties, working through Creative Studio with design technologists, program managers, sales, QA, and AdOps.",
      "Crafted high-performance video products and campaign systems for entertainment brands, with a focus on engagement, brand integrity, and client approval.",
      "Used Sketch and Figma to specify end-to-end interactive units that could ship across devices.",
    ],
  },
  {
    role: "Amazon UX Design & Research Apprentice",
    org: "IMDb · Amazon",
    dates: "Jun 2021 — Jul 2022",
    location: "Los Angeles, CA",
    bullets: [
      "Completed a 12-month program covering research, UX, visual and interaction design, information architecture, usability testing, and data-informed design.",
    ],
  },
  {
    role: "Customer Experience Designer",
    org: "Elites Class",
    dates: "Sep 2020 — Oct 2020",
    location: "Los Angeles, CA",
    bullets: [
      "Redesigned the nonprofit LMS website for underrepresented students ages 13–18: onboarding, landing pages, navigation, and CTAs on mobile and desktop.",
    ],
  },
  {
    role: "Product Development Assistant",
    org: "Active Apparel Group",
    dates: "Jan 2020 — Jun 2020",
    location: "Culver City, CA",
    bullets: [
      "Managed development trackers, private-label setup, tech packs, and BOMs; QCed fit samples and coordinated factory timelines.",
    ],
  },
  {
    role: "Sr. Freelance Womenswear Designer",
    org: "Yi Zhou Studio",
    dates: "Oct 2019 — Jan 2020",
    location: "Los Angeles, CA",
    bullets: [
      "Designed seasonal collections, mood boards, tech packs, and CADs; briefed vendors on sampling timelines.",
    ],
  },
  {
    role: "United States Army Reserve",
    org: "U.S. Army",
    dates: "Feb 2010 — Oct 2019",
    location: "Los Angeles, CA",
    bullets: [
      "Strength management, travel authorizations, and soldier development — coaching people through process, pay, promotion, and awards.",
    ],
  },
];

export const education = [
  {
    cred: "Certificate, Graphic Design",
    org: "Shillington Education",
    dates: "2023",
  },
  {
    cred: "Certificate, AI / Machine Learning",
    org: "MIT xPRO",
    dates: "2023",
  },
  {
    cred: "Certificate, User Experience & Visual Design",
    org: "School of Visual Concepts",
    dates: "2021 — 2022",
  },
  {
    cred: "Certificate, UX / UI",
    org: "General Assembly",
    dates: "2020",
  },
  {
    cred: "A.A., Apparel Industry Management",
    org: "FIDM",
    dates: "2012 — 2013",
  },
  {
    cred: "B.F.A., Fashion Design",
    org: "IADT",
    dates: "2006 — 2009",
  },
];

export const tools = [
  "Figma",
  "Miro",
  "Adobe Illustrator",
  "Adobe Aero",
  "UsabilityHub",
  "ChatGPT",
  "Claude",
  "Claude Code",
  "Cursor",
  "Codex",
  "Lovable",
  "Midjourney",
  "Google Whisk",
  "GitHub",
  "Vercel",
];

export const voa = {
  problem:
    "New EV owners often face a steep learning curve. Without clear guidance they underuse tools that would improve safety, comfort, and convenience.",
  solution:
    "An intuitive onboarding app that gives clear guidance, personalized tools, and proactive safety — so people feel supported from the first interaction with a hybrid vehicle.",
  details:
    "The concept prioritizes safety, personalization, and ease of use. Aria, a voice companion, walks the owner through the system without making safety feel like a lecture.",
  hmws: [
    "How might we create family-focused solutions for shared vehicles?",
    "How might we integrate safety so it feels proactive and supportive, not intrusive?",
  ],
  insights: [
    {
      stat: "33%",
      label: "2 of 6 participants named guided onboarding as critical",
    },
    {
      stat: "55%",
      label: "3 of 6 participants prioritized safety-first features",
    },
    {
      stat: "67%",
      label: "4 of 6 participants valued customization and profiles",
    },
  ],
  screens: [
    {
      src: "/media/voa-driver.jpg",
      alt: "A woman with braided hair in a light suit sits in a modern car, looking at a phone.",
    },
    {
      src: "/media/voa-screen-3.jpg",
      alt: "Mobile app screen from the vehicle onboarding flow.",
    },
    {
      src: "/media/voa-screen-4.jpg",
      alt: "Mobile app screen showing vehicle controls.",
    },
    {
      src: "/media/voa-screen-5.jpg",
      alt: "Mobile app screen for charging or climate controls.",
    },
    {
      src: "/media/voa-screen-6.jpg",
      alt: "Compact mobile frame from the onboarding prototype.",
    },
    {
      src: "/media/voa-screen-7.jpg",
      alt: "Tall composite of onboarding screens including profiles and settings.",
    },
    {
      src: "/media/voa-screen-8.jpg",
      alt: "Tall composite of vehicle status and personalization screens.",
    },
    {
      src: "/media/voa-screen-9.jpg",
      alt: "Tall composite of charging, climate, and energy screens.",
    },
    {
      src: "/media/voa-screen-10.jpg",
      alt: "Tall composite of lock, maps, and safety screens.",
    },
  ],
  audio: {
    src: "/audio/aria-onboarding.mp3",
    title: "Aria: Onboarding Voice Design",
    durationLabel: "1 min 2 sec",
    cover: "/media/portrait-mesh.jpg",
    transcript: `Aria is a voice prototype for first-drive onboarding.

What you will hear is a 62-second companion voice designed to feel calm, personal, and non-intrusive — matching the product principle that safety should support, not interrupt.

The visual sequence that originally accompanied this track welcomes a named driver (“Jordan”), then introduces lock and unlock, charging, climate, energy, and family profiles.

This audio is provided as a first-class artifact of the work, with a text alternative so the voice design can be understood without playing sound.`,
  },
};

export const lionessCase = {
  overview:
    "Paramount+, a leading streaming platform, needed to launch Lioness with an interactive campaign that captured the show’s intensity and connected audiences to premium storytelling on IMDb.",
  challenge:
    "Design a high-performance video wall that worked across devices, kept brand integrity, engaged people, and survived a real client approval process.",
  objective:
    "An engaging, interactive experience that is consistent across platforms, aligned to Paramount+ brand strategy, and efficient for internal collaboration and client review.",
  solution:
    "Through iteration we built a cross-platform interactive video wall, refined it in internal reviews, then presented it for client approval and deployment.",
  images: [
    {
      src: "/media/lioness-imdb-1.jpg",
      alt: "IMDb homepage takeover for Lioness with Try it free and a video carousel.",
    },
    {
      src: "/media/lioness-imdb-2.jpg",
      alt: "IMDb Lioness unit with featured today modules and what to watch.",
    },
    {
      src: "/media/lioness-preview.jpg",
      alt: "Live preview of the Lioness IMDb video wall including the ad preview tool.",
    },
  ],
};

export const modularCase = {
  background:
    "A Figma-based system that generates dynamic, scalable outputs — keeping branding consistent for live and asynchronous collaboration.",
  problem:
    "Stakeholders needed to stay aligned on project goals without always attending a live presentation, without losing consistency or polish.",
  solution:
    "A responsive Figma system with reusable components that produce branded PDFs for internal and external use.",
  hmw: "How might we keep stakeholders aligned without requiring a live presentation?",
  insights: [
    "Teams struggled with asynchronous workflows, which created miscommunication and unclear deliverables.",
    "Stakeholders needed a reusable system that could adapt to branding and project requirements.",
    "External stakeholders valued polished, digestible materials they could review on their own time.",
  ],
  studio:
    "The IMDb Creative Studio is a hybrid team of designers, design technologists, and program managers responsible for the design and implementation of IMDb’s custom advertising products. The team works with executives, sales, campaign managers, and internal partners across UX, QA, AdOps, App, AdTech, and marketing to invent, design, build, and launch advertising experiences across IMDb properties.",
  images: [
    {
      src: "/media/maria-preview.jpg",
      alt: "Figma Narrative Pitch Deck with Furiosa Custom Solutions frames and component pages.",
    },
  ],
};

export const mariaCase = {
  overview:
    "StudioCanal needed a digital marketing solution to promote Maria across desktop and mobile in the UK.",
  challenge:
    "Raise engagement while dealing with asset quality, latency, and a seamless Video Wall — and keep the team and client aligned through approval.",
  objective:
    "A high-performance, scalable solution that balances creative invention, technical feasibility, and stakeholder feedback.",
  solution:
    "A plug-and-play Video Wall 2.0 template with sticky banners, autoplay video, and predefined layouts for usability and performance.",
  images: [
    {
      src: "/media/maria-campaign.jpg",
      alt: "Maria campaign banner with Angelina Jolie, festival laurels, reviews, and a Book Tickets action.",
    },
    {
      src: "/media/modular-preview.jpg",
      alt: "IMDb homepage video wall for StudioCanal Maria with Book Tickets and the ad preview tool.",
    },
    {
      src: "/media/campaign-banner.jpg",
      alt: "Wide promotional frame from the Maria campaign system.",
    },
  ],
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
