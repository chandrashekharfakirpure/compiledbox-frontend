
import '@/../public/css/prism.css'
import '@/../public/css/style.css'
import { getObjectData } from '@/_services/get-data-object'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    try {
        const blog = await getObjectData('articles/layout', slug)

        if (!blog) {
            return {
                title: 'Not Found',
                description: 'The page you are looking for does not exists'
            }
        }
        return {
            title: `${blog.title} - Compiledbox`,
            description: `${blog.meta_description}`,
            keywords: [
                "blog - compiledbox",
                `learn ${blog.title}`,
                'learn linux',
                'linux blog',
                'compiledbox blog'
            ],
            authors: [
                { name: "Chandrashekhar" },
                { name: "Compiledbox", url: "https://compiledbox.com" },
            ],
            alternates: {
                canonical: `https://compiledbox.com/blog/${blog.slug}`,
            },
            category: "technology",
            openGraph: {
                title: `${blog.title} - CompiledBox`,
                description:
                    `${blog.meta_description}`,
                url: `https://compiledbox.com/blog/${blog.slug}`,
                siteName: "CompiledBox",
                images: [
                    {
                        url: `${process.env.API_URL}/${blog.image_url}`,
                        width: 1200,
                        height: 630,
                        alt: "blog - compiledbox",
                    }
                ],
                locale: "en_US",
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title: `${blog.title} - CompiledBox`,
                description:
                    `${blog.meta_description}`,
                creator: "@compiledbox",
                images: [
                    `${process.env.API_URL}/${blog.image_url}`,
                ],
            },
        }
    } catch (error) {
        console.error("error", error);
        return {
            title: 'Not Found',
            description: 'The page you are looking for does not exists'
        }
    }
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>{children}</main>
    )
}