"use client"
import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure pdfjs worker to load PDF files
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = (props) => {
  const { post } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfPath = `/pdf/${post.slug}.pdf`;
  const [pdfBlob, setPdfBlob] = useState(null);
  const [url,setUrl]=useState();
  const [scale, setScale] = useState(1)

  useEffect(() => {
    console.log("hi")
        // Load the PDF file
  fetch(pdfPath, {headers: {
      'Content-Type': 'application/pdf',
    }
  },)
      .then((response) => response.blob())
      .then((blob) => {
        // Load the PDF blob
        setPdfBlob(blob);
        const urlBlob= URL.createObjectURL(blob)
        setUrl(urlBlob)
        console.log("hi",blob)
        
      })
      .catch((error) => {
        console.error('Error loading PDF:', error);
      });
   
  }, [post.slug]);

  const handleZoomIn = () => {
    setScale(scale + 0.12); // Increase the scale factor for zooming in
  };

  const handleZoomOut = () => {
    setScale(scale - 0.12); // Decrease the scale factor for zooming out
  };
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const downloadPDF = () => {
    const pdfUrl = URL.createObjectURL(pdfBlob);
     setUrl(pdfUrl)
    // Check if a PDF blob URL exists
    console.log("hi",pdfBlob,url)
    if (url) {
    console.log("hi")

      // Create an anchor element
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = `${post.slug}.pdf`; // Set the desired file name
      a.style.display = 'none'; // Hide the anchor element

      // Append the anchor element to the document body
      document.body.appendChild(a);

      // Trigger a click event on the anchor element to initiate the download
      a.click();

      // Remove the anchor element from the document body
      document.body.removeChild(a);
    }
  };
  return (
    <div className="pdfViewer">

      <div className="pagination">
        <div style={{display:'flex',justifyContent:"space-evenly", fontSize: "1.4rem",
  margin:"0.3rem",
  padding:" 0.2rem"}}>
        <div>
          <button onClick={handleZoomIn}>+🔍</button>
          <button onClick={handleZoomOut}>-🔍</button>
        </div>
        <button onClick={downloadPDF}>📥</button>
      </div>
        <p>
          Pagina {pageNumber} de {numPages}
        </p>
        <button
          onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
          disabled={pageNumber <= 1}
          >
         ⬅️
        </button>
        <button
          onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
          disabled={pageNumber >= numPages}
          >
          ➡️
        </button>
         
      </div>
      <div style={{ width: '100%', height: 'auto',overflow:'scroll' }}>

          {pdfBlob && (
            
            <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} scale={scale} renderAnnotationLayer={false} renderTextLayer={false}/>
            </Document>
          )}
          </div>
    </div>
  );
};

export default PDFViewer;
