"use client"
import React, { useRef } from 'react';
import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
import './globals.css';
import { unzipSync, strFromU8, base64DecToArr } from 'fflate';

const sfdtContent = `
{"optimizeSfdt":true,"sec":[{"secpr":{"pw":612,"ph":792,"lm":72,"rm":72,"tm":72,"bm":72,"hd":36,"fd":36,"dfp":0,"doep":0,"bi":0,"bc":"NewPage","enf":2,"fnf":0,"rif":0,"rie":0,"ifn":1,"ien":1,"pgns":"Arabic","ncols":1,"eqw":1,"lbtc":0,"cols":[]},"b":[{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 1","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"Technology: A Comprehensive Report"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":""}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 2","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"1. Introduction"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"Technology refers to the application of scientific knowledge for practical purposes. From the invention of the wheel to artificial intelligence, technology has consistently shaped human civilization. In the 21st century, it influences every sector—from communication to healthcare. This report explores the evolution, trends, and implications of technology."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 2","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"2. Historical Evolution of Technology"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"2.1 Ancient Innovations"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"Early humans created tools from stone and wood. The agricultural revolution brought irrigation systems and plows."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"2.2 Industrial Revolution"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"The 18th–19th centuries saw mechanization via steam engines and electricity, transforming production and transportation."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"2.3 Digital Revolution"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"Computers, the internet, and mobile devices reshaped communication and laid the foundation for today’s digital age."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 2","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"3. Key Areas of Technological Advancement"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"3.1 Information and Communication Technology (ICT)"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"ICT encompasses computers, smartphones, networks, and software, enabling global connectivity."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"3.2 Artificial Intelligence and Machine Learning"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"AI enables machines to mimic human intelligence, impacting industries with applications like virtual assistants and autonomous vehicles."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"3.3 Biotechnology"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"Gene editing, sequencing, and synthetic biology revolutionize healthcare, agriculture, and environmental science."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"3.4 Renewable Energy"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"Solar, wind, and hydroelectric energy reduce dependence on fossil fuels and combat climate change."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"3.5 Robotics and Automation"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"Automation is growing in manufacturing and services. Robots perform tasks in surgeries, warehouses, and customer service."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 2","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"4. Impact of Technology on Society"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"4.1 Positive Impacts"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"Technology improves communication, healthcare, education, and drives economic growth and innovation."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"4.2 Negative Impacts"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"While technology offers numerous benefits, it also introduces significant challenges and concerns that warrant careful consideration. These include fundamental issues such as "},{"cf":{"b":true},"tlp":"data privacy"},{"cf":{},"tlp":", the potential for widespread "},{"cf":{"b":true},"tlp":"job displacement"},{"cf":{},"tlp":" due to increasing automation, and the exacerbation of "},{"cf":{"b":true},"tlp":"digital inequality"},{"cf":{},"tlp":", which creates a divide between those with access to technology and those without. Beyond these, there are growing concerns about the "},{"cf":{"b":true},"tlp":"mental health impacts"},{"cf":{},"tlp":" of constant connectivity and social media use. Addressing these negative consequences is crucial for ensuring technology develops responsibly and inclusively. Additional points of concern include:"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{"il":0,"ilf":0,"lp":0,"is":0,"num":1,"cst":true,"cnt":1,"lfo":true},"lvl":1},"cf":{"fc":"#0000FF"},"i":[{"cf":{"b":true},"tlp":"Cybersecurity Risks"},{"cf":{},"tlp":": The increasing reliance on digital systems makes individuals, businesses, and governments vulnerable to cyberattacks, data breaches, and identity theft."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{"il":0,"ilf":0,"lp":0,"is":0,"num":1,"cst":true,"cnt":1,"lfo":true},"lvl":1},"cf":{"fc":"#0000FF"},"i":[{"cf":{"b":true},"tlp":"Ethical Dilemmas in AI"},{"cf":{},"tlp":": As AI becomes more sophisticated, questions arise regarding algorithmic bias, accountability for AI decisions, and the potential for autonomous systems to operate without sufficient human oversight."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{"il":0,"ilf":0,"lp":0,"is":0,"num":1,"cst":true,"cnt":1,"lfo":true},"lvl":1},"cf":{"fc":"#0000FF"},"i":[{"cf":{"b":true},"tlp":"Environmental Impact"},{"cf":{},"tlp":": The production, use, and disposal of electronic devices contribute to e-waste, energy consumption, and the depletion of natural resources, posing significant environmental challenges."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{"il":0,"ilf":0,"lp":0,"is":0,"num":1,"cst":true,"cnt":1,"lfo":true},"lvl":1},"cf":{"fc":"#0000FF"},"i":[{"cf":{"b":true},"tlp":"Misinformation and Disinformation"},{"cf":{},"tlp":": Digital platforms can amplify the spread of false or misleading information, impacting public discourse, social cohesion, and democratic processes."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{"il":0,"ilf":0,"lp":0,"is":0,"num":1,"cst":true,"cnt":1,"lfo":true},"lvl":1},"cf":{"fc":"#0000FF"},"i":[{"cf":{"b":true},"tlp":"Erosion of Human Connection"},{"cf":{},"tlp":": Over-reliance on digital communication can sometimes diminish face-to-face interactions and foster feelings of isolation."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{"il":0,"ilf":0,"lp":0,"is":0,"num":1,"cst":true,"cnt":1,"lfo":true},"lvl":1},"cf":{"fc":"#0000FF"},"i":[{"cf":{"b":true},"tlp":"Privacy and Surveillance"},{"cf":{},"tlp":": The vast amounts of data collected by technological platforms raise concerns about surveillance, individual privacy, and the potential for misuse of personal information."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 2","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"5. Future Trends in Technology"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"5.1 Quantum Computing"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"Quantum computers will revolutionize data processing, cryptography, and simulations."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"5.2 Internet of Things (IoT)"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"IoT links devices across homes, industries, and cities, enhancing automation and monitoring."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"5.3 Extended Reality (XR)"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"VR, AR, and MR are transforming education, training, and entertainment experiences."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 3","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"5.4 Ethical AI and Tech Regulation"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"Responsible AI use requires transparency, fairness, and international regulation to prevent harm."}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"stn":"Heading 2","lif":{}},"cf":{"fc":"#0000FF"},"i":[{"cf":{},"tlp":"6. Conclusion"}]},{"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"i":[{"cf":{},"tlp":"Technology presents both opportunity and risk. Collaboration and ethical governance are essential to ensure inclusive and sustainable development."}]}],"hf":{}}],"cf":{"fsz":12,"ff":"Arial","ffa":"Arial","ffnfe":"Arial"},"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lin":0,"rin":0,"fin":0,"ta":0,"bs":0,"as":12,"ls":1.15,"lst":0,"ol":0,"bi":false,"klt":false,"kwn":false,"wc":true,"lif":{}},"fst":{},"tfl":{},"dtw":36,"tc":0,"enf":0,"hv":"","sv":"","fmt":0,"pt":0,"dhtml":0,"ffs":1,"comp":0,"stytbl":0,"bg":{"c":"#FFFFFF"},"sty":[{"n":"Heading 1","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"bs":12,"as":6,"ls":1.5,"lst":0,"lif":{}},"cf":{"b":true,"fsz":20,"fc":"#0000FF"}},{"n":"Heading 2","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"bs":10,"as":5,"lif":{}},"cf":{"b":true,"fsz":16,"fc":"#0000FF"}},{"n":"Heading 3","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"bs":8,"as":4,"lif":{}},"cf":{"b":true,"fsz":14,"fc":"#0000FF"}},{"n":"Normal","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lif":{}},"cf":{},"nx":"Normal"},{"n":"Heading 4","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lin":0,"rin":0,"fin":0,"ta":0,"bs":2,"as":0,"ls":1.0791666507720947,"lst":0,"ol":4,"lif":{}},"cf":{"i":true,"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Normal","l":"Heading 4 Char","nx":"Normal"},{"n":"Heading 4 Char","t":1,"cf":{"i":true,"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Default Paragraph Font"},{"n":"Default Paragraph Font","t":1,"cf":{}},{"n":"Heading 5","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lin":0,"rin":0,"fin":0,"ta":0,"bs":2,"as":0,"ls":1.0791666507720947,"lst":0,"ol":5,"lif":{}},"cf":{"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Normal","l":"Heading 5 Char","nx":"Normal"},{"n":"Heading 5 Char","t":1,"cf":{"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Default Paragraph Font"},{"n":"Heading 6","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lin":0,"rin":0,"fin":0,"ta":0,"bs":2,"as":0,"ls":1.0791666507720947,"lst":0,"ol":6,"lif":{}},"cf":{"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Normal","l":"Heading 6 Char","nx":"Normal"},{"n":"Heading 6 Char","t":1,"cf":{"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Default Paragraph Font"},{"n":"Heading 7","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lin":0,"rin":0,"fin":0,"ta":0,"bs":2,"as":0,"ls":1.0791666507720947,"lst":0,"ol":7,"lif":{}},"cf":{"i":true,"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Normal","l":"Heading 7 Char","nx":"Normal"},{"n":"Heading 7 Char","t":1,"cf":{"i":true,"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Default Paragraph Font"},{"n":"Heading 8","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lin":0,"rin":0,"fin":0,"ta":0,"bs":2,"as":0,"ls":1.0791666507720947,"lst":0,"ol":8,"lif":{}},"cf":{"fsz":10.5,"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Normal","l":"Heading 8 Char","nx":"Normal"},{"n":"Heading 8 Char","t":1,"cf":{"fsz":10.5,"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Default Paragraph Font"},{"n":"Heading 9","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"lin":0,"rin":0,"fin":0,"ta":0,"bs":2,"as":0,"ls":1.0791666507720947,"lst":0,"ol":9,"lif":{}},"cf":{"i":true,"fsz":10.5,"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Normal","l":"Heading 9 Char","nx":"Normal"},{"n":"Heading 9 Char","t":1,"cf":{"i":true,"fsz":10.5,"ff":"Calibri Light","fc":"#0000FF","ffa":"Calibri Light","ffnfe":"Calibri Light"},"b":"Default Paragraph Font"},{"n":"Header","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"as":0,"ls":1,"lst":0,"lif":{}},"cf":{"fc":"#0000FF"},"b":"Normal","nx":"Header"},{"n":"Footer","t":0,"pf":{"bdrs":{"tp":{},"lt":{},"rg":{},"bt":{},"h":{},"v":{}},"as":0,"ls":1,"lst":0,"lif":{}},"cf":{"fc":"#0000FF"},"b":"Normal","nx":"Footer"}],"li":[],"al":[],"cm":[],"r":[],"cx":[],"imgs":{}}
`;


const blobContent = {"sfdt":"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"}


function Home() {
  const editorObj = useRef<DocumentEditorContainerComponent | null>(null);
  let contentChanged = false;

  function onContentChange() {
    contentChanged = true;
    console.log("contentChanged", contentChanged);
  }


  const onSave = async () => {
    // Assuming `documentEditor` is your initialized DocumentEditor instance
    const sfdtContent : any = await editorObj.current?.documentEditor.saveAsBlob('Sfdt');

    //Get the current sfdt
    const blob = new Blob([sfdtContent], { type: 'application/json' });
    const reader = new FileReader();
    reader.onload = function(event) {
      console.log(event.target?.result);
    };
    const fileContent : any = await new Promise<string>((resolve, reject) => {
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(blob);
    });
    console.log(fileContent);


    // Download the sfdt file
    if (editorObj.current) {

    const jsonFileContent : any = JSON.parse(fileContent);
    
    // Usage
    const encoded = jsonFileContent.sfdt; // from your loaded file
    const sfdt = decodeSfdtZip(encoded);

    //Download the sfdt file
    const blob = new Blob([JSON.stringify(sfdt)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample.sfdt';
    a.click();
    URL.revokeObjectURL(url);

    }
  };


  function decodeSfdtZip(base64ZipString: string): any {
    const zipData = base64ToUint8Array(base64ZipString);
    const unzipped = unzipSync(zipData);
    
    const fileNames = Object.keys(unzipped);
    if (fileNames.length === 0) {
      throw new Error("No files found in the zip archive");
    }
  
    const jsonText = strFromU8(unzipped[fileNames[0]]);
    return JSON.parse(jsonText);
  }

  function base64ToUint8Array(base64: string): Uint8Array {
  const binary = atob(base64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
  
  function onCreate() {
    const defaultCharacterFormat = {
      fontFamily: 'Arial',
    };
    editorObj.current?.documentEditor.setDefaultCharacterFormat(defaultCharacterFormat);

    // load your default document here
    let data = sfdtContent;
    // Open the default document
    editorObj.current?.documentEditor.open(data);
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