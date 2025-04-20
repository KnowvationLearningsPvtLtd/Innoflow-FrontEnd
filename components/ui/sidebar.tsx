"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sidebarVariants = cva(
  "relative flex h-full w-full flex-col overflow-hidden bg-background data-[collapsed=true]:w-[--sidebar-collapsed-width]",
  {
    variants: {
      variant: {
        default: "border-r",
        outline: "border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {
  collapsed?: boolean
  collapsedWidth?: number
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
}

const SidebarContext = React.createContext<{
  collapsed: boolean
  defaultCollapsed: boolean
  onCollapsedChange: (collapsed: boolean) => void
}>({
  collapsed: false,
  defaultCollapsed: false,
  onCollapsedChange: () => {},
})

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      children,
      collapsed: controlledCollapsed,
      defaultCollapsed = false,
      onCollapsedChange,
      collapsedWidth = 4,
      variant,
      ...props
    },
    ref,
  ) => {
    const [internalCollapsed, setInternalCollapsed] = React.useState(defaultCollapsed)

    const collapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed

    const handleCollapsedChange = React.useCallback(
      (value: boolean) => {
        setInternalCollapsed(value)
        onCollapsedChange?.(value)
      },
      [onCollapsedChange],
    )

    return (
      <SidebarContext.Provider
        value={{
          collapsed,
          defaultCollapsed,
          onCollapsedChange: handleCollapsedChange,
        }}
      >
    <div
          data-collapsed={collapsed}
          ref={ref}
          className={cn(sidebarVariants({ variant }), className)}
          style={{ "--sidebar-collapsed-width": `${collapsedWidth}rem`,marginBottom:"24px" } as React.CSSProperties}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    )
  },
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("border-b px-4 py-3", className)} {...props} />,
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex-1 overflow-auto py-2", className)} {...props} />,
)
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("py-2", className)} {...props} />,
)
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-4 py-1 text-xs font-medium text-muted-foreground", className)} {...props} />
  ),
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("space-y-1 px-2", className)} {...props} />,
)
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("space-y-1", className)} {...props} />,
)
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />,
)
SidebarMenuItem.displayName = "SidebarMenuItem"

const menuButtonVariants = cva(
  "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      isActive: {
        true: "bg-accent text-accent-foreground",
        false: "",
      },
    },
    defaultVariants: {
      variant: "ghost",
      isActive: false,
    },
  },
)

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof menuButtonVariants> {
  asChild?: boolean
  isActive?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, variant, isActive, asChild = false, ...props }, ref) => {
    if (asChild) {
      
      return <Slot className={cn(menuButtonVariants({ variant, isActive, className }))}>{props.children}</Slot>
    }

    
    return <button ref={ref} className={cn(menuButtonVariants({ variant, isActive, className }))} {...props} />
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { collapsed, onCollapsedChange } = React.useContext(SidebarContext)

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        onClick={() => onCollapsedChange(!collapsed)}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <path d="M9 3v18" />
        </svg>
        <span className="sr-only">Toggle sidebar</span>
      </button>
    )
  },
)
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex flex-col flex-1 overflow-hidden", className)} {...props} />
  },
)
SidebarInset.displayName = "SidebarInset"

const SidebarRail = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("absolute inset-y-0 left-0 w-1 bg-accent/20", className)} {...props} />
  },
)
SidebarRail.displayName = "SidebarRail"

const SidebarInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    )
  },
)
SidebarInput.displayName = "SidebarInput"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("px-4 py-3", className)} {...props} />,
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarProvider = ({ children, defaultOpen }: { children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = React.useState(defaultOpen || false)

  return (
    <SidebarContext.Provider
      value={{ collapsed: !open, defaultCollapsed: !open, onCollapsedChange: (o: boolean) => setOpen(!o) }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
SidebarProvider.displayName = "SidebarProvider"

import { Separator } from "@/components/ui/separator"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <Separator
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
    {...props}
  />
))
SidebarSeparator.displayName = "SidebarSeparator"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  SidebarRail,
  SidebarInput,
  SidebarFooter,
  SidebarProvider,
  SidebarSeparator,
}