"use client"
import React, { useEffect, useRef, useState } from 'react';
import { DocumentEditorContainerComponent, Toolbar, Inject, SpellChecker, Selection } from '@syncfusion/ej2-react-documenteditor';
import './globals.css';

function Home() {
  const editorObj = useRef<DocumentEditorContainerComponent | null>(null);
  let contentChanged = false;

  const [onContentChangeValue, setOnContentChangeValue] = useState(false);

  function onContentChange() {
    contentChanged = true;
    console.log("contentChanged", contentChanged);
    setOnContentChangeValue(contentChanged);
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

  function componentDidMount() {
    //Accessing spell checker.
    const spellChecker = editorObj.current?.documentEditor.spellChecker;
    
    if (spellChecker) {
        //Set language id to map dictionary in server side.;
        spellChecker.languageID = 1033;
        spellChecker.removeUnderline = false;
        //Allow suggetion for miss spelled word/
        spellChecker.allowSpellCheckAndSuggestion = true;
        spellChecker.enableOptimizedSpellCheck = true;
    }
  } 

  useEffect(() => {
    componentDidMount();
  }, [onContentChangeValue]);

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
          enableSpellCheck={true}
          serviceUrl="http://localhost:62870/api/documenteditor/"
          created={onCreate}
        >
          <Inject services={[Toolbar, SpellChecker, Selection]} />
        </DocumentEditorContainerComponent>
      </div>
    </div>
  );
}

export default Home;