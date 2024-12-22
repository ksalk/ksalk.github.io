import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        average dotnet enjoyer
      </h1>
      <p className="mb-4">
        {`I like to build stuff in dotnet. Check out my ramblings below.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
