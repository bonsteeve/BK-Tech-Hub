// Mock data for BK Digital Hub

export const services = [
  {
    id: 1,
    title: 'Website Design & Development',
    description: 'Custom-built, responsive websites tailored to your business needs. From simple landing pages to complex web applications.',
    shortDescription: 'Professional websites that convert visitors into customers with modern design and seamless functionality.',
    icon: 'Globe',
    image: '/images/service_webdesign.jpeg',
    features: [
      'Responsive design that works on all devices',
      'Fast loading speeds for better user experience',
      'SEO-optimized structure and content',
      'Content Management System (CMS) integration',
      'Contact forms and lead capture',
      'Social media integration',
      'Google Analytics setup',
      'SSL certificate and security features'
    ],
    deliverables: [
      'Fully functional responsive website',
      'Custom design mockups and wireframes',
      'Source code and documentation',
      'CMS training and user guide',
      'Basic SEO setup and optimization',
      '30 days of post-launch support',
      'Website hosting setup assistance',
      'Performance optimization report'
    ],
    timeline: '2-4 weeks depending on complexity',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'WordPress', 'Shopify'],
    portfolioExamples: ['Bicifu Technologies', 'Corporate Business Sites', 'Non-profit Organizations'],
    credibilityIndicators: {
      yearsExperience: 5,
      projectsCompleted: 150,
      certifications: ['Google Analytics Certified', 'WordPress Developer']
    }
  },
  {
    id: 2,
    title: 'Logo & Brand Identity',
    description: 'Professional logo design and complete brand identity packages that make your business stand out.',
    shortDescription: 'Memorable brand identities that capture your business essence and resonate with your target audience.',
    icon: 'Palette',
    image: '/images/services_logo.png',
    features: [
      'Custom logo design with multiple concepts',
      'Brand color palette development',
      'Typography selection and pairing',
      'Business card and letterhead design',
      'Social media profile graphics',
      'Brand guidelines document',
      'Vector and raster file formats',
      'Unlimited revisions until satisfied'
    ],
    deliverables: [
      'Final logo in multiple formats (AI, EPS, PNG, JPG)',
      '3-5 initial logo concepts to choose from',
      'Brand style guide with color codes and fonts',
      'Business card design template',
      'Letterhead and envelope design',
      'Social media kit with profile images',
      'Brand guidelines PDF document',
      'Source files for future modifications'
    ],
    timeline: '1-2 weeks for complete brand package',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva Pro'],
    portfolioExamples: ['Tech Startups', 'Restaurant Brands', 'Professional Services'],
    credibilityIndicators: {
      yearsExperience: 6,
      projectsCompleted: 200,
      certifications: ['Adobe Certified Expert', 'Brand Design Specialist']
    }
  },
  {
    id: 3,
    title: 'E-commerce Solutions',
    description: 'Complete online store solutions with payment integration, inventory management, and customer analytics.',
    shortDescription: 'Full-featured e-commerce platforms that drive sales and provide seamless shopping experiences.',
    icon: 'ShoppingCart',
    image: '/images/services_ecommerce.png',
    features: [
      'Custom online store design and development',
      'Secure payment gateway integration (M-Pesa, Visa, Mastercard)',
      'Product catalog and inventory management',
      'Customer account and order management',
      'Shopping cart and checkout optimization',
      'Mobile-responsive design',
      'SEO optimization for product pages',
      'Analytics and sales reporting dashboard'
    ],
    deliverables: [
      'Fully functional e-commerce website',
      'Payment gateway setup and testing',
      'Product catalog with categories and filters',
      'Customer registration and login system',
      'Order management and tracking system',
      'Admin dashboard for store management',
      'Mobile app integration (optional)',
      '60 days of post-launch support and training'
    ],
    timeline: '3-8 weeks depending on store complexity',
    technologies: ['Shopify', 'WooCommerce', 'React', 'Node.js', 'Stripe', 'M-Pesa API', 'PayPal'],
    portfolioExamples: ['Fashion Retail Stores', 'Electronics Shops', 'Local Marketplace Platforms'],
    credibilityIndicators: {
      yearsExperience: 4,
      projectsCompleted: 65,
      certifications: ['Shopify Partner', 'WooCommerce Expert', 'Payment Gateway Specialist']
    }
  }
];

export const pricingPackages = [
  {
    id: 1,
    name: 'Landing Page',
    price: '17,000',
    currency: 'Ksh',
    features: [
      'Single page design',
      'Responsive layout',
      'Contact form',
      'Fast loading',
      '1 month support'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Basic Website',
    price: '24,000',
    currency: 'Ksh',
    features: [
      'Up to 3 pages',
      'Responsive design',
      'Contact form',
      'Basic SEO',
      '2 months support'
    ],
    popular: false
  },
  {
    id: 3,
    name: 'Business Website',
    price: '30,000',
    currency: 'Ksh',
    features: [
      'Up to 10 pages',
      'Custom design',
      'CMS integration',
      'SEO optimization',
      'Blog functionality',
      '3 months support'
    ],
    popular: true
  },
  {
    id: 4,
    name: 'E-commerce Website',
    price: '60,000',
    currency: 'Ksh',
    features: [
      'Full online store',
      'Payment integration',
      'Product management',
      'Customer accounts',
      'Analytics dashboard',
      '6 months support'
    ],
    popular: false
  },
  {
    id: 5,
    name: 'Institution Website',
    price: '60,000',
    currency: 'Ksh from',
    features: [
      'Custom pages',
      'Student/Staff portals',
      'Content management',
      'Advanced features',
      'Scalable solution',
      '6 months support'
    ],
    popular: false
  }
];

export const additionalServices = [
  { name: 'SEO Services', price: '10,000', period: 'monthly' },
  { name: 'Logo Design', price: '1,500', period: 'monthly' },
  { name: 'Facebook Marketing', price: '20,000', period: 'monthly' }
];

export const portfolioProjects = [
  {
    id: 1,
    title: 'Bicifu Technologies',
    description: 'A modern website for a smart irrigation and farming technology company. Features include responsive design, partnership forms, and information about their innovative agricultural solutions.',
    image: 'https://www.bicifutechnologies.com/assets/images/logo.jpg',
    website: 'https://www.bicifutechnologies.com/',
    category: 'Website Development',
    technologies: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
    serviceId: 1 // Links to Website Design & Development service
  },
  {
    id: 2,
    title: 'Logo Design Portfolio (2D & 3D)',
    description: 'Professional 2D and 3D logo design services showcasing creative branding solutions for businesses across various industries including tech, hospitality, and professional services.',
    image: 'https://www.bicifutechnologies.com/assets/images/3D with background.jpg',
    website: null,
    category: 'Branding',
    technologies: ['Adobe Illustrator', '3D Modeling', 'Brand Identity'],
    serviceId: 2 // Links to Logo & Brand Identity service
  },
  {
    id: 3,
    title: 'E-commerce Fashion Store',
    description: 'Complete online store solution for a local fashion retailer with M-Pesa integration, inventory management, and customer analytics dashboard.',
    image: '/images/portfolio/fashion-ecommerce.jpg',
    website: null,
    category: 'E-commerce',
    technologies: ['Shopify', 'M-Pesa API', 'Google Analytics'],
    serviceId: 3 // Links to E-commerce Solutions service
  },
  {
    id: 4,
    title: 'School Management System',
    description: 'Custom web application for managing student records, fee payments, and parent communication with role-based access and automated reporting.',
    image: '/images/portfolio/school-management.jpg',
    website: null,
    category: 'Web Application',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    serviceId: 4 // Links to Custom Web Applications service
  },
  {
    id: 5,
    title: 'Local Restaurant SEO Campaign',
    description: 'Comprehensive SEO optimization that increased organic traffic by 300% and improved local search rankings for a Nairobi-based restaurant.',
    image: '/images/portfolio/restaurant-seo.jpg',
    website: null,
    category: 'SEO',
    technologies: ['Google Analytics', 'Google My Business', 'Local SEO'],
    serviceId: 5 // Links to SEO Optimization service
  },
  {
    id: 6,
    title: 'Real Estate Digital Marketing',
    description: 'Multi-channel digital marketing campaign including Google Ads, Facebook advertising, and content marketing that generated 150+ qualified leads.',
    image: '/images/portfolio/real-estate-marketing.jpg',
    website: null,
    category: 'Digital Marketing',
    technologies: ['Google Ads', 'Facebook Ads', 'Email Marketing'],
    serviceId: 6 // Links to Digital Marketing service
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'John Kamau',
    company: '',
    rating: 5,
    text: 'BK Digital Hub transformed our online presence. Professional, timely, and excellent communication throughout the project.'
  },
  {
    id: 2,
    name: 'Sarah Wanjiru',
    company: '',
    rating: 5,
    text: 'Our e-commerce site has increased sales by 200%! The team understood our vision and delivered beyond expectations.'
  },
  {
    id: 3,
    name: 'David Ochieng',
    company: '',
    rating: 5,
    text: 'Best web designers in Nairobi! Our booking system is seamless and our clients love the new website.'
  },
  {
    id: 4,
    name: 'Grace Akinyi',
    company: '',
    rating: 5,
    text: 'The institution website they built has improved our parent communication and student enrollment process significantly.'
  }
];

export const stats = [
  { number: '5.0', label: 'Customer Rating' },
  { number: '24/7', label: 'Support Available' }
];

export const companyInfo = {
  name: 'BKTech Digital Hub',
  tagline: 'Your Trusted Digital Partner in Kenya',
  phone: '+254729295315',
  email: 'bonsteeve@gmail.com',
  address: 'BK Building, Nairobi, Kenya',
  rating: 5.0,
  reviewCount: 88,
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819890591491!2d36.8219!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OScxOC44IkU!5e0!3m2!1sen!2ske!4v1234567890'
};