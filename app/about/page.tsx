import Image from 'next/image'

export const metadata = {
  title: 'About me',
  description: 'Bio.',
}

export default function Page() {
  const imageData = {
    src: '/images/me.jpg',
    title: 'me',
    width: 150,
    height: 150,
  };

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        about me
      </h1>
      <p>
        <Image
          src={imageData.src}
          alt={imageData.title}
          width={imageData.width}
          height={imageData.height}
          className="rounded-full m-3"
        />
      </p>
      <p className="mb-4">
        {`My name is Konrad Sałkowski and I live in Warsaw PL.`}
      </p>
      <p className="mb-4">
        {`I'm a software engineer that dabbles with coding since 2010. I specialize in .NET technologies, building APIs and backend systems, but I'm always open to make use of any technology that will help achieve set goal.
        My main interests lie in software architecture, optimization and algorithms.`}
      </p>
    </section>
  )
}
