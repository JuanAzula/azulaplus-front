import React from 'react'
import { getGenres } from '@/lib/data'
import { type Genre } from '@/types/genres.data'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

async function GenreDropdown() {
    const genres = await getGenres()
    console.log(genres)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex justify-center'>
                Genres <ChevronDown className="ml-1" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>Select Genre</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {genres.map((genre: Genre) => (
                    <DropdownMenuItem key={genre.id}>
                        <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                            {genre.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GenreDropdown