import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./mode-toggle";
import { SearchButton } from "./search-button";
import SidebarMain from "./func-sidebar";
import { Outlet } from "react-router-dom";
// import ELibrary from "../pages/ELibrary";

export function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-start">
      <SidebarMain children={<Outlet />}/>
      <div className="flex items-center gap-2">
        <ThemeProvider>
          <ModeToggle />
        </ThemeProvider>
        <SearchButton />
      </div>
    </header>
  );
}
