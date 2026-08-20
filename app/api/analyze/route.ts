import { PDFParse } from "pdf-parse"

export const runtime = "nodejs"

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

  return Response.json({
    filename: file.name,
    text: result.text,
  })
}