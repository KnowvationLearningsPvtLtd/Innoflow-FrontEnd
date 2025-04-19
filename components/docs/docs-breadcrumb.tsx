import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface DocsBreadcrumbProps {
  items?: BreadcrumbItem[]
}

export function DocsBreadcrumb({ items = [] }: DocsBreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={`${item.href}-${index}`} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="mx-1 h-4 w-4 text-gray-400 dark:text-gray-600" />}
            {index === items.length - 1 ? (
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
