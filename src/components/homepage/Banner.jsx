'use client'
import Image from 'next/image';
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="carousel w-full">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full h-137.5">
                <Image
                    className="w-full object-cover"
                    src="https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1000&auto=format&fit=crop"
                    alt='Discover & Read Original Ebooks'
                    height={550}
                    width={1000}
                    priority
                />
                {/* Hero Text Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4.5 }}
                    className="absolute inset-0 text-center bg-linear-to-r from-black/70 to-transparent flex flex-col justify-center items-center pl-12 md:pl-24 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Discover & Read <br /> Original Ebooks
                    </h1>
                    <div>
                        <button className="btn btn-primary btn-md md:btn-lg text-white">Browse Ebooks</button>
                    </div>
                </motion.div>
                {/* Navigation Buttons */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full h-137.5">
                <Image
                    className="w-full object-cover"
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop"
                    alt='Discover & Read Original Ebooks'
                    height={550}
                    width={1000}
                />
                {/* Hero Text Overlay */}
                <div className="absolute inset-0 text-center bg-black/40 flex flex-col justify-center items-end pr-12 md:pr-24 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Discover & Read <br /> Original Ebooks
                    </h1>
                    <div >
                        <button className="btn btn-primary btn-md md:btn-lg text-white">Browse Ebooks</button>
                    </div>
                </div>
                {/* Navigation Buttons */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full h-137.5">
                <Image
                    className="w-full object-cover"
                    src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1000&auto=format&fit=crop"
                    alt='Discover & Read Original Ebooks'
                    height={550}
                    width={1000}
                />
                {/* Hero Text Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent flex flex-col justify-center pl-12 md:pl-24 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Discover & Read <br /> Original Ebooks
                    </h1>
                    <div>
                        <button className="btn btn-primary btn-md md:btn-lg text-white">Browse Ebooks</button>
                    </div>
                </div>
                {/* Navigation Buttons */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;