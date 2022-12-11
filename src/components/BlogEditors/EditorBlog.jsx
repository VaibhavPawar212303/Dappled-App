import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import parse from 'html-react-parser'

const  EditorBlog= () => {
  const [value,  setValue] = useState('')
  const editor = useRef(null);
  const content = parse(value)
  return (
    <>
      <div className='mr-28 ml-28 mt-20'>
          <JoditEditor ref={editor} onChange={content =>setValue(content)}/>
          <div>{content}</div>
    </div>
    </>
  )
}

export default EditorBlog