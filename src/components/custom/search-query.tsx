'use client'
import { useSearchParams } from "next/navigation";
import { useState } from "react"

export default function SearchQuery() {

    const [query, setQuery] = useState({ search: '' })
    const searchParams = useSearchParams();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div className='pb-8'>
            <form onClick={handleSubmit} className='flex items-center border border-blue-600 rounded-full '>
                <span className="sr-only">Search</span>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="#2563eb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </div>
                    <input type="text" id="search" name='search' defaultValue={searchParams.get("search")?.toString()} onChange={(e) => setQuery({ ...query, search: e.target.value })} className="bg-white text-gray-900 text-sm font-light rounded-full  block w-full pl-10 p-2.5 " placeholder="Search..." required />
                </div>
            </form>
        </div>
    )
}
