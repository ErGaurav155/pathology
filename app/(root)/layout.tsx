import Header from "@/components/shared/Header";
import { MobileNavCopy } from "@/components/shared/MobileNavCopy";
import { SidebarWithLogo } from "@/components/shared/SidebarCopy";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SidebarWithLogo />

      <MobileNavCopy />

      <div className="root-container">{children}</div>

      <Toaster />
    </main>
  );
};

export default Layout;
