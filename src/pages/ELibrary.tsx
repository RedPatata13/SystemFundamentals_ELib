// import { useEffect, useState } from 'react';
import type { EBook } from '../services/types';
// import { mockBooks } from '../services/mockData';
import { EbookTileSimple } from '../components/ebook-simple';
import { AppPagination } from '../components/app-pagination';
// import { useOutletContext } from 'react-router-dom';

interface ELibraryProps{
  books: EBook[];
}
export default function ELibrary({ books} : ELibraryProps) {
  const donothing = () => {

  };
  return (
    <div style={{ padding: 20 }} className='flex-col justify-between'>
      {/* <br /> */}
      <div className='flex gap-16 flex-wrap justify-start'>
        {books.map((b, i) => {
        console.log("EBook URL:", b.url);
        return <EbookTileSimple ebook={b} key={b.key || b.url || i} />;
      })}
      </div>
      <div className="w-full flex justify-center items-center mt-auto">
        <AppPagination totalCount={books.length} pageSize={20} currentPage={1} onPageChange={donothing}/>
      </div>
    </div>
  );
}
