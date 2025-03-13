import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  const imageData = {
    src: '/images/me.jpg',
    title: 'me',
    width: 120,
    height: 120,
  };

  return (
    <section>
      <div className="mobile flex justify-center mb-4">
        <Image
          src={imageData.src}
          alt={imageData.title}
          width={imageData.width}
          height={imageData.height}
          className="nav-image rounded-full"
          />
      </div>

      <div className="flex items-center mb-16">
        <div className='flex-auto'>
          <h1 className="name-title align-middle mb-8">
            Konrad Sałkowski
          </h1>
          <p>
            {`Hi! I like to build stuff in dotnet and explore latest tech developments.`}
          </p>
          <p>
            {`Check out my ramblings below.`}
          </p>
        </div>
        
        <Image
          src={imageData.src}
          alt={imageData.title}
          width={imageData.width}
          height={imageData.height}
          className="desktop nav-image flex-none rounded-full mr-5"
        />
      </div>
      
      <div>
        <BlogPosts />
      </div>
    </section>
  )
}
