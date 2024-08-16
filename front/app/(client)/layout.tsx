import { Header } from "@/components/header/header";
import { PropsWithChildren } from "react";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 mt-14">{children}</main>
      <footer className="p-4">
        <div className="text-center text-muted-foreground">
          &copy; 2024 Online Course Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

type LayoutProps = PropsWithChildren<{}>;
