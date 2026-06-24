import Image from 'next/image';
import EbookCard from '../shared/EbookCard';

// Static mock data mimicking database structure
const MOCK_EBOOKS = [
  {
    id: 1,
    title: "The Midnight Library Chronicles",
    writer: "Eleanor Vance",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    isSold: false,
  },
  {
    id: 2,
    title: "Designing for the Future",
    writer: "Aris Thorne",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop",
    isSold: true, // Shows the "Sold" badge
  },
  {
    id: 3,
    title: "Beyond the Digital Horizon",
    writer: "Sarah Jenkins",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
    isSold: false,
  },
  {
    id: 4,
    title: "Whispers of the Old Oak",
    writer: "Julian Ross",
    price: "$12.50",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop",
    isSold: false,
  },
  {
    id: 5,
    title: "Mastering Next.js & Tailwind",
    writer: "Devon Cole",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop",
    isSold: true, // Shows the "Sold" badge
  },
  {
    id: 6,
    title: "Echoes of Time",
    writer: "Amara Patel",
    price: "$18.00",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=600&auto=format&fit=crop",
    isSold: false,
  },
];

export default function FeaturedEbooks() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Featured Ebooks
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Handpicked premium reading experiences curated just for you.
            </p>
          </div>
          <button className="mt-4 md:mt-0 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
            View All Ebooks &rarr;
          </button>
        </div>

        {/* Responsive Grid Setup */}
        {/* Mobile: grid-cols-2 | Tablet: md:grid-cols-3 | Desktop: lg:grid-cols-4 */}
        <div className="grid grid-cols-2 md:grid-cols-3  gap-4 sm:gap-6 lg:gap-8">
          {MOCK_EBOOKS.map((ebook) => <EbookCard key={ebook.id} ebook = {ebook}></EbookCard>)}
        </div>

      </div>
    </section>
  );
}