export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-primary rounded-lg rotate-45" />
        <div className="absolute inset-1 bg-background rounded-md rotate-45" />
        <div className="absolute inset-2 bg-primary rounded-sm rotate-45" />
      </div>
      <span className="text-xl font-semibold tracking-tight text-foreground">
        Revenue<span className="text-primary">OS</span>
      </span>
    </div>
  )
}
