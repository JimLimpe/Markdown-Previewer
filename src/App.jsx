import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Editor from './Components/Editor.jsx';
import Previewer from './Components/Previewer.jsx';


const defaultExampleCode =  `# This is a Header (H1)

## This is a Subheader (H2)

[Here you can find great Coding courses](https://www.freecodecamp.org/learn/)

This is \`inline code\`

\`\`\`
// This is a code block
function helloWorld() {
  return "Hello, Markdown!";
}
\`\`\`

- List item 1
- List item 2

> A beautiful blockquote

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)


**This is bold text**
`;



function App() {
  const [preview, setPreview] = useState(defaultExampleCode);
  const handleState = (event) => {setPreview(event.target.value)};

  return (
    
      <div className="main">
      <h3>Editor </h3>
      <Editor preview={preview} handleState={handleState}/>
      <h2>Previewer</h2>
      <Previewer preview={preview}/>
      
      </div>
  )
}

export default App

