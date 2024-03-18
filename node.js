//crear markdown
const fs = require("fs");
const path = require("path");

const pdfFolder = path.join(__dirname, "public", "pdf"); // Path to the PDF folder
const postsFolder = path.join(__dirname, "posts"); // Path to the posts folder

const pdfFiles = fs
  .readdirSync(pdfFolder)
  .filter((file) => file.endsWith(".pdf"));
// console.log(pdfFiles)

pdfFiles.forEach((pdfFile) => {
  const pdfFilePath = path.join(pdfFolder, pdfFile);
  const markdownFileName = pdfFile.replace(".pdf", ".md");
  const tittle = pdfFile.replace(".pdf", "");
  const markdownFilePath = path.join(postsFolder, markdownFileName);

  // Create a Markdown template with a link to the PDF file
  const markdownContent = `---
  title: SENTENCIA- ${tittle}
  image: SL1083-2019.png
  date: '2021-10-30' 
  isFeatured: true
---`;

  // Write the Markdown content to the file
  fs.writeFileSync(markdownFilePath, markdownContent);
});

console.log("Markdown files generated.");

//nombrar sentencias
// const fs = require('fs');
// const path = require('path');

// const pdfFolder = path.join(__dirname, 'public', 'pdf'); // Ruta de la carpeta con los PDF
// const searchString = 'SENTENCIA-'; // Parte del nombre a reemplazar
// const replaceString = ''; // Parte con la que se reemplazará

// fs.readdir(pdfFolder, (err, files) => {
//   if (err) {
//     console.error('Error al leer la carpeta:', err);
//     return;
//   }

//   files.forEach((file) => {
//     if (file.startsWith(searchString)) {
//       const oldFilePath = path.join(pdfFolder, file);
//       const newFileName = file.replace(searchString, replaceString);
//       const newFilePath = path.join(pdfFolder, newFileName);

//       fs.rename(oldFilePath, newFilePath, (renameErr) => {
//         if (renameErr) {
//           console.error(`Error al renombrar el archivo ${file}:`, renameErr);
//         } else {
//           console.log(`Archivo ${file} renombrado a ${newFileName}`);
//         }
//       });
//     }
//   });
// });
