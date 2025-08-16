"use client"
import React, {useRef, useState } from 'react';
import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
import './globals.css';
import { registerLicense } from '@syncfusion/ej2-base';

const LICENSE_KEY = process.env.NEXT_PUBLIC_SYNCFUSION_LICENSE_KEY;
registerLicense(LICENSE_KEY || '');

const cvHtml = ` <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Divine Erhomonsele - Software Engineer CV</title>
  <!-- Tailwind CSS CDN for styling -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts for the Inter font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f3f4f6;
    }
    /* Custom style for bullet points */
   
  </style>
</head>
<body class="p-4 sm:p-8 flex justify-center">

  <!-- Main CV container -->
  <div class="max-w-4xl w-full bg-white rounded-xl shadow-xl p-6 sm:p-10 border border-gray-200">

    <!-- Header Section: Name and contact info -->
    <header class="pb-6 border-b border-gray-200 text-center">
      <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Divine Erhomonsele</h1>
      <p class="text-sm sm:text-base space-x-2">
        <span>(555) 123-4567</span> |
        <span>divine.erhomonsele@email.com</span> |
        <a href="https://www.linkedin.com/in/divine_erhomonsele" class="text-blue-600 hover:underline">linkedin.com/in/divine_erhomonsele</a>
      </p>
    </header>

    <!-- Summary Section -->
    <section class="py-6 border-b border-gray-200">
      <h2 class="text-xl sm:text-2xl font-bold tracking-wide mb-3">Summary</h2>
      <p class="leading-relaxed text-sm sm:text-base">A passionate and results-driven Software Engineer with a Bachelor of Science in Computer Science from Stanford University. Proven experience in developing and shipping high-quality software, with a strong focus on object-oriented programming, cloud computing, and problem-solving. Possesses a deep understanding of mission-critical systems and a growth mindset dedicated to optimizing customer experiences. Seeking to apply my technical skills and a passion for distributed web services to a mission-critical role within the Azure Cloud Experience team.</p>
    </section>

    <!-- Experience Section -->
    <section class="py-6 border-b border-gray-200">
      <h2 class="text-xl sm:text-2xl font-bold tracking-wide mb-4">Experience</h2>
      <div class="mb-5">
        <h3 class="text-base sm:text-lg font-bold">Software Engineer Intern</h3>
        <p class="text-sm mb-2">Cloud Solutions, Inc. | May 2024 - August 2024</p>
        <ul class="list-disc list-disc-inside text-sm space-y-1">
          <li>Collaborated on a team focused on improving the reliability and performance of distributed web services, contributing directly to a platform that processed live site telemetry.</li>
          <li>Developed and implemented new features for a cloud-based support platform using <strong class="text-blue-600">C#</strong> and object-oriented principles, resulting in a 15% reduction in incident resolution time.</li>
          <li>Participated in all stages of the software development lifecycle, from initial ideation and design to deployment and live site support for a critical internal service.</li>
          <li>Gained hands-on experience with a major cloud platform, assisting in the management and stabilization of workloads to optimize customer experiences (CXP).</li>
        </ul>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-6 border-b border-gray-200">
      <h2 class="text-xl sm:text-2xl font-bold tracking-wide mb-4">Projects</h2>
      <div class="mb-5">
        <h3 class="text-base sm:text-lg font-bold">E-commerce Platform</h3>
        <p class="text-sm mb-2">Personal Project | 2023</p>
        <ul class="list-disc list-disc-inside text-sm space-y-1">
          <li>Designed and built a full-stack e-commerce website from the ground up, demonstrating proficiency in web service development and distributed systems.</li>
          <li>Utilized <strong class="text-blue-600">C#</strong> and the ASP.NET Core framework to build a robust backend, including product management, user authentication, and a secure payment gateway.</li>
          <li>Implemented a relational database to manage product inventory and customer data, ensuring data integrity and system reliability.</li>
        </ul>
      </div>
    </section>

    <!-- Education Section -->
    <section class="py-6 border-b border-gray-200">
      <h2 class="text-xl sm:text-2xl font-bold tracking-wide mb-3">Education</h2>
      <p class="text-sm sm:text-base">
        <strong class="font-semibold">Stanford University</strong> | Stanford, CA<br>
        Bachelor of Science in Computer Science | May 2025
      </p>
    </section>

    <!-- Skills Section -->
    <section class="py-6">
      <h2 class="text-xl sm:text-2xl font-bold tracking-wide mb-3">Skills</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base">
        <div>
          <strong class="font-semibold">Programming Languages:</strong>
          <ul class="mt-1 list-disc list-disc-inside pl-4 space-y-0.5">
            <li>C#, Python, Java, JavaScript, SQL</li>
          </ul>
        </div>
        <div>
          <strong class="font-semibold">Cloud Platforms:</strong>
          <ul class="mt-1 list-disc list-disc-inside pl-4 space-y-0.5">
            <li>Azure, AWS</li>
          </ul>
        </div>
        <div>
          <strong class="font-semibold">Technologies:</strong>
          <ul class="mt-1 list-disc list-disc-inside pl-4 space-y-0.5">
            <li>ASP.NET Core, RESTful APIs, Git, Microsoft Azure Services</li>
          </ul>
        </div>
        <div class="sm:col-span-2 lg:col-span-3">
          <strong class="font-semibold">Concepts:</strong>
          <ul class="mt-1 list-disc list-disc-inside pl-4 space-y-0.5">
            <li>Object-Oriented Programming (OOP), Distributed Systems, Data Processing, Problem Solving, Live Site Support, Incident Management (IcM)</li>
          </ul>
        </div>
      </div>
    </section>

  </div>

</body>
</html>`


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
      I am writing with great enthusiasm to express my interest in the Software Engineer position on the Azure Cloud Experience team, as advertised on the Microsoft Careers website. Microsoft's mission to "empower every person and every organization on the planet to achieve more" deeply resonates with my own passion for leveraging technology to solve complex problems and create impactful solutions. As a recent graduate with a strong foundation in C# and experience in building distributed web services, I am confident that I can contribute to your team's mission of transforming cloud customers into fans.
    </p>

    <p class="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
      My academic and professional background has provided me with practical experience that directly aligns with the qualifications for this role. During my internship at Cloud Solutions, Inc., I had the opportunity to work with a platform that processed live site telemetry, giving me firsthand experience with the demands of building and maintaining mission-critical services. I applied object-oriented principles to develop new features that measurably improved incident resolution, a skill set that I believe is highly relevant to your work on the Incident Management (IcM) system.
    </p>

    <p class="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
      Beyond my internship, my personal project to build a full-stack e-commerce platform provided me with comprehensive, end-to-end experience in web service development. By utilizing C# and ASP.NET Core, I gained a deep understanding of creating robust backends, managing data, and ensuring security—all critical components of shipping high-quality, reliable services. This project, combined with my internship, has given me practical exposure to cloud platforms and a solid foundation in the principles of building scalable, secure, and reliable software.
    </p>

    <p class="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
      I am a self-starter who thrives on technological challenges and is committed to continuous learning. The opportunity to contribute to the core of Azure, a platform that is central to so many businesses, is incredibly exciting to me. Thank you for your time and consideration. I look forward to the possibility of discussing how my skills and passion can benefit the Azure Cloud Experience team.
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