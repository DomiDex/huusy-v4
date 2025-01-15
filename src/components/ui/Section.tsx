import { cn } from "~/lib/utils";
import { type HTMLAttributes } from "react";
import Container from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  withContainer?: boolean;
}

export default function Section({
  children,
  className,
  containerClassName,
  withContainer = true,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} {...props}>
      {withContainer ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
