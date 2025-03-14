import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts(false)

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
            <div 
              key={post.slug}
              className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <Link
                className="flex flex-col space-y-1 mb-8 w-full !no-underline"
                href={`/blog/${post.slug}`}
              >
                <p className="blog-list-title">
                  {post.metadata.title}
                </p>
                <p className="blog-list-desc">
                  {post.metadata.summary}
                </p>
                <p className="blog-list-date">
                  {post.metadata.publishedAt}
                </p>
              </Link>
            </div>
        ))}
    </div>
  )
}
