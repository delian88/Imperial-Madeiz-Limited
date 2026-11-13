import type { NewProject, NewInsight } from "./schema";

export const COMPANY_INFO = {
  name: "Imperial Madeiz Limited",
  shortName: "IMPERIAL MADEIZ",
  legalAliases: ["Imperial Madeiz Ltd", "Medeiz Limited"],
  tagline: "Master-Planned Smart Cities, Design & Contracting Experts",
  flagshipProject: "Alkebulan City Ghana Development Project",
  founder: {
    name: "Dr. Delorn Madeiz",
    role: "Founder & Chief Executive Officer (CEO)",
    image: "/images/delorn-madeiz-hd.jpg",
    caption:
      "Dr. Delorn Madeiz, Founder and CEO of Imperial Madeiz Ltd, addressing the gathering at the ground-breaking ceremony at Agave-Dzebetato.",
    quote:
      "Job creation is at the heart of our mission; the city is envisioned to be a vibrant hub of economic activity, stimulating local businesses and generating over two million jobs and 2,000 start-up small and medium enterprises in Ghana and across Africa, through the development of a 24-hour economy in various ways within the city.",
  },
  executiveDirector: {
    name: "Mrs. Anael Madeiz",
    role: "Executive Director",
    quote:
      "The project signifies the foundation for innovation, growth and opportunities for the benefit of generations yet unborn and rapid progress in Ghana and Africa.",
  },
  locations: {
    ghanaProjectSite:
      "Agave-Dzebetato, South Tongu District, Volta Region, Ghana (2,000+ Acre Master Site)",
    nigeriaCorporateOffice: "Badore Road, Lekki, Lagos State, Nigeria",
    regionalConsortium:
      "Ghana • Nigeria • Togo • Benin • Côte d’Ivoire",
  },
  phones: ["+234 80 99 99 59 97", "+234 70 25 00 27 99"],
  email: "info@imperialmadeiz.com",
  website: "http://imperialmadeizltd.com.ng",
  youtubeChannel: "https://www.youtube.com/@imperialmadeiz1804",
  videos: [
    {
      id: "XUAvEAaFru4",
      title: "Alkebulan City Ghana Overview — Vision 2030",
      subtitle: "Official Smart City Masterplan & Architectural Vision",
      thumbnail: "/images/yt-thumb-overview.jpg",
      url: "https://www.youtube.com/watch?v=XUAvEAaFru4",
      embedUrl: "https://www.youtube.com/embed/XUAvEAaFru4",
      description:
        "Comprehensive Vision 2030 overview of the multi-billion-dollar Alkebulan City Ghana Development Project spanning over 2,000 acres at Agave-Dzebetato in the South Tongu District, Volta Region.",
    },
    {
      id: "MTyU1U1LeTc",
      title: "Join the Alkebulan City Ghana Development Project!",
      subtitle: "Diaspora, Investor & West African EPC Call to Action",
      thumbnail: "/images/yt-thumb-join.jpg",
      url: "https://www.youtube.com/watch?v=MTyU1U1LeTc",
      embedUrl: "https://www.youtube.com/embed/MTyU1U1LeTc",
      description:
        "Imperial Madeiz Limited invites global partners, African diaspora investors, and regional contractors across Ghana, Nigeria, Togo, Benin, and Côte d'Ivoire to build Africa's premier 24-hour smart city.",
    },
  ],
  keyStats: [
    { value: "2,000+", label: "Acres Master-Planned Land", suffix: "Acres" },
    { value: "5,000,000", label: "Habitat Capacity Vision", suffix: "Habitats" },
    { value: "2,000,000+", label: "Direct & Indirect Jobs Projected", suffix: "Jobs" },
    { value: "509,000+", label: "Family Housing Units Planned", suffix: "Units" },
    { value: "2,000+", label: "Start-Up SMEs Incubated", suffix: "SMEs" },
    { value: "60%", label: "Local Workforce Recruitment (of 5,000 Site Workers)", suffix: "Local" },
  ],
  stakeholders: [
    {
      name: "Dr. Delorn Madeiz",
      role: "Founder & Chief Executive Officer, Imperial Madeiz Ltd",
      category: "Executive Leadership",
      statement:
        "The city will be in an environmentally friendly ambience where business will flourish and the youth will find lucrative jobs, standing out as a catalyst to development in Africa.",
    },
    {
      name: "Mrs. Anael Madeiz",
      role: "Executive Director, Imperial Madeiz Ltd",
      category: "Executive Leadership",
      statement:
        "This project signifies the foundation for innovation, growth and opportunities for the benefit of generations yet unborn and rapid progress in Ghana and Africa.",
    },
    {
      name: "Togbega Gadagbe Hlitabo IV",
      role: "Paramount Chief of Agave Traditional Area",
      category: "Traditional Authority",
      statement:
        "Pledged keen community monitoring and support to ensure timely completion while guaranteeing local participation in building the modern city.",
    },
    {
      name: "Torgbui Kavi VI & Tator Seshie",
      role: "Clan Leaders of Agave-Dzebetato",
      category: "Traditional Authority",
      statement:
        "Welcomed the Alkebulan City project as historic news that will lift Agave-Dzebetato and the South Tongu District to greater heights of progress.",
    },
    {
      name: "Hon. Victoria Dzeklo",
      role: "Presiding Member, South Tongu District Assembly",
      category: "Government & Assembly",
      statement:
        "Appealed to the community to uphold peace and unity for the smooth progress and resounding success of the modern city project.",
    },
    {
      name: "Hon. Peter Doe Newton",
      role: "Assembly Member, Agave-Dzebetato Electoral Area",
      category: "Government & Assembly",
      statement:
        "Urged residents to support the project wholeheartedly, protect the site, and maintain cordial ties between the community and contractors.",
    },
    {
      name: "CEO, BlueGates Global",
      role: "Strategic Real Estate Partner (Nigeria & West Africa)",
      category: "Consortium Partner",
      statement:
        "This is a game-changing project that will house over 509,000 families and create over two million jobs—a landmark initiative uniting government, private sector, and traditional rulers.",
    },
  ],
};

export const INITIAL_PROJECTS: NewProject[] = [
  {
    slug: "alkebulan-city-master-plan",
    title: "Alkebulan City Master Plan",
    subtitle: "2,000+ Acre 24-Hour Smart City at Agave-Dzebetato",
    category: "city-marks",
    categoryLabel: "City Marks",
    location: "Agave-Dzebetato, South Tongu District, Volta Region, Ghana",
    acreage: "2,000+ Acres",
    capacity: "5,000,000 Habitats / 509,000+ Families",
    completionTarget: "2030 (5-Year Master Execution)",
    clientOrPartner: "Imperial Madeiz Limited & West African EPC Consortium",
    heroImage: "/images/agave-groundbreaking-1.jpg",
    galleryImages: [
      "/images/agave-groundbreaking-1.jpg",
      "/images/delorn-madeiz-hd.jpg",
      "/images/agave-groundbreaking-2.jpg",
      "/images/agave-groundbreaking-3.jpg",
      "/images/agave-groundbreaking-4.jpg",
      "/images/hero-slide-1.webp",
    ],
    summary:
      "Flagship multi-billion-dollar private smart city project spanning over 2,000 acres in the Volta Region of Ghana, integrating residential, commercial, aviation, healthcare, education, and industrial zones.",
    description:
      "Spearheaded by Imperial Madeiz Limited under Founder & CEO Dr. Delorn Madeiz and Executive Director Mrs. Anael Madeiz, the Alkebulan City Ghana Development Project at Agave-Dzebetato is designed as a self-sustaining 24-hour economic metropolis. Executed by construction firms from Ghana, Nigeria, Togo, Benin, and Côte d’Ivoire—with 60% of the initial 5,000 site workforce recruited locally—the city is engineered to generate over 2 million jobs, incubate 2,000+ start-up SMEs, curb rural-urban and perilous youth migration, and catalyse regional integration across West Africa.",
    highlights: [
      "Over 2,000 acres of master-planned, environmentally friendly smart urban infrastructure",
      "Capacity for 5 million habitats and over 509,000 family housing units",
      "Executed by a 5-nation West African EPC consortium (Ghana, Nigeria, Togo, Benin, Côte d'Ivoire)",
      "60% local community workforce recruitment policy across 5,000+ construction roles",
      "24-hour economy blueprint generating 2,000,000+ jobs and 2,000+ SME start-ups",
    ],
    metrics: [
      { label: "Total Land Area", value: "2,000+ Acres" },
      { label: "Habitat Capacity", value: "5 Million" },
      { label: "Job Creation", value: "2,000,000+" },
      { label: "Target Inauguration", value: "2030" },
    ],
    featured: true,
    sortOrder: 1,
  },
  {
    slug: "seven-star-hotel-and-conference-centre",
    title: "Alkebulan 7-Star Hotel & Grand Conference Centre",
    subtitle: "Ultra-Luxury Hospitality & Pan-African Diplomatic Summit Hub",
    category: "corporate-buildings",
    categoryLabel: "Corporate Buildings",
    location: "Central Diplomatic District, Alkebulan City, Agave-Dzebetato",
    acreage: "120 Acres",
    capacity: "1,200 Luxury Suites & 5,000-Seat Plenary Hall",
    completionTarget: "2029",
    clientOrPartner: "Imperial Madeiz Hospitality Division",
    heroImage: "/images/project-novaro.webp",
    galleryImages: [
      "/images/project-novaro.webp",
      "/images/hero-slide-2.webp",
      "/images/project-ecowas.webp",
    ],
    summary:
      "An iconic seven-star hospitality landmark and international grand conference centre designed to host heads of state, global investment summits, and luxury tourism in the Volta Region.",
    description:
      "As highlighted by Dr. Delorn Madeiz at the Agave-Dzebetato ground-breaking ceremony, Alkebulan City features a signature Seven-Star Hotel alongside a Grand Conference Centre. Designed with sustainable bioclimatic facades, sky-gardens, presidential diplomatic suites, and state-of-the-art plenary auditoriums, this complex positions the South Tongu District as West Africa's premier destination for international conventions, ECOWAS trade forums, and diaspora investment summits.",
    highlights: [
      "Seven-star architectural design with panoramic Volta River basin views",
      "5,000-capacity Grand Conference Centre with simultaneous interpretation suites",
      "Direct VIP transit link to the Alkebulan Private Jet Aerodrome",
      "24-hour luxury hospitality, fine dining, and wellness resort amenities",
    ],
    metrics: [
      { label: "Star Rating", value: "7-Star Luxury" },
      { label: "Conference Capacity", value: "5,000 Delegates" },
      { label: "Operations", value: "24/7 Economy" },
      { label: "Zone", value: "Diplomatic Core" },
    ],
    featured: true,
    sortOrder: 2,
  },
  {
    slug: "alkebulan-smart-residential-estates",
    title: "Alkebulan Executive & Family Residential Estates",
    subtitle: "509,000+ Smart Housing Units for Diaspora & Local Families",
    category: "residential",
    categoryLabel: "Residential",
    location: "North & East Residential Sectors, Agave-Dzebetato",
    acreage: "850 Acres",
    capacity: "509,000+ Family Housing Units",
    completionTarget: "2028–2030 (Phased Delivery)",
    clientOrPartner: "Imperial Madeiz Ltd & BlueGates Global",
    heroImage: "/images/project-villa.webp",
    galleryImages: [
      "/images/project-villa.webp",
      "/images/alkebulan-housing-render.jpg",
      "/images/project-estate.webp",
      "/images/project-view-apt.webp",
    ],
    summary:
      "Master-planned sustainable residential neighbourhoods delivering over 509,000 housing units—from luxury diaspora villas to affordable smart apartments.",
    description:
      "Developed in strategic collaboration with West African real estate leaders including BlueGates Global, the Alkebulan Residential Sector addresses Ghana's urban housing deficit while decongesting Accra. Featuring solar-integrated roofs, underground fiber-optic utilities, green pedestrian corridors, and community recreational parks, the estates provide a welcoming bridge for Africans in the diaspora returning home as well as modern housing for local families.",
    highlights: [
      "Over 509,000 housing units across executive villas, townhouses, and smart high-rises",
      "Designed to decongest Accra and reverse rural-urban youth migration",
      "100% solar-assisted microgrid and smart water recycling infrastructure",
      "Dedicated diaspora homecoming investment packages and flexible off-plan ownership",
    ],
    metrics: [
      { label: "Housing Units", value: "509,000+" },
      { label: "Master Zone", value: "850 Acres" },
      { label: "Energy", value: "Clean Smart Grid" },
      { label: "Partner", value: "BlueGates Global" },
    ],
    featured: true,
    sortOrder: 3,
  },
  {
    slug: "teaching-hospital-and-heliport",
    title: "Alkebulan Teaching Hospital & Helicopter Emergency Hub",
    subtitle: "Quaternary Medical Complex with 24/7 Air Ambulance Operations",
    category: "corporate-buildings",
    categoryLabel: "Corporate Buildings",
    location: "Health & Life Sciences Precinct, Agave-Dzebetato",
    acreage: "140 Acres",
    capacity: "1,500 Beds & Rooftop Medevac Heliport",
    completionTarget: "2029",
    clientOrPartner: "Imperial Madeiz Healthcare & Medical Sciences",
    heroImage: "/images/project-ministry.webp",
    galleryImages: [
      "/images/project-ministry.webp",
      "/images/hero-slide-3.webp",
      "/images/agave-groundbreaking-2.jpg",
    ],
    summary:
      "Ultramodern teaching hospital equipped with dedicated helicopter emergency medical services (HEMS), biomedical research labs, and specialist surgical centres.",
    description:
      "A cornerstone of the Alkebulan City master plan announced in Graphic Online and AdomOnline is a world-class Teaching Hospital integrated with a 24-hour Helicopter Emergency Service. Linked directly to the city's University Medical School, the facility provides rapid air-ambulance response across the Volta Region and West African corridor, eliminating the need for medical tourism abroad.",
    highlights: [
      "Dedicated rooftop and ground Helicopter Emergency Medical Services (HEMS)",
      "Teaching hospital affiliated with Alkebulan University College of Health Sciences",
      "Advanced diagnostics, cardiology, oncology, and telemedicine command centre",
      "Pharmaceutical research and nutraceutical manufacturing integration",
    ],
    metrics: [
      { label: "Emergency Response", value: "24/7 Air Medevac" },
      { label: "Bed Capacity", value: "1,500 Beds" },
      { label: "Training", value: "Teaching Hospital" },
      { label: "Coverage", value: "West Africa" },
    ],
    featured: true,
    sortOrder: 4,
  },
  {
    slug: "private-jet-aerodrome-aviation-hub",
    title: "Alkebulan Private Jet Aerodrome & Mini-Airport",
    subtitle: "Executive Aviation Terminal & Regional Air Logistics Corridor",
    category: "city-marks",
    categoryLabel: "City Marks",
    location: "Aviation & Logistics Zone, Agave-Dzebetato",
    acreage: "280 Acres",
    capacity: "Executive Jet Runway, FBO Terminal & Heli-Hub",
    completionTarget: "2030",
    clientOrPartner: "Imperial Madeiz Aviation & Infrastructure",
    heroImage: "/images/hero-slide-1.webp",
    galleryImages: [
      "/images/hero-slide-1.webp",
      "/images/project-nun-street.webp",
      "/images/agave-groundbreaking-3.jpg",
    ],
    summary:
      "Dedicated aerodrome and mini-airport engineered for private jets, diplomatic aircraft, air cargo, and regional commuter flights into the Volta Region.",
    description:
      "To connect Agave-Dzebetato seamlessly with Accra, Lagos, Lomé, Cotonou, Abidjan, and global financial capitals, Alkebulan City incorporates a dedicated aerodrome for private jets and regional aircraft. Complete with a Fixed-Base Operator (FBO) VIP terminal, customs clearance lounge, maintenance hangars, and high-speed arterial road links to the Central Business District.",
    highlights: [
      "Purpose-built runway and apron for private business jets and regional aircraft",
      "Direct air corridor connecting Ghana, Nigeria, Togo, Benin, and Côte d'Ivoire",
      "VIP diplomatic lounge and fast-track executive customs facility",
      "Integrated air-freight logistics supporting the 24-hour industrial zone",
    ],
    metrics: [
      { label: "Facility Type", value: "Private Jet Aerodrome" },
      { label: "Corridor", value: "ECOWAS 5-Nation" },
      { label: "Operations", value: "24-Hour FBO" },
      { label: "Land Area", value: "280 Acres" },
    ],
    featured: true,
    sortOrder: 5,
  },
  {
    slug: "university-vocational-college-campus",
    title: "Alkebulan University & Technical Vocational College",
    subtitle: "Cradle-to-University Academic & Industrial Skills Precinct",
    category: "auditorium",
    categoryLabel: "Auditorium",
    location: "Education & Innovation Zone, Agave-Dzebetato",
    acreage: "210 Acres",
    capacity: "35,000 Students (Crèche to University & TVET)",
    completionTarget: "2028",
    clientOrPartner: "Imperial Madeiz Education Foundation",
    heroImage: "/images/project-neelds.webp",
    galleryImages: [
      "/images/project-neelds.webp",
      "/images/project-jabi.jpg",
      "/images/agave-groundbreaking-4.jpg",
    ],
    summary:
      "Comprehensive educational ecosystem spanning ultramodern schools from crèche to university level alongside a hands-on Vocational & Technical College.",
    description:
      "Empowering African youth with future-ready skills is central to Dr. Delorn Madeiz's vision. The Education Precinct combines an international research University, a specialised Vocational & Technical College (TVET), and K-12 smart schools. Graduates transition directly into the 2,000+ SME start-ups and high-tech industrial zones within Alkebulan City.",
    highlights: [
      "Full educational continuum from Crèche to University and Postgraduate research",
      "Dedicated Vocational College training youth in engineering, construction, and digital trades",
      "2,500-seat Academic Auditorium and Startup Incubator for 2,000+ SMEs",
      "Student residential halls, digital library, and STEM innovation laboratories",
    ],
    metrics: [
      { label: "Student Capacity", value: "35,000+" },
      { label: "SME Incubator", value: "2,000+ Startups" },
      { label: "Scope", value: "Crèche to University" },
      { label: "Focus", value: "STEM & TVET" },
    ],
    featured: true,
    sortOrder: 6,
  },
  {
    slug: "sports-academy-and-international-stadium",
    title: "Alkebulan Sports Academy & Multi-Purpose Stadium",
    subtitle: "Olympic-Standard Athletic Training & 40,000-Seat Arena",
    category: "auditorium",
    categoryLabel: "Auditorium",
    location: "Sports & Recreation Boulevard, Agave-Dzebetato",
    acreage: "160 Acres",
    capacity: "40,000-Seat Stadium & Residential Sports Academy",
    completionTarget: "2029",
    clientOrPartner: "Imperial Madeiz Sports & Youth Development",
    heroImage: "/images/project-ambassador.jpg",
    galleryImages: [
      "/images/project-ambassador.jpg",
      "/images/project-estate.webp",
      "/images/agave-groundbreaking-1.jpg",
    ],
    summary:
      "World-class sports stadium, youth athletic academy, and recreational complex designed to nurture African sporting talent and host international tournaments.",
    description:
      "Featuring a modern all-seater stadium, FIFA-standard training pitches, aquatic centre, indoor arena, and sports medicine clinic, the Alkebulan Sports Academy provides youth across Ghana and West Africa with professional athletic pathways, sports science education, and global showcase events.",
    highlights: [
      "Multi-purpose stadium for international football, athletics, and cultural festivals",
      "Full-board residential Youth Sports Academy with academic curriculum",
      "Olympic swimming complex, tennis courts, and sports rehabilitation centre",
      "Surrounding public recreational parks and waterfront leisure trails",
    ],
    metrics: [
      { label: "Arena Capacity", value: "40,000 Seats" },
      { label: "Academy", value: "Youth Elite" },
      { label: "Facilities", value: "Olympic Standard" },
      { label: "Zone", value: "160 Acres" },
    ],
    featured: true,
    sortOrder: 7,
  },
  {
    slug: "cyber-security-energy-and-mall-complex",
    title: "24-Hour Grand Shopping Mall, Cyber Hub & Energy Plant",
    subtitle: "Commercial Heart, Digital Defense & Independent Power Infrastructure",
    category: "city-marks",
    categoryLabel: "City Marks",
    location: "Central Business & Industrial Zone, Agave-Dzebetato",
    acreage: "240 Acres",
    capacity: "500+ Retail Outlets, Tier-IV Data Hub & Clean Energy Plant",
    completionTarget: "2029",
    clientOrPartner: "Imperial Madeiz Commercial & Technology Division",
    heroImage: "/images/alkebulan-energy-industrial.jpg",
    galleryImages: [
      "/images/alkebulan-energy-industrial.jpg",
      "/images/project-view-apt.webp",
      "/images/project-nun-street.webp",
    ],
    summary:
      "The commercial and technological engine of Alkebulan City—combining a 24-hour international shopping mall, a regional Cyber Security Centre, and dedicated energy plants.",
    description:
      "Designed to power a true 24-hour economy, this integrated district houses the Alkebulan Grand Shopping Mall, a sovereign-grade Cyber Security & Data Centre protecting smart city operations, and dedicated hybrid energy plants ensuring uninterrupted power for industries, residences, and commercial enterprises.",
    highlights: [
      "24-Hour Grand Shopping Mall, entertainment multiplex, and trade exhibition plazas",
      "State-of-the-art Cyber Security Centre and Tier-IV cloud infrastructure hub",
      "Dedicated clean & hybrid Energy Plants guaranteeing zero-downtime power",
      "Light industrial park and Pan-African cultural centre",
    ],
    metrics: [
      { label: "Commercial Mode", value: "24-Hour Economy" },
      { label: "Tech Core", value: "Cyber Security Hub" },
      { label: "Power", value: "Dedicated Energy Plant" },
      { label: "Retail", value: "500+ Stores" },
    ],
    featured: true,
    sortOrder: 8,
  },
];

export const INITIAL_INSIGHTS: NewInsight[] = [
  {
    slug: "modern-city-project-takes-off-at-agave-dzebetato",
    title: "Modern city project takes off at Agave-Dzebetato",
    subtitle:
      "Multi-million-dollar Alkebulan City Ghana project covering 2,000+ acres breaks ground in the South Tongu District, Volta Region",
    category: "Official Press & Groundbreaking",
    sourceName: "Graphic Online (Daily Graphic Ghana)",
    sourceUrl:
      "https://www.graphic.com.gh/news/general-news/ghana-news-modern-city-project-takes-off-at-agave-dzebetato.html",
    author: "Graphic Online Reporter",
    publishedAt: "March 2025",
    coverImage: "/images/delorn-madeiz-graphic.jpg",
    imageCaption:
      "Dr Delorn Madeiz, CEO of Imperial Madeiz Ltd, addressing the gathering at Agave-Dzebetato",
    galleryImages: [
      {
        url: "/images/delorn-madeiz-hd.jpg",
        caption:
          "Dr Delorn Madeiz, CEO of Imperial Madeiz Ltd, addressing the gathering at the ground-breaking ceremony at Agave-Dzebetato.",
      },
      {
        url: "/images/agave-groundbreaking-1.jpg",
        caption:
          "Traditional rulers, dignitaries, and Imperial Madeiz leadership at the Agave-Dzebetato sod-cutting ceremony.",
      },
      {
        url: "/images/agave-groundbreaking-2.jpg",
        caption:
          "Community celebration and stakeholder gathering in the South Tongu District, Volta Region.",
      },
    ],
    youtubeVideoId: "XUAvEAaFru4",
    excerpt:
      "A private modern city project, covering more than 2,000 acres, including residential and business areas, a university, vocational college, teaching hospital, sports academy, and a shopping mall, has taken off at Agave-Dzebetato, in the South Tongu District in the Volta Region.",
    bodyParagraphs: [
      "A private modern city project, covering more than 2,000 acres, including residential and business areas, a university, vocational college, teaching hospital, sports academy, and a shopping mall, has taken off at Agave-Dzebetato, in the South Tongu District in the Volta Region.",
      "The city will also have an aerodrome for private jets, a grand conference centre, a stadium, a seven-star hotel, and recreational facilities when completed, as well as other facilities.",
      "The multi-million-dollar Alkebulan City Ghana project, which is expected to be completed in five years, will significantly help curb rural-urban migration among the youth and help improve the quality of life in the area and the economy of Ghana, as well as sister African countries, and vigorously promote national and regional integration.",
      "The Founder and Chief Executive Officer (CEO) of the project implementing group, Imperial Madeiz Ltd, Dr Delorn Madeiz, at the ground-breaking ceremony amid pomp and celebration at Agave-Dzebetato last Friday, said the city would have a capacity for five million habitats.",
      "He expressed gratitude to the traditional rulers of the area for willingly donating land for the project, saying that was a positive step to serve humanity and promote progress.",
      "Dr Madeiz said the city would be in an environmentally friendly ambience where business would flourish and the youth would find lucrative jobs, and stand out as a catalyst to development in Africa.",
      "He said the project was being executed by construction firms from Ghana, Nigeria, Togo, Benin and Cote d’Ivoire and gave an assurance that 60 per cent of the 5,000 workers would be recruited locally.",
      "“Job creation is at the heart of our mission, the city is envisioned to be a vibrant hub of economic activity, stimulating local businesses and generating over two million jobs and 2,000 start-up small and medium enterprises in Ghana and across Africa, through the development of a 24-hour economy in various ways within the city,” the CEO added.",
      "The Executive Director of the company, Mrs Anael Madeiz, said the project signified the foundation for innovation, growth and opportunities for the benefit of generations yet unborn and rapid progress in Ghana and Africa.",
      "Clan leaders of the area, Torgbui Kavi VI, and Tator Seshie, said the project was welcome news as it would lift the area to greater heights of progress.",
      "The Presiding Member of the South Tongu District Assembly, Victoria Dzeklo, appealed to the people to uphold the peace and avoid all chieftaincy and land disputes for the smooth progress and success of the project.",
      "The Assembly Member of the area, Peter Doe Newton, urged the people of the community to support the project in various ways and help to readily ward off miscreants from the project site. He pledged cordial ties between the community and the contractors.",
    ],
    keyQuotes: [
      {
        speaker: "Dr. Delorn Madeiz",
        role: "Founder & CEO, Imperial Madeiz Ltd",
        quote:
          "Job creation is at the heart of our mission, the city is envisioned to be a vibrant hub of economic activity, stimulating local businesses and generating over two million jobs and 2,000 start-up small and medium enterprises in Ghana and across Africa, through the development of a 24-hour economy in various ways within the city.",
      },
      {
        speaker: "Mrs. Anael Madeiz",
        role: "Executive Director, Imperial Madeiz Ltd",
        quote:
          "The project signifies the foundation for innovation, growth and opportunities for the benefit of generations yet unborn and rapid progress in Ghana and Africa.",
      },
    ],
    featured: true,
  },
  {
    slug: "private-investor-launches-multi-billion-dollar-alkebulan-modern-city-project",
    title:
      "Private investor launches multi-billion-dollar Alkebulan Modern City Project",
    subtitle:
      "Vision 2030 Smart City to house over 509,000 families, decongest Accra, and unite diaspora & West African contractors",
    category: "Regional Economic Impact",
    sourceName: "AdomOnline",
    sourceUrl:
      "https://www.adomonline.com/private-investor-launches-multi-billion-dollar-alkebulan-modern-city-project/",
    author: "AdomOnline News Desk",
    publishedAt: "May 2025",
    coverImage: "/images/agave-groundbreaking-1.jpg",
    imageCaption:
      "Ground-breaking ceremony of the multi-billion-dollar Alkebulan City Ghana Development Project at Agave-Dzebetato",
    galleryImages: [
      {
        url: "/images/agave-groundbreaking-1.jpg",
        caption: "Stakeholders and leadership at the Alkebulan City launch.",
      },
      {
        url: "/images/agave-groundbreaking-2.jpg",
        caption: "Traditional leaders and officials at Agave-Dzebetato.",
      },
      {
        url: "/images/agave-groundbreaking-3.jpg",
        caption: "Site inspection and ceremonial groundbreaking in South Tongu.",
      },
      {
        url: "/images/agave-groundbreaking-4.jpg",
        caption: "Delegation of West African contractors and community leaders.",
      },
    ],
    youtubeVideoId: "MTyU1U1LeTc",
    excerpt:
      "Imperial Madeiz Limited has launched the multi-billion-dollar Alkebulan City Ghana Development Project at Agave-Dzebetato, designed to house over 509,000 families, create 2 million jobs, and inaugurate in 2030.",
    bodyParagraphs: [
      "A private investment company, Imperial Madeiz Limited (Medeiz Limited), has launched a multi-billion-dollar project dubbed the Alkebulan City Ghana Development Project, aiming to promote development and drive the African continent’s economy in all sectors.",
      "The Project is situated at Agave-Dzebetato in the South Tongu District of the Volta Region and is expected to create some 2 million jobs, decongest the national capital, Accra, and promote industrialisation.",
      "The Alkebulan City Ghana Development Project sees a smart city constructed on a 2,000-acre land acquired in the countryside community. It is planned to have all the elements of a modern city, including an ultramodern school from crèche to university, a sporting facility, and a hospital with a helicopter emergency service.",
      "Others include a mini airport, industrial zone, energy plants, cultural centre, cyber security centre, hospitality facilities, and luxury residential apartments.",
      "The Founder of Imperial Madeiz Limited, Dr. Delorn Madeiz, said the project is designed to curb perilous migration to the Western world, aiming to contribute to building a self-reliant African continent: “I left Ghana when I was 10 years old and I lived in some kind of conditions that I don’t want my brothers to experience when they travel outside the country.”",
      "He said the project would serve as a conduit for other Africans in the diaspora to join in developing Ghana and Africa and ultimately contribute to raising the economy of the continent, while enhancing infrastructure development in the Volta Region.",
      "He added that a catalogue of contractors from the West African Sub-region would put their expertise to bear in developing the project, with support from partners across the globe: “We will officially inaugurate the project in 2030.”",
      "The Chief Executive Officer of BlueGates Global, a Nigerian Real Estate development firm, underscored that the project is a laudable one: “This is a project that will house over 509,000 families and over two million jobs, think about that. It is a project that should be given every support.”",
      "The Paramount Chief of Agave, Togbega Gadagbe Hlitabo IV, entreated the project coordinators to ensure its timely completion and pledged that traditional leaders would keenly monitor the project and ensure local participation.",
    ],
    keyQuotes: [
      {
        speaker: "Dr. Delorn Madeiz",
        role: "Founder & CEO, Imperial Madeiz Limited",
        quote:
          "This project will serve as a conduit for Africans in the diaspora to join in developing Ghana and Africa and ultimately contribute to raising the economy of the continent. We will officially inaugurate the project in 2030.",
      },
      {
        speaker: "CEO, BlueGates Global",
        role: "Real Estate Development Partner",
        quote:
          "This is a project that will house over 509,000 families and create over two million jobs—a game-changer for Ghana and West Africa.",
      },
    ],
    featured: true,
  },
  {
    slug: "the-new-era-in-ghanas-real-estate-and-smart-city-sector",
    title: "Building the Architecture of Future African Cities: The New Era in Ghana's Real Estate Sector",
    subtitle:
      "How Alkebulan City combines energy independence, cyber security, and regional EPC partnerships",
    category: "Architecture & Urbanism",
    sourceName: "Alkebulan City Ghana Publication",
    sourceUrl:
      "https://acghana.blogspot.com/2025/09/the-new-era-in-ghanas-real-estate-sector.html",
    author: "Imperial Madeiz Editorial Team",
    publishedAt: "September 2025",
    coverImage: "/images/alkebulan-energy-industrial.jpg",
    imageCaption:
      "Integrated industrial, energy, and smart residential master planning at Alkebulan City Ghana",
    galleryImages: [
      {
        url: "/images/alkebulan-energy-industrial.jpg",
        caption: "Dedicated energy and industrial infrastructure.",
      },
      {
        url: "/images/alkebulan-housing-render.jpg",
        caption: "Modern residential housing architecture.",
      },
    ],
    youtubeVideoId: "XUAvEAaFru4",
    excerpt:
      "With its ambitious scale and far-reaching impact, the Alkebulan City Ghana Development Project stands as a bold step toward redefining urban living in Ghana while boosting Africa’s economy across all sectors.",
    bodyParagraphs: [
      "Imperial Madeiz Limited, a private investment and development company, has commenced the Alkebulan City Ghana Development Project—a multi-billion-dollar initiative designed to transform Ghana into a hub of modern urbanization and economic growth.",
      "Situated on 2,000+ acres in Agave-Dzebetato within the South Tongu District, the project seeks to create over two million jobs and drive industrialization in Ghana while contributing to Africa’s self-reliance and global competitiveness.",
      "The Alkebulan City project envisions the construction of a state-of-the-art smart city featuring ultramodern infrastructure: schools from crèche to university level, sporting facilities, hospitals with helicopter emergency services, a mini-airport, industrial facilities, energy plants, cultural centers, cyber security hubs, and luxurious apartments.",
      "Backed by regional partners including BlueGates Global and EPC firms from Ghana, Nigeria, Togo, Benin, and Côte d'Ivoire, alongside traditional authority leadership under Togbega Gadagbe Hlitabo IV, Torgbui Kavi VI, and Tator Seshie, the development establishes a new benchmark for private-sector-led urban transformation in Africa.",
    ],
    keyQuotes: [
      {
        speaker: "Dr. Delorn Madeiz",
        role: "Founder & CEO, Imperial Madeiz Limited",
        quote:
          "This project is designed to promote Africa’s self-reliance and attract migration and investment from the Western world back to the continent.",
      },
    ],
    featured: true,
  },
];

