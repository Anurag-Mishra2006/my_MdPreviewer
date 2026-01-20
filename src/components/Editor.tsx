import  { useEffect } from 'react'

interface EditorProps {
  markdown: string
  setMarkdown: React.Dispatch<React.SetStateAction<string>>
}

function Editor({ markdown, setMarkdown }: EditorProps) {

  useEffect(() => {
    localStorage.setItem("markdown", markdown);
  }, [markdown]);

  return (
    <div className="w-1/2 h-screen border border-gray-900 p-4">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your md here"
        className="w-full h-full resize-none outline-none font-mono text-base p-3 bg-white"
      />
    </div>
  )
}

export default Editor
