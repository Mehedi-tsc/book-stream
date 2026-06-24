import Image from "next/image";


const EbookCard = ({ebook}) => {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xs hover:shadow-md transition-all duration-200"
            >
              
              {/* Cover Image Container */}
              <div className="relative aspect-3/4 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={ebook.image}
                  alt={ebook.title}
                  fill
                  sizes="(max-w-7xl) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cogver object-center group-hover:scale-102 transition-transform duration-300"
                />
                
                {/* Conditional "Sold" Badge Overlay */}
                {ebook.isSold && (
                  <div className="absolute top-2 right-2 bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wide">
                    Sold
                  </div>
                )}
              </div>

              {/* Text Meta Info Container */}
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white line-clamp-2 min-h-10 sm:min-h-12 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <a href={`/ebooks/${ebook.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {ebook.title}
                  </a>
                </h3>
                
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 truncate">
                  By {ebook.writer}
                </p>
                
                {/* Price and Action Section */}
                <div className="mt-auto pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-900">
                  <span className={`text-sm sm:text-base font-bold ${ebook.isSold ? 'text-slate-400 line-through' : 'text-slate-900 dark:text-white'}`}>
                    {ebook.price}
                  </span>
                  
                  {!ebook.isSold ? (
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                      Buy Now
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-400">
                      Unavailable
                    </span>
                  )}
                </div>
              </div>

            </div>
    );
};

export default EbookCard;