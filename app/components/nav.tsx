import Link from 'next/link'
import Image from 'next/image'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/about': {
    name: 'about',
  },
}

export function Navbar() {
  const imageData = {
    src: '/images/me.jpg',
    title: 'me',
    width: 80,
    height: 80,
  };

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row w-full items-center space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="main-link transition-all flex align-middle relative py-1 px-2 m-1 text-lg font-medium"
                >
                  {name}
                </Link>
              )
            })}
            <div className="ml-auto transition-all flex align-middle relative py-1 px-2">
              <Image
                src={imageData.src}
                alt={imageData.title}
                width={imageData.width}
                height={imageData.height}
                className="nav-image"
              />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
