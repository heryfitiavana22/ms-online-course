import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { H2 } from "../typography/typography";

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <section
      className={cn("container max-w-5xl py-12 md:py-24 lg:py-32", className)}
      {...props}
    >
      {children}
    </section>
  );
}

type ContainerProps = ComponentProps<"section">;

export function ContainerTitle({ title, description }: ContainerTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <H2 className="font-bold tracking-tighter">{title}</H2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

type ContainerTitleProps = {
  title: string;
  description: string;
};
