import { marked } from 'marked'

interface PreviewProps {
  markdown: string
}

marked.setOptions({
  gfm: true,
  breaks: true,
})

function Preview({ markdown }: PreviewProps) {
  return (
    <div
      className="w-1/2 h-screen p-4 overflow-auto bg-gray-50 border-l border-gray-300 markdown-body"
      dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
    />
  )
}

export default Preview
