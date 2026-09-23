import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-brand-yellow/60 bg-brand-yellow/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-balance text-navy md:text-4xl">
        {title}
      </h2>
      {description ? <p className="text-base text-muted-foreground md:text-lg">{description}</p> : null}
    </div>
  );
}
