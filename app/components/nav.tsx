import Link from 'next/link'
import Image from 'next/image'

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
  return (
    <header className="mb-4 tracking-tight">
      <div className="lg:sticky lg:top-20">
        {/* Row 1: Avatar + Name + Bio */}
        <div className="flex items-center gap-4 mb-4">
          <Link href="/">
            <Image
              src="/images/me.jpg"
              alt="Konrad Sałkowski"
              width={80}
              height={80}
              className="rounded-full"
            />
          </Link>
          <div className="flex flex-col">
            <Link href="/" className="header-name">Konrad Sałkowski</Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              I like to build stuff in dotnet and explore latest tech developments.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Check out my ramblings below.
            </p>
          </div>
        </div>

        {/* Row 2: Navigation + Social Icons */}
        <nav
          className="flex flex-row items-center relative px-0 pb-0 -ml-2"
          id="nav"
        >
          <div className="flex flex-row w-full items-center">
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
            <div className="ml-auto flex items-center gap-4">
              <a
                className="main-link flex items-center"
                rel="noopener noreferrer"
                target="_blank"
                href="https://x.com/KonradSalkowski"
              >
                <span className="text-xl"><i className="fa-brands fa-x-twitter"></i></span>
              </a>
              <a
                className="main-link flex items-center"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ksalk"
              >
                <span className="text-xl"><i className="fa-brands fa-github"></i></span>
              </a>
              <a
                className="main-link flex items-center"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/konrad-salkowski/"
              >
                <span className="text-xl"><i className="fa-brands fa-linkedin"></i></span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
