import { Subheading } from '@/components/custom/sub-heading'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

const Page = () => {
    return (
        <>
            <section className="relative py-24 lg:py-32">
                <MaxWidthWrapper className="max-w-screen-3xl text-bgdark">
                    <Subheading>Terms of Service</Subheading>
                    <p>Effective Date: 11.02.2025</p>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Introduction</h3>
                        <p>These Terms of Service govern your use of our website and services. By using our website (compiledbox.com), you agree to these terms.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Use of Our Services</h3>
                        <p>You must comply with all applicable laws and regulations when using our services.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Intellectual Property</h3>
                        <p>All content on our website, including text, graphics, logos, and images, is the property of Eclipso Studio LTD or its content suppliers and protected by copyright laws.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>User Content</h3>
                        <p>You retain ownership of any content you submit to our website but grant us a non-exclusive, royalty-free license to use, reproduce, and display such content.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Disclaimers</h3>
                        <p>Our services are provided &rdquo;as is&rdquo; without warranties of any kind. We do not guarantee the accuracy or completeness of any information on our website.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Limitation of Liability</h3>
                        <p>We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Governing Law</h3>
                        <p>These terms are governed by the laws of Bosnia and Herzegovina.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Changes to These Terms</h3>
                        <p>We may update these Terms of Service from time to time. We encourage you to review these terms periodically.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Contact Us</h3>
                        <p>If you have any questions about this terms of service, please contact us at contact[at]compiledbox.com.</p>
                    </div>

                </MaxWidthWrapper>

            </section>
        </>
    )
}

export default Page