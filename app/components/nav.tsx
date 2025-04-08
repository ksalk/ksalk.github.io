import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  '/about': {
    name: 'About',
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
    <aside className="-ml-[8px] mb-4 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row w-full items-center space-x-0 pr-5">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="main-link flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
            <div className="ml-auto flex align-middle relative py-1 px-2">
              <a
                className="main-link flex items-center"
                rel="noopener noreferrer"
                target="_blank"
                href="https://x.com/KonradSalkowski"
              >
                <p className="h-7 font-medium text-2xl"><i className="fa-brands fa-x-twitter"></i></p>
              </a>
              <a
                className="main-link flex items-center"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ksalk"
              >
                <p className="ml-4 h-7 font-medium text-2xl"><i className="fa-brands fa-github"></i></p>
              </a>
              <a
                className="main-link flex items-center"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/konrad-salkowski/"
              >
                <p className="ml-4 h-7 font-medium text-2xl"><i className="fa-brands fa-linkedin"></i></p>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
