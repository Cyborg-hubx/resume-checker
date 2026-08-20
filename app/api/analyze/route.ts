import { PDFParse } from "pdf-parse"
import { GoogleGenAI } from "@google/genai"

export const runtime = "nodejs"

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

export async function POST(request: Request) {
  const formData = await request.formData()

  const file = formData.get("resume") as File | null

  if (!file) {
    return Response.json(
      { error: "No resume was uploaded" },
      { status: 400 }
    )
  }

  const arrayBuffer = await file.arrayBuffer()

  const parser = new PDFParse({
    data: arrayBuffer,
  })

  const result = await parser.getText()

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: `
You are a professional resume reviewer.

Analyze the following resume.

Evaluate:
- Overall resume quality
- Technical skills
- Work experience
- Projects
- Education
- Resume clarity
- ATS compatibility

Return your response ONLY as valid JSON using this exact structure:

{
  "score": 0,
  "strengths": [
    "strength 1",
    "strength 2",
    "strength 3"
  ],
  "improvements": [
    "improvement 1",
    "improvement 2",
    "improvement 3"
  ]
}

Rules:
- score must be a number from 0 to 100
- strengths must contain 3 to 5 items
- improvements must contain 3 to 5 items
- Do not include markdown
- Do not include code fences
- Return only the JSON object

Resume:

${result.text}
`,
  })

  let analysis

  try {
    analysis = JSON.parse(response.text ?? "")
  } catch {
    console.error(
      "Failed to parse Gemini response:",
      response.text
    )

    return Response.json(
      { error: "Gemini returned an invalid analysis." },
      { status: 500 }
    )
  }

  return Response.json({
    filename: file.name,
    text: result.text,
    analysis,
  })
}