import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./mode-toggle";
import { SearchButton } from "./search-button";
import Layout from "./func-sidebar";
import ELibrary from "../pages/ELibrary";

export function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-start">
      <div className="flex items-center gap-4">
        <Layout >
            <ELibrary />
        </Layout>
      </div>

      <div className="flex items-center gap-2">
        <ThemeProvider>
          <ModeToggle />
        </ThemeProvider>
        <SearchButton />
      </div>
    </header>
  );
}
