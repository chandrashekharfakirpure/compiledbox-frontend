'use client'
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ShareButtons = ({ slug }: { slug: string }) => {
    return (
        <>
            <div className="h-fit lg:sticky lg:inset-24 w-fit ">
                <p className="pb-4">Share:</p>
                <div className="grid grid-cols-4 gap-5">
                    <button onClick={() => { navigator.clipboard.writeText(`https://compiledbox.com/blog/${slug}`) }} className=" w-12 h-12 flex justify-center items-center p-2 bg-bgdark rounded-full text-white hover:text-bgdark hover:bg-transparent border-bgdark border">
                        <LinkIcon />
                    </button>
                    <Link href={`https://x.com/intent/post?text=https://compiledbox.com/blog/${slug}`} target="_blank" className="w-12 h-12 p-3 bg-bgdark rounded-full text-white hover:text-bgdark hover:bg-transparent border-bgdark border">
                        <svg width="100%" height="100%" viewBox="0 0 300 301" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1416_37)">
                                <path d="M178.57 127.15L290.27 0H263.81L166.78 110.38L89.34 0H0L117.13 166.93L0 300.25H26.46L128.86 183.66L210.66 300.25H300M36.01 19.54H76.66L263.79 281.67H223.13" fill="currentColor"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_1416_37">
                                    <rect width="300" height="300.251" fill="currentColor"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>

                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://compiledbox.com/blog/${slug}`} target="_blank" className="w-12 h-12 p-3 bg-bgdark rounded-full text-white hover:text-bgdark hover:bg-transparent border-bgdark border">
                        <svg width="100%" height="100%" viewBox="0 0 12 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 13.8H10.8571L12 9H8V6.6C8 5.364 8 4.2 10.2857 4.2H12V0.168C11.6274 0.1164 10.2206 0 8.73486 0C5.632 0 3.42857 1.9884 3.42857 5.64V9H0V13.8H3.42857V24H8V13.8Z" fill="currentColor"></path>
                        </svg>
                    </Link>
                    <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=https://compiledbox.com/blog/${slug}`} target="_blank" className="w-12 h-12 p-3 bg-bgdark rounded-full text-white hover:text-bgdark hover:bg-transparent border-bgdark border">
                        <svg width="100%" height="100%" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.617 2.44553C4.61669 3.0938 4.37318 3.71539 3.94004 4.17356C3.5069 4.63173 2.9196 4.88894 2.30735 4.88862C1.69509 4.88829 1.10804 4.63046 0.675328 4.17183C0.242617 3.71321 -0.000305837 3.09136 2.8898e-07 2.44309C0.000306415 1.79482 0.243816 1.17323 0.67696 0.715057C1.1101 0.25689 1.6974 -0.00032383 2.30965 3.0598e-07C2.92191 0.000324441 3.50896 0.25816 3.94167 0.716786C4.37438 1.17541 4.61731 1.79726 4.617 2.44553ZM4.68625 6.69863H0.0692552V22H4.68625V6.69863ZM11.9811 6.69863H7.3872V22H11.9349V13.9704C11.9349 9.49736 17.4407 9.08183 17.4407 13.9704V22H22V12.3083C22 4.76762 13.851 5.04872 11.9349 8.75185L11.9811 6.69863Z" fill="currentColor"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ShareButtons