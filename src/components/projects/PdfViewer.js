import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiZoomIn, FiZoomOut, FiDownload } from 'react-icons/fi';

const PdfViewer = ({ pdfPath }) => {
  const [scale, setScale] = useState(1);

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2.5));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const downloadPdf = () => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="pdf-viewer-container flex flex-col items-center">
      <div className="controls flex items-center justify-center space-x-4 mb-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={zoomOut}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Zoom out"
        >
          <FiZoomOut size={20} />
        </motion.button>
        <span className="text-gray-700 dark:text-gray-300">
          {Math.round(scale * 100)}%
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={zoomIn}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Zoom in"
        >
          <FiZoomIn size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={downloadPdf}
          className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
          aria-label="Download PDF"
        >
          <FiDownload size={20} />
        </motion.button>
      </div>
      
      <div className="pdf-container overflow-auto w-full border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
        <div className="pdf-content flex justify-center min-h-[500px] bg-gray-100 dark:bg-gray-800">
          <iframe
            src={`${pdfPath}#view=FitH`}
            style={{ 
              width: `${100 * scale}%`, 
              height: `${100 * scale}%`, 
              maxWidth: '100%',
              minHeight: '500px',
              transform: `scale(${scale})`,
              transformOrigin: 'center top'
            }}
            title="PDF Viewer"
            className="border-0"
          />
        </div>
      </div>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
        Use the zoom controls to adjust the view or click the download button to view the full PDF
      </p>
    </div>
  );
};

export default PdfViewer;
