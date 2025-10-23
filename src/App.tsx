import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import ELibrary from "./pages/ELibrary";
import Dashboard from "./pages/hello1";
import { useEffect, useState } from "react";
import type { EBook } from "./services/types";
import { mockBooks } from "./services/mockData";
import Account from "./pages/account";
import Collection from "./pages/collections";

export default function App() {
  const [books, setBooks] = useState<EBook[]>([]);

  useEffect(() => {
    const overlay = document.getElementById("loading-overlay");
    const root = document.getElementById("root");
    if (overlay) overlay.style.display = "none";
    if (root) root.style.display = "block";
    
    
    setTimeout(() => setBooks(mockBooks), 500);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<ELibrary books={books} />} />
          <Route path="/students" element={<Dashboard />} />
          <Route path="/Library" element={<ELibrary books={books}/> } />
          <Route path="/Collection" element={<Collection />}/>
          <Route path="/account" element={ <Account />}/>
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}