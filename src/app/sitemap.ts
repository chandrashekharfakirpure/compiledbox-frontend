import { getSitemapData } from "@/_services/get-data-object"
import { SitemapProps } from "@/_utilities/next-type"

export default async function sitemap() {
    const baseUrl = 'https://compiledbox.com'

    const blogs = await getSitemapData('articles')
    const blogsUrls =
        blogs?.map((item: SitemapProps) => {
            return {
                url: `${baseUrl}/blog/${item.slug}`,
                lastModified: `${item.updated_at}`,
                changeFrequency: 'monthly',
                priority: 0.8,
            }
        }) ?? []

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/agency`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.80,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.80,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.80,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.80,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.80,
        },
        ...blogsUrls,
    ]
}