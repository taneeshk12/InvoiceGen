// Niche professions data for programmatic SEO
export interface NicheData {
  slug: string;
  title: string;
  profession: string;
  description: string;
  benefits: string[];
  commonItems: string[];
  tips: string[];
  metaDescription: string;
  keywords: string[];
}

export const niches: NicheData[] = [
  // Creative Professionals
  {
    slug: 'photographer',
    title: 'Photographer',
    profession: 'Photography',
    description: 'Create professional invoices for your photography services, including shoots, editing, and licensing fees.',
    benefits: [
      'Track multiple shoots and sessions',
      'Include equipment rentals and travel expenses',
      'Add licensing and usage rights details',
      'Manage retainer and deposit payments'
    ],
    commonItems: [
      'Photography Session',
      'Photo Editing & Retouching',
      'Image Licensing Rights',
      'Equipment Rental',
      'Travel Expenses',
      'Print Services'
    ],
    tips: [
      'Clearly specify the number of edited photos included',
      'Define usage rights and licensing terms',
      'Include payment terms for deposits and final payments',
      'Add delivery timeline for final images'
    ],
    metaDescription: 'Free professional invoice template for photographers. Create detailed photography invoices with licensing terms, session fees, and editing charges.',
    keywords: ['photographer invoice', 'photography invoice template', 'photo shoot billing', 'photography business invoice']
  },
  {
    slug: 'lawyer',
    title: 'Lawyer',
    profession: 'Legal Services',
    description: 'Generate professional legal invoices with detailed time tracking, case references, and client billing information.',
    benefits: [
      'Hourly rate and billable hours tracking',
      'Case and matter number references',
      'Detailed service descriptions',
      'Retainer and trust account management'
    ],
    commonItems: [
      'Legal Consultation',
      'Document Review',
      'Court Appearance',
      'Legal Research',
      'Contract Drafting',
      'Case Preparation'
    ],
    tips: [
      'Include case or matter numbers for tracking',
      'Break down billable hours by activity',
      'Reference retainer agreements clearly',
      'Add trust account transaction details if applicable'
    ],
    metaDescription: 'Professional invoice template for lawyers and legal professionals. Track billable hours, case numbers, and legal services with ease.',
    keywords: ['lawyer invoice', 'legal invoice template', 'attorney billing', 'law firm invoice']
  },
  {
    slug: 'consultant',
    title: 'Consultant',
    profession: 'Consulting',
    description: 'Create detailed consulting invoices for your advisory services, projects, and strategic planning sessions.',
    benefits: [
      'Project-based or hourly billing',
      'Milestone tracking and payments',
      'Expense reimbursement tracking',
      'Recurring retainer invoices'
    ],
    commonItems: [
      'Consulting Services',
      'Strategic Planning Session',
      'Business Analysis',
      'Market Research',
      'Report Preparation',
      'Training & Workshops'
    ],
    tips: [
      'Reference project scope and deliverables',
      'Include milestone completion dates',
      'Detail any expenses requiring reimbursement',
      'Add payment terms for net 30 or net 60'
    ],
    metaDescription: 'Free consulting invoice template for business consultants. Create professional invoices for advisory services, projects, and retainer agreements.',
    keywords: ['consultant invoice', 'consulting invoice template', 'business consulting billing', 'advisor invoice']
  },
  // Design & Creative
  {
    slug: 'graphic-designer',
    title: 'Graphic Designer',
    profession: 'Graphic Design',
    description: 'Professional invoice templates for graphic design services, including logos, branding, and print materials.',
    benefits: [
      'Per-project or hourly billing options',
      'Include revision rounds and licensing',
      'Track design assets and deliverables',
      'Manage rush fees and extra charges'
    ],
    commonItems: [
      'Logo Design',
      'Brand Identity Package',
      'Print Design',
      'Digital Graphics',
      'Illustration',
      'Design Revisions'
    ],
    tips: [
      'Specify number of revisions included',
      'Detail file formats and deliverables',
      'Include intellectual property rights',
      'Add rush fees for expedited work'
    ],
    metaDescription: 'Create professional graphic design invoices with our free template. Perfect for freelance designers billing for logos, branding, and creative work.',
    keywords: ['graphic designer invoice', 'design invoice template', 'freelance designer billing', 'creative invoice']
  },
  {
    slug: 'web-developer',
    title: 'Web Developer',
    profession: 'Web Development',
    description: 'Generate detailed web development invoices for coding, maintenance, and hosting services.',
    benefits: [
      'Track development hours and milestones',
      'Include hosting and domain charges',
      'Add maintenance and support fees',
      'Manage recurring subscriptions'
    ],
    commonItems: [
      'Website Development',
      'Custom Programming',
      'Website Maintenance',
      'Hosting Services',
      'Domain Registration',
      'Technical Support'
    ],
    tips: [
      'Break down hours by development phase',
      'Include technology stack details',
      'Specify maintenance terms clearly',
      'Add security and backup services'
    ],
    metaDescription: 'Professional web developer invoice template. Bill clients for development, maintenance, hosting, and technical support services.',
    keywords: ['web developer invoice', 'programming invoice template', 'website development billing', 'developer invoice']
  },
  {
    slug: 'video-editor',
    title: 'Video Editor',
    profession: 'Video Editing',
    description: 'Create professional invoices for video editing, post-production, and multimedia services.',
    benefits: [
      'Per-project or per-minute billing',
      'Track revision rounds and feedback',
      'Include licensing and usage rights',
      'Manage rush delivery fees'
    ],
    commonItems: [
      'Video Editing',
      'Color Correction',
      'Audio Mixing',
      'Motion Graphics',
      'Video Revisions',
      'Raw Footage Organization'
    ],
    tips: [
      'Specify video length and format',
      'Detail revision policy clearly',
      'Include delivery timeline',
      'Add rush fees for urgent projects'
    ],
    metaDescription: 'Free video editor invoice template for post-production professionals. Bill for editing, color grading, and multimedia services.',
    keywords: ['video editor invoice', 'video editing invoice template', 'post-production billing', 'video production invoice']
  },
  {
    slug: 'interior-designer',
    title: 'Interior Designer',
    profession: 'Interior Design',
    description: 'Professional invoicing for interior design consultations, space planning, and furniture procurement.',
    benefits: [
      'Track design fees and procurement charges',
      'Include furniture and materials markup',
      'Manage project phases and deposits',
      'Add site visit and travel expenses'
    ],
    commonItems: [
      'Design Consultation',
      'Space Planning',
      'Furniture Procurement',
      'Material Selection',
      'Project Management',
      'Site Visits'
    ],
    tips: [
      'Separate design fees from procurement',
      'Include markup percentages clearly',
      'Detail payment schedule by phase',
      'Add deposit and final payment terms'
    ],
    metaDescription: 'Interior design invoice template for design consultations, space planning, and furniture procurement services.',
    keywords: ['interior designer invoice', 'interior design invoice template', 'design billing', 'decorator invoice']
  },
  // Marketing & Business
  {
    slug: 'social-media-manager',
    title: 'Social Media Manager',
    profession: 'Social Media Management',
    description: 'Generate invoices for social media management, content creation, and digital marketing services.',
    benefits: [
      'Monthly retainer or project-based billing',
      'Track content creation and posting',
      'Include advertising spend management',
      'Manage multiple platform fees'
    ],
    commonItems: [
      'Social Media Management',
      'Content Creation',
      'Community Management',
      'Analytics & Reporting',
      'Ad Campaign Management',
      'Influencer Outreach'
    ],
    tips: [
      'Specify platforms managed',
      'Detail posting frequency and content types',
      'Separate organic and paid services',
      'Include reporting deliverables'
    ],
    metaDescription: 'Free social media manager invoice template. Bill for content creation, community management, and digital marketing services.',
    keywords: ['social media manager invoice', 'social media invoice template', 'digital marketing billing', 'content creator invoice']
  },
  {
    slug: 'copywriter',
    title: 'Copywriter',
    profession: 'Copywriting',
    description: 'Professional invoices for copywriting services, including web content, marketing materials, and SEO writing.',
    benefits: [
      'Per-word or per-project pricing',
      'Track revisions and editing rounds',
      'Include rush fees for urgent work',
      'Manage retainer agreements'
    ],
    commonItems: [
      'Website Copy',
      'Blog Articles',
      'Marketing Materials',
      'SEO Content',
      'Email Campaigns',
      'Content Revisions'
    ],
    tips: [
      'Specify word count or page length',
      'Include revision policy',
      'Detail research and SEO optimization',
      'Add rush fees for tight deadlines'
    ],
    metaDescription: 'Copywriter invoice template for freelance writers. Bill for web content, blog posts, marketing copy, and SEO writing services.',
    keywords: ['copywriter invoice', 'writing invoice template', 'freelance writer billing', 'content writing invoice']
  },
  {
    slug: 'marketing-consultant',
    title: 'Marketing Consultant',
    profession: 'Marketing Consulting',
    description: 'Create detailed marketing consulting invoices for strategy, campaigns, and business growth services.',
    benefits: [
      'Strategy and execution billing',
      'Campaign performance tracking',
      'Expense and ad spend management',
      'Retainer and project options'
    ],
    commonItems: [
      'Marketing Strategy',
      'Campaign Planning',
      'Market Research',
      'Brand Development',
      'Performance Analysis',
      'Competitor Analysis'
    ],
    tips: [
      'Break down strategic vs tactical work',
      'Include data analysis and reporting',
      'Detail campaign budgets separately',
      'Add consultation and meeting fees'
    ],
    metaDescription: 'Marketing consultant invoice template for strategy, campaigns, and business growth services. Professional billing for marketing professionals.',
    keywords: ['marketing consultant invoice', 'marketing invoice template', 'marketing agency billing', 'digital marketing invoice']
  },
  // Technical & IT
  {
    slug: 'it-consultant',
    title: 'IT Consultant',
    profession: 'IT Consulting',
    description: 'Generate professional IT consulting invoices for system analysis, network setup, and technical support.',
    benefits: [
      'Hourly or project-based billing',
      'Track on-site and remote support',
      'Include hardware and software costs',
      'Manage maintenance contracts'
    ],
    commonItems: [
      'IT Consultation',
      'Network Setup',
      'System Administration',
      'Technical Support',
      'Software Installation',
      'Security Assessment'
    ],
    tips: [
      'Detail on-site vs remote hours',
      'Include hardware costs with markup',
      'Specify support response times',
      'Add maintenance agreement terms'
    ],
    metaDescription: 'IT consultant invoice template for technical support, network setup, and system administration services.',
    keywords: ['IT consultant invoice', 'IT services invoice template', 'tech support billing', 'systems admin invoice']
  },
  {
    slug: 'software-developer',
    title: 'Software Developer',
    profession: 'Software Development',
    description: 'Professional invoicing for custom software development, application building, and programming services.',
    benefits: [
      'Milestone-based payment tracking',
      'Hourly development rate billing',
      'License and deployment fees',
      'Maintenance and support charges'
    ],
    commonItems: [
      'Software Development',
      'Application Programming',
      'Database Design',
      'API Integration',
      'Code Review',
      'Technical Documentation'
    ],
    tips: [
      'Reference project specifications',
      'Break down by development phase',
      'Include testing and debugging',
      'Detail deployment and training'
    ],
    metaDescription: 'Software developer invoice template for custom development, programming, and application building services.',
    keywords: ['software developer invoice', 'programming invoice template', 'software development billing', 'app developer invoice']
  },
  {
    slug: 'data-analyst',
    title: 'Data Analyst',
    profession: 'Data Analysis',
    description: 'Create invoices for data analysis, business intelligence, and reporting services.',
    benefits: [
      'Project-based or hourly billing',
      'Track data processing and analysis',
      'Include visualization and reporting',
      'Manage consulting and training fees'
    ],
    commonItems: [
      'Data Analysis',
      'Statistical Modeling',
      'Dashboard Creation',
      'Report Generation',
      'Data Visualization',
      'Business Intelligence'
    ],
    tips: [
      'Specify datasets and sources analyzed',
      'Include tool and software costs',
      'Detail deliverable formats',
      'Add training and presentation time'
    ],
    metaDescription: 'Data analyst invoice template for data analysis, business intelligence, and reporting services.',
    keywords: ['data analyst invoice', 'data analysis invoice template', 'analytics billing', 'BI consultant invoice']
  },
  // Health & Wellness
  {
    slug: 'personal-trainer',
    title: 'Personal Trainer',
    profession: 'Personal Training',
    description: 'Generate professional invoices for fitness training, workout plans, and wellness coaching.',
    benefits: [
      'Per-session or package billing',
      'Track training sessions and plans',
      'Include nutritional guidance fees',
      'Manage membership and subscriptions'
    ],
    commonItems: [
      'Training Session',
      'Workout Plan Design',
      'Nutritional Guidance',
      'Fitness Assessment',
      'Group Training',
      'Online Coaching'
    ],
    tips: [
      'Offer package deals and discounts',
      'Include session cancellation policy',
      'Detail training location (gym/home/online)',
      'Add equipment rental if applicable'
    ],
    metaDescription: 'Personal trainer invoice template for fitness training, workout plans, and wellness coaching services.',
    keywords: ['personal trainer invoice', 'fitness invoice template', 'training session billing', 'gym trainer invoice']
  },
  {
    slug: 'yoga-instructor',
    title: 'Yoga Instructor',
    profession: 'Yoga Instruction',
    description: 'Professional invoices for yoga classes, private sessions, and wellness workshops.',
    benefits: [
      'Class and private session billing',
      'Workshop and event invoicing',
      'Package and membership options',
      'Online class payment tracking'
    ],
    commonItems: [
      'Yoga Class',
      'Private Session',
      'Workshop',
      'Online Class',
      'Meditation Session',
      'Wellness Consultation'
    ],
    tips: [
      'Offer class packages at discounted rates',
      'Include mat rental if provided',
      'Detail class duration and style',
      'Add cancellation and no-show policy'
    ],
    metaDescription: 'Yoga instructor invoice template for classes, private sessions, and wellness workshops.',
    keywords: ['yoga instructor invoice', 'yoga class invoice template', 'wellness instructor billing', 'meditation teacher invoice']
  },
  {
    slug: 'nutritionist',
    title: 'Nutritionist',
    profession: 'Nutrition Consulting',
    description: 'Create detailed invoices for nutrition consultations, meal planning, and dietary guidance.',
    benefits: [
      'Consultation and follow-up billing',
      'Meal plan creation charges',
      'Program and package options',
      'Online consultation tracking'
    ],
    commonItems: [
      'Nutrition Consultation',
      'Meal Plan Creation',
      'Dietary Assessment',
      'Follow-up Session',
      'Grocery List Planning',
      'Supplement Recommendations'
    ],
    tips: [
      'Include consultation duration',
      'Detail meal plan delivery format',
      'Add follow-up session packages',
      'Specify program duration and terms'
    ],
    metaDescription: 'Nutritionist invoice template for diet consultations, meal planning, and wellness coaching services.',
    keywords: ['nutritionist invoice', 'nutrition invoice template', 'dietitian billing', 'meal planning invoice']
  },
  {
    slug: 'therapist',
    title: 'Therapist',
    profession: 'Therapy Services',
    description: 'Professional invoicing for therapy sessions, counseling, and mental health services.',
    benefits: [
      'HIPAA-compliant invoice templates',
      'Session and program billing',
      'Insurance billing codes support',
      'Sliding scale fee tracking'
    ],
    commonItems: [
      'Therapy Session',
      'Initial Consultation',
      'Group Therapy',
      'Family Counseling',
      'Assessment & Evaluation',
      'Treatment Planning'
    ],
    tips: [
      'Include CPT codes for insurance',
      'Maintain confidentiality standards',
      'Detail session type and duration',
      'Add cancellation policy clearly'
    ],
    metaDescription: 'Therapist invoice template for counseling sessions, mental health services, and wellness programs.',
    keywords: ['therapist invoice', 'therapy invoice template', 'counseling billing', 'mental health invoice']
  },
  // Education & Training
  {
    slug: 'tutor',
    title: 'Tutor',
    profession: 'Tutoring',
    description: 'Generate invoices for tutoring sessions, educational support, and academic coaching.',
    benefits: [
      'Per-session or package billing',
      'Track subjects and hours taught',
      'Include material and resource fees',
      'Manage online and in-person rates'
    ],
    commonItems: [
      'Tutoring Session',
      'Test Preparation',
      'Homework Help',
      'Subject Tutoring',
      'Study Skills Coaching',
      'Educational Materials'
    ],
    tips: [
      'Specify subject and grade level',
      'Include session format (online/in-person)',
      'Offer bulk session discounts',
      'Add travel fees if applicable'
    ],
    metaDescription: 'Tutor invoice template for academic tutoring, test prep, and educational coaching services.',
    keywords: ['tutor invoice', 'tutoring invoice template', 'private tutor billing', 'academic coaching invoice']
  },
  {
    slug: 'music-teacher',
    title: 'Music Teacher',
    profession: 'Music Instruction',
    description: 'Professional invoices for music lessons, instrument training, and performance coaching.',
    benefits: [
      'Lesson and recital billing',
      'Instrument rental charges',
      'Package and semester pricing',
      'Online and in-person options'
    ],
    commonItems: [
      'Music Lesson',
      'Instrument Training',
      'Music Theory',
      'Performance Coaching',
      'Recital Preparation',
      'Instrument Rental'
    ],
    tips: [
      'Specify instrument and skill level',
      'Include practice material costs',
      'Offer monthly payment plans',
      'Add make-up lesson policy'
    ],
    metaDescription: 'Music teacher invoice template for lessons, instrument training, and performance coaching.',
    keywords: ['music teacher invoice', 'music lesson invoice template', 'instrument teacher billing', 'music instructor invoice']
  },
  {
    slug: 'language-teacher',
    title: 'Language Teacher',
    profession: 'Language Instruction',
    description: 'Create invoices for language lessons, conversation practice, and translation services.',
    benefits: [
      'Per-lesson or course billing',
      'Group and private class options',
      'Online and in-person rates',
      'Material and textbook fees'
    ],
    commonItems: [
      'Language Lesson',
      'Conversation Practice',
      'Grammar Instruction',
      'Translation Services',
      'Test Preparation',
      'Course Materials'
    ],
    tips: [
      'Specify language and proficiency level',
      'Include lesson duration and format',
      'Offer course packages at discount',
      'Add cancellation policy'
    ],
    metaDescription: 'Language teacher invoice template for lessons, conversation practice, and language coaching services.',
    keywords: ['language teacher invoice', 'language lesson invoice template', 'ESL teacher billing', 'foreign language invoice']
  },
  // Event & Hospitality
  {
    slug: 'event-planner',
    title: 'Event Planner',
    profession: 'Event Planning',
    description: 'Professional invoicing for event planning, coordination, and management services.',
    benefits: [
      'Percentage or flat fee billing',
      'Track vendor payments and deposits',
      'Include coordination and setup fees',
      'Manage multiple event types'
    ],
    commonItems: [
      'Event Planning',
      'Vendor Coordination',
      'Day-of Coordination',
      'Setup & Breakdown',
      'Design & Decor',
      'Timeline Management'
    ],
    tips: [
      'Detail planning fee structure',
      'Include vendor payment tracking',
      'Add travel and lodging expenses',
      'Specify services and deliverables'
    ],
    metaDescription: 'Event planner invoice template for wedding planning, corporate events, and party coordination services.',
    keywords: ['event planner invoice', 'event planning invoice template', 'wedding planner billing', 'party planner invoice']
  },
  {
    slug: 'caterer',
    title: 'Caterer',
    profession: 'Catering',
    description: 'Generate detailed catering invoices for events, including food, service, and equipment.',
    benefits: [
      'Per-person or package pricing',
      'Track menu items and quantities',
      'Include service and rental fees',
      'Manage deposits and balances'
    ],
    commonItems: [
      'Food & Beverage',
      'Service Staff',
      'Equipment Rental',
      'Setup & Cleanup',
      'Bar Service',
      'Delivery Fee'
    ],
    tips: [
      'Detail menu items and quantities',
      'Include service staff hours',
      'Add rental equipment clearly',
      'Specify deposit and final payment'
    ],
    metaDescription: 'Catering invoice template for food services, event catering, and hospitality businesses.',
    keywords: ['caterer invoice', 'catering invoice template', 'food service billing', 'event catering invoice']
  },
  {
    slug: 'dj',
    title: 'DJ',
    profession: 'DJ Services',
    description: 'Professional invoices for DJ services, music entertainment, and event performances.',
    benefits: [
      'Event-based or hourly billing',
      'Track equipment and setup fees',
      'Include travel and lodging',
      'Manage deposits and cancellations'
    ],
    commonItems: [
      'DJ Performance',
      'Music & Entertainment',
      'Sound Equipment',
      'Lighting Setup',
      'MC Services',
      'Travel Expenses'
    ],
    tips: [
      'Specify event duration and overtime rates',
      'Include equipment list provided',
      'Detail setup and breakdown time',
      'Add cancellation policy clearly'
    ],
    metaDescription: 'DJ invoice template for music entertainment, event performances, and sound services.',
    keywords: ['DJ invoice', 'DJ service invoice template', 'music entertainment billing', 'event DJ invoice']
  },
  // Home & Property Services
  {
    slug: 'real-estate-agent',
    title: 'Real Estate Agent',
    profession: 'Real Estate',
    description: 'Create professional real estate invoices for commissions, consulting, and property services.',
    benefits: [
      'Commission and flat fee billing',
      'Track property listings and sales',
      'Include marketing and staging costs',
      'Manage buyer and seller invoices'
    ],
    commonItems: [
      'Real Estate Commission',
      'Property Consultation',
      'Marketing Services',
      'Photography & Staging',
      'Open House Coordination',
      'Transaction Coordination'
    ],
    tips: [
      'Detail commission percentage',
      'Include marketing expenses',
      'Reference property address',
      'Add transaction date and MLS number'
    ],
    metaDescription: 'Real estate agent invoice template for commissions, property sales, and real estate services.',
    keywords: ['real estate invoice', 'realtor invoice template', 'real estate commission billing', 'property agent invoice']
  },
  {
    slug: 'property-manager',
    title: 'Property Manager',
    profession: 'Property Management',
    description: 'Professional invoicing for property management, maintenance coordination, and tenant services.',
    benefits: [
      'Monthly management fee billing',
      'Track maintenance and repairs',
      'Include leasing and inspection fees',
      'Manage multiple properties'
    ],
    commonItems: [
      'Property Management Fee',
      'Maintenance Coordination',
      'Tenant Screening',
      'Property Inspection',
      'Leasing Services',
      'Rent Collection'
    ],
    tips: [
      'Reference property addresses',
      'Include percentage or flat fee structure',
      'Detail services included',
      'Add tenant placement fees'
    ],
    metaDescription: 'Property manager invoice template for management fees, maintenance coordination, and tenant services.',
    keywords: ['property manager invoice', 'property management invoice template', 'rental property billing', 'property management invoice']
  },
  {
    slug: 'contractor',
    title: 'Contractor',
    profession: 'Contracting',
    description: 'Generate detailed contractor invoices for construction, renovation, and repair services.',
    benefits: [
      'Project and milestone billing',
      'Track materials and labor separately',
      'Include permits and inspection fees',
      'Manage change orders and extras'
    ],
    commonItems: [
      'Labor',
      'Materials',
      'Equipment Rental',
      'Permits & Fees',
      'Subcontractor Services',
      'Waste Removal'
    ],
    tips: [
      'Separate labor and materials clearly',
      'Include project timeline and phases',
      'Detail change orders separately',
      'Add warranty information'
    ],
    metaDescription: 'Contractor invoice template for construction, renovation, and home improvement services.',
    keywords: ['contractor invoice', 'construction invoice template', 'general contractor billing', 'home improvement invoice']
  },
  {
    slug: 'electrician',
    title: 'Electrician',
    profession: 'Electrical Services',
    description: 'Professional electrical service invoices for installations, repairs, and maintenance.',
    benefits: [
      'Service call and hourly billing',
      'Track materials and equipment',
      'Include emergency service fees',
      'Manage warranty information'
    ],
    commonItems: [
      'Electrical Service Call',
      'Installation',
      'Repair Work',
      'Electrical Inspection',
      'Materials & Supplies',
      'Emergency Service'
    ],
    tips: [
      'Detail service call and diagnosis fees',
      'Include material costs with receipts',
      'Add emergency or after-hours rates',
      'Specify warranty terms clearly'
    ],
    metaDescription: 'Electrician invoice template for electrical installations, repairs, and emergency services.',
    keywords: ['electrician invoice', 'electrical service invoice template', 'electrician billing', 'electrical work invoice']
  },
  {
    slug: 'plumber',
    title: 'Plumber',
    profession: 'Plumbing Services',
    description: 'Create plumbing service invoices for installations, repairs, and emergency services.',
    benefits: [
      'Service call and hourly rates',
      'Track parts and materials',
      'Include emergency service fees',
      'Manage warranty and guarantees'
    ],
    commonItems: [
      'Plumbing Service Call',
      'Pipe Repair',
      'Installation Work',
      'Drain Cleaning',
      'Parts & Materials',
      'Emergency Service'
    ],
    tips: [
      'Include trip charge and diagnostics',
      'Detail parts with model numbers',
      'Add emergency service premiums',
      'Specify labor warranty'
    ],
    metaDescription: 'Plumber invoice template for plumbing repairs, installations, and emergency services.',
    keywords: ['plumber invoice', 'plumbing invoice template', 'plumber billing', 'plumbing service invoice']
  },
  {
    slug: 'landscaper',
    title: 'Landscaper',
    profession: 'Landscaping',
    description: 'Professional landscaping invoices for lawn care, garden design, and maintenance services.',
    benefits: [
      'Per-service or monthly billing',
      'Track materials and plants',
      'Include design and installation fees',
      'Manage seasonal contracts'
    ],
    commonItems: [
      'Lawn Maintenance',
      'Landscape Design',
      'Plant Installation',
      'Mulching',
      'Tree & Shrub Care',
      'Irrigation Services'
    ],
    tips: [
      'Detail service frequency and schedule',
      'Include plant and material costs',
      'Add seasonal service packages',
      'Specify property square footage'
    ],
    metaDescription: 'Landscaper invoice template for lawn care, garden design, and landscape maintenance services.',
    keywords: ['landscaper invoice', 'landscaping invoice template', 'lawn care billing', 'landscape design invoice']
  },
  {
    slug: 'house-cleaner',
    title: 'House Cleaner',
    profession: 'House Cleaning',
    description: 'Generate professional cleaning service invoices for residential and commercial properties.',
    benefits: [
      'Per-visit or recurring billing',
      'Track cleaning supplies and equipment',
      'Include deep cleaning surcharges',
      'Manage multiple properties'
    ],
    commonItems: [
      'House Cleaning Service',
      'Deep Cleaning',
      'Move-in/Move-out Cleaning',
      'Window Cleaning',
      'Carpet Cleaning',
      'Cleaning Supplies'
    ],
    tips: [
      'Detail rooms and square footage',
      'Include cleaning supplies if provided',
      'Offer recurring service discounts',
      'Add travel fees if applicable'
    ],
    metaDescription: 'House cleaner invoice template for residential cleaning, deep cleaning, and janitorial services.',
    keywords: ['house cleaner invoice', 'cleaning service invoice template', 'maid service billing', 'residential cleaning invoice']
  },
  // Automotive
  {
    slug: 'auto-mechanic',
    title: 'Auto Mechanic',
    profession: 'Auto Repair',
    description: 'Professional automotive repair invoices for diagnostics, repairs, and maintenance services.',
    benefits: [
      'Labor and parts billing',
      'Track diagnostic and shop fees',
      'Include warranty information',
      'Manage fleet services'
    ],
    commonItems: [
      'Labor',
      'Parts & Materials',
      'Diagnostic Service',
      'Shop Supplies',
      'Environmental Fee',
      'Inspection'
    ],
    tips: [
      'Detail labor hours and rates',
      'Include part numbers and prices',
      'Add warranty terms for parts/labor',
      'Reference vehicle VIN and mileage'
    ],
    metaDescription: 'Auto mechanic invoice template for vehicle repairs, maintenance, and diagnostic services.',
    keywords: ['auto mechanic invoice', 'car repair invoice template', 'automotive service billing', 'mechanic shop invoice']
  },
  {
    slug: 'car-detailer',
    title: 'Car Detailer',
    profession: 'Auto Detailing',
    description: 'Create auto detailing invoices for car washing, cleaning, and restoration services.',
    benefits: [
      'Package and à la carte pricing',
      'Track services and products used',
      'Include add-on services',
      'Manage fleet detailing'
    ],
    commonItems: [
      'Exterior Detailing',
      'Interior Detailing',
      'Paint Correction',
      'Ceramic Coating',
      'Engine Cleaning',
      'Headlight Restoration'
    ],
    tips: [
      'Offer package deals clearly',
      'Detail vehicle size pricing',
      'Include product upgrades',
      'Add before/after photo service'
    ],
    metaDescription: 'Car detailer invoice template for auto detailing, car washing, and vehicle restoration services.',
    keywords: ['car detailer invoice', 'auto detailing invoice template', 'car wash billing', 'vehicle detailing invoice']
  },
  // Beauty & Personal Care
  {
    slug: 'hairstylist',
    title: 'Hairstylist',
    profession: 'Hair Styling',
    description: 'Professional invoices for hair styling, coloring, and salon services.',
    benefits: [
      'Service and product billing',
      'Track appointments and packages',
      'Include product sales',
      'Manage tips and gratuities'
    ],
    commonItems: [
      'Haircut',
      'Hair Color',
      'Highlights/Balayage',
      'Styling',
      'Hair Treatment',
      'Hair Products'
    ],
    tips: [
      'Detail services and duration',
      'Include product recommendations',
      'Offer package deals',
      'Add consultation fees for complex work'
    ],
    metaDescription: 'Hairstylist invoice template for hair cutting, coloring, styling, and salon services.',
    keywords: ['hairstylist invoice', 'hair salon invoice template', 'hairdresser billing', 'salon service invoice']
  },
  {
    slug: 'makeup-artist',
    title: 'Makeup Artist',
    profession: 'Makeup Artistry',
    description: 'Generate makeup artist invoices for special events, bridal, and editorial services.',
    benefits: [
      'Event and hourly billing',
      'Track travel and kit fees',
      'Include touch-up services',
      'Manage bridal packages'
    ],
    commonItems: [
      'Makeup Application',
      'Bridal Makeup',
      'Special Event Makeup',
      'Makeup Trial',
      'Touch-up Service',
      'Travel Fee'
    ],
    tips: [
      'Specify event type and duration',
      'Include travel time and distance',
      'Offer bridal party packages',
      'Add early morning fees if applicable'
    ],
    metaDescription: 'Makeup artist invoice template for bridal, special event, and editorial makeup services.',
    keywords: ['makeup artist invoice', 'makeup service invoice template', 'bridal makeup billing', 'makeup artist invoice']
  },
  {
    slug: 'nail-technician',
    title: 'Nail Technician',
    profession: 'Nail Services',
    description: 'Professional nail service invoices for manicures, pedicures, and nail art.',
    benefits: [
      'Service and product pricing',
      'Track appointments and packages',
      'Include add-on services',
      'Manage loyalty programs'
    ],
    commonItems: [
      'Manicure',
      'Pedicure',
      'Gel/Acrylic Nails',
      'Nail Art',
      'Nail Removal',
      'Nail Products'
    ],
    tips: [
      'Detail service type and complexity',
      'Include nail art design charges',
      'Offer combo service discounts',
      'Add removal fees for extensions'
    ],
    metaDescription: 'Nail technician invoice template for manicures, pedicures, nail art, and nail salon services.',
    keywords: ['nail technician invoice', 'nail salon invoice template', 'manicure billing', 'nail service invoice']
  },
  {
    slug: 'massage-therapist',
    title: 'Massage Therapist',
    profession: 'Massage Therapy',
    description: 'Create massage therapy invoices for therapeutic, relaxation, and wellness services.',
    benefits: [
      'Session and package billing',
      'Track treatment types and duration',
      'Include product sales',
      'Manage insurance billing'
    ],
    commonItems: [
      'Massage Session',
      'Deep Tissue Massage',
      'Sports Massage',
      'Hot Stone Therapy',
      'Aromatherapy',
      'Therapeutic Products'
    ],
    tips: [
      'Specify massage type and duration',
      'Include insurance codes if applicable',
      'Offer package discounts',
      'Add cancellation policy'
    ],
    metaDescription: 'Massage therapist invoice template for therapeutic massage, relaxation, and wellness services.',
    keywords: ['massage therapist invoice', 'massage therapy invoice template', 'spa service billing', 'massage session invoice']
  },
  // Pet Services
  {
    slug: 'pet-groomer',
    title: 'Pet Groomer',
    profession: 'Pet Grooming',
    description: 'Professional pet grooming invoices for bathing, styling, and pet care services.',
    benefits: [
      'Per-service or package pricing',
      'Track pet size and breed',
      'Include add-on services',
      'Manage frequent customer programs'
    ],
    commonItems: [
      'Bath & Brush',
      'Full Grooming',
      'Nail Trimming',
      'Ear Cleaning',
      'Teeth Brushing',
      'De-shedding Treatment'
    ],
    tips: [
      'Detail pet size and breed pricing',
      'Include behavior surcharges if needed',
      'Offer membership packages',
      'Add product sales'
    ],
    metaDescription: 'Pet groomer invoice template for dog grooming, cat grooming, and pet care services.',
    keywords: ['pet groomer invoice', 'dog grooming invoice template', 'pet care billing', 'grooming service invoice']
  },
  {
    slug: 'dog-trainer',
    title: 'Dog Trainer',
    profession: 'Dog Training',
    description: 'Generate dog training invoices for obedience classes, private sessions, and behavior modification.',
    benefits: [
      'Per-session or program billing',
      'Track training progress',
      'Include group and private options',
      'Manage package deals'
    ],
    commonItems: [
      'Training Session',
      'Obedience Class',
      'Behavior Consultation',
      'Puppy Training',
      'Advanced Training',
      'Training Materials'
    ],
    tips: [
      'Detail training method and goals',
      'Include session duration and frequency',
      'Offer program packages',
      'Add in-home training premiums'
    ],
    metaDescription: 'Dog trainer invoice template for obedience training, behavior modification, and puppy classes.',
    keywords: ['dog trainer invoice', 'dog training invoice template', 'pet training billing', 'obedience class invoice']
  },
  {
    slug: 'pet-sitter',
    title: 'Pet Sitter',
    profession: 'Pet Sitting',
    description: 'Professional pet sitting invoices for pet care, dog walking, and overnight services.',
    benefits: [
      'Per-visit or daily billing',
      'Track multiple pets and services',
      'Include medication administration',
      'Manage holiday rates'
    ],
    commonItems: [
      'Pet Sitting Visit',
      'Dog Walking',
      'Overnight Care',
      'Medication Administration',
      'Plant Watering',
      'Holiday Rate Surcharge'
    ],
    tips: [
      'Detail visit duration and frequency',
      'Include multiple pet discounts',
      'Add holiday and weekend rates',
      'Specify emergency care provisions'
    ],
    metaDescription: 'Pet sitter invoice template for pet care, dog walking, and overnight pet sitting services.',
    keywords: ['pet sitter invoice', 'pet sitting invoice template', 'dog walker billing', 'pet care invoice']
  },
  {
    slug: 'veterinarian',
    title: 'Veterinarian',
    profession: 'Veterinary Services',
    description: 'Create veterinary service invoices for examinations, treatments, and medical procedures.',
    benefits: [
      'Itemized medical billing',
      'Track medications and supplies',
      'Include diagnostic and lab fees',
      'Manage insurance claims'
    ],
    commonItems: [
      'Examination',
      'Vaccination',
      'Diagnostic Testing',
      'Medications',
      'Surgical Procedure',
      'Laboratory Services'
    ],
    tips: [
      'Detail medical services and codes',
      'Include medication names and dosages',
      'Add follow-up care instructions',
      'Specify payment and insurance terms'
    ],
    metaDescription: 'Veterinarian invoice template for veterinary examinations, treatments, and animal medical services.',
    keywords: ['veterinarian invoice', 'vet clinic invoice template', 'veterinary billing', 'animal hospital invoice']
  },
  // Trades & Specialized Services
  {
    slug: 'carpenter',
    title: 'Carpenter',
    profession: 'Carpentry',
    description: 'Professional carpentry invoices for custom woodwork, installations, and repairs.',
    benefits: [
      'Labor and materials billing',
      'Track project phases',
      'Include custom work charges',
      'Manage material markup'
    ],
    commonItems: [
      'Carpentry Labor',
      'Materials & Lumber',
      'Custom Woodwork',
      'Installation',
      'Hardware & Fasteners',
      'Finishing Work'
    ],
    tips: [
      'Detail materials with specifications',
      'Include custom work complexity',
      'Add waste and markup clearly',
      'Specify warranty terms'
    ],
    metaDescription: 'Carpenter invoice template for custom woodwork, carpentry labor, and installation services.',
    keywords: ['carpenter invoice', 'carpentry invoice template', 'woodworking billing', 'carpenter service invoice']
  },
  {
    slug: 'painter',
    title: 'Painter',
    profession: 'Painting',
    description: 'Generate painting service invoices for interior, exterior, and commercial painting projects.',
    benefits: [
      'Per-room or square footage billing',
      'Track paint and supplies',
      'Include prep work charges',
      'Manage multi-day projects'
    ],
    commonItems: [
      'Painting Labor',
      'Paint & Supplies',
      'Surface Preparation',
      'Priming',
      'Trim & Detail Work',
      'Cleanup'
    ],
    tips: [
      'Specify square footage or rooms',
      'Include paint brand and quantity',
      'Detail prep work required',
      'Add warranty for workmanship'
    ],
    metaDescription: 'Painter invoice template for interior painting, exterior painting, and commercial painting services.',
    keywords: ['painter invoice', 'painting invoice template', 'painting contractor billing', 'house painter invoice']
  },
  {
    slug: 'hvac-technician',
    title: 'HVAC Technician',
    profession: 'HVAC Services',
    description: 'Professional HVAC service invoices for installation, maintenance, and repair of heating and cooling systems.',
    benefits: [
      'Service call and diagnostic billing',
      'Track parts and refrigerant',
      'Include maintenance agreements',
      'Manage emergency service fees'
    ],
    commonItems: [
      'HVAC Service Call',
      'System Installation',
      'Repair Work',
      'Maintenance Service',
      'Parts & Refrigerant',
      'Emergency Service'
    ],
    tips: [
      'Detail system make and model',
      'Include refrigerant type and quantity',
      'Add seasonal maintenance packages',
      'Specify warranty coverage'
    ],
    metaDescription: 'HVAC technician invoice template for heating, cooling, installation, and maintenance services.',
    keywords: ['HVAC invoice', 'HVAC service invoice template', 'heating cooling billing', 'HVAC technician invoice']
  },
  {
    slug: 'roofing-contractor',
    title: 'Roofing Contractor',
    profession: 'Roofing',
    description: 'Create roofing contractor invoices for roof installation, repair, and maintenance services.',
    benefits: [
      'Project-based billing',
      'Track materials and labor',
      'Include permits and disposal',
      'Manage insurance claims'
    ],
    commonItems: [
      'Roofing Labor',
      'Roofing Materials',
      'Tear-off & Disposal',
      'Permits & Fees',
      'Warranty',
      'Cleanup'
    ],
    tips: [
      'Detail square footage and pitch',
      'Include material specifications',
      'Add disposal fees clearly',
      'Specify warranty coverage'
    ],
    metaDescription: 'Roofing contractor invoice template for roof installation, repairs, and maintenance services.',
    keywords: ['roofing invoice', 'roofing contractor invoice template', 'roof repair billing', 'roofing service invoice']
  },
  // Additional Professional Services
  {
    slug: 'accountant',
    title: 'Accountant',
    profession: 'Accounting',
    description: 'Professional accounting invoices for bookkeeping, tax preparation, and financial services.',
    benefits: [
      'Hourly or flat rate billing',
      'Track client accounts and services',
      'Include tax preparation fees',
      'Manage monthly retainers'
    ],
    commonItems: [
      'Bookkeeping Services',
      'Tax Preparation',
      'Financial Consulting',
      'Payroll Processing',
      'Audit Support',
      'Financial Statements'
    ],
    tips: [
      'Detail scope of services provided',
      'Include tax year and forms filed',
      'Add complexity surcharges',
      'Specify turnaround time'
    ],
    metaDescription: 'Accountant invoice template for bookkeeping, tax preparation, and accounting services.',
    keywords: ['accountant invoice', 'accounting invoice template', 'bookkeeping billing', 'CPA invoice']
  },
  {
    slug: 'bookkeeper',
    title: 'Bookkeeper',
    profession: 'Bookkeeping',
    description: 'Generate bookkeeping service invoices for financial record keeping and account management.',
    benefits: [
      'Monthly or hourly billing',
      'Track transaction volumes',
      'Include reconciliation services',
      'Manage multiple clients'
    ],
    commonItems: [
      'Bookkeeping Services',
      'Bank Reconciliation',
      'Accounts Payable',
      'Accounts Receivable',
      'Financial Reports',
      'Payroll Entry'
    ],
    tips: [
      'Specify period covered',
      'Detail number of transactions',
      'Include software fees if applicable',
      'Add year-end service packages'
    ],
    metaDescription: 'Bookkeeper invoice template for bookkeeping, financial records, and account reconciliation services.',
    keywords: ['bookkeeper invoice', 'bookkeeping invoice template', 'bookkeeping service billing', 'financial records invoice']
  },
  {
    slug: 'virtual-assistant',
    title: 'Virtual Assistant',
    profession: 'Virtual Assistant',
    description: 'Professional virtual assistant invoices for administrative support, scheduling, and business services.',
    benefits: [
      'Hourly or package billing',
      'Track tasks and time',
      'Include various service types',
      'Manage retainer agreements'
    ],
    commonItems: [
      'Administrative Support',
      'Email Management',
      'Calendar Scheduling',
      'Data Entry',
      'Customer Service',
      'Research Tasks'
    ],
    tips: [
      'Detail hours worked by task type',
      'Include response time agreements',
      'Offer monthly retainer packages',
      'Add rush fees for urgent work'
    ],
    metaDescription: 'Virtual assistant invoice template for administrative support, scheduling, and remote business services.',
    keywords: ['virtual assistant invoice', 'VA invoice template', 'remote assistant billing', 'admin support invoice']
  },
  {
    slug: 'translator',
    title: 'Translator',
    profession: 'Translation',
    description: 'Create translation service invoices for document translation, interpretation, and localization.',
    benefits: [
      'Per-word or per-project billing',
      'Track language pairs and complexity',
      'Include rush fees and editing',
      'Manage certified translations'
    ],
    commonItems: [
      'Translation Services',
      'Document Translation',
      'Proofreading & Editing',
      'Certified Translation',
      'Localization',
      'Rush Delivery'
    ],
    tips: [
      'Specify language pair and direction',
      'Include word count clearly',
      'Add certification fees if applicable',
      'Detail rush turnaround options'
    ],
    metaDescription: 'Translator invoice template for document translation, interpretation, and language services.',
    keywords: ['translator invoice', 'translation invoice template', 'language translation billing', 'translation service invoice']
  },
  {
    slug: 'voice-actor',
    title: 'Voice Actor',
    profession: 'Voice Acting',
    description: 'Professional voice acting invoices for voice-overs, narration, and audio recording services.',
    benefits: [
      'Per-project or per-word billing',
      'Track usage rights and licensing',
      'Include recording and editing',
      'Manage buyout fees'
    ],
    commonItems: [
      'Voice-Over Recording',
      'Commercial Voice Work',
      'Narration',
      'Character Voices',
      'Audio Editing',
      'Usage Rights License'
    ],
    tips: [
      'Specify word count and duration',
      'Include usage rights and territory',
      'Detail revisions included',
      'Add rush delivery fees'
    ],
    metaDescription: 'Voice actor invoice template for voice-over work, narration, and audio recording services.',
    keywords: ['voice actor invoice', 'voice over invoice template', 'voiceover billing', 'narration invoice']
  },
  {
    slug: 'freelancer',
    title: 'Freelancer',
    profession: 'Freelancing',
    description: 'Versatile invoice template for freelancers across all industries, perfect for independent contractors and gig workers.',
    benefits: [
      'Flexible for any service type',
      'Track multiple projects and clients',
      'Include hourly or project-based rates',
      'Manage retainers and deposits'
    ],
    commonItems: [
      'Freelance Services',
      'Project Work',
      'Consulting Hours',
      'Creative Services',
      'Research & Development',
      'Client Meetings'
    ],
    tips: [
      'Clearly define scope of work',
      'Include payment terms (Net 30/60)',
      'Add late payment penalties if applicable',
      'Specify deliverables and milestones'
    ],
    metaDescription: 'Free freelancer invoice template for independent contractors. Create professional invoices for any freelance service or project.',
    keywords: ['freelancer invoice', 'freelance invoice template', 'independent contractor billing', 'gig worker invoice']
  }
];

// Generate static paths for all niches
export function getAllNicheSlugs(): string[] {
  return niches.map(niche => niche.slug);
}

// Get niche data by slug
export function getNicheBySlug(slug: string): NicheData | undefined {
  return niches.find(niche => niche.slug === slug);
}

// Get related niches (for "You might also like" section)
export function getRelatedNiches(currentSlug: string, count: number = 3): NicheData[] {
  const allNiches = niches.filter(niche => niche.slug !== currentSlug);
  // Shuffle and return random niches
  return allNiches.sort(() => Math.random() - 0.5).slice(0, count);
}
