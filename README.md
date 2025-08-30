GenAI Web Cloner

🚀 GenAI Web Cloner is a Node.js tool that uses OpenAI API, puppeteer and cloudinary to store the images to generate a cloned version of any website’s UI. It fetches the structure and assets of a given URL and creates a local project folder containing the replicated UI (HTML, CSS, etc.).

GENAI-WEB-CLONER
├── node_modules/         # Dependencies
├── traconUI/             # Example cloned website (generated folder)
│   └── index.html        # Cloned UI entry file
├── .env                  # Environment variables (OpenAI key)
├── .gitignore            # Ignored files for Git
├── genaicloner.js        # Main script to run cloning
├── test-cloudinary.js    # Test script for Cloudinary integration (optional depend you to choose other as well)
├── package.json          # Project metadata & dependencies
├── package-lock.json     # Dependency lockfile
├── screenshot.png        # website clone screenshot


⚙️ Installation
Clone this repo:
git clone https://github.com/your-username/genai-web-cloner.git
cd genai-web-cloner


Install dependencies:
npm install

Create a .env file and add your OpenAI API key:
OPENAI_API_KEY=your_api_key_here

To clone a website UI, run:
node genaicloner.js "https://example.com"


📸 Screenshot:
<img width="1888" height="756" alt="image" src="https://github.com/user-attachments/assets/1c8d91a3-8fc9-41da-9e3d-d428703c5dbd" />


Output folder:
GENAI-WEB-CLONER/
└── trackonUI/
    └── index.html


🧩 Features

Clone website UI only (HTML, CSS, JS)

Generates clean project folder
Uses OpenAI API for structured content generation
Easily extendable for deployment (e.g., with Cloudinary for assets)

🛠️ Future Improvements

Support for downloading & hosting assets (images, fonts)
CLI flags for custom output folder names
Option to export to frameworks (React, Next.js, etc.)
