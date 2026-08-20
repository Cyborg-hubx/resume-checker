export default function Home() {
  return (
    <main className="container">
      <div className="header">
        <h1>AI Resume Checker</h1>
        <p>Upload your resume and get AI-powered feedback.</p>
      </div>

      <section className="card">
        <h2>Upload your Resume</h2>

        <input type="file" accept=".pdf" />

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