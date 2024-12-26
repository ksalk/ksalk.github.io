import Image from 'next/image'

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
        {`I'm Konrad Sałkowski, and I live in Warsaw PL.`}
      </p>
      <p className="mb-4">
        {`I'm a .NET software engineer that dabbles with coding since 2010. I specialize in .NET tech stack, building APIs and backend systems, but I'm always open to learn and make use of any technology that will help me in my projects.
        My main interests lie in software architecture, optimization and algorithms.`}
      </p>
    </section>
  )
}
