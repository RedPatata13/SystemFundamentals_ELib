import { useEffect, useState } from 'react';
// import StorageService from '../services';
import type { EBook } from '../services/types';
import { mockBooks } from '../services/mockData';

export default function ELibrary() {
  const [books, setBooks] = useState<EBook[]>([]);

  useEffect(() => {
    // StorageService.list().then(setBooks);
    setTimeout(() => setBooks(mockBooks), 500);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>E-Library</h1>
      <ul>
        {books.map((b) => (
          <li key={b.key} style={{ marginBottom: 8 }}>
            {/* Use the URL if it exists; fallback to # */}
            <a
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline', color: 'blue' }}
            >
              {b.title}
            </a>
          </li>
        ))}
      </ul>
      <p>Works</p>
    </div>
  );
}
