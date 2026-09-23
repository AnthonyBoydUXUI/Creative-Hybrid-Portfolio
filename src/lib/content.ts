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
    slug: "karate-kid-legends",
    title: "Karate Kid: Legends",
    subtitle: "Interactive Experience · IMDb Creative Studio × Sony Pictures",
    year: "April 2025",
    role: "Product / UX / Visual Design",
    client: "IMDb Creative Studio · Sony Pictures / Columbia Pictures",
    summary:
      "I worked on the initial design and build of the Karate Kid: Legends interactive experience at IMDb Creative Studio, developing the game mechanics, interaction system and supporting production assets alongside Design Technology before handing the project off for continued production.",
    thumbnail: "/media/karate-kid/game-select.jpg",
    thumbnailAlt:
      "Original April 2025 desktop concept: IMDb Video Wall+ with the Karate Kid: Legends training game select — Precision, Balance, and Memory.",
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
  finishedVideo: "https://vimeo.com/1147528182",
  finishedVideoEmbed: "https://player.vimeo.com/video/1147528182",
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
    { label: "Final campaign", value: "IMDb Creative Studio · 2025" },
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
    note: "Memory asked the player to remember a keyboard combination — shown once, then repeated. The frames below are from the April 2025 desktop build.",
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
  assetsLead:
    "The interactive unit needed production art that could change state — not only finished marketing frames. I prepared source objects and sprite frames for implementation, including studio-supplied 3D assets and original hand-pose art, then worked with Design Technology on what the build required.",
  collaboration:
    "The experience required close collaboration between design and Design Technology. I worked through the mechanics, states, visual behaviors, and supporting assets while partnering with Design Technology to translate the concept into an interactive experience that could live within IMDb’s advertising environment.",
  responsive:
    "Desktop used keyboard and a wider Video Wall+ canvas. Mobile kept the same Precision → Balance → Memory path with touch targets at the thumb edge, a tighter hierarchy, and the IMDb rail still in view — adapting the interaction model rather than shrinking the desktop layout.",
  handoff:
    "The experience continued to evolve after my handoff. The finished campaign retained the central Precision, Balance, and Memory training framework while the continuing IMDb Creative Studio team refined and completed the final execution.",
  timelineNote:
    "My work preceded the final production. I contributed to the initial experience design, gameplay mechanics, and supporting assets in April 2025. Following my handoff, IMDb Creative Studio continued developing and refining the campaign. The resulting experience was subsequently recognized with a Silver ADDY in 2026.",
  outcome:
    "I worked on the foundational experience, game mechanics, and production assets in April 2025, collaborating with Design Technology before the project transitioned to the continuing production team. IMDb Creative Studio subsequently evolved and completed the experience for its international campaign. The final production retained the core Precision, Balance, and Memory training structure documented in my original work. In 2026, the resulting campaign received a Silver ADDY at the Los Angeles American Advertising Awards.",
  impactIntro:
    "The figures below describe the finished campaign after handoff — published by IMDb Creative Studio, not as personal performance metrics.",
  impactStats: [
    { stat: "6", label: "Languages, launched simultaneously" },
    { stat: "10", label: "Countries across Europe and LATAM" },
    { stat: "3", label: "Training games in one system" },
  ],
  impactCountries:
    "UK, Spain, Mexico, Brazil, Germany, France, Netherlands, Switzerland, Austria, and Ireland",
  impactQuote: [
    "Launched our fully localized gamified experience simultaneously in 6 languages across 10 countries in the EU and LATAM (UK, Spain, Mexico, Brazil, Germany, France, Netherlands, Switzerland, Austria, and Ireland).",
    "Pairing addictive mini-games with rich character galleries and exclusive video content, it created a seamless bridge between interactive training and blockbuster hype, bringing discipline, focus, and a whole lot of “wax on, wax off” to fans worldwide.",
  ],
  impactSourceLabel: "IMDb Creative Studio — Karate Kid: Legends",
  publicFacts: [
    "Web and mobile Video Wall+ campaign",
    "Precision, Memory, and Balance training games",
    "Localized in 6 languages across 10 countries in the EU and LATAM",
    "Silver ADDY, 2026 Los Angeles American Advertising Awards",
    "Category: Web Banner Ad / Website Takeover",
  ],
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
    "Production asset creation",
    "Asset preparation",
    "Sprite / animation asset preparation",
    "Design Technology collaboration",
    "Presale design",
    "Early production development",
    "Production handoff",
  ],
  transparency:
    "This case study focuses on the original experience design, initial build, game mechanics, and production assets I contributed at IMDb Creative Studio in April 2025. I developed the experience in collaboration with Design Technology before handing the project off for continued production. The final campaign subsequently evolved through the broader IMDb Creative Studio team.",
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
      alt: "Original production source art: two wireframe hands in open and two-finger poses, prepared for interaction states.",
    },
    handSprite: {
      src: "/media/karate-kid/hand-sprite.png",
      alt: "Hand-pose sprite strip: a sequence of open, pointing, and angled hands prepared for interaction and animation states.",
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
      alt: "Studio-provided wooden dummy used as source art for the Precision challenge.",
    },
    studioBall: {
      src: "/media/karate-kid/studio-ball.jpg",
      alt: "Studio-provided leather ball used as source art for the Balance challenge.",
    },
    studioStick: {
      src: "/media/karate-kid/studio-stick.jpg",
      alt: "Studio-provided wooden staff used as source art for the Balance challenge.",
    },
    keyArt: {
      src: "/media/karate-kid/film-key-art.jpg",
      alt: "Public film key art for Karate Kid: Legends, used here only as final-campaign context.",
    },
  },
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
