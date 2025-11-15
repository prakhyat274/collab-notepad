import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit], // define your extension array
    content: '<p>Hello World!</p>', // initial content
  })

  return (
    <>
        <div style={{ padding: 20, border: "1px solid black", borderRadius: "10px" }}>
            <h1>Collab Notepad</h1>
            <EditorContent editor={editor} />
        </div>  
    </>
  )
}

export default Tiptap