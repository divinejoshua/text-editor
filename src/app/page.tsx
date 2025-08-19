"use client"
import React, { useRef } from 'react';
import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
import './globals.css';

function Home() {
  const editorObj = useRef<DocumentEditorContainerComponent | null>(null);
  let contentChanged = false;

  function onContentChange() {
    contentChanged = true;
    console.log("contentChanged", contentChanged);
  }

  function load(): void {
    fetch(
    'https://ej2-document-editor-web-services.tabseditor.com/api/extra/LoadFromS3',
    {
        method: 'Post',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        body: JSON.stringify({ documentName: 'Instagram strategy.docx' })
    }
  )
    .then(response => {
        if (response.status === 200 || response.status === 304) {
            return response.json(); // Return the Promise
        } else {
            throw new Error('Error loading data');
        }
    })
    .then(json => {
      editorObj.current?.documentEditor.open(JSON.stringify(json));
    })
    .catch(error => {
        console.error(error);
    });
  }
  
  const onSave = () => {
    editorObj.current?.documentEditor.save("Sample", "Docx");
  };

  function onCreate() {
    const defaultCharacterFormat = {
      fontFamily: 'Arial',
    };
    editorObj.current?.documentEditor.setDefaultCharacterFormat(defaultCharacterFormat);
  }

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
        <button
          onClick={load}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200"
          style={{ height: 40, minWidth: 100 }}
        >
          Load
        </button>
      </div>
      <div style={{ marginTop: 10 }}>
        <DocumentEditorContainerComponent
          ref={editorObj}
          height='90vh'
          contentChange={onContentChange}
          enableToolbar={true}
          serviceUrl="https://ej2-document-editor-web-services.tabseditor.com/"
          created={onCreate}
        >
          <Inject services={[Toolbar]} />
        </DocumentEditorContainerComponent>
      </div>
    </div>
  );
}

export default Home;