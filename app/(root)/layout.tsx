import { MobileNavCopy } from "@/components/shared/MobileNavCopy";
import { SidebarWithLogo } from "@/components/shared/SidebarCopy";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const styling = {
  //   backgroundImage: `url('${bg}')`,
  //   width: "100%",
  //   height: "100%",
  // };

  return (
    <main className="root">
      <SidebarWithLogo />
      {/* <MobileNav /> */}
      <MobileNavCopy />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>

      <Toaster />
    </main>
  );
};

export default Layout;
