import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'About me',
  description: 'Bio.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        about me
      </h1>
      <p className="mb-4">
        {`My name is Konrad Sałkowski, I live in Warsaw PL.`}
      </p>
      <p className="mb-4">
        {`I'm a software developer that dabbles with coding since 2010. I specialize in .NET technologies, but I'm always open to make use of any tool/technology that will help complete set goal.`}
      </p>
    </section>
  )
}
