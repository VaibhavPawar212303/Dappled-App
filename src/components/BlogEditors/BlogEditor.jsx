import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState} from 'draft-js'
// convertToRaw
// import draftToHtml from "draftjs-to-html";
import {convertToHTML} from 'draft-convert';
// import htmlToFormattedText from "html-to-formatted-text";

export default class BlogEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  onEditorStateChange = (editorState) =>{
    this.setState({
      editorState
    })
  }
  render() {
    const  {editorState} = this.state
    console.log(convertToHTML(editorState.getCurrentContent()))
    return (
      <>
      <div className="flex flex-col  mt-4  items-center">
      <h1 className="text-3xl font-sans">BlogEditor</h1>
      </div>
        <div className="flex flex-row ml-32  items-center mr-40 border mt-20">
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={this.onContentStateChange}
        />
      </div>
      <textarea
         className="ml-32  mr-40 w-96"
          disabled
          value={JSON.stringify(contentState, null, 4)}
        />
      </>
    );
  }
}
