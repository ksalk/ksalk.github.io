import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'About me',
  description: 'Bio.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About me
      </h1>
      <p className="mb-4">
        {`My name is Konrad Sałkowski.`}
      </p>
    </section>
  )
}
