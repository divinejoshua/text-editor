"use client"
import React, { useRef } from 'react';
import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
import './globals.css';

function Home() {
  const editorObj = useRef<DocumentEditorContainerComponent | null>(null);
  let contentChanged = false;

  const fontFamilies = {
    fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Roboto', 'Raleway', 'Lato'],
  };

  function onContentChange() {
    contentChanged = true;
    console.log("contentChanged", contentChanged);
  }

  const onSave = () => {
    editorObj.current?.documentEditor.save("Sample", "Docx");
  };

  function onCreate() {
    const defaultCharacterFormat = {
      fontFamily: 'Arial',
    };
    
    editorObj.current?.documentEditor.setDefaultCharacterFormat(defaultCharacterFormat);
    editorObj.current?.documentEditor.setCustomFonts([
      { fontFamily: 'Roboto', src: "url('https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.woff2')" },
      { fontFamily: 'Raleway', src: "url('https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyC0ITw.woff2')" },
      { fontFamily: 'Lato', src: "url('/fonts/Lato-Regular.ttf')" }
    ]);

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
      </div>
      <div style={{ marginTop: 10 }}>
        <DocumentEditorContainerComponent
          documentEditorSettings={fontFamilies}
          ref={editorObj}
          height='90vh'
          contentChange={onContentChange}
          enableToolbar={true}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          created={onCreate}
        >
          <Inject services={[Toolbar]} />
        </DocumentEditorContainerComponent>
      </div>
    </div>
  );
}

export default Home;