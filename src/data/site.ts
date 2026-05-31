// Central site configuration. Edit copy/structure here, not in every component.

export const SITE = {
  name: 'Sukrut Mannari',
  kicker: 'AEROSPACE · ROBOTICS · AI',
  initials: 'SM',
  description:
    'Portfolio of Sukrut Mannari — aspiring aerospace & computer science engineer. Maker projects in robotics, flight, electronics, 3D printing, and AI.',
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
];

// Engineering disciplines — order here controls sidebar + grouping order.
// Add a new discipline by adding one line (and using its key in a project's frontmatter).
export const CATEGORIES = [
  { key: 'aero', label: 'Aeronautics & Flight' },
  { key: 'robotics', label: 'Robotics & Control' },
  { key: 'electronics', label: 'Electronics & Microcontrollers' },
  { key: 'cad', label: 'CAD & 3D Printing' },
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
    items: ['Fusion 360', 'Arduino', 'Lego EV3', 'Bambu Lab', 'Proxmox', 'Home Assistant', 'Z-Wave', 'C++'],
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
