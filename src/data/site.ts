// Central site configuration. Edit copy/structure here, not in every component.

export const SITE = {
  name: 'Sukrut Mannari',
  kicker: 'AEROSPACE · ROBOTICS · AI',
  initials: 'SM',
  description:
    'Portfolio of Sukrut Mannari — aspiring aerospace & computer science engineer. Maker projects in robotics, flight, electronics, and AI.',
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Code', href: '/code' },
  { label: 'Academics', href: '/academics' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Music', href: '/music' },
  { label: 'Journal', href: '/journal' },
  { label: 'Résumé ↓', href: '/resume.pdf', resume: true },
  { label: '✎ Admin', href: '/admin', admin: true },
];

// Engineering disciplines — order here controls sidebar + grouping order.
// Add a new discipline by adding one line (and using its key in a project's frontmatter).
export const CATEGORIES = [
  { key: 'aero', label: 'Aeronautics & Flight' },
  { key: 'robotics', label: 'Robotics & Control' },
  { key: 'electronics', label: 'Electronics & Microcontrollers' },
  { key: 'cad', label: 'CAD & Design' },
  { key: 'automation', label: 'Smart Home & Automation' },
  { key: 'ai', label: 'AI & Autonomy' },
  { key: 'structures', label: 'Structures & Mechanical' },
];

export const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.key, c.label])
);

// Per-section contextual toolbox ribbons.
export const TOOLBOX: Record<string, { label: string; items: string[] }> = {
  engineering: {
    label: 'ENGINEERING TOOLKIT',
    items: ['Fusion 360', 'Arduino', 'Lego EV3', 'Proxmox', 'Home Assistant', 'Z-Wave', 'C++'],
  },
  code: { label: 'STACK', items: ['Python', 'JavaScript', 'PyScript', 'HTML5 Canvas', 'Git'] },
  academics: {
    label: 'TRACKS',
    items: ['RSM Algebra & Geometry', 'AoPS AMC 8 / MATHCOUNTS', 'AMC 8', 'JHMMC', 'Math Kangaroo', 'Noetic'],
  },
  leadership: {
    label: 'INITIATIVES',
    items: ['Taekwondo mentoring', 'Stage Band', 'Camp Dorm Lead', 'School Store', 'TREPS', 'e-waste drive', 'FLL club'],
  },
  music: { label: 'INSTRUMENTS', items: ['Alto Sax', 'Tenor Sax', 'Baritone Sax', 'Stage Band'] },
};

export const LEADERSHIP_ROLES = [
  { title: 'Taekwondo Mentor', subtitle: '2nd Degree Black Belt', description: 'Teaching and mentoring junior students — forms, discipline, and confidence.', status: 'Active' },
  { title: 'FLL Club — Co-founder', subtitle: 'FIRST Lego League', description: 'Structuring and pitching a new robotics sub-club with Mr. Hahn. Awaiting funding approval.', status: 'In Progress' },
  { title: 'Camp Dorm Lead', subtitle: 'YMCA Camp', description: 'Selected to help counsellors manage peers and activities.', status: 'Alumni' },
  { title: 'School Store', subtitle: 'Cashier & Operations', description: 'Managed sales and customer communication as a volunteer cashier.', status: 'Alumni' },
  { title: 'TREPS Marketplace', subtitle: 'Student Entrepreneur', description: 'Ran a personal Hot Wheels booth — own inventory and pricing.', status: 'Alumni' },
  { title: 'E-Waste Recycling Drive', subtitle: 'Initiative — Planned', description: 'Proposing a broken electronics drive to benefit the Computer Club and Innovations Lab.', status: 'Planned' },
];

export const MUSIC_PROGRESSION = [
  { instrument: 'Alto Saxophone', period: '5th Grade', note: 'Started in school band.' },
  { instrument: 'Tenor Saxophone', period: '6th Grade', note: 'Moved up to tenor.' },
  { instrument: 'Baritone Saxophone', period: '7th Grade', note: 'Earned lead baritone role — the bass foundation of the band.' },
];
