import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { CheckCircle2Icon, ChevronRightIcon, FrameIcon, Layers2Icon, PencilRulerIcon, RocketIcon, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PRICINGFAQS } from '@/components/custom/pricing-faqs'

const Page = () => {
  return (
    <>
      <section className="relative py-24 lg:py-32">
        <MaxWidthWrapper className="max-w-screen-3xl">
          <div className='flex flex-col gap-5 justify-center items-center pb-10 lg:pb-16'>
            <div className='py-3 px-5 lg:py-4 lg:px-8 text-white rounded-full bg-blue-600'>Scale your business to the next level</div>
            <h1 className=" text-center text-[2rem] lg:text-[4rem] leading-snug font-medium tracking-tighter bg-gradient-to-r from-gray-800 to-gray-950 bg-clip-text text-transparent">
              Choose your growth <span className="lg:block"> through our plans</span>
            </h1>
            <p className='text-center'>Choose from our variety of plans designed to support your growth. <span className='lg:block'>Find the right fit and achieve your business goals!</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white shadow-sm p-10 rounded-3xl">
                <div className="space-y-5">
                  <PencilRulerIcon size={35} />
                  <h2 className="text-[1.7rem]">Pixel Flair</h2>
                  <p className="text-sm">We craft eye-catching designs that captivate visitors at first glance.</p>
                </div>
                <div className="py-5">
                  <h3 className="text-[2.5rem]">₹50000</h3>
                </div>
                <div className="pb-10">
                  <Link href='/contact' className='flex w-full items-center justify-center rounded-full py-3 bg-bgdark hover:bg-bgdark/90 text-white group'>
                    Contact Us <ChevronRightIcon className="ml-1 size-5 transition-transform duration-500 group-hover:translate-x-2" />
                  </Link>
                </div>

                <div>
                  <ul className="space-y-3">
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Next.js Framework</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> TypeScript Language</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> 1 Year KVM VPS Included</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Custom Code</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Updates via Slack</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white shadow-sm p-10 rounded-3xl">
                <div className="space-y-5">
                  <Layers2Icon size={35} />
                  <h2 className="text-[1.7rem]">Full Stack Pulse</h2>
                  <p className="text-sm">Get the best of both worlds with a sleek user interface and robust server-side engine.</p>
                </div>
                <div className="py-5">
                  <h3 className="text-[2.5rem]">₹100000</h3>
                </div>
                <div className="pb-10">
                  <Link href='/contact' className='flex w-full items-center justify-center rounded-full py-3 bg-bgdark hover:bg-bgdark/90 text-white group'>
                    Contact Us <ChevronRightIcon className="ml-1 size-5 transition-transform duration-500 group-hover:translate-x-2" />
                  </Link>
                </div>

                <div>
                  <ul className="space-y-3">
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Everything from Pixel Flair</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Enterprise-grade frameworks</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Robust back-end solutions </li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Priority Support</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Faster Turnaround Times</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white shadow-sm p-10 rounded-3xl">
                <div className="space-y-5">
                  <FrameIcon size={35} />
                  <h2 className="text-[1.7rem]">Bespoke Catalyst</h2>
                  <p className="text-sm">We build everything from scratch as your unique requirements to maximum impact.</p>
                </div>
                <div className="py-5">
                  <h3 className="text-[2.5rem]">Contact Us</h3>
                </div>
                <div className="pb-10">
                  <Link href='/contact' className='flex w-full items-center justify-center rounded-full py-3 bg-blue-600 hover:bg-blue-600/90 text-white group'>
                    Contact Us <ChevronRightIcon className="ml-1 size-5 transition-transform duration-500 group-hover:translate-x-2" />
                  </Link>
                </div>

                <div>
                  <ul className="space-y-3">
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#0a0a0a" color="#fff" size={30} /> Everything from Pixel Flair</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#0a0a0a" color="#fff" size={30} /> Custom technologies</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#0a0a0a" color="#fff" size={30} /> Priority support </li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#0a0a0a" color="#fff" size={30} /> Unlimited Revisions</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#0a0a0a" color="#fff" size={30} /> VIP Priority Support</li>
                  </ul>
                </div>
              </div>
            </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative pb-24 lg:pb-32">
        <MaxWidthWrapper className=" max-w-screen-3xl ">
          <div className=" lg:max-w-none bg-bgdark p-10 rounded-[2rem] lg:rounded-[4rem]">
            <div className="pb-10 flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between items-center">
              <div>
              <h2 className="text-[3.2rem] font-semibold tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our Process</h2>
              <p className='text-gray-100 max-w-3xl'>From understanding your needs to crafting and deploying your web solution, we ensure a seamless journey with expert execution at every step.</p>
              </div>
              <div>
                <Link href="/contact" className='text-white py-4 px-8 rounded-full bg-blue-600'>Contact Us</Link>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className='p-10 bg-white rounded-3xl space-y-5'>
                  <SearchIcon color='#2563eb' size={45}/>
                  <h2 className='text-[1.8rem] lg:text-[2rem] text-bgdark'>Discover</h2>
                  <p className='text-gray-800'>Our journey begins with understanding your unique requirements, as we collaborate to tailor your project. </p>
              </div>
              <div className='p-10 bg-white rounded-3xl space-y-5'>
                  <PencilRulerIcon strokeWidth={1.5} color='#2563eb' size={45}/>
                  <h2 className='text-[1.8rem] lg:text-[2rem] text-bgdark'>Design and Develop</h2>
                  <p className='text-gray-800'>Our expert team transforms your vision into reality, designing and developing a high-performing, scalable web project.  </p>
              </div>
              <div className='p-10 bg-white rounded-3xl space-y-5'>
                  <RocketIcon strokeWidth={1.5} color='#2563eb' size={45}/>
                  <h2 className='text-[1.8rem] lg:text-[2rem] text-bgdark'>Discover</h2>
                  <p className='text-gray-800'>we finalize and deploy your project, ensuring a smooth transition to launch. We provide ongoing support and revisions.</p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative pb-24 lg:pb-32 ">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <MaxWidthWrapper className="max-w-screen-3xl">
            <div className="p-5 lg:p-10 bg-white rounded-[2.5rem]">
              <div className="pb-2">
                <h2 className="text-[3.2rem] font-semibold tracking-tighter text-bgdark">Frequently asked <span className="lg:block">Questions</span></h2>
              </div>
              <div className="w-full pb-5">
                <Accordion type="single" collapsible >
                  {PRICINGFAQS.map((item, index) => (
                    <AccordionItem key={index} value={`${index}`}>
                      <AccordionTrigger className="font-normal text-[0.9] lg:text-[1.2rem] text-gray-700">{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="py-10 space-y-5">
                <div className="flex justify-center">
                  <h4 className="text-center max-w-lg text-gray-800">Got questions? Here are answers to the ones we get asked most often.</h4>
                </div>
                <div className="flex justify-center items-center">
                  <Link href='#getstarted' className='flex  items-center justify-center rounded-full py-4 px-10 bg-blue-600 hover:bg-blue-600/90 text-white group'>Ask a Question <ChevronRightIcon className="ml-1 size-5 transition-transform duration-500 group-hover:translate-x-2" /></Link>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
    </>
  )
}

export default Page