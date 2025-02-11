import { Subheading } from '@/components/custom/sub-heading'
import { MaxWidthWrapper } from '@/components/max-width-wrapper'

const Page = () => {
    return (
        <>
            <section className="relative py-24 lg:py-32">
                <MaxWidthWrapper className="max-w-screen-3xl text-bgdark">
                    <Subheading>Privacy Policy</Subheading>
                    <p>Effective Date: 11.02.2025</p>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Introduction</h3>
                        <p>This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Information We Collect</h3>
                        <div>
                            <p>Personal Information: Name, email address, company, phone number, etc.</p>
                            <p>Usage Data: IP address, browser type, pages visited, etc.</p>
                        </div>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>How We Use Your Information</h3>
                        <div>
                            <p>To provide and improve our services.</p>
                            <p>To communicate with you about our services.</p>
                            <p>To comply with legal obligations.</p>
                        </div>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Sharing Your Information</h3>
                        <p>We do not sell or rent your personal information to third parties. We may share your information with trusted partners to perform services on our behalf.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Data Security</h3>
                        <p>We implement appropriate security measures to protect your personal information from unauthorized access.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Your Rights</h3>
                        <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>International Data Transfers</h3>
                        <p>As a company operating in India, your information may be transferred and processed in these jurisdictions.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Changes to This Policy</h3>
                        <p>We may update this Privacy Policy from time to time. We encourage you to review this policy periodically.</p>
                    </div>
                    <div className='pt-10 space-y-3'>
                        <h3 className='text-xl font-medium'>Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, please contact us at contact[at]compiledbox.com.</p>
                    </div>

                </MaxWidthWrapper>

            </section>
        </>
    )
}

export default Page