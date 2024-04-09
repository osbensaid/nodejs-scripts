const fs = require("fs");
const path = require("path");
const Tesseract = require("tesseract.js");

// Function to read all files in a directory
function readFiles(dirname, callback) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, filenames);
  });
}

// Function to extract text from image
async function extractTextFromImage(filePath) {
  const { data } = await Tesseract.recognize(filePath);
  return data.text.replace(/\n/g, "");
}

// Function to process images in a directory
async function processImages(directory) {
  const filenames = await new Promise((resolve, reject) => {
    readFiles(directory, (err, filenames) => {
      if (err) {
        reject(err);
      } else {
        resolve(filenames);
      }
    });
  });

  const scannedData = [];

  for (const filename of filenames) {
    const filePath = path.join(directory, filename);
    const text = await extractTextFromImage(filePath);
    scannedData.push({
      id: scannedData.length + 1,
      imgContent: text,
    });
  }

  return scannedData;
}

// Define the directory containing the images
const directory = "./images";

// Process the images
processImages(directory)
  .then((scannedData) => {
    // Write scanned data to a single JSON file
    const jsonFilePath = path.join(directory, "scannedData.json");
    fs.writeFileSync(jsonFilePath, JSON.stringify(scannedData, null, 4));
    console.log(`scannedData.json created with all extracted text.`);
  })
  .catch((err) => {
    console.error("Error processing images:", err);
  });
