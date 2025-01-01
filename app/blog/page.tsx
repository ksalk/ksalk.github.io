import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">blog</h1>
      {/* <BlogPosts /> */}
      <p className="mb-4">
        {`Nothing here yet. I'm working on it.`}
      </p>
    </section>
  )
}
