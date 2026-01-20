import  { useState } from 'react'
import Header from '../components/Header'
import Editor from '../components/Editor'
import Preview from '../components/Preview'
import { Example } from './example'; // adjust path if needed

function FrontPage() {
  const [markdown, setMarkdown] = useState(
    localStorage.getItem('markdown') || Example
  )

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </div>
  )
}

export default FrontPage
