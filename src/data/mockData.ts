export interface Event {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  city: string;
  venue: string;
  venueAddress: string;
  date: string;
  time: string;
  price: string;
  image?: string;
  tags: string[];
  language?: string;
  ageRestriction?: string;
  features?: string[];
  latitude?: number;
  longitude?: number;
}

export interface Registration {
  id: string;
  eventId: string;
  eventName: string;
  userId: string;
  ticketCount: number;
  totalAmount: string;
  timestamp: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Arambikal​ama? - Tamil Unplugged Night',
    category: 'Concert',
    description: 'A full Tamil unplugged night by Jammmify at AEIOU Manyata Tech Park',
    fullDescription: 'ARAMBIKALAMA? A full Tamil unplugged night by Jammmify at AEIOU! Get ready for an unforgettable evening filled with soulful Tamil music.',
    city: 'Bengaluru',
    venue: 'AEIOU Manyata, Manyata Tech Park',
    venueAddress: 'Manyata Tech Park, Nagavara, Bengaluru, Karnataka 560045',
    date: 'Dec 07, 2025',
    time: '7:00 PM onwards',
    price: '₹499 onwards',
    image: 'https://images.unsplash.com/photo-1642552556378-549e3445315e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBwZXJmb3JtZXJ8ZW58MXx8fHwxNzY0OTAyMjAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Concert', 'Jamming', 'Singing', 'Sing Along', 'Tamil Concert'],
    language: 'Tamil',
    ageRestriction: 'All age groups',
    features: [
      'Differently-abled friendly',
      'All safety measures enabled',
      'Seating (FCFS)',
      'Networking Sessions',
      'Social Mixers',
      'Indoor Event',
      'Family-Friendly',
      'Suitable for all ages',
      'Teens and 18+'
    ],
    latitude: 13.0458,
    longitude: 77.6208
  },
  {
    id: '2',
    title: 'Standup Comedy Night with Kenny Sebastian',
    category: 'Comedy',
    description: 'An evening of laughter with one of India\'s finest comedians',
    fullDescription: 'Join us for a hilarious night of standup comedy featuring Kenny Sebastian. Get ready to laugh until your sides hurt!',
    city: 'Mumbai',
    venue: 'Phoenix Marketcity, Kurla',
    venueAddress: 'Phoenix Marketcity, LBS Marg, Kurla West, Mumbai, Maharashtra 400070',
    date: 'Dec 15, 2025',
    time: '8:00 PM',
    price: '₹799 onwards',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=1080',
    tags: ['Comedy', 'Standup', 'Entertainment'],
    language: 'English/Hindi',
    ageRestriction: '18+',
    features: [
      'Indoor Event',
      'All safety measures enabled',
      'Seating (FCFS)',
      'Networking Sessions',
      'Social Mixers'
    ],
    latitude: 19.0822,
    longitude: 72.8865
  },
  {
    id: '3',
    title: 'Sunburn Arena ft. Martin Garrix',
    category: 'Music Festival',
    description: 'Asia\'s biggest EDM festival featuring international DJ Martin Garrix',
    fullDescription: 'Experience the ultimate EDM extravaganza with Martin Garrix live in concert. Dance the night away with thousands of music lovers.',
    city: 'Bengaluru',
    venue: 'Jayamahal Palace Grounds',
    venueAddress: 'Jayamahal Palace Grounds, Bengaluru, Karnataka 560006',
    date: 'Dec 31, 2025',
    time: '6:00 PM onwards',
    price: '₹2,499 onwards',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1080',
    tags: ['Music Festival', 'EDM', 'Dance', 'Party'],
    language: 'All',
    ageRestriction: '18+',
    features: [
      'Outdoor Event',
      'All safety measures enabled',
      'Multiple stages',
      'Food & Beverages available',
      'Parking available'
    ],
    latitude: 13.0067,
    longitude: 77.5963
  },
  {
    id: '4',
    title: 'Classical Carnatic Music Evening',
    category: 'Music',
    description: 'An evening of classical Carnatic music by renowned artists',
    fullDescription: 'Immerse yourself in the rich tradition of Carnatic music with performances by leading artists from South India.',
    city: 'Chennai',
    venue: 'Music Academy',
    venueAddress: 'The Music Academy, TTK Road, Royapettah, Chennai, Tamil Nadu 600014',
    date: 'Jan 05, 2026',
    time: '6:30 PM',
    price: '₹350 onwards',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1080',
    tags: ['Classical Music', 'Carnatic', 'Traditional'],
    language: 'Tamil',
    ageRestriction: 'All ages',
    features: [
      'Indoor Event',
      'Traditional ambiance',
      'Family-Friendly',
      'Suitable for all ages'
    ],
    latitude: 13.0527,
    longitude: 80.2569
  },
  {
    id: '5',
    title: 'Contemporary Dance Workshop',
    category: 'Dance',
    description: 'Learn contemporary dance from international choreographers',
    fullDescription: 'A 3-day intensive workshop on contemporary dance techniques led by award-winning choreographers from around the world.',
    city: 'Mumbai',
    venue: 'Prithvi Theatre',
    venueAddress: 'Prithvi Theatre, Janki Kutir, Juhu Church Road, Mumbai, Maharashtra 400049',
    date: 'Jan 20, 2026',
    time: '10:00 AM - 5:00 PM',
    price: '₹3,500 for 3 days',
    image: 'https://images.unsplash.com/photo-1698824554771-293b5dcc42db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMHBlcmZvcm1hbmNlJTIwc3RhZ2V8ZW58MXx8fHwxNzY0ODI1Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Dance', 'Workshop', 'Contemporary', 'Learning'],
    language: 'English',
    ageRestriction: '16+',
    features: [
      'Indoor Event',
      'Professional training',
      'Certificate provided',
      'All skill levels welcome'
    ],
    latitude: 19.1076,
    longitude: 72.8263
  },
  {
    id: '6',
    title: 'Art Exhibition - Modern Perspectives',
    category: 'Art',
    description: 'A curated exhibition of contemporary Indian art',
    fullDescription: 'Explore the works of emerging and established Indian artists showcasing modern perspectives on traditional themes.',
    city: 'New Delhi',
    venue: 'National Gallery of Modern Art',
    venueAddress: 'Jaipur House, India Gate, New Delhi, Delhi 110003',
    date: 'Dec 10, 2025',
    time: '10:00 AM - 6:00 PM',
    price: '₹100',
    image: 'https://images.unsplash.com/photo-1683222042853-37cd29faf895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwYWludGluZyUyMGNhbnZhc3xlbnwxfHx8fDE3NjQ4NDk1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Art', 'Exhibition', 'Contemporary Art', 'Gallery'],
    language: 'All',
    ageRestriction: 'All ages',
    features: [
      'Indoor Event',
      'Guided tours available',
      'Photography allowed',
      'Family-Friendly'
    ],
    latitude: 28.6129,
    longitude: 77.2295
  },
  {
    id: '7',
    title: 'Poetry Slam Competition',
    category: 'Literature',
    description: 'Compete in Hyderabad\'s biggest poetry slam event',
    fullDescription: 'Showcase your poetry skills in this high-energy slam competition. Open mic and competition rounds available.',
    city: 'Hyderabad',
    venue: 'Lamakaan',
    venueAddress: 'Lamakaan, Road No. 1, Banjara Hills, Hyderabad, Telangana 500034',
    date: 'Dec 18, 2025',
    time: '7:00 PM',
    price: 'Free Entry',
    image: 'https://images.unsplash.com/photo-1612907260223-2c7aff7a7d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwbm90ZWJvb2slMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ4NTE1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Poetry', 'Literature', 'Competition', 'Open Mic'],
    language: 'English/Hindi/Telugu',
    ageRestriction: 'All ages',
    features: [
      'Indoor Event',
      'Open Mic',
      'Competition',
      'Prizes for winners',
      'Networking Sessions'
    ],
    latitude: 17.4239,
    longitude: 78.4738
  },
  {
    id: '8',
    title: 'Food & Music Festival',
    category: 'Festival',
    description: 'A celebration of food and music from across India',
    fullDescription: 'Experience the best of Indian cuisine paired with live music performances from various genres.',
    city: 'Bengaluru',
    venue: 'Cubbon Park',
    venueAddress: 'Kasturba Road, Sampangi Rama Nagar, Bengaluru, Karnataka 560001',
    date: 'Jan 25, 2026',
    time: '11:00 AM - 10:00 PM',
    price: '₹200 (Entry)',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1080',
    tags: ['Festival', 'Food', 'Music', 'Cultural'],
    language: 'All',
    ageRestriction: 'All ages',
    features: [
      'Outdoor Event',
      'Food stalls',
      'Live music',
      'Family-Friendly',
      'Pet-friendly'
    ],
    latitude: 12.9763,
    longitude: 77.5925
  }
];

export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};

export const getEventsByCity = (city: string): Event[] => {
  return mockEvents.filter(event => event.city === city);
};

export const getUserRegistrations = (userId: string): string[] => {
  const registrations = localStorage.getItem(`registrations_${userId}`);
  return registrations ? JSON.parse(registrations) : [];
};

export const registerForEvent = (userId: string, eventId: string): void => {
  const registrations = getUserRegistrations(userId);
  if (!registrations.includes(eventId)) {
    registrations.push(eventId);
    localStorage.setItem(`registrations_${userId}`, JSON.stringify(registrations));
  }
};

export const isUserRegistered = (userId: string, eventId: string): boolean => {
  const registrations = getUserRegistrations(userId);
  return registrations.includes(eventId);
};

// For backward compatibility with existing code
export type Competition = Event;
export const mockCompetitions = mockEvents;
export const getCompetitionById = getEventById;
export const registerForCompetition = registerForEvent;
export const getUserSubmissions = (userId: string): any[] => [];
export const addSubmission = (userId: string, submission: any): void => {};
export const getAllSubmissions = (): any[] => [];

export interface Submission {
  id: string;
  competitionId: string;
  competitionName: string;
  userId: string;
  title: string;
  description: string;
  fileUrl: string;
  timestamp: string;
  status: 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected';
}
