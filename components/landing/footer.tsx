export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path d="M8 4L4 8L8 12L12 8L8 4Z" fill="currentColor" fillOpacity="0.8" />
                <path d="M20 4L16 8L20 12L24 8L20 4Z" fill="currentColor" fillOpacity="0.9" />
                <path d="M8 16L4 20L8 24L12 20L8 16Z" fill="currentColor" fillOpacity="0.9" />
                <path d="M20 16L16 20L20 24L24 20L20 16Z" fill="currentColor" fillOpacity="0.8" />
                <path d="M14 10L10 14L14 18L18 14L14 10Z" fill="currentColor" fillOpacity="1" />
              </svg>
              <span className="text-lg font-bold text-white">Innoflow</span>
            </a>
            <p className="mt-4 text-sm text-white/70">Where Ideas Stream and Innovation Flows.</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://v0-fork-of-x-share-design-brief-ebxlyh.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white">
                  Legal
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Innoflow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
