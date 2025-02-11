import { Subheading } from '@/components/custom/sub-heading'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

const Page = () => {
    return (
        <>
            <section className="relative py-24 lg:py-32">
                <MaxWidthWrapper className="max-w-screen-3xl text-bgdark">
                    <Subheading>Cookies Policy</Subheading>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Introduction</h3>
                        <p>Our website uses cookies to enhance user experience and analyze website traffic. By using our website, you consent to the use of cookies.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>What Are Cookies?</h3>
                        <p>Cookies are small text files stored on your device by your web browser. They help us understand user behavior and improve our services.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Types of Cookies We Use</h3>
                        <div>
                            <p>Necessary Cookies: Essential for the operation of our website.</p>
                            <p>Performance Cookies: Help us understand how visitors use our site.</p>
                            <p>Functional Cookies: Enable personalization and enhanced functionality.</p>
                            <p>Targeting Cookies: Used for advertising and tracking user behavior.</p>
                        </div>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Managing Cookies</h3>
                        <p>You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Changes to This Policy</h3>
                        <p>We may update this Cookies Policy from time to time. We encourage you to review this policy periodically.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Contact Us</h3>
                        <p>If you have any questions about our use of cookies, please contact us at contact[at]compiledbox.com.</p>
                    </div>

                </MaxWidthWrapper>

            </section>
        </>
    )
}

export default Page