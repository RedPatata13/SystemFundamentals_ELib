import { useEffect } from "react"
// import ELibrary from "./pages/ELibrary"
// import Layout from "./components/func-sidebar"
import { Header } from "./components/header"

function App() {
  useEffect(() => {
    const overlay = document.getElementById("loading-overlay")
    const root = document.getElementById("root")
    if (overlay) overlay.style.display = "none"
    if (root) root.style.display = "block"
  }, [])

  return (
    <div style={{ padding: "2rem" }}>
      <Header />
    </div>
  )
}

export default App
