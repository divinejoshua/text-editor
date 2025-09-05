"use client"
import React, {useRef, useState } from 'react';
import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
import './globals.css';
import { registerLicense } from '@syncfusion/ej2-base';

const LICENSE_KEY = process.env.NEXT_PUBLIC_SYNCFUSION_LICENSE_KEY;
registerLicense(LICENSE_KEY || '');

const cvHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6;
            color: #333;
        }
    </style>
</head>
<body class="p-4 md:p-8">

    <div class="bg-white max-w-4xl mx-auto rounded-lg shadow-xl p-6 md:p-10">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-6">INVOICE</h1>

        <div class="flex flex-col md:flex-row justify-between mb-8">
            <div class="mb-4 md:mb-0">
                <h2 class="font-bold text-lg mb-2">From:</h2>
                <p>[Your Name]</p>
                <p>[Your Address]</p>
                <p>[Your Email]</p>
                <p>[Your Phone Number]</p>
            </div>
            <div>
                <h2 class="font-bold text-lg mb-2">To:</h2>
                <p>[Client Company Name]</p>
                <p>123 Main Street</p>
                <p>New York, NY 10001, USA</p>
                <p>[Client Contact Person]</p>
            </div>
        </div>
        
        <hr class="border-gray-300 mb-8">

        <div class="flex justify-between mb-8 text-sm md:text-base">
            <div>
                <p><strong class="font-semibold">Invoice #:</strong> IN-2025-09-05-001</p>
                <p><strong class="font-semibold">Date:</strong> September 5, 2025</p>
            </div>
            <div>
                <p><strong class="font-semibold">Payment Due:</strong> September 19, 2025</p>
            </div>
        </div>

        <div class="mb-8">
            <h3 class="text-2xl font-bold mb-4">Project Description</h3>
            <div class="bg-gray-100 p-4 rounded-lg">
                <p class="font-semibold text-lg mb-2">Fraud Detection Software Development</p>
                <ul class="list-disc list-inside space-y-1 text-gray-700">
                    <li>Real-time transaction analysis</li>
                    <li>Anomaly detection algorithms</li>
                    <li>User behavior monitoring module</li>
                    <li>Integration with existing platform infrastructure</li>
                </ul>
            </div>
        </div>
        
        <div class="mb-8">
            <h3 class="text-2xl font-bold mb-4">Breakdown of Services</h3>
            <div class="overflow-x-auto rounded-lg">
                <table class="min-w-full bg-white">
                    <thead class="bg-gray-200">
                        <tr>
                            <th class="px-4 py-3 text-left font-semibold text-sm md:text-base">Service</th>
                            <th class="px-4 py-3 text-left font-semibold text-sm md:text-base">Rate</th>
                            <th class="px-4 py-3 text-left font-semibold text-sm md:text-base">Hours</th>
                            <th class="px-4 py-3 text-left font-semibold text-sm md:text-base">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b last:border-0 hover:bg-gray-50">
                            <td class="px-4 py-3">Project Management</td>
                            <td class="px-4 py-3">$75.00/hr</td>
                            <td class="px-4 py-3">10</td>
                            <td class="px-4 py-3">$750.00</td>
                        </tr>
                        <tr class="border-b last:border-0 hover:bg-gray-50">
                            <td class="px-4 py-3">Software Development</td>
                            <td class="px-4 py-3">$150.00/hr</td>
                            <td class="px-4 py-3">80</td>
                            <td class="px-4 py-3">$12,000.00</td>
                        </tr>
                        <tr class="border-b last:border-0 hover:bg-gray-50">
                            <td class="px-4 py-3">System Testing & Q/A</td>
                            <td class="px-4 py-3">$100.00/hr</td>
                            <td class="px-4 py-3">20</td>
                            <td class="px-4 py-3">$2,000.00</td>
                        </tr>
                        <tr class="font-bold text-gray-900 border-t-2 border-gray-400">
                            <td class="px-4 py-3 text-right" colspan="3">SUBTOTAL</td>
                            <td class="px-4 py-3">$14,750.00</td>
                        </tr>
                        <tr class="font-bold text-gray-900">
                            <td class="px-4 py-3 text-right" colspan="3">TAX (0%)</td>
                            <td class="px-4 py-3">$0.00</td>
                        </tr>
                        <tr class="font-bold text-gray-900 text-lg border-t-2 border-gray-400">
                            <td class="px-4 py-3 text-right" colspan="3">TOTAL DUE</td>
                            <td class="px-4 py-3">$14,750.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div>
            <h3 class="text-2xl font-bold mb-4">Payment Information</h3>
            <div class="bg-gray-100 p-4 rounded-lg">
                <p><strong class="font-semibold">Bank Transfer</strong></p>
                <p><strong class="font-semibold">Account Name:</strong> Freelance Tech Services LLC</p>
                <p><strong class="font-semibold">Bank:</strong> US Bank</p>
                <p><strong class="font-semibold">Account Number:</strong> 1234567890</p>
            </div>
        </div>

        <p class="text-center text-gray-500 mt-10 text-sm">Thank you for your business. We look forward to working with you again.</p>

    </div>

</body>
</html>
`


const coverHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Divine Erhomonsele - Cover Letter</title>
  <!-- Tailwind CSS CDN for styling -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts for the Inter font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f3f4f6;
    }
    p {
      text-indent: 1.5rem;
    }
  </style>
</head>
<body class="p-4 sm:p-8 flex justify-center">

  <!-- Main Cover Letter container -->
  <div class="max-w-4xl w-full bg-white rounded-xl shadow-xl p-6 sm:p-10 border border-gray-200">

    <!-- Sender's Information (Your Info) -->
    <address class="not-italic text-sm sm:text-base text-gray-700 leading-tight">
      <span class="font-semibold text-gray-800">Divine Erhomonsele</span><br>
      (555) 123-4567<br>
      divine.erhomonsele@email.com<br>
    </address>

    <!-- Date -->
    <p class="text-sm sm:text-base text-gray-700 mt-6">
      August 15, 2025
    </p>

    <!-- Recipient's Information -->
    <address class="not-italic text-sm sm:text-base text-gray-700 leading-tight mt-6">
      <span class="font-semibold">Hiring Manager</span><br>
      Microsoft | Azure Cloud Experience Team<br>
      One Microsoft Way<br>
      Redmond, WA 98052
    </address>

    <!-- Salutation -->
    <p class="mt-6 text-sm sm:text-base text-gray-700">
      Dear Hiring Manager,
    </p>

    <!-- Body of the Cover Letter -->
    <p class="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
      I am writing with great enthusiasm to express my interest in the Software Engineer position on the Azure Cloud Experience team, as advertised on the Microsoft Careers website. Microsoft's mission to "empower every person and every organization on the planet to achieve more" deeply resonates with my own passion for leveraging technology to solve complex problems and create impactful solutions. As a final-year student with a strong foundation in C# and current experience in building AI-powered web services, I am confident that I can contribute to your team's mission of transforming cloud customers into fans.
    </p>

    <p class="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
      My current role as a Software Engineer at Wetrocloud has provided me with practical experience that directly aligns with the qualifications for this role. I have been actively involved in developing an AI Document Editor that leverages Retrieval-Augmented Generation (RAG) and other LLM technologies. This work has given me firsthand experience with the demands of building and maintaining mission-critical services and has deepened my understanding of distributed cloud systems. My experience with AI, LLMs, and data extraction is highly relevant to your team's focus on innovative, in-product experiences.
    </p>

    <p class="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
      My academic background, including a Bachelor's degree in Software Engineering from Nottingham Trent University and my prior studies at Babcock University, has provided me with a solid foundation in core software engineering principles. I am a self-starter who thrives on technological challenges and is committed to continuous learning, a growth mindset that I believe is central to the culture of your team. The opportunity to contribute to the core of Azure, a platform that is central to so many businesses, is incredibly exciting to me.
    </p>

    <p class="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
      Thank you for your time and consideration. I look forward to the possibility of discussing how my skills and passion can benefit the Azure Cloud Experience team.
    </p>

    <!-- Closing -->
    <p class="mt-6 text-sm sm:text-base text-gray-700">
      Sincerely,
    </p>

    <p class="mt-8 text-sm sm:text-base text-gray-700 font-bold">
      Divine Erhomonsele
    </p>

  </div>

</body>
</html>
`

function Home() {
  const editorObj = useRef<DocumentEditorContainerComponent | null>(null);
  let contentChanged = false;
  
  // Add state for message history and loading
  const [messageHistory, setMessageHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  function onContentChange() {
    contentChanged = true;
    console.log("contentChanged", contentChanged);
  }

  function inserText() {
    setIsLoading(true);
    
    // Determine which content to insert based on message count
    const htmlContent = messageCount === 0 ? cvHtml : coverHtml;
    
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:62870/api/extra/loadstring');
    http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    http.responseType = 'json';
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        // Add 3 second delay before hiding loader
        setTimeout(() => {
          setIsLoading(false);
      
        
          if (http.status === 200 || http.status === 304) {
            // Insert the sfdt content in cursor position using paste API
            editorObj.current?.documentEditor.editor.paste(http.response);
          } else {
            alert('failed;');
          }

      }, 3000);
      }
    };

    const htmlContentData: { content: string } = { content: htmlContent };
    http.send(JSON.stringify(htmlContentData));
  }
  

  function onCreate() {
    const defaultCharacterFormat = {
      fontFamily: 'Arial',
    };
    editorObj.current?.documentEditor.setDefaultCharacterFormat(defaultCharacterFormat);
  }

  const handleChatKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const textarea = e.target as HTMLTextAreaElement;
      const message = textarea.value.trim();
      
      if (message) {
        // Add message to history
        setMessageHistory(prev => [...prev, message]);
        setMessageCount(prev => prev + 1);
        
        // Clear textarea
        textarea.value = '';
        
        // Insert content
        inserText();
      }
    }
  };

  return (
    <div className="App">
      <div className='cover-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }} className='text-2xl font-bold header-name'>
          🧚 Tabs Editor
        </div>
        <div className='flex flex-row gap-2'>
          <button
            className="bg-gray-100 hover:bg-blue-700 text-sm text-black font-semibold py-2 px-4 rounded-full transition-colors duration-200"
            style={{ height: 40 }}
          >
            Plagiarism Checker
          </button>
          <button
            className="bg-gray-100 hover:bg-blue-700 text-sm text-black font-semibold py-2 px-4 rounded-full transition-colors duration-200"
            style={{ height: 40 }}
          >
            AI Detector
          </button>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className='page-container'>
      {isLoading ?
        <div className="linear-activity fixed top-0">
          <div className="indeterminate"></div>
        </div> : null
      }
        <div className='editor-container'>
          <DocumentEditorContainerComponent
            ref={editorObj}
            height='90vh'
            contentChange={onContentChange}
            enableToolbar={true}
            serviceUrl="http://localhost:62870/api/DocumentEditor/"
            created={onCreate}
          >
            <Inject services={[Toolbar]} />
          </DocumentEditorContainerComponent>
        </div>

        <div className="chat-container flex flex-col h-full bg-white border-l border-gray-200">
          <div className="chat-header px-4 py-2 border-b border-gray-200">
            <h1 className="text-lg font-semibold">Assistant</h1>
          </div>
          
          {/* Message History */}
          <div className="flex-1 overflow-y-auto p-4">
            {messageHistory.map((message, index) => (
              <div key={index} className="mb-3 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-800">{message}</p>
              </div>
            ))}
            {isLoading && (
              <div className="mb-3 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">Loading...</p>
              </div>
            )}
          </div>
          
          <div className="chat-input-area flex items-end gap-2 p-4 border-t border-gray-200 bg-white sticky bottom-0">
            <textarea
              className="flex-1 text-sm resize-none rounded-md border border-gray-300 p-2 text-base min-h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              rows={3}
              onKeyDown={handleChatKeyDown}
            />
            
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;