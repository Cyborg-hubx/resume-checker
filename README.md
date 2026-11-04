# AI Resume Checker

An AI-powered resume analysis tool that helps users evaluate and improve their resumes. Upload a PDF resume and receive AI-generated feedback, including insights into its content, strengths, weaknesses, and areas for improvement.

## Overview

The AI Resume Checker simplifies the resume review process by combining PDF text extraction with AI-powered analysis. Instead of manually reviewing every section, users can upload their resumes and receive structured feedback to help improve their applications.

## Features

- **PDF Resume Upload** – Upload resumes in PDF format for analysis.
- **Text Extraction** – Extracts readable text from uploaded PDF documents using `pdf-parse`.
- **AI-Powered Analysis** – Processes extracted resume content using an AI model.
- **Structured Feedback** – Returns analysis in a structured JSON format for easier presentation and processing.
- **Resume Evaluation** – Provides feedback on resume content, strengths, weaknesses, and potential improvements.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Full-stack React framework |
| TypeScript | Type-safe development |
| Tailwind CSS | UI styling |
| PDF-Parse | PDF text extraction |
| AI API | Resume analysis and feedback |
| Node.js | Server-side runtime |

## Project Structure

```text
resume-checker/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS recommended)
- npm
- An API key for the AI provider used by the project

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd resume-checker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the required environment variables in a `.env.local` file according to the AI provider integration.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit:

   ```text
   http://localhost:3000
   ```

## How It Works

The application follows a straightforward processing pipeline:

1. **Upload:** The user uploads a PDF resume through the web interface.
2. **Request:** The PDF file is sent to the Next.js API endpoint.
3. **Extraction:** The server processes the uploaded file and extracts its text using `pdf-parse`.
4. **Analysis:** The extracted content is passed to the AI model for evaluation.
5. **Response:** The AI generates structured JSON containing resume feedback.
6. **Display:** The application presents the analysis to the user.

## API Endpoint

### `POST /api/analyze`

Accepts an uploaded PDF resume and processes it for analysis.

**Input:**
- PDF file submitted through a multipart form request.

**Processing:**
- Reads the uploaded file.
- Extracts its text content.
- Sends the extracted content for AI analysis.

**Output:**
- Structured JSON containing the generated resume analysis and feedback.

## Future Improvements

- Support for additional document formats such as DOCX.
- More detailed resume scoring and evaluation criteria.
- Job description matching and keyword analysis.
- ATS (Applicant Tracking System) compatibility evaluation.
- Downloadable resume analysis reports.
- Improved error handling and file validation.

## License

This project is intended for educational and development purposes.
