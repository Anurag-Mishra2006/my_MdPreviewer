import { marked } from 'marked'
import '../markdown.css';

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
      className="w-1/2 h-screen p-4 overflow-auto border-l-2
             bg-gray-100 text-black border-gray-400
             dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600
             markdown-body"
      dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
    />


  )
}

export default Preview
