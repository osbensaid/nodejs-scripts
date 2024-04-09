# Imgs to JSON Converter

This Node.js script utilizes the Tesseract.js library to extract text content from image files within a specified directory. The extracted text data is then saved into a JSON file for further analysis or processing.

### Prerequisites

1. Node.js installed on your machine
2. Image files (.jpg, .png, etc.) located in the specified directory (./images by default)

### Installation

1. Clone this repository.
2. Install the required Node.js modules.
   > npm install

### Usage

1. Place your image files to be processed into the ./images directory.
2. Modify the directory variable in the script (index.js) if your image files are located in a different directory.
3. Run the script using Node.js:
   > node index.js
4. After execution, a scannedData.json file will be created containing the extracted text data from the images.

### Author

Created by Oussama Bensaid

### License

This project is licensed under the MIT License.
