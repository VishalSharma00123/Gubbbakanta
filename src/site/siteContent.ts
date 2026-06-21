export const site = {
  name: 'Gubbikantha Farm Homestay',
  shortName: 'Gubbikantha',
  tagline: 'Nature farm homestay in the heart of Shimoga',
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Places Nearby', href: '#places' },
    { label: 'Rooms & Tariff', href: '#rooms' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Sagar Taluk · Shimoga District · Karnataka',
    title: 'Perfect place\nfor a nature\nadmirer',
    description:
      'Our nature farm homestay is a wonderful opportunity for those who want to get away from the hustle and bustle of hectic life and stay in a peaceful environment amidst the greenery.',
    primaryCta: 'Book your stay',
    secondaryCta: 'View rooms & tariff',
  },
  about: {
    eyebrow: 'About us',
    title: 'Experience rural life amidst the forest',
    paragraphs: [
      'Gubbikantha Farm Homestay is located in Sagar Taluk of Shimoga District, about 20 km from Jog Falls on the Bhatkal Road, amidst dense green forest surroundings. It offers a peaceful place to relax, stay, and explore nature.',
      'We promote experiential tourism, rural tourism and agritourism. This unique homestay allows guests to experience farming and natural rural life. It is an ideal place for nature meditation and yoga in an ashram-like setting in a natural environment. The serene atmosphere is ideal for nature lovers, eco-enthusiasts and bird watchers.',
    ],
    highlights: [
      { title: 'Experiential tourism', body: 'Hands-on farming and authentic rural village life.' },
      { title: 'Forest setting', body: 'Dense greenery, bird watching, and over 50 Ayurvedic plant varieties.' },
      { title: 'Peace & wellness', body: 'Ideal for meditation, yoga, and reconnecting with nature.' },
    ],
    image: '/images/about-homestay.png',
  },
  places: {
    eyebrow: 'Places nearby',
    title: 'Explore the wonders around Gubbikantha',
    intro: 'Discover waterfalls, temples, adventure treks, and scenic routes — all within easy reach of the homestay.',
    items: [
      { name: 'Jog Falls', distance: '20 KM', note: 'Iconic waterfall of Karnataka' },
      { name: 'Bheemeshwara', distance: '19.5 KM', note: 'Sacred temple in the Western Ghats' },
      { name: 'Kanuru Kote', distance: '20 KM', note: 'Historic hill fort' },
      { name: 'Dabbe Falls', distance: '6 KM', note: 'Adventure trekking destination' },
      { name: 'Vadanabayalu', distance: '28 KM', note: 'Scenic countryside escape' },
      { name: 'Siganduru', distance: '28 KM', note: 'Muppane launch route' },
      { name: 'Varadahalli', distance: '50 KM', note: 'Spiritual retreat in the hills' },
      { name: 'Murdeshwar', distance: '73 KM', note: 'Coastal temple town' },
    ],
  },
  rooms: {
    eyebrow: 'Rooms & tariff',
    title: 'Comfortable rooms in nature',
    intro: 'Choose from rooms with attached bathrooms or shared facilities. All rooms accommodate 2 guests; extra beds available on request.',
    tariffLabel: 'Rooms and tariffs (without food)',
    offerBadge: 'Limited period offer',
    items: [
      {
        numbers: 'Room No. 1, 2 & 3',
        features:
          'Attached bathroom with hot water and western commode. Accommodation for 2 people per room.',
        originalPrice: 3200,
        offerPrice: 2200,
        originalExtraBed: 800,
        offerExtraBed: 500,
      },
      {
        numbers: 'Room No. 4 & 5',
        features:
          'Common bathroom with hot water and western commode. Accommodation for 2 people per room.',
        originalPrice: 2600,
        offerPrice: 1600,
        originalExtraBed: 800,
        offerExtraBed: 500,
      },
    ],
    food: {
      label: 'Food charges (extra)',
      price: 200,
      note: 'Only pure vegetarian local village food is served. Please inform us in advance.',
    },
    package: {
      title: 'Gubbikantha Farm Homestay package',
      price: 3500,
      per: 'per person',
      includes: [
        'Accommodation',
        'All meals',
        'Farm activities',
        'Guided trek to more than six hidden local spots',
        'Explore 50+ varieties of Ayurvedic plants',
        'Bird watching opportunities',
      ],
      note: 'For more details, please contact the Gubbikantha Farm Homestay team.',
    },
    booking: {
      title: 'How to book',
      steps: [
        'Check availability by contacting us via WhatsApp, phone, email, social media, or Google Business page.',
        'Share your guest details and preferences.',
        'After receiving confirmation of availability, make the advance payment.',
        'Once payment is received, you will receive a booking confirmation with all required details.',
      ],
    },
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'Life at Gubbikantha',
    intro: 'A glimpse of our farm, rooms, and the natural beauty that surrounds us.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Lush green forest surrounding the homestay',
        span: 'large' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
        alt: 'Farm and garden views',
        span: 'small' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        alt: 'Rolling hills and countryside',
        span: 'small' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Mountain landscape near the homestay',
        span: 'medium' as const,
      },
      {
        src: 'https://images.unsplash.com/photo-1518173946687-a4c036bc2ee2?auto=format&fit=crop&w=800&q=80',
        alt: 'Nature trails and greenery',
        span: 'medium' as const,
      },
    ],
  },
  contact: {
    eyebrow: 'Contact us',
    title: 'You are just one phone call away',
    address: {
      line1: 'Halaballi, Aralagodu [P]',
      line2: 'Sagar [T], Shivamogga [D]',
      pin: '577421',
    },
    phones: ['+91 9449322171', '+91 9449952224'],
    email: 'gubbikantha5@gmail.com',
    mapUrl: 'https://goo.gl/maps/RVqfY6YmPCc2iUA87',
    terms: [
      'For family only',
      'Pure vegetarian food only',
      'No television',
      'No air-conditioner',
      'ID card a must',
    ],
    howToReach: {
      title: 'How to reach us?',
      body: 'Located about 20 km from Jog Falls on the Bhatkal Road. Use the map link below for directions, or call us for guidance.',
    },
  },
  footer: {
    social: [
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61563585376963',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/gubbikanthahomestay?igsh=MTQ0YjdiZ3VvM282dA==',
      },
    ],
    legal: '© 2026 Gubbikantha Farm Homestay. All rights reserved.',
  },
}

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`
}

export const whatsappNumber = '919449322171'

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function buildGeneralBookingWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    `Hello! I would like to enquire about booking a stay at Gubbikantha Farm Homestay.

Please let me know about room availability and booking details. Thank you!`,
  )
}

export function buildPackageWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    `Hello! I would like to enquire about the Gubbikantha Farm Homestay package (₹3,500 per person including accommodation, meals, activities, and guided trek).

Please share availability and booking details. Thank you!`,
  )
}

export function buildRoomWhatsAppUrl(numbers: string, features: string): string {
  return buildWhatsAppUrl(
    `Hello! I would like to enquire about room availability at Gubbikantha Farm Homestay.

${numbers}
${features}

Are these rooms available? Please let me know the availability and booking details. Thank you!`,
  )
}
