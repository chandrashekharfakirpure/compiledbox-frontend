import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { BorderBeam } from "@/components/ui/border-beam";
import { buttonVariants } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";
import { FolderIcon, SendHorizonalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-bgdark md:shadow-xl py-24 sm:py-32">
        <MaxWidthWrapper className="max-w-screen-xl">
          <div className="bg-black/80 py-24 text-center rounded-[6rem] backdrop-blur-2xl shadow-[-10px_-10px_250px_50px_rgba(0,0,0,0.1),_0px_0px_100px_5px_rgba(23,_13,_5,_1)]">
            <div className="space-y-12">
              <div className="space-y-2">
                <h1 className="text-[4rem] font-semibold tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Top-Notch <span className="lg:block">Web Design Service</span>
                </h1>

                <p className="text-gray-400 text-[1.2rem]">We bring your vision to life and drive your success online.</p>
              </div>
              <div className="flex justify-center ">
                <div className="border border-gray-800 rounded-[1.5rem] py-4 px-10">
                  <Link href='/contact' className={buttonVariants({
                    size: 'xl',
                    className: "ring-1 ring-brand-800 rounded-xl py-4 px-10 text-brand-700 font-medium text-lg bg-gradient-to-r from-black to-gray-800 hover:text-brand-900 hover:border-brand-900"
                  })}>Contact Us</Link>
                  <Link href='/contact' className={buttonVariants({
                    size: 'xl',
                    variant: 'ghost',
                    className: "rounded-xl text-brand-100/50 font-medium text-lg hover:bg-transparent hover:text-white"
                  })}>Get Started</Link>
                </div>
              </div>
            </div>
            <BorderBeam size={300} duration={12} delay={9} />
          </div>
        </MaxWidthWrapper>
      </section>
      <div className="h-px border border-gray-800" />
      <section className="relative bg-bgdark py-24 sm:py-32">

        <MaxWidthWrapper>
          <div className="grid lg:max-w-none lg:grid-cols-3 gap-10">
            <div className="space-y-10">
              <div>
                <h2 className="text-[3.2rem] font-semibold tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">What We Offer</h2>
                <p className="text-zinc-300">Innovative website design, robust applications, AI integrations, and white-labeled solutions to propel your brand forward.</p>
              </div>
              <div>
                <Link href='/web-design'>
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm leading-none tracking-tight text-white lg:text-md flex items-center gap-2">
                      Learn More <SendHorizonalIcon size={17} fill="#000" />
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
            <div className="grid lg:max-w-none lg:grid-cols-2 gap-10 col-span-2">

              <div>
                <div className="bg-transparent bg-opacity-0">
                  <span className="relative flex bg-blue-700 w-fit px-2 text-sm text-white">creativity</span>
                </div>
                <div className="group p-px bg-gray-700">
                  <div className="bg-bgdark space-y-8 p-5">
                    <div className="flex justify-between items-center">
                      <h2 className="text-white text-[1.3rem]">Website Design</h2>
                      <FolderIcon color="#FFAE72" className="group-hover:stroke-blue-700 transition-all duration-500" />
                    </div>
                    <div>
                      <p className="text-zinc-300 font-normal">We create visually stunning and user-friendly websites tailored to your brand.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-transparent bg-opacity-0">
                  <span className="relative flex bg-blue-700 w-fit px-2 text-sm text-white">custom</span>
                </div>
                <div className="group p-px bg-gray-700">
                  <div className="bg-bgdark space-y-8 p-5">
                    <div className="flex justify-between items-center">
                      <h2 className="text-white text-[1.3rem]">Application Development</h2>
                      <FolderIcon color="#FFAE72" className="group-hover:stroke-blue-700 transition-all duration-500" />
                    </div>
                    <div>
                      <p className="text-zinc-300 font-normal">Our team develops powerful, secure, and scalable web and mobile applications.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-transparent bg-opacity-0">
                  <span className="relative flex bg-blue-700 w-fit px-2 text-sm text-white">innovation</span>
                </div>
                <div className="group p-px bg-gray-700">
                  <div className="bg-bgdark space-y-8 p-5">
                    <div className="flex justify-between items-center">
                      <h2 className="text-white text-[1.3rem]">ML Model Integration</h2>
                      <FolderIcon color="#FFAE72" className="group-hover:stroke-blue-700 transition-all duration-500" />
                    </div>
                    <div>
                      <p className="text-zinc-300 font-normal">Harness the power of machine learning with our integration services.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-transparent bg-opacity-0">
                  <span className="relative flex bg-blue-700 w-fit px-2 text-sm text-white">partnership</span>
                </div>
                <div className="group p-px bg-gray-700">
                  <div className="bg-bgdark space-y-8 p-5">
                    <div className="flex justify-between items-center">
                      <h2 className="text-white text-[1.3rem]">White-Labeled Development</h2>
                      <FolderIcon color="#FFAE72" className="group-hover:stroke-blue-700 transition-all duration-500" />
                    </div>
                    <div>
                      <p className="text-zinc-300 font-normal">Empower your business with our white-labeled development services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative bg-bgdark ">
        <div className="relative py-24 sm:py-32 flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
          <MaxWidthWrapper>
            <div className="grid grid-cols-4 gap-10">
              <div className="col-span-3 rounded-xl border border-gray-700 bg-gradient-to-b from-black to-gray-800 p-10">
                <div className="max-w-xl space-y-10">
                  <h3 className="text-gray-100 text-[2.7rem] font-medium ">Responsive for every <span className="text-brand-800">device</span> and <span className="text-brand-800">browser</span>!</h3>
                  <p className="text-[1.2rem] text-gray-400">We make sure that your website is available for every device user!</p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gradient-to-b from-black to-gray-800 p-10">
                <div className="max-w-xl space-y-10">
                  <h3 className="text-gray-100 text-[4rem] font-medium ">
                    <NumberTicker
                      value={20}
                      className="whitespace-pre-wrap font-medium tracking-tighter text-gray-100"
                    />+
                  </h3>
                  <p className="text-[1.2rem] text-gray-400">Successfully launched projects</p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gradient-to-t from-black to-gray-800 p-10">
                <div className="max-w-xl space-y-5">
                  <h3 className="text-gray-100 text-[2.5rem] font-medium"><span className="text-brand-800">Core</span> stack</h3>
                    <ul className="space-y-1 text-[1.2rem] text-gray-400">
                      <li>NextJS</li>
                      <li>Typescript</li>
                      <li>Python</li>
                      <li>Django</li>
                      <li>WordPress</li>
                    </ul>
                </div>
              </div>
              <div className="relative col-span-3 rounded-xl border border-gray-700 bg-gradient-to-t from-black to-gray-800 p-10">
                <div className="max-w-3xl space-y-10">
                  <h3 className="text-gray-100 text-[2.5rem] font-medium ">Why Choose Us?</h3>
                  <p className="text-[1.2rem] text-gray-400">With years of experience in web design and application development, our team stays ahead of the latest trends and technologies. We leverage cutting-edge tools and techniques to create websites that are not only beautiful but also optimized for performance and scalability.</p>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [5, 3],
              [5, 5],
              [10, 10],
              [12, 15],
              [15, 10],
              [20, 25],
              [30, 35],
              [40, 45],
              [50, 55],
            ]}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-60%] h-[200%] skew-y-12",
            )}
          />
        </div>
      </section>
    </>
  );
}
