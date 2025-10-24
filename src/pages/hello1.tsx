// import React from 'react';
import PdfViewer from '../components/pdf-view';


function PDFViewerPage() {
  return (
    <div className="App scroll-smooth">
      {/* <h1>PDF Viewer</h1> */}
      <PdfViewer 
        pdfUrl="/mock/Makeine_ Too Many Losing Heroines! Vol. 4.pdf"  
        // width="100%"
        // height="100px"
        // className="p-20"
      />
    </div>
  );
}

export default PDFViewerPage;