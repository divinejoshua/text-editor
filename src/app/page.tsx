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

  const onSave = () => {
    editorObj.current?.documentEditor.save("Sample", "Docx");
  };

  function onCreate() {
    const defaultCharacterFormat = {
      fontFamily: 'Arial',
    };
    editorObj.current?.documentEditor.setDefaultCharacterFormat(defaultCharacterFormat);
  }

  function inserText() {
    const htmltags =`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Progress Report</title>
</head>
<body>

    <div style="width: 21cm; margin: 2cm auto; padding: 2cm; background-color: #ffffff; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <h1 style="font-family: 'New Times Roman', serif; font-size: 24pt; color: #1A202C; text-align: center; margin-bottom: 30pt;">AI Progress Report: A Journey Through Decades of Innovation</h1>

        <p style="font-family: 'New Times Roman', serif; font-size: 12pt; color: #333333; line-height: 1.6; margin-bottom: 12pt;">
            Artificial Intelligence (AI) has evolved from a nascent academic concept into a transformative force reshaping industries, societies, and our daily lives. This report outlines the significant progress AI has made over the years, highlighting key milestones, its profound impact across various sectors, and the emerging trends that will define its future.
        </p>

        <h2 style="font-family: 'New Times Roman', serif; font-size: 16pt; color: #1A202C; margin-top: 24pt; margin-bottom: 12pt;">1. Historical Milestones and Breakthroughs</h2>

        <p style="font-family: 'New Times Roman', serif; font-size: 12pt; color: #333333; line-height: 1.6; margin-bottom: 12pt;">
            The journey of AI is marked by periods of fervent optimism, followed by "AI winters," and then resurgences driven by new computational power and algorithmic innovations.
        </p>

        <ul style="font-family: 'New Times Roman', serif; font-size: 12pt; color: #333333; line-height: 1.6; margin-bottom: 12pt; list-style-type: disc; padding-left: 20pt;">
            <li style="margin-bottom: 6pt;"><strong>1950s-1960s: Foundations and Early AI.</strong> The term "Artificial Intelligence" was coined at the Dartmouth Conference in 1956. Early developments included Alan Turing's seminal paper "Computing Machinery and Intelligence" (1950) proposing the Turing Test, and Joseph Weizenbaum's ELIZA (1966), an early natural language processing (NLP) chatbot.</li>
            <li style="margin-bottom: 6pt;"><strong>1980s: Expert Systems and a Brief Resurgence.</strong> The development of expert systems, like XCON, which could replicate human decision-making in specific domains, demonstrated AI's practical utility. This period also saw the rise of backpropagation for training neural networks.</li>
            <li style="margin-bottom: 6pt;"><strong>1990s: Machine Learning Emerges.</strong> Focus shifted from rule-based systems to machine learning. Significant advancements included the widespread adoption of Support Vector Machines (SVMs) and ensemble methods like bagging and boosting.</li>
            <li style="margin-bottom: 6pt;"><strong>1997: Deep Blue Defeats Kasparov.</strong> IBM's Deep Blue supercomputer defeated world chess champion Garry Kasparov, a watershed moment that captured public imagination and showcased AI's growing computational prowess.</li>
            <li style="margin-bottom: 6pt;"><strong>2000s-2010s: The Rise of Deep Learning.</strong> This decade witnessed a dramatic surge in AI capabilities, largely due to deep learning. Key events include:
                <ul style="list-style-type: circle; padding-left: 20pt; margin-top: 6pt;">
                    <li style="margin-bottom: 4pt;"><strong>2011: IBM Watson Wins Jeopardy!</strong> Watson's victory demonstrated AI's ability to understand and respond to complex natural language questions.</li>
                    <li style="margin-bottom: 4pt;"><strong>2012: AlexNet and ImageNet.</strong> The success of AlexNet in the ImageNet challenge showcased the power of Convolutional Neural Networks (CNNs) in image recognition, surpassing human performance in some tasks by 2015.</li>
                    <li style="margin-bottom: 4pt;"><strong>2016: AlphaGo Conquers Go.</strong> DeepMind's AlphaGo defeated the world champion of Go, Lee Sedol, a game considered far more complex than chess for AI.</li>
                </ul>
            </li>
            <li style="margin-bottom: 6pt;"><strong>2020s: Generative AI and Large Language Models.</strong> The current era is defined by the rapid advancement and widespread adoption of Generative AI, especially Large Language Models (LLMs) like GPT and Gemini. These models are capable of generating human-like text, images, and other content, revolutionizing creativity, communication, and various industries.</li>
        </ul>

        <h2 style="font-family: 'New Times Roman', serif; font-size: 16pt; color: #1A202C; margin-top: 24pt; margin-bottom: 12pt;">2. Transformative Impact Across Industries</h2>

        <p style="font-family: 'New Times Roman', serif; font-size: 12pt; color: #333333; line-height: 1.6; margin-bottom: 12pt;">
            AI's impact is no longer theoretical; it's driving efficiency, innovation, and entirely new paradigms across virtually every sector.
        </p>

        <ul style="font-family: 'New Times Roman', serif; font-size: 12pt; color: #333333; line-height: 1.6; margin-bottom: 12pt; list-style-type: disc; padding-left: 20pt;">
            <li style="margin-bottom: 6pt;"><strong>Healthcare:</strong> AI aids in diagnostics (e.g., analyzing medical images), drug discovery, personalized treatment plans, and administrative tasks, leading to improved patient outcomes and operational efficiency.</li>
            <li style="margin-bottom: 6pt;"><strong>Finance:</strong> AI powers fraud detection, algorithmic trading, risk assessment, personalized financial advice, and automated customer service through chatbots.</li>
            <li style="margin-bottom: 6pt;"><strong>Retail and E-commerce:</strong> AI enhances personalized recommendations, inventory management, supply chain optimization, and customer experience through virtual assistants.</li>
            <li style="margin-bottom: 6pt;"><strong>Manufacturing:</strong> AI-driven robotics and automation increase production efficiency, enable predictive maintenance, and enhance quality control.</li>
            <li style="margin-bottom: 6pt;"><strong>Transportation:</strong> Autonomous vehicles, traffic management systems, and logistics optimization are all areas significantly advanced by AI.</li>
            <li style="margin-bottom: 6pt;"><strong>Customer Service:</strong> AI-powered chatbots and virtual assistants handle routine inquiries, freeing up human agents for more complex issues, leading to faster and more efficient support.</li>
            <li style="margin-bottom: 6pt;"><strong>Creative Industries:</strong> Generative AI is transforming content creation, from writing assistance and music composition to generating art and designing virtual environments.</li>
        </ul>

        <h2 style="font-family: 'New Times Roman', serif; font-size: 16pt; color: #1A202C; margin-top: 24pt; margin-bottom: 12pt;">3. Ethical Considerations and Challenges</h2>

        <p style="font-family: 'New Times Roman', serif; font-size: 12pt; color: #333333; line-height: 1.6; margin-bottom: 12pt;">
            As AI becomes more powerful and pervasive, so do the ethical considerations surrounding its development and deployment.
        </p>

        <ul style="font-family: 'New Times Roman', serif; font-size: 12pt; color: #333333; line-height: 1.6; margin-bottom: 12pt; list-style-type: disc; padding-left: 20pt;">
            <li style="margin-bottom: 6pt;"><strong>Bias and Fairness:</strong> AI systems can perpetuate or even amplify existing societal biases if trained on biased data. Ensuring fairness and non-discrimination is a critical challenge.</li>
            <li style="margin-bottom: 6pt;"><strong>Privacy and Data Security:</strong> AI often relies on vast amounts of data, raising concerns about data privacy, security breaches, and the responsible use of personal information.</li>
            <li style="margin-bottom: 6pt;"><strong>Transparency and Explainability (XAI):</strong> Understanding how AI systems make decisions (especially in critical applications like healthcare or law enforcement) is crucial for accountability and trust.</li>
            <li style="margin-bottom: 6pt;"><strong>Job Displacement:</strong> The automation capabilities of AI raise concerns about job displacement, necessitating strategies for workforce retraining and adaptation.</li>
            <li style="margin-bottom: 6pt;"><strong>Accountability:</strong> Determining responsibility when AI systems make errors or cause harm is a complex legal and ethical challenge.</li>
        </ul>

        <h2 style="font-family: 'New Times Roman', serif; font-size: 16pt; color: #1A202C; margin-top: 24pt; margin-bottom: 12pt;">4. Future Trends and Outlook</h2>

        <p style="font-family: 'New Times Roman', serif; font-size: 12pt; color: #333333; line-height: 1.6; margin-bottom: 12pt;">
            The future of AI promises continued rapid innovation and integration into new facets of life.
        </p>

        <ul style="font-family: 'New Times Roman', serif; font-size: 12pt; color: #333333; line-height: 1.6; margin-bottom: 12pt; list-style-type: disc; padding-left: 20pt;">
            <li style="margin-bottom: 6pt;"><strong>Smarter and More Capable AI:</strong> Future AI models will exhibit enhanced reasoning, common sense understanding, and the ability to handle more complex tasks with greater accuracy.</li>
            <li style="margin-bottom: 6pt;"><strong>Multimodal AI:</strong> AI systems will increasingly process and understand information from multiple modalities simultaneously (text, image, audio, video), leading to more holistic comprehension.</li>
            <li style="margin-bottom: 6pt;"><strong>Agentic AI:</strong> The development of AI agents capable of autonomous decision-making and action-taking in complex environments is a significant trend.</li>
            <li style="margin-bottom: 6pt;"><strong>Edge AI:</strong> AI processing will move closer to the data source (on devices themselves), enabling faster responses, reduced latency, and enhanced privacy.</li>
            <li style="margin-bottom: 6pt;"><strong>AI Regulation and Governance:</strong> Governments and international bodies will continue to develop frameworks and regulations to guide the ethical and responsible development and deployment of AI.</li>
            <li style="margin-bottom: 6pt;"><strong>AI in Specialized Fields:</strong> Expect deeper integration of AI into highly specialized fields like scientific research, materials science, and personalized medicine.</li>
        </ul>

        <h2 style="font-family: 'New Times Roman', serif; font-size: 16pt; color: #1A202C; margin-top: 24pt; margin-bottom: 12pt;">Conclusion</h2>

        <p style="font-family: 'New Times Roman', serif; font-size: 12pt; color: #333333; line-height: 1.6; margin-bottom: 12pt;">
            The progress of Artificial Intelligence over the past decades has been nothing short of revolutionary. From early conceptual models to the sophisticated, self-learning systems of today, AI continues to push the boundaries of what machines can achieve. While the benefits are immense, addressing the associated ethical and societal challenges will be paramount to ensuring that AI serves humanity's best interests as it continues its remarkable evolution.
        </p>

        <p style="font-family: 'New Times Roman', serif; font-size: 10pt; color: #666666; text-align: right; margin-top: 30pt;">
            Report Date: July 19, 2025
        </p>
    </div>

</body>
</html>
`;
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:62870/api/extra/loadstring');
    http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    http.responseType = 'json';
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        if (http.status === 200 || http.status === 304) {
          // Insert the sfdt content in cursor position using paste API
          editorObj.current?.documentEditor.editor.paste(http.response);
        } else {
          alert('failed;');
        }
      }
    };

    const htmlContent : any = { content: htmltags };
    http.send(JSON.stringify(htmlContent));
  }
  
  function onCopy() {
    editorObj.current?.documentEditor.selection.copy();
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
          onClick={onCopy}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200"
          style={{ height: 40, minWidth: 100 }}
        >
          Copy
        </button>
        <button
          onClick={inserText}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200"
          style={{ height: 40, minWidth: 100 }}
        >
          Insert
        </button>
      </div>
      <div style={{ marginTop: 10 }}>
        <DocumentEditorContainerComponent
          ref={editorObj}
          height='90vh'
          contentChange={onContentChange}
          enableToolbar={true}
          serviceUrl="http://localhost:62870/api/DocumentEditor"
          created={onCreate}
        >
          <Inject services={[Toolbar]} />
        </DocumentEditorContainerComponent>
      </div>
    </div>
  );
}

export default Home;