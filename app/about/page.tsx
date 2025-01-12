import Link from 'next/link'

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
        {`I'm Konrad Sałkowski, a .NET developer located in Warsaw PL.`}
      </p>
      <p className="mb-4">
        {`I'm a software engineer that dabbles with coding since 2010. I specialize in .NET tech stack, building APIs and backend systems, but I'm always open to learn and make use of any technology that will help me in my projects.
        My main interests lie in software architecture, optimization and algorithms. I follow the latest developments in IT industry and try to keep up with the newest technologies and development philosophies.`}
      </p>
      <p className="mb-4">
        {`If you want more info about my professional career, check out my `}
        <Link
          href="https://www.linkedin.com/in/konrad-salkowski/">
          linkedin page
        </Link>
        {`.`}
      </p>
    </section>
  )
}
