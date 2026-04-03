import type {Course} from '../types/course';
import type {HoverDetail} from '../types/types';

/** Edit this to change the New Arrivals section headline (Udemy-style block). */
export const newArrivalsSectionMeta = {
  title: 'Skills to strengthen your FM and CRE career',
  subtitle: 'From core FM operations through CRE portfolio strategy—choose a topic and explore our latest video modules.'
} as const;

const newArrivalCategoryEntries = [
  {id: 'fm-core', label: 'FM Core Operations'},
  {id: 'cre', label: 'Corporate Real Estate'},
  {id: 'workspace', label: 'Space & Workplace'},
  {id: 'sustainability', label: 'Energy & Sustainability'},
  {id: 'vendors', label: 'Vendor Management'},
  {id: 'safety', label: 'Safety & Compliance'}
] as const;

export const newArrivalCategoryLabels: Record<string, string> = Object.fromEntries(newArrivalCategoryEntries.map((c) => [c.id, c.label]));

export const newArrivalCategories = [{id: 'all', label: 'All'}, ...newArrivalCategoryEntries] as const;

/** Top / available courses block — title, tabs, and carousel on the home page. */
export const availableCoursesSectionMeta = {
  title: 'Top courses',
  subtitle: 'Hand-picked FM and CRE programs with practical lessons and member pricing—browse by focus area.'
} as const;

export const availableCourseCategoryTabs = [
  {id: 'all', label: 'All'},
  {id: 'Facilities Management', label: 'Facilities Management'},
  {id: 'Corporate Real Estate', label: 'Corporate Real Estate'},
  {id: 'Engineering', label: 'Engineering'},
  {id: 'Operations', label: 'Operations'}
] as const;

export const highlights = ['Industry-focused learning', 'Self-paced courses', 'Career-focused outcomes'];

export const learningTracks = [
  {
    title: 'FM Fundamentals',
    copy: 'Core concepts, day-to-day operations, and service quality basics.'
  },
  {
    title: 'CRE Essentials',
    copy: 'Space planning, utilization, and workplace strategy foundations.'
  },
  {
    title: 'MEP & Asset Basics',
    copy: 'Technical essentials for systems, maintenance, and lifecycle planning.'
  }
];

export const newArrivals: Course[] = [
  {
    id: 'new-1',
    title: 'Energy Management for FM Teams',
    description: 'Cut utility waste with practical audits and energy-saving controls.',
    durationHours: 2,
    level: 'Beginner',
    image: '/course-images/new-arrival-1.jpg',
    category: 'sustainability',
    instructor: 'Alex Morgan, CEM',
    rating: 4.8,
    ratingCount: 1820,
    priceInr: 2899,
    promoBadge: 'Bestseller'
  },
  {
    id: 'new-2',
    title: 'CRE Budget Planning Essentials',
    description: 'Plan annual CRE budgets with forecasting basics and cost tracking.',
    durationHours: 2.5,
    level: 'Intermediate',
    image: '/course-images/new-arrival-2.jpg',
    category: 'cre',
    instructor: 'Priya Nair',
    rating: 4.7,
    ratingCount: 3102,
    priceInr: 3469,
    promoBadge: 'Premium'
  },
  {
    id: 'new-3',
    title: 'Vendor Performance Scorecards',
    description: 'Design scorecards to monitor vendor SLAs, quality, and responsiveness.',
    durationHours: 1.5,
    level: 'Beginner',
    image: '/course-images/new-arrival-3.jpg',
    category: 'vendors',
    instructor: 'Marcus Lee',
    rating: 4.5,
    ratingCount: 942,
    priceInr: 1999,
    promoBadge: 'Top seller'
  },
  {
    id: 'new-4',
    title: 'Space Utilization Review Basics',
    description: 'Measure space usage trends and identify optimization opportunities.',
    durationHours: 2,
    level: 'Intermediate',
    image: '/course-images/new-arrival-1.jpg',
    category: 'workspace',
    instructor: 'Samira Okonkwo',
    rating: 4.6,
    ratingCount: 1567,
    priceInr: 2599,
    promoBadge: 'New'
  },
  {
    id: 'new-5',
    title: 'Preventive Maintenance Planning Sprint',
    description: 'Build PM schedules that reduce breakdowns and improve asset uptime.',
    durationHours: 2.25,
    level: 'Beginner',
    image: '/course-images/new-arrival-2.jpg',
    category: 'fm-core',
    instructor: 'James Okafor',
    rating: 4.7,
    ratingCount: 4208,
    priceInr: 3199,
    promoBadge: 'Bestseller'
  },
  {
    id: 'new-6',
    title: 'SLA Monitoring for FM Service Teams',
    description: 'Track SLA performance with simple KPIs and escalation workflows.',
    durationHours: 1.75,
    level: 'Intermediate',
    image: '/course-images/new-arrival-3.jpg',
    category: 'safety',
    instructor: 'Elena Vasquez',
    rating: 4.4,
    ratingCount: 678,
    priceInr: 2299,
    promoBadge: 'Best'
  }
];

export const newArrivalHoverDetails: Record<string, HoverDetail> = {
  'new-1': {
    badge: 'New',
    updated: 'Updated July 2025',
    meta: '2 total hours • Beginner • Subtitles, CC',
    summary: 'Learn practical methods to reduce utility waste and improve building efficiency.',
    bullets: [
      'Build an energy audit checklist for daily FM operations',
      'Track utility trends and identify avoidable energy losses',
      'Create quick action plans for measurable cost reduction'
    ]
  },
  'new-2': {
    badge: 'Bestseller',
    updated: 'Updated August 2025',
    meta: '2.5 total hours • Intermediate • Subtitles, CC',
    summary: 'Master CRE budgeting basics with practical templates and planning frameworks.',
    bullets: [
      'Build annual CRE budgets aligned with portfolio strategy',
      'Estimate operating costs using practical forecasting methods',
      'Monitor budget variance and improve spending control'
    ]
  },
  'new-3': {
    badge: 'Popular',
    updated: 'Updated June 2025',
    meta: '1.5 total hours • Beginner • Subtitles, CC',
    summary: 'Design scorecards that help evaluate vendor quality and SLA performance.',
    bullets: ['Define KPIs for vendor quality, response, and delivery', 'Use scorecards to run structured monthly reviews', 'Improve contract outcomes through data-based feedback']
  },
  'new-4': {
    badge: 'New',
    updated: 'Updated July 2025',
    meta: '2 total hours • Intermediate • Subtitles, CC',
    summary: 'Understand space utilization metrics to optimize workplace planning decisions.',
    bullets: [
      'Calculate utilization from occupancy and seat usage data',
      'Identify underused zones and repurpose opportunities',
      'Present utilization insights to business stakeholders'
    ]
  },
  'new-5': {
    badge: 'Trending',
    updated: 'Updated July 2025',
    meta: '2.25 total hours • Beginner • Subtitles, CC',
    summary: 'Set up preventive maintenance routines that reduce unplanned downtime.',
    bullets: [
      'Create PM schedules by asset criticality and risk',
      'Standardize maintenance tasks and frequency planning',
      'Use PM logs to improve reliability and lifecycle outcomes'
    ]
  },
  'new-6': {
    badge: 'New',
    updated: 'Updated August 2025',
    meta: '1.75 total hours • Intermediate • Subtitles, CC',
    summary: 'Build SLA dashboards and escalation rules for stronger service performance.',
    bullets: [
      'Track SLA breaches with clear ownership and timelines',
      'Design escalation paths for critical service delays',
      'Use KPI reviews to improve team response consistency'
    ]
  }
};

export const featuredHoverDetails: Record<string, HoverDetail> = {
  'fm-101': {
    badge: 'Bestseller',
    updated: 'Updated July 2025',
    meta: '2 total hours • Beginner • Subtitles, CC',
    summary: 'A complete starter program to understand core FM operations and service delivery.',
    bullets: [
      'Learn FM workflows used in day-to-day facility operations',
      'Understand service quality basics and operational controls',
      'Build confidence to manage FM tasks in real projects'
    ]
  },
  'cre-201': {
    badge: 'Top Rated',
    updated: 'Updated August 2025',
    meta: '3 total hours • Intermediate • Subtitles, CC',
    summary: 'Practical CRE strategy lessons for planning, utilization, and portfolio decisions.',
    bullets: [
      'Apply CRE strategy frameworks to real workplace scenarios',
      'Assess portfolio performance and optimization options',
      'Connect business goals to occupancy and lease strategy'
    ]
  },
  'mep-150': {
    badge: 'Popular',
    updated: 'Updated June 2025',
    meta: '2 total hours • Beginner • Subtitles, CC',
    summary: 'Understand essential MEP systems and improve maintenance planning outcomes.',
    bullets: ['Learn core HVAC, electrical, and plumbing system basics', 'Plan preventive checks to reduce technical failures', 'Link MEP maintenance to asset lifecycle decisions']
  },
  'fm-220': {
    badge: 'Recommended',
    updated: 'Updated July 2025',
    meta: '2 total hours • Intermediate • Subtitles, CC',
    summary: 'Build practical safety and compliance routines for professional FM teams.',
    bullets: [
      'Run compliance checks using ready-to-use review templates',
      'Implement site safety controls and audit preparation steps',
      'Improve reporting practices for governance and risk teams'
    ]
  },
  'cre-310': {
    badge: 'Advanced Pick',
    updated: 'Updated August 2025',
    meta: '3 total hours • Advanced • Subtitles, CC',
    summary: 'Deep-dive into lease administration, tracking, and portfolio data management.',
    bullets: [
      'Track critical lease milestones and renewal timelines',
      'Structure portfolio dashboards for decision-ready reporting',
      'Improve lease data quality and governance consistency'
    ]
  },
  'ops-180': {
    badge: 'New',
    updated: 'Updated July 2025',
    meta: '1.5 total hours • Beginner • Subtitles, CC',
    summary: 'Improve ticket handling and helpdesk workflows with practical prioritization.',
    bullets: [
      'Design triage rules for faster ticket categorization',
      'Set service priorities to improve response performance',
      'Use simple metrics to optimize helpdesk operations'
    ]
  }
};
