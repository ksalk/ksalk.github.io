function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

import ThemeDropdown from './theme-dropdown'

export default function Footer() {
  return (
    <footer className="mb-16 mt-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-neutral-500 dark:text-neutral-400 order-2 md:order-1">
          © {new Date().getFullYear()} MIT Licensed
        </p>
        <div className="order-1 md:order-2 ml-auto">
          <ThemeDropdown />
        </div>
      </div>
    </footer>
  )
}
