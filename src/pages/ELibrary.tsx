// import { useEffect, useState } from 'react';
import type { EBook } from '../services/types';
// import { mockBooks } from '../services/mockData';
import { EbookTileSimple } from '../components/ebook-simple';

interface ELibraryProps{
  books: EBook[];
}
export default function ELibrary({ books} : ELibraryProps) {

  return (
    <div style={{ padding: 20 }}>
      {/* <h1>E-Library</h1> */}
      <br />
      <div className='flex gap-4'>
        {books.map((b, i) => {
        console.log("EBook URL:", b.url);
        return <EbookTileSimple ebook={b} key={b.key || b.url || i} />;
      })}
      </div>
      
    </div>
  );
}
