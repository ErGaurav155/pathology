import Header from "@/components/shared/Header";
import { MobileNav } from "@/components/shared/MobileNav";
import { Sidebar } from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CriconAi",
  description: "AI-powered content creation technology for content creators",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root ">
      <Sidebar />

      <MobileNav />

      <div className="root-container no-scrollbar">{children}</div>

      <Toaster />
    </main>
  );
};

export default Layout;
