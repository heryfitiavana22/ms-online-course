import { H3 } from "@/components/typography/typography";
import React, { SVGProps } from "react";

export function CardService({ Icon, description, title }: CardServiceProps) {
  return (
    <div className="grid gap-1 h-full">
      <Icon className="h-8 w-8 text-primary" />
      <H3 className="font-bold">{title}</H3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

type CardServiceProps = {
  Icon: (props: SVGProps<SVGSVGElement>) => React.JSX.Element;
  title: string;
  description: string;
};
