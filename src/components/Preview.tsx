import { marked } from 'marked'

interface PreviewProps{
  markdown: string
}

function Preview({ markdown }: PreviewProps) {
  return (
    <div
      className="w-1/2 h-screen p-4 overflow-auto bg-gray-50 border-l border-gray-300"
      dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
    />
  )
}

export default Preview
