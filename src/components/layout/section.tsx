import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "gradient" | "dark";
  padding?: "default" | "sm" | "lg" | "none";
}

const paddingSizes = {
  none: "",
  sm: "py-12 md:py-16",
  default: "py-16 md:py-24 lg:py-32",
  lg: "py-24 md:py-32 lg:py-40",
};

const variants = {
  default: "bg-background",
  muted: "bg-muted/30",
  gradient: "bg-gradient-subtle",
  dark: "bg-card",
};

export function Section({
  children,
  className,
  id,
  variant = "default",
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        variants[variant],
        paddingSizes[padding],
        className
      )}
    >
      {children}
    </section>
  );
}
