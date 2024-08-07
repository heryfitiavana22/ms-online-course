import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

export function H1({ className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn('text-4xl md:text-5xl lg:text-6xl', className)}
      {...props}
    ></h1>
  );
}

export function H2({ className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn('text-3xl md:text-4xl', className)}
      {...props}
    ></h2>
  );
}

export function H3({ className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn('text-2xl md:text-3xl', className)}
      {...props}
    ></h3>
  );
}

export function H4({ className, ...props }: TypographyProps) {
  return (
    <h4
      className={cn('text-xl md:text-2xl', className)}
      {...props}
    ></h4>
  );
}

export function H5({ className, ...props }: TypographyProps) {
  return (
    <h5 className={cn('text-lg md:text-xl', className)} {...props}></h5>
  );
}

export function H6({ className, ...props }: TypographyProps) {
  return <h6 className={cn('text-lg', className)} {...props}></h6>;
}

type TypographyProps = ComponentProps<'h1'>;
