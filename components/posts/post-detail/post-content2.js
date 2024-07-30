"use client";
import React, { useEffect, useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
// Import styles
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";

import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// Configure pdfjs worker to load PDF files
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = (props) => {
  const { post } = props;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfPath = `/pdf/${post.slug}.pdf`;
  const [pdfBlob, setPdfBlob] = useState(null);
  const [url, setUrl] = useState();
  const [scale, setScale] = useState(0.7);
  // console.log(url);
  useEffect(() => {
    // console.log("hi");
    // Load the PDF file
    fetch(pdfPath, {
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Load the PDF blob
        setPdfBlob(blob);
        const urlBlob = URL.createObjectURL(blob);
        setUrl(urlBlob);
        console.log("hi", blob);
      })
      .catch((error) => {
        console.error("Error loading PDF:", error);
      });
  }, [post.slug, pdfPath]);

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
    setUrl(pdfUrl);
    // Check if a PDF blob URL exists
    console.log("hi", pdfBlob, url);
    if (url) {
      console.log("hi");

      // Create an anchor element
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.download = `${post.slug}.pdf`; // Set the desired file name
      a.style.display = "none"; // Hide the anchor element

      // Append the anchor element to the document body
      document.body.appendChild(a);

      // Trigger a click event on the anchor element to initiate the download
      a.click();

      // Remove the anchor element from the document body
      document.body.removeChild(a);
    }
  };
  const pageNavigationPluginInstance = pageNavigationPlugin();
  return (
    <div className="pdfViewer">
      {/* <div className="pagination">
        <div style={{ display: "flex", justifyContent: "center" }}>
          Pagina {pageNumber} de {numPages}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "1.4rem",
            margin: "0.15rem",
            padding: " 0.1rem",
          }}
        >
          <div>
            <button onClick={handleZoomIn}>
              <span class="material-symbols-outlined">zoom_in</span>
            </button>
            <button onClick={handleZoomOut}>
              <span class="material-symbols-outlined">zoom_out</span>
            </button>
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber <= 1}
            >
              <span class="material-symbols-outlined">arrow_left</span>
            </button>
            <button
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              disabled={pageNumber >= numPages}
            >
              <span class="material-symbols-outlined">arrow_right</span>
            </button>
          </div>
          <button onClick={downloadPDF}>
            <span class="material-symbols-outlined">download</span>
          </button>
        </div>
      </div> */}
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   width: "100%",
      //   height: "auto",
      //   overflow: "scroll",
      //   minHeight: "78vh",
      // }}
      >
        {pdfBlob && (
          // <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
          //   <Page
          //     pageNumber={pageNumber}
          //     scale={scale}
          //     renderAnnotationLayer={false}
          //     renderTextLayer={false}
          //   />
          <div>
            <div className=" top-0 right-0  fix">
              Sentencia {post.slug}{" "}
              <button onClick={downloadPDF}>
                <span class="material-symbols-outlined">download</span>
              </button>
            </div>

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <div
                className="overflow-scroll
                     max-h-screen"
              >
                <Viewer
                  plugins={[pageNavigationPluginInstance]}
                  initialPage={10}
                  fileUrl={pdfPath}
                  onLoadSuccess={onDocumentLoadSuccess}
                />
              </div>
            </Worker>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;
