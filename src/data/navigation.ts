export interface NavItem {
  id: string;
  label: string;
}

/** Section anchors, in page order. `id` matches each section's DOM id. */
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'training', label: 'Training' },
  { id: 'membership', label: 'Membership Plans' },
  { id: 'diet', label: 'Diet Plans' },
  { id: 'contact', label: 'Contact' },
];
