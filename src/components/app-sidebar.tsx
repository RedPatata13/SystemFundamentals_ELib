import { Calendar, Home, Inbox, Search, Settings, Sidebar } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"
import { Button } from "./ui/button"

const items = [
  { title: "Dashboard", url: "/hello1", icon: Home },
  { title: "Inbox", url: "/students", icon: Inbox },
  { title: "Library", url: "/Library", icon: Calendar },
  { title: "Collection", url: "/Collection", icon: Search },
  { title: "Account", url: "/Account", icon: Settings },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sheet>
      
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="m-2">
          <Sidebar className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-4">
        <div className="space-y-4">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground mb-2">
              Application
            </h2>
            <nav className="flex flex-col space-y-1">
              {items.map((item) => {
                const Icon = item.icon
                const active = location.pathname === item.url
                return (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors
                      ${active
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
