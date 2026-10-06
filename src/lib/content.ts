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
    slug: "team-status-system",
    title: "Team-Status System",
    subtitle: "Running process for a distributed engineering team",
    year: "2026",
    role: "Founder · process design",
    client: "OurnAI",
    summary:
      "Three AI coding collaborators were working in parallel, each in its own thread. Without a shared source of truth I became the router. I designed an operating system that removes the founder from routine status relay while keeping a single decision-maker for anything ambiguous, risky, or irreversible.",
    thumbnail: "/media/team-status/snapshot.jpg",
    thumbnailAlt:
      "Sanitized Team Status snapshot: three collaborator blocks with placeholder tasks. Live repository detail is omitted.",
    hero: "/media/team-status/snapshot.jpg",
    heroAlt:
      "Sanitized Team Status document on a dark field, showing Purpose, Core principle, and Collaborator A, B, and C blocks with placeholder content.",
    featured: true,
  },
  {
    slug: "karate-kid-legends",
    title: "Karate Kid: Legends",
    subtitle: "Interactive Experience · IMDb Creative Studio × Sony Pictures",
    year: "April 2025",
    role: "Product / UX / Visual Design",
    client: "IMDb Creative Studio · Sony Pictures / Columbia Pictures",
    summary:
      "I developed the initial experience, game mechanics, interaction system, and supporting assets as part of IMDb Creative Studio, working closely with Design Technology. As the campaign progressed into production, the work continued collaboratively across the IMDb Creative Studio design and Design Technology teams.",
    thumbnail: "/media/karate-kid/tile-expanded.jpg",
    thumbnailAlt:
      "Original April 2025 desktop concept: expanded IMDb Video Wall+ for Karate Kid: Legends, with Play the Game, Videos, Characters, and Book Tickets above the homepage rail.",
    hero: "/media/karate-kid/game-select.jpg",
    heroAlt:
      "Laptop frame of the original Karate Kid: Legends game-select state on IMDb, with three training challenges over a temple garden.",
    featured: true,
  },
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
  teaser:
    "I’m a Product Service Designer passionate about crafting meaningful, customer-centered experiences both digitally and in the real world. Combining creative flair with analytical insight, military discipline, and a touch of fashion design, I bring a unique perspective to every project. I value trust, transparency, and empathetic problem-solving. Explore my portfolio to see my work, learn about my design process, and discover how we can collaborate to create impactful and inspiring designs together.",
  body: [
    "My creative journey began as a fashion designer, working with brands like Guess Jeans, Yi Zhou Studios, AAG, and HauteLook, where I developed skills in product development, and styling.",
    "My military experience instilled mental discipline and a rigorous work ethic, shaping my approach to problem-solving and challenges.",
    "Currently, I am expanding my expertise in Visual Communication and UX/UI design, utilizing methods like information architecture, wireframing, customer research, and rapid prototyping. I craft meaningful digital and tangible products with a focus on storytelling, systems thinking, and empathy.",
    "In my free time, I enjoy spending time with my family and drawing inspiration from design philosophy, music, and my favorite anime Akira.",
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
    src: "/media/fashion-tunic-2.jpg",
    alt: "Male model in a sleeveless white extended tunic and white high-tops, industrial metal door behind him.",
    caption: "S1 Extended Tunic",
    meta: "ALEKSANDR · Capsule collection I designed",
  },
  {
    src: "/media/fashion-tunic-3.jpg",
    alt: "Female model in a sleeveless white extended tunic with an asymmetrical wrap front, industrial metal door behind her.",
    caption: "S1 Extended Tunic",
    meta: "ALEKSANDR · Capsule collection I designed",
  },
  {
    src: "/media/fashion-tunic-1.jpg",
    alt: "Black-and-white studio look: sleeveless white tunic, dark trousers, mid-stride.",
    caption: "S1 Tunic & Fig.5 Pant",
    meta: "ALEKSANDR · Capsule collection I designed",
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
  "ElevenLabs",
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

export const karateKidCase = {
  displayTitle: "Karate Kid: Legends × IMDb",
  eyebrow: "Interactive Experience · April 2025",
  finishedCampaign: "https://imdbcreativestudio.com/home/karate-kid",
  finishedVideo: "https://vimeo.com/1142251482?fl=pl&fe=vl",
  finishedVideoEmbed: "https://player.vimeo.com/video/1142251482",
  heroMeta: [
    { label: "Role", value: "Product / UX / Visual Designer" },
    { label: "Timeline", value: "April 2025" },
    { label: "Creative team", value: "IMDb Creative Studio / Amazon" },
    { label: "Studio / advertiser", value: "Sony Pictures / Columbia Pictures" },
    {
      label: "Contribution",
      value: "Initial experience · game mechanics · interaction design · production assets · Design Technology collaboration",
    },
    { label: "Platform", value: "IMDb Video Wall+ · web + mobile" },
    { label: "Continued production", value: "IMDb Creative Studio Design + Design Technology · 2025" },
    { label: "Recognition", value: "Silver ADDY · 2026 · resulting campaign" },
  ],
  opportunity:
    "Karate Kid is built around training, discipline, and progression. Instead of treating the IMDb takeover as another passive piece of movie advertising, we explored how the audience could participate in that training themselves. The concept turned the advertising surface into an interactive training experience.",
  systemIntro:
    "Precision, Balance, and Memory were designed as one training path — enter, choose a challenge, complete the set, and progress — not as three disconnected mini-games.",
  mechanicsLead:
    "The brief for my April 2025 work was behavioral as much as visual: how the games listen, respond, score, fail, and move the player forward.",
  precision: {
    principle: "Accuracy + timing + controlled response",
    points: [
      "Instruction state before the first strike",
      "Directional block left / block right",
      "Highlighted target on the dummy",
      "Hit window, scoring, and miss count",
      "Success, failure, and replay",
    ],
  },
  balance: {
    principle: "Control + equilibrium + sustained input",
    points: [
      "Continuous left / right correction",
      "Keep the marker inside a target zone",
      "Timer and out-of-zone feedback",
      "Hold the stance to complete the drill",
      "Success, failure, and replay",
    ],
  },
  memory: {
    principle: "Observe → remember → repeat",
    points: [
      "Letter / key combination shown once",
      "Player’s turn to repeat the combo",
      "Correct response (green confirmation)",
      "Incorrect response (red miss)",
      "Completion, reward, or replay",
    ],
    note: "Frames from the April 2025 desktop build.",
  },
  states: [
    "Select game",
    "Intro",
    "Instructions",
    "Active play",
    "Feedback",
    "Retry or success",
    "Next challenge",
    "Final completion",
  ],
  assetsLead: [
    "Sony Pictures / Columbia Pictures needed an interactive campaign experience that could support motion, feedback, and multiple gameplay states across three distinct training challenges. I designed the game mechanics for each stage and created the visual environments that framed those interactions, including the stage-specific backgrounds, spatial compositions, and supporting scene elements used throughout the experience.",
    "I also created and prepared implementation-ready source objects, sprite frames, 3D assets, and original hand-pose artwork, then collaborated closely with Design Technology to translate the experience into practical build requirements.",
    "Several of the environmental concepts and background treatments developed during this phase were carried forward and refined in the final production, helping preserve continuity between the original interaction design and the launched experience.",
  ],
  responsive:
    "Desktop used keyboard and a wider Video Wall+ canvas. Mobile kept the same Precision → Balance → Memory path with touch targets at the thumb edge, a tighter hierarchy, and the IMDb rail still in view — adapting the interaction model rather than shrinking the desktop layout.",
  production:
    "IMDb Creative Studio’s public case and the video below document the launched campaign. I did not produce this finished edit.",
  impactIntro:
    "Figures published by IMDb Creative Studio for the launched campaign — not personal performance metrics.",
  impactStats: [
    { stat: "6", label: "Languages, launched simultaneously" },
    { stat: "10", label: "Countries across Europe and LATAM" },
    { stat: "3", label: "Training games in one system" },
  ],
  impactQuote: [
    "Launched our fully localized gamified experience simultaneously in 6 languages across 10 countries in the EU and LATAM (UK, Spain, Mexico, Brazil, Germany, France, Netherlands, Switzerland, Austria, and Ireland).",
    "Pairing addictive mini-games with rich character galleries and exclusive video content, it created a seamless bridge between interactive training and blockbuster hype, bringing discipline, focus, and a whole lot of “wax on, wax off” to fans worldwide.",
  ],
  impactSourceLabel: "IMDb Creative Studio — Karate Kid: Legends",
  impactCategory: "Category: Web Banner Ad / Website Takeover · Los Angeles American Advertising Awards",
  contributions: [
    "Initial experience design",
    "Initial build / design development",
    "Experience architecture",
    "UX design",
    "Interaction design",
    "Game mechanics",
    "Gameplay behaviors",
    "Controls",
    "Scoring + feedback",
    "Game progression",
    "Success / failure logic",
    "Completion + reward states",
    "Desktop UX",
    "Mobile UX",
    "Responsive interaction design",
    "Visual design",
    "Background imagery",
    "Production asset creation",
    "Asset preparation",
    "Sprite / animation asset preparation",
    "Design Technology collaboration",
    "Presale design",
    "Early production development",
    "Continued production with Creative Studio Design + Design Technology",
  ],
  images: {
    desktopExpanded: {
      src: "/media/karate-kid/desktop-expanded.jpg",
      alt: "Original April 2025 desktop concept: expanded IMDb Video Wall+ for Karate Kid: Legends above the homepage video rail.",
    },
    desktopCollapsed: {
      src: "/media/karate-kid/desktop-collapsed.jpg",
      alt: "Original April 2025 desktop concept: collapsed Video Wall+ treatment with Book Tickets still present in the header.",
    },
    gameSelect: {
      src: "/media/karate-kid/game-select.jpg",
      alt: "Game-select state with Precision, Balance, and Memory. Balance and Memory are inactive until the player completes the earlier challenges.",
    },
    precisionIntro: {
      src: "/media/karate-kid/precision-intro.jpg",
      alt: "Precision intro: Mr. Han on the garden path with the line about building kung fu into karate.",
    },
    precisionPlay: {
      src: "/media/karate-kid/precision-play.jpg",
      alt: "Precision gameplay: dummy with a highlighted target, left/right block controls, timer, score, and miss count.",
    },
    precisionWin: {
      src: "/media/karate-kid/precision-win.jpg",
      alt: "Precision success state: bonsai reward with the line the tree grows stronger.",
    },
    precisionLose: {
      src: "/media/karate-kid/precision-lose.jpg",
      alt: "Precision failure state: replay control beside Mr. Han, with Li Fong still present on the right.",
    },
    balanceIntro: {
      src: "/media/karate-kid/balance-intro.jpg",
      alt: "Balance intro: Mr. Miyagi with the line about building kung fu into karate for the second challenge.",
    },
    balancePlay: {
      src: "/media/karate-kid/balance-play.jpg",
      alt: "Balance gameplay: black ball on a wooden stick, tilt left/right controls, timer, and out-count.",
    },
    balanceWin: {
      src: "/media/karate-kid/balance-win.jpg",
      alt: "Balance success state: headband reward with the line let’s make a karate kid.",
    },
    balanceLose: {
      src: "/media/karate-kid/balance-lose.jpg",
      alt: "Balance failure state: replay control with Mr. Han and the city skyline behind the unit.",
    },
    sourceHands: {
      src: "/media/karate-kid/source-hands.png",
      alt: "Wireframe hands I created: open and two-finger poses prepared for interaction states.",
    },
    handSprite: {
      src: "/media/karate-kid/hand-sprite.png",
      alt: "Hand-pose sprite strip I created: a sequence of open, pointing, and angled hands for interaction and animation states.",
    },
    memoryIntro: {
      src: "/media/karate-kid/memory-intro.jpg",
      alt: "Memory intro: Mr. Miyagi with Memory selected and the line two branches, one tree.",
    },
    memoryRemember: {
      src: "/media/karate-kid/memory-remember.jpg",
      alt: "Memory instruction state: remember these letters, with Shift and Alt shown once.",
    },
    memoryCorrect: {
      src: "/media/karate-kid/memory-correct.jpg",
      alt: "Memory correct response: kick silhouette with a green confirmation ring.",
    },
    memoryIncorrect: {
      src: "/media/karate-kid/memory-incorrect.jpg",
      alt: "Memory incorrect response: kick silhouette with a red miss ring and the miss count incremented.",
    },
    memoryWin: {
      src: "/media/karate-kid/memory-win.jpg",
      alt: "Memory success state: headband reward with the line remember what you are fighting for.",
    },
    memoryLose: {
      src: "/media/karate-kid/memory-lose.jpg",
      alt: "Memory failure state: replay control with Mr. Han and Mr. Miyagi beside Li Fong.",
    },
    celebrationKick: {
      src: "/media/karate-kid/celebration-kick.jpg",
      alt: "All-three-games complete: celebration transition with a kick silhouette across the Karate Kid: Legends title.",
    },
    celebrationBelt: {
      src: "/media/karate-kid/celebration-belt.jpg",
      alt: "All-three-games complete: celebration with the earned headband over the title.",
    },
    mobileSelectPrecision: {
      src: "/media/karate-kid/mobile-select-precision.jpg",
      alt: "Mobile Video Wall+: inline sponsored unit, game select, and Precision with thumb-side controls.",
    },
    mobileBalanceMemory: {
      src: "/media/karate-kid/mobile-balance-memory.jpg",
      alt: "Mobile Video Wall+: Balance, Memory, and the all-three-complete reward on stacked phone frames.",
    },
    studioDummy: {
      src: "/media/karate-kid/studio-dummy.jpg",
      alt: "Wooden dummy I created as source art for the Precision challenge.",
    },
    studioBall: {
      src: "/media/karate-kid/studio-ball.jpg",
      alt: "Balance ball I created as source art for the Balance challenge.",
    },
    studioStick: {
      src: "/media/karate-kid/studio-stick.jpg",
      alt: "Wooden staff I created as source art for the Balance challenge.",
    },
    keyArt: {
      src: "/media/karate-kid/film-key-art.jpg",
      alt: "Public film key art for Karate Kid: Legends, used here only as final-campaign context.",
    },
  },
};

export const teamStatusCase = {
  problem:
    "Engineering work ran through three AI coding collaborators in parallel sessions — not one assistant switching contexts, but three independent agents, each holding its own thread, each able to open pull requests and make judgment calls in its lane. That setup is fast. The failure mode is obvious: without a shared source of truth, the founder becomes the router. Every status update, every “is this actually done,” every merge conflict and stalled thread has to pass through one person relaying context between conversations that cannot see each other.",
  principle:
    "The fix was not a better meeting cadence. It was removing the founder from the loop as the carrier of routine status, while keeping him as the one decision-maker for anything that is actually ambiguous, risky, or irreversible.",
  origin:
    "The system was not designed up front. It was pulled into existence by a specific failure: all three collaborators were editing shared sections of one status file, and their edits kept colliding — three merge conflicts in a single week. The constraint that ended the conflicts was structural: each collaborator owns a named block, and no one edits another’s block, ever. Git cannot conflict on lines that only one author ever touches.",
  experiment:
    "A second experiment ran in parallel: for one day, two collaborators had standing authority to merge their own verified pull requests, to see whether that sped things up without raising risk. It was used once, on a docs-only change, and expired on schedule. The standing rule since: collaborators open and fully verify their own pull requests; the founder reviews and merges.",
  worksIntro:
    "The system is two documents with deliberately different jobs, plus a small set of standing rules that tell collaborators when they can act alone and when they must stop.",
  parts: [
    {
      title: "A live dashboard",
      body: "One file, one section per collaborator, each holding exactly three bullets: what I’m doing right now, what I need a decision on, and what’s ready for review. It is overwritten, not appended, so it stays readable in under a minute. The founder reads it at set check-in points rather than continuously.",
    },
    {
      title: "An append-only record",
      body: "Every finding, decision, and incident gets a permanent, timestamped entry: what was found, what was decided, and why. The dashboard says what is true right now. This file says how it got that way. Nothing is deleted from it.",
    },
    {
      title: "Standing permissions, scoped tightly",
      body: "Collaborators may trigger routine deploys on their own judgment, and may contact a vendor’s support line when genuinely stuck — with a disclosure requirement every time, and hard boundaries: no public-facing communication, nothing that commits to cost, nothing beyond a one-day experiment without renewal. Default to visibility, not permission.",
    },
    {
      title: "One true escalation rule",
      body: "Anything a collaborator cannot resolve goes under its own “needs a decision” bullet, and work continues on everything else in that queue. The only thing that interrupts the founder directly, outside the check-in cadence, is active, ongoing harm — a live security exposure or data loss, not a routine blocker.",
    },
  ],
  caught: [
    {
      title: "Reported “merged” did not mean “live.”",
      body: "A change landed on the main branch and was marked done, but a separate deploy step failed silently because of an expired credential. Because the followups record exists, the gap between merged and deployed was caught and logged rather than assumed away.",
    },
    {
      title: "An outside reviewer’s findings were reconciled, not just filed.",
      body: "When an external engineer independently audited the codebase, the list was logged as an input, checked item-by-item against what was already fixed versus still open, and only then turned into tasks with an owner and a recorded decision.",
    },
    {
      title: "A credential-rotation pattern got noticed instead of re-explained.",
      body: "When two collaborators hit expired tokens on the same day in back-to-back weeks, that was flagged as a pattern worth investigating — not treated as two unrelated annoyances.",
    },
    {
      title: "Risky one-day exceptions stayed one-day.",
      body: "Because the current rule is explicit and dated, a temporary loosening of process did not quietly become the new normal.",
    },
  ],
  why: [
    "This is not a story about AI writing code. It is a story about designing the operating system that lets multiple autonomous agents work in parallel without a human becoming the bottleneck — and about the judgment calls that process required: when to let agents act without asking, when to force a stop, how to keep a record that survives tool turnover, and how to recover when a convention turned out to be wrong.",
    "That is a product-management and engineering-leadership skill, not a coding one. It shows process written as a spec rather than a memo — the file is the enforcement mechanism — plus reversible experimentation, a bias toward keeping people moving, and a clean split between what is true now and why it is true. For anyone evaluating whether someone can run point on a multi-agent or multi-contractor engineering effort, this is direct evidence, not a claim.",
  ],
  snapshotNote:
    "The live files contain open findings, private pull-request numbers, and account detail that do not belong in a public portfolio. What follows is the same structure with that detail replaced by placeholders — the mechanism, not a map of the live codebase.",
  followupsNote:
    "The companion followups log is simpler in shape: one dated, append-only entry per finding or decision, each stating what was found, what was decided, and why — never edited after the fact, only added to.",
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
