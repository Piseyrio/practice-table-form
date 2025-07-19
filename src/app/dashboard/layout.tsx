// app/dashboard/layout.tsx
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster toastOptions={{
    classNames: {
      toast: "rounded-lg bg-neutral-900 text-white border border-neutral-700 shadow-lg",
      title: "text-white text-base",
      description: "text-neutral-300 text-sm",
      actionButton: "bg-white text-black",
    },
  }}/>
      </body>
    </html>
  );
}
