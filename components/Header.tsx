import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ThemeToggler'
import SearchInput from './SearchInput'

function Header() {
    return (
        <header className='fixed w-full z-20 top-0 flex items-center 
        justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
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
                {/* genre dropdown */}
                <SearchInput />
                <ModeToggle />
            </div>
        </header>
    )
}

export default Header