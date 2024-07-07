
'use client'
import Link from "next/link";
import clsx from 'clsx'
import { Description, Field, Input, Label } from '@headlessui/react'
import { useState } from "react";

const listItems = [
    { link: '/', text: "Home", icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /> </svg>' }, // Home icon
    { link: '/search/categories', text: "Categories", icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>' }, // Categories icon
    { link: '/user/added', text: "Added", icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" /></svg>' }, // Added icon
    { link: '/user/settings', text: "Settings", icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>' }, // Added icon
]
export default function Header() {

    const [iconState, setState] = useState('menu')

    const handleClick = () => {
        const navbar = document.querySelector('article');
        setState(prevState => (prevState === 'menu' ? 'close' : 'menu'));
        navbar?.classList.toggle('hidden');
    }

    return (
        <>
            <nav className="smallerchick p-6 flex justify-between mx-6 md:hidden ">
                <div className="flex items-center gap-x-6">
                    <h1 className="text-3xl text-text font-semibold font-poppins ">LIBRARY</h1>
                </div>
                <div>
                    <button onClick={handleClick}>
                        <img src="" alt="" className="hidden" />
                        <svg id="menuIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 ">
                            {iconState === 'menu' && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                            {iconState === 'close' && (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            )}
                        </svg>
                    </button>

                </div>
            </nav>
            <article className="md:hidden hidden absolute bg-background z-50 top-20 h-min w-[100vh] ease-in-out delay-300 transition duration-300 shadow-lg" >
                <div className="px-12 border-b-text ">
                    <div>
                        {listItems.map((item) => (
                            <Link href={item.link} key={item.link}>
                                <li key={item.text} className="flex gap-1 text-text font-poppins font-normal text-lg align-baseline my-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                        dangerouslySetInnerHTML={{ __html: item.icon }}
                                    />
                                    <p className="">{item.text}</p>
                                </li></Link>
                        ))}
                    </div>
                </div>
            </article>
            <nav className="biggerchick p-6 flex justify-between mx-6 max-md:hidden">
                <div className="flex items-center gap-x-6">
                    <h1 className="text-3xl text-text font-semibold font-poppins ">LIBRARY</h1>
                    <form action="" method="post">
                        <div className="w-full max-w-md px-4">
                            <Field>

                                <Input
                                    className={clsx(
                                        'bg-container px-2 py-1 rounded-full outline-none border border-text placeholder:text-text placeholder:text-sm placeholder:text-left text-left block w-full bg-white/5 text-sm/6 text-text',
                                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-text placeholder:italic'
                                    )}
                                    placeholder="Search for Name or Author"
                                />
                            </Field>
                        </div>
                    </form>
                </div>
                <div className="flex gap-x-4 items-center max-md:hidden">
                    <div>User Dialog</div>
                    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                    </svg>
                    </button>
                </div>
            </nav>
        </>
    )
}
