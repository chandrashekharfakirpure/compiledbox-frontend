import { AnimatedGradientText } from "@/components/animated-gradient-text";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { Icons } from "@/components/ui/icons";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon, ChevronRightIcon, FrameIcon, Layers2Icon, PencilRulerIcon, SendHorizonalIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FRONTFAQ } from "@/components/custom/faqs";

export default function Home() {
  return (
    <>
      <section className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden py-20 sm:py-24">
        <MaxWidthWrapper className="max-w-screen-3xl">
          <div className="bg-white/80 py-24 text-center rounded-[4rem] backdrop-blur-2xl">
            <div className="space-y-12">
              <div className="space-y-2">
                <div className="z-10 flex items-center justify-center">
                  <AnimatedGradientText>
                    <span className="text-xl">🎉 </span><hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                    <span
                      className={cn(
                        `text-md py-2 inline animate-gradient bg-gradient-to-r from-blue-600 via-[#9c40ff] to-blue-600 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                      )}
                    >
                      Available for new projects
                    </span>
                    <ChevronRightIcon className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedGradientText>
                </div>
                <h1 className="text-[4.5rem] font-medium tracking-tighter bg-gradient-to-r from-gray-800 to-gray-950 bg-clip-text text-transparent">
                  Top-Notch Web Design Service to<span className="lg:block"> Stand out from the Crowd</span>
                </h1>

                <p className="text-gray-700 text-[1.2rem]">Our creative ideas combined with the power of NextJS gives your website special feel.<span className="lg:block">Your vision, our innovation.</span></p>
              </div>
              <div className="flex justify-center ">
                <div className="border border-blue-200 rounded-full py-4 px-5">
                  <Link href='#getstarted' className='flex w-full items-center justify-center rounded-full py-4 px-10 bg-blue-600 hover:bg-blue-600/90 text-white group'>Get Started Today <ChevronRightIcon className="ml-1 size-5 transition-transform duration-500 group-hover:translate-x-2" /></Link>
                </div>
              </div>
            </div>
            <BorderBeam size={300} duration={12} delay={9} />
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative pb-24 sm:pb-32">
        <MaxWidthWrapper className="max-w-screen-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2 pb-24 bg-bgdark rounded-[2rem] flex flex-col space-y-10">
              <div className="space-y-5 p-8">
                <h2 className="text-[2.9rem] text-gray-100 font-medium">Responsive for every <div className="block"><span className="text-blue-500">device</span> and <span className="text-blue-500">browser</span>!</div></h2>
                <p className="text-gray-300">We make sure that your website is available for every device user!</p>
              </div>
            </div>
            <div className="row-span-2 py-10 bg-white rounded-[2rem] flex flex-col items-center space-y-10 justify-center">
              <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                  Stack
                </span>
                <OrbitingCircles iconSize={40}>
                  <Icons.nextjs />
                  <Icons.typescript />
                  <Icons.django />
                  <Icons.python />
                  <Icons.nodejs />
                </OrbitingCircles>
                <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
                  <Icons.tailwindcss />
                  <Icons.reactnative />
                  <Icons.gitHub />
                </OrbitingCircles>
              </div>
            </div>
            <div className="row-span-1 py-10 bg-blue-100 rounded-[2rem] flex flex-col space-y-10">
              <div className="p-8 space-y-5">
                <h2 className="text-3xl text-gray-800 font-medium">Why Us</h2>
                <p className="text-gray-800 font-normal text-[1.1rem]">With years of experience in web design and application development, our team stays ahead of the latest trends and technologies.</p>
              </div>
            </div>
            <div className="row-span-1 bg-green-200 rounded-[2rem] flex flex-col space-y-10">
              <div className="p-8 space-y-5">
                <div className=" space-y-5">
                  <h3 className="text-gray-900 text-[4rem] font-medium ">
                    <NumberTicker
                      value={30}
                      className="whitespace-pre-wrap font-medium tracking-tighter text-gray-900"
                    />+
                  </h3>
                  <p className="text-[1.1rem] text-gray-700">Successfully launched projects</p>
                  <Button variant={'custom2'} size={'custom'} className="group">Contact Us<SendHorizonalIcon className="transition-transform group-hover:translate-x-2 duration-500" /></Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative py-20 lg:py-24 ">
        <MaxWidthWrapper className=" max-w-screen-3xl ">
          <div className=" lg:max-w-none bg-bgdark p-10 rounded-[4rem]">
            <div className="pb-10 ">
              <h2 className="text-[3.2rem] font-semibold tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured Work</h2>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-full"
            >
              <CarouselContent>
                <CarouselItem className="basis-1/3">
                  <div>
                    <Image src='/images/5.png' width={527} height={570} alt="Portfolio 1" className="rounded-[3rem]" />
                    <h4 className="text-xl text-white px-1 pt-5">Proton Servers</h4>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div>
                    <Image src='/images/2.png' width={527} height={570} alt="Portfolio 1" className="rounded-[3rem]" />
                    <h4 className="text-xl text-white px-1 pt-5">PaasTech</h4>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div>
                    <Image src='/images/4.png' width={527} height={570} alt="Portfolio 1" className="rounded-[3rem]" />
                    <h4 className="text-xl text-white px-1 pt-5">HostnExtra Technologies</h4>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div>
                    <Image src='/images/1.png' width={527} height={570} alt="Portfolio 1" className="rounded-[3rem]" />
                    <h4 className="text-xl text-white px-1 pt-5">HashTag</h4>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div>
                    <Image src='/images/3.png' width={527} height={570} alt="Portfolio 1" className="rounded-[3rem]" />
                    <h4 className="text-xl text-white px-1 pt-5">MK Construction Solution</h4>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                  <div>
                    <Image src='/images/6.png' width={527} height={570} alt="Portfolio 1" className="rounded-[3rem]" />
                    <h4 className="text-xl text-white px-1 pt-5">Barbrika Technology</h4>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative">
        <div className="relative py-20 lg:py-24 flex w-full flex-col items-center justify-center overflow-hidden">
          <MaxWidthWrapper className="max-w-screen-3xl">
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
                  <Link href='/pricing' className='flex w-full items-center justify-center rounded-full py-3 bg-bgdark hover:bg-bgdark/90 text-white group'>
                    Explore Plan <ChevronRightIcon className="ml-1 size-5 transition-transform duration-500 group-hover:translate-x-2" />
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
                  <Link href='/pricing' className='flex w-full items-center justify-center rounded-full py-3 bg-bgdark hover:bg-bgdark/90 text-white group'>
                    Explore Plan <ChevronRightIcon className="ml-1 size-5 transition-transform duration-500 group-hover:translate-x-2" />
                  </Link>
                </div>

                <div>
                  <ul className="space-y-3">
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Everything from Pixel Flair</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Enterprise-grade frameworks</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Robust back-end solutions </li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Custom Code</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#3b82f6" color="#fff" size={30} /> Updates via Slack</li>
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
                  <Link href='/pricing' className='flex w-full items-center justify-center rounded-full py-3 bg-blue-600 hover:bg-blue-600/90 text-white group'>
                    Contact Us <ChevronRightIcon className="ml-1 size-5 transition-transform duration-500 group-hover:translate-x-2" />
                  </Link>
                </div>

                <div>
                  <ul className="space-y-3">
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#0a0a0a" color="#fff" size={30} /> Everything from Pixel Flair</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#0a0a0a" color="#fff" size={30} /> Enterprise-grade frameworks</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#0a0a0a" color="#fff" size={30} /> Robust back-end solutions </li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#0a0a0a" color="#fff" size={30} /> Custom Code</li>
                    <li className="flex gap-2 items-center text-bgdark"><CheckCircle2Icon fill="#0a0a0a" color="#fff" size={30} /> Updates via Slack</li>
                  </ul>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="relative ">
        <div className="relative py-20 lg:py-24 flex w-full flex-col items-center justify-center overflow-hidden">
          <MaxWidthWrapper className="max-w-screen-3xl">
            <div className="p-10 bg-white rounded-[2.5rem]">
              <div className="pb-2">
                <h2 className="text-[3.2rem] font-semibold tracking-tighter text-bgdark">Frequently asked <span className="lg:block">Questions</span></h2>
              </div>
              <div className="w-full pb-5">
                <Accordion type="single" collapsible >
                  {FRONTFAQ.map((item, index) => (
                    <AccordionItem key={index} value={`${index}`}>
                      <AccordionTrigger className="font-normal text-[1.2rem] text-gray-700">{item.question}</AccordionTrigger>
                      <AccordionContent>
                        {item.answer}
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
  );
}
