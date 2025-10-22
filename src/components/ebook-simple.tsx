import { useEffect, useRef, useState } from "react";
import type { EBook } from "../services/types";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export function EbookTileSimple({ ebook }: { ebook: EBook }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderCover = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      try {
        console.log("Loading PDF:", ebook.url);
        const pdf = await pdfjsLib.getDocument(ebook.url).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });

        const ctx = canvas.getContext("2d")!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        ctx.translate(0, canvas.height);
        ctx.scale(1, -1);
        await page.render({ canvasContext: ctx, viewport, canvas, transform: [1, 0, 0, -1, 0, viewport.height] }).promise;
        setLoading(false);
      } catch (err: any) {
        console.error("PDF render error:", err);
        // setError("Failed to load cover");
        setLoading(false);
      }
    };

    renderCover();
  }, [ebook.url]);

  return (
  <div className="flex flex-col items-center gap-2 w-[300px]">
    <div 
      className="w-full bg-gray-200 flex items-center justify-center rounded-lg shadow overflow-hidden relative group"
      style={{ 
        aspectRatio: '3/4'
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
        style={{ display: loading ? "none" : "block" }} 
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Loading...</span>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-500 text-sm">{error}</span>
        </div>
      )}
    </div>
    <span className="text-center text-sm font-medium truncate w-full">
      {ebook.title}
    </span>
  </div>
);

}
