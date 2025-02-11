import { AGENCYFAQS } from '@/components/custom/agency-faqs'
import { Subheading } from '@/components/custom/sub-heading'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FrameIcon, MaximizeIcon } from 'lucide-react'

const Page = () => {
    return (
        <>
            <section className="relative py-24 lg:py-32">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                        <div className='col-span-2 bg-bgdark p-10 rounded-[1.8rem] lg:rounded-[2rem] '>
                            <div className='space-y-6'>
                                <h1 className='py-3 px-5 lg:py-4 lg:px-8 bg-gray-200 text-gray-900 w-fit rounded-full'> Hi, we are CompiledBox!</h1>
                                <Subheading className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Custom Web Design Agency</Subheading>
                                <p className='text-gray-100 max-w-3xl text-[1.1rem]'>We are dedicated to crafting unique websites tailored to your brand. With a focus on innovation, functionality, and seamless user experience, we bring your vision to life.</p>
                            </div>
                            <div className='flex justify-end'>
                                <FrameIcon color='#2563eb' strokeWidth={1} size={100} />
                            </div>
                        </div>
                        <div className='bg-bgdark p-10 rounded-[1.8rem] lg:rounded-[2rem] flex flex-col justify-between'>
                            <Subheading className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>A space dedicated to creativity</Subheading>
                            <div className='flex justify-end'>
                                <MaximizeIcon color='#2563eb' strokeWidth={1} size={100} />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="relative pb-24 lg:pb-32">
                <MaxWidthWrapper className="max-w-screen-3xl">
                    <div className='py-20 px-10 rounded-[1.8rem] lg:rounded-[2rem] border border-blue-200 shadow-sm flex flex-col justify-center items-center'>
                        <h2 className="text-[1.1rem] py-2 px-4 rounded-xl border border-blue-600 mb-5">What we believe in</h2>
                        <p className="text-[3.2rem] font-normal tracking-tighter bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent text-center">
                            We believe in the power of genuine partnerships and a passion that fuels every project.
                        </p>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="relative pb-24 lg:pb-32 ">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <MaxWidthWrapper className="max-w-screen-3xl">
                        <div className="p-5 lg:p-10 bg-white rounded-[2.5rem]">
                            <div className="pb-2">
                                <Subheading className='text-bgdark'>Frequently asked <span className="lg:block">Questions</span></Subheading>
                            </div>
                            <div className="w-full pb-5">
                                <Accordion type="single" collapsible >
                                    {AGENCYFAQS.map((item, index) => (
                                        <AccordionItem key={index} value={`${index}`}>
                                            <AccordionTrigger className="font-normal text-[0.9] lg:text-[1.2rem] text-gray-700">{item.question}</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </section>
        </>
    )
}

export default Page