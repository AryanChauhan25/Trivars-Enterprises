const envWhatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || ''
const envWhatsappLabel = import.meta.env.VITE_WHATSAPP_LABEL || ''
const envContactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''

export const CONTACT = {
  whatsappNumber: envWhatsappNumber,
  whatsappLabel: envWhatsappLabel,
  email: envContactEmail,
}

export const pageTitle = 'Trivars Enterprises | Business Stationery Store'

export const metaDescription =
  'Trivars Enterprises provides complete corporate stationery, professional printing, bulk office essentials, and quick WhatsApp or email enquiries from a searchable product catalog.'

export const descriptionText =
  'Instead of pushing customers into account creation, this version keeps the catalog open and uses quick enquiry popups, floating contact actions, and simple product-level outreach in the same spirit as the Aryan Clinic app.'

export const highlights = [
  'Complete stationery solutions for businesses of all sizes',
  'Reliable service with on-time delivery and procurement support',
  'A single partner for branded stationery, printing, and office supplies',
]

export const offerings = [
  {
    title: 'Customized branded stationery',
    description:
      'Letterheads, folders, notepads, envelopes, and office touchpoints designed to keep every client interaction on-brand.',
  },
  {
    title: 'Professional printing services',
    description:
      'Sharp, presentation-ready print support for sales kits, internal documents, event collateral, and everyday business communication.',
  },
  {
    title: 'Bulk office essentials',
    description:
      'Reliable sourcing for high-rotation workplace supplies so procurement teams can manage one practical, cost-conscious pipeline.',
  },
  {
    title: 'Executive supply solutions',
    description:
      'Premium desk accessories and gifting-ready stationery curated for leadership teams, meetings, and brand-forward presentations.',
  },
]

export const workflow = [
  'Search the catalog by product, category, or business use.',
  'Open a quick WhatsApp or email enquiry popup from any product.',
  'Share your requirement and receive product guidance, pricing, and bulk-order support.',
]

export const footerLinks = [
  { label: 'Catalog', href: '#catalog' },
  { label: 'Offerings', href: '#offerings' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Contact', href: '#footer-contact' },
]

export const catalog = [
  {
    id: 1,
    name: 'Executive Letterhead Pack',
    category: 'Brand Identity',
    price: 'Rs. 799',
    tags: ['letterhead', 'branding', 'corporate'],
    description: 'Premium letterheads for proposals, invoices, and formal business communication.',
  },
  {
    id: 2,
    name: 'Custom Business Card Set',
    category: 'Brand Identity',
    price: 'Rs. 499',
    tags: ['business card', 'branding', 'sales'],
    description: 'Professional business cards designed for teams, founders, and client-facing staff.',
  },
  {
    id: 3,
    name: 'Presentation Folder Kit',
    category: 'Brand Identity',
    price: 'Rs. 899',
    tags: ['folder', 'presentation', 'branding'],
    description: 'Branded folders for proposals, onboarding kits, and boardroom handovers.',
  },
  {
    id: 4,
    name: 'Office Notepad Bundle',
    category: 'Daily Operations',
    price: 'Rs. 349',
    tags: ['notepad', 'office', 'daily'],
    description: 'High-usage notepads for teams that need clean, consistent desk essentials.',
  },
  {
    id: 5,
    name: 'Printer Paper Bulk Box',
    category: 'Daily Operations',
    price: 'Rs. 1,299',
    tags: ['paper', 'bulk', 'office'],
    description: 'Reliable paper stock for day-to-day printing, forms, and internal documents.',
  },
  {
    id: 6,
    name: 'Files and Binder Combo',
    category: 'Daily Operations',
    price: 'Rs. 649',
    tags: ['files', 'binder', 'storage'],
    description: 'Organized filing support for admin teams, procurement desks, and operations staff.',
  },
  {
    id: 7,
    name: 'Executive Notebook Set',
    category: 'Leadership Kits',
    price: 'Rs. 999',
    tags: ['notebook', 'executive', 'gift'],
    description: 'Premium notebooks ideal for managers, client meetings, and leadership teams.',
  },
  {
    id: 8,
    name: 'Custom Pen Gift Box',
    category: 'Leadership Kits',
    price: 'Rs. 1,499',
    tags: ['pen', 'gift', 'executive'],
    description: 'A polished gifting option for events, onboarding, and high-value relationships.',
  },
]
