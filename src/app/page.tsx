"use client"
import React, { useRef, useState } from 'react';
import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
import './globals.css';


function Home() {

  const ghostRef = useRef(null);

  const [ghostText, setGhostText] = useState<string>('');
  const [cursorX, setCursorX] = useState<number>(0);
  const [cursorY, setCursorY] = useState<number>(0);

  const fullSuggestion = 'Hello World';


  const editorObj = useRef<DocumentEditorContainerComponent | null>(null);
  let contentChanged = false;

  function onContentChange() {
    contentChanged = true;
    console.log("contentChanged", contentChanged);

    const editor = editorObj.current?.documentEditor;
    const currentText = editor?.selection.getText(true);

    console.log("currentText", currentText);

    // if (
    //   currentText &&
    //   fullSuggestion.toLowerCase().startsWith(currentText.toLowerCase()) &&
    //   currentText !== fullSuggestion
    // ) {
    //   const remaining = fullSuggestion.slice(currentText.length);
      setGhostText("Hello World 123");
      positionGhost();
    // } else {
    //   setGhostText('');
    // }
  }
  

  const onSave = () => {
    editorObj.current?.documentEditor.save("Sample", "Docx");
  };

  function onCreate() {
    const defaultCharacterFormat = {
      fontFamily: 'Arial',
    };
    editorObj.current?.documentEditor.setDefaultCharacterFormat(defaultCharacterFormat);

    editorObj.current?.documentEditor.enableAllModules();
    // @ts-ignore
    editorObj.current?.documentEditor.editorHistory.initializeHistory(editorObj.current?.documentEditor);
  }

  const positionGhost = () => {
    const editor = editorObj.current?.documentEditor;
    const caretInfo = editor?.selection.caret; // gives the caret DOM element
    console.log("caretInfo", caretInfo);

    if (caretInfo && caretInfo.style) {
      // Extract left and top from the style attribute
      const left = parseFloat(caretInfo.style.left);
      const top = parseFloat(caretInfo.style.top);
      setCursorX(left+10);
      setCursorY(top+145);
    }
  };
  

  return (
    <div className="App">
      <div className='cover-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }} className='text-2xl font-bold header-name'>
          🧚 Tabs Editor
        </div>
        <button
          onClick={onSave}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200"
          style={{ height: 40, minWidth: 100 }}
        >
          Download
        </button>
      </div>
      <div style={{ marginTop: 10 }}>
        <DocumentEditorContainerComponent
          ref={editorObj}
          height='90vh'
          contentChange={onContentChange}
          enableToolbar={true}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          created={onCreate}
        >
          <Inject services={[Toolbar]} />
        </DocumentEditorContainerComponent>

        <div
          // ref={ghostRef}
          className="absolute text-gray-400 pointer-events-none font-mono"
          style={{ top: cursorY, left: cursorX, zIndex : 10000}}
        >
          {ghostText}
        </div>
      </div>
    </div>
  );
}

export default Home;