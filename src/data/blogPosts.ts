export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "how-to-choose-property-management",
    title: "How to Choose a Property Management Company",
    excerpt: "A complete guide to selecting the right property management partner for your real estate assets in Chicago. Learn what questions to ask and what to look for in a quality property management company.",
    author: "Stellar Property Management",
    date: "4/9/2025",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
  },
  {
    id: "condo-association-warning-signs",
    title: "5 Signs Your Condo Association Needs Help",
    excerpt: "Is your condo board overwhelmed? Here are five major red flags that indicate it's time for professional assistance from a property management company.",
    author: "Stellar Property Management",
    date: "3/27/2025",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
  },
  {
    id: "understanding-reserve-funds",
    title: "Understanding Reserve Funds for Associations",
    excerpt: "Learn the essentials of planning long-term capital repairs and keeping your association solvent. A comprehensive guide to reserve funds for HOAs and condo associations.",
    author: "Stellar Property Management",
    date: "3/13/2025",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
  },
  {
    id: "renovation-rules-for-owners",
    title: "Renovation Rules: What Every Owner Needs to Know",
    excerpt: "A practical breakdown of construction approval processes and consequences for non-compliance in Chicago condominiums and HOAs.",
    author: "Stellar Property Management",
    date: "2/19/2025",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
  },
  {
    id: "tenant-communication-best-practices",
    title: "Tenant Communication Best Practices",
    excerpt: "How to keep tenants informed, happy, and following the rules with minimal friction. Effective communication strategies for property managers and HOA boards.",
    author: "Stellar Property Management",
    date: "2/5/2025",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
  }
];