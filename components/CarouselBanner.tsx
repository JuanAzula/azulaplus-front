'use client'
import React from 'react'
import { Movie } from '@/types/movie.data'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

Autoplay.globalOptions = {
    delay: 8000,
}

function CarouselBanner({ movies }: { movies: Movie[] }) {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 150 }, [Autoplay()])

    return (
        <div
            className="overflow-hidden lg:mt-0 relative cursor-pointer"
            ref={emblaRef}
        >
            <div className='flex'>
                {movies?.map((movie) => (
                    <div key={movie.id}
                        className='flex-[0_0_100%] h-[300px] 2xl:h-[700px] xl:h-[700px] sm:h-[400px] object-center object-cover relative'
                    >
                        <Image
                            key={movie.id}
                            src={movie.poster_img || ""}
                            alt={movie.title}
                            // width={1920}
                            // height={1080}
                            layout="fill"
                            objectFit="cover"
                        />

                        <div className="hidden lg:inline absolute mt-0 top-0 sm:pt-40 xl:pt-60 
                        left-0 lg:mt-0 bg-transparent z-20 h-full w-full bg-gradient-to-r
                          from-gray-900/90 via-transparent to-transparent p-10 space-y-5
                           text-white  ">
                            <h2 className="text-5xl font-bold max-w-xl z-50">{movie.title}</h2>
                            <p className='max-w-xl line-clamp-3'>{movie.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="absolute inset-0 bg-gradient-to-b from-gray-200/0
             via-gray-900/30 to-gray-300 dark:to-[#2a4d69]">

            </div>
        </div>
    )
}

export default CarouselBanner