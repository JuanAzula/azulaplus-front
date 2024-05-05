import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ThemeToggler'
import SearchInput from './SearchInput'
import GenreDropdown from './GenreDropdown'
import { UserDropdown } from './UserDropdown'

function Header() {
    return (
        <header className='absolute w-full z-20 top-0 flex items-center 
        justify-between p-5 
        bg-gradient-to-t from-[#3B0A61]/0 via-white-900/35 to-[#011f4b]
        '>
            <Link href="/" className='mr-10'>
                <Image
                    src="/images/azulaplus.png"
                    alt="Azulaplus logo"
                    width={200}
                    height={200}
                    className='cursor-pointer invert dark:invert-0'
                />
            </Link>
            <div className='flex space-x-2'>
                <GenreDropdown />
                <SearchInput />
                <UserDropdown />
            </div>
        </header>
    )
}

export default Header