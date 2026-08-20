"use client"

import { useState } from "react"

export default function Home() {
  const [file, setFile] = useState<File | null>(null)

  return (
    <main className="container">
      <div className="header">
        <h1>AI Resume Checker</h1>
        <p>Upload your resume and get AI-powered feedback.</p>
      </div>

      <section className="card">
        <h2>Upload your Resume</h2>

        <input
          type="file"
          accept=".pdf"
          onChange={(event) => {
            const selectedFile = event.target.files?.[0]
            setFile(selectedFile || null)
          }}
        />

        {file && (
          <div className="file-preview">
            <span>{file.name}</span>

            <button
              type="button"
              className="remove-button"
              onClick={() => setFile(null)}
            >
              ×
            </button>
          </div>
        )}

        <button>Analyze Resume</button>
      </section>

      <section className="card">
        <h2>Analysis</h2>

        <div className="score">
          <span>Resume Score</span>
          <strong>--/100</strong>
        </div>

        <div className="analysis-section">
          <h3>Strengths</h3>
          <ul>
            <li>No analysis yet.</li>
          </ul>
        </div>

        <div className="analysis-section">
          <h3>Areas for Improvement</h3>
          <ul>
            <li>No analysis yet.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}