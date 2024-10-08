'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web Analytics",
    content: `
      <p>Web analytics is the measurement, collection, analysis, and reporting of web data to understand and optimize web usage. It's not just a tool for measuring website traffic, but a way to gain insights into your online business and customers.</p>

      <h2>Why Web Analytics Matter</h2>
      <p>In today's digital age, having a website is crucial for businesses. But simply having a website isn't enough. You need to understand how it's performing and how users are interacting with it. This is where web analytics come in.</p>

      <h2>Key Benefits of Web Analytics</h2>
      <ul>
        <li>Understand your audience</li>
        <li>Measure the success of your marketing efforts</li>
        <li>Identify areas of your website that need improvement</li>
        <li>Make data-driven decisions</li>
      </ul>

      <h2>Getting Started with Web Analytics</h2>
      <p>To get started with web analytics, follow these steps:</p>
      <ol>
        <li>Choose an analytics tool (e.g., Google Analytics)</li>
        <li>Set up tracking on your website</li>
        <li>Define your goals and KPIs</li>
        <li>Start collecting data</li>
        <li>Analyze and interpret the data</li>
        <li>Make data-driven improvements to your website</li>
      </ol>

      <p>Remember, web analytics is an ongoing process. Regular analysis and optimization based on the insights you gain will help you continually improve your online presence and achieve your business goals.</p>
    `,
    date: "2023-06-01",
    readTime: "5 min read",
    author: "Jane Doe"
  },
  {
    id: 2,
    title: "10 Key Metrics Every Website Owner Should Track",
    content: `
      <p>In the world of web analytics, there are countless metrics you can track. However, some are more crucial than others. Here are 10 key metrics that every website owner should keep an eye on:</p>

      <h2>1. Unique Visitors</h2>
      <p>This metric shows how many individual users have visited your site. It's a good indicator of your website's reach.</p>

      <h2>2. Pageviews</h2>
      <p>The total number of pages viewed on your site. This includes repeated views of a single page.</p>

      <h2>3. Bounce Rate</h2>
      <p>The percentage of visitors who leave your site after viewing only one page. A high bounce rate could indicate that your content isn't engaging or relevant.</p>

      <h2>4. Average Time on Page</h2>
      <p>This metric shows how long, on average, visitors spend on a particular page. It can help you understand which content is most engaging.</p>

      <h2>5. Conversion Rate</h2>
      <p>The percentage of visitors who complete a desired action (like making a purchase or signing up for a newsletter).</p>

      <h2>6. Exit Rate</h2>
      <p>The percentage of visitors who leave your site from a specific page.</p>

      <h2>7. Traffic Sources</h2>
      <p>Where your visitors are coming from (e.g., search engines, social media, direct traffic).</p>

      <h2>8. Mobile Traffic</h2>
      <p>The proportion of your visitors accessing your site on mobile devices.</p>

      <h2>9. Page Load Time</h2>
      <p>How long it takes for your pages to load. This can significantly impact user experience and SEO.</p>

      <h2>10. Return Visitor Rate</h2>
      <p>The percentage of visitors who come back to your site after their first visit.</p>

      <p>By regularly monitoring these metrics, you can gain valuable insights into your website's performance and make data-driven decisions to improve user experience and achieve your business goals.</p>
    `,
    date: "2023-06-15",
    readTime: "8 min read",
    author: "John Smith"
  },
  {
    id: 3,
    title: "The Impact of Core Web Vitals on SEO",
    content: `
      <p>Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience. They are a subset of factors that will be included in Google's "page experience" score (essentially, Google's way of sizing up your page's overall UX).</p>

      <h2>What are Core Web Vitals?</h2>
      <p>The Core Web Vitals are three specific page speed and user interaction measurements:</p>
      <ul>
        <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
        <li><strong>First Input Delay (FID):</strong> Measures interactivity. To provide a good user experience, pages should have a FID of less than 100 milliseconds.</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability. To provide a good user experience, pages should maintain a CLS of less than 0.1.</li>
      </ul>

      <h2>How Core Web Vitals Affect SEO</h2>
      <p>Google has stated that Core Web Vitals will be used as ranking signals. This means that websites with good Core Web Vitals scores may see a boost in their search engine rankings, while those with poor scores may see a decline.</p>

      <h2>Improving Your Core Web Vitals</h2>
      <p>Here are some strategies to improve your Core Web Vitals:</p>
      <ol>
        <li>Optimize your images (compress, use modern formats, lazy load)</li>
        <li>Minimize JavaScript and CSS</li>
        <li>Implement caching</li>
        <li>Use a Content Delivery Network (CDN)</li>
        <li>Optimize server response time</li>
        <li>Avoid large layout shifts</li>
      </ol>

      <p>Remember, improving Core Web Vitals not only helps with SEO but also provides a better user experience, which can lead to higher engagement and conversion rates.</p>
    `,
    date: "2023-07-01",
    readTime: "6 min read",
    author: "Alice Johnson"
  },
  {
    id: 4,
    title: "A/B Testing: Optimize Your Website for Conversions",
    content: `
      <p>A/B testing, also known as split testing, is a method of comparing two versions of a webpage or app against each other to determine which one performs better. It's an essential tool for data-driven decision making and can significantly improve your website's conversion rates.</p>

      <h2>Why A/B Testing Matters</h2>
      <p>A/B testing allows you to make careful changes to your user experiences while collecting data on the results. This helps you to construct hypotheses about changes to your website and to learn better why certain elements of your experiences impact user behavior.</p>

      <h2>How to Conduct an A/B Test</h2>
      <ol>
        <li><strong>Collect Data:</strong> Use your website data to identify areas for improvement.</li>
        <li><strong>Identify Goals:</strong> What metrics do you want to improve? (e.g., conversion rate, click-through rate)</li>
        <li><strong>Form a Hypothesis:</strong> What change do you think will improve your goal metric?</li>
        <li><strong>Create Variations:</strong> Create a 'B' version of your page with the change you want to test.</li>
        <li><strong>Run the Test:</strong> Use an A/B testing tool to randomly assign visitors to either the A or B version.</li>
        <li><strong>Analyze Results:</strong> After the test has run for a sufficient time, analyze the data to see which version performed better.</li>
        <li><strong>Implement Changes:</strong> If the B version performed significantly better, consider implementing the change permanently.</li>
      </ol>

      <h2>Common A/B Testing Pitfalls</h2>
      <ul>
        <li>Testing too many things at once</li>
        <li>Not running the test long enough</li>
        <li>Ignoring statistical significance</li>
        <li>Not considering external factors (e.g., seasonality)</li>
      </ul>

      <p>Remember, A/B testing is an ongoing process. Continual testing and optimization can lead to substantial improvements in your website's performance over time.</p>
    `,
    date: "2023-07-15",
    readTime: "7 min read",
    author: "Bob Williams"
  },
]

export function Pagee({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild className="mb-4">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
          <span>{post.author}</span>
          <span>{post.date} • {post.readTime}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

