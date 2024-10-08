'use client'

import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web Analytics",
    excerpt: "Learn the basics of web analytics and why it's crucial for your online presence. Discover how to set up analytics tools and interpret key metrics.",
    date: "2023-06-01",
    readTime: "5 min read",
    author: "Jane Doe"
  },
  {
    id: 2,
    title: "10 Key Metrics Every Website Owner Should Track",
    excerpt: "Dive into the most important metrics that can help you understand your website's performance. From bounce rate to conversion rate, we cover it all.",
    date: "2023-06-15",
    readTime: "8 min read",
    author: "John Smith"
  },
  {
    id: 3,
    title: "The Impact of Core Web Vitals on SEO",
    excerpt: "Understand how Core Web Vitals affect your search engine rankings and user experience. Learn strategies to improve your scores and boost your SEO.",
    date: "2023-07-01",
    readTime: "6 min read",
    author: "Alice Johnson"
  },
  {
    id: 4,
    title: "A/B Testing: Optimize Your Website for Conversions",
    excerpt: "Learn how to conduct effective A/B tests to improve your website's conversion rates. Discover best practices and common pitfalls to avoid.",
    date: "2023-07-15",
    readTime: "7 min read",
    author: "Bob Williams"
  },
]

export function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center ">Web Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <Link href={`/blog/${post.id}`} legacyBehavior>
              <a className="flex-grow">
                <CardHeader>
                  <CardTitle className="text-2xl hover:text-primary transition-colors duration-300">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </a>
            </Link>
            <CardFooter className="border-t pt-4">
              <div className="flex justify-between items-center w-full">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Button asChild>
                  <Link href={`/1`}>
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
