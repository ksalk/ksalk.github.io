import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About me',
  description: 'Bio.',
}

export default function Page() {
  const imageData = {
    src: '/images/me.jpg',
    title: 'me',
    width: 200,
    height: 200,
  };

  return (
    <section>
      <p className="flex justify-center m-4">
        <Image
          src={imageData.src}
          alt={imageData.title}
          width={imageData.width}
          height={imageData.height}
          className="nav-image rounded-full"
          />
      </p>
      <h1 className="mb-8 name-title text-center">
        {`Hi! I'm Konrad!`}
      </h1>
      <p className="mb-4">
        {`I'm Konrad Sałkowski, a .NET developer based in Warsaw, Poland. I've spent over a decade in the .NET ecosystem, designing and building reliable, high-performance applications, specializing in APIs and backend systems. My passion extends beyond the daily grind - I'm constantly investigating the latest tech trends, exploring cloud technologies, and keeping a close eye on the evolution of AI.`}
      </p>
      <p className="mb-4">
        {`Throughout my career, I've worked in several companies, mainly contributing to the development of cloud-based back-office and internal systems. I strive to be a valuable team member, not only through my technical contributions but also by fostering positive dev culture within the projects I've been involved in. Keeping up with new technologies and evolving development practices is a key part of my work. You can find more about my professional experience and connect with me on `}
        <Link
          href="https://www.linkedin.com/in/konrad-salkowski/">
          LinkedIn
        </Link>
        {`.`}
      </p>
      <p className="mb-4">
        {`This blog is where I share insights, challenges, and discoveries from my dev journey. Expect deep dives into .NET, new technologies, and real-world problems I’ve tackled. Stick around!`}
      </p>
    </section>
  )
}
