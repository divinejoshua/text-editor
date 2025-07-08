import HtmlToDocx from "@turbodocx/html-to-docx";
import { writeFile } from "fs/promises";


const htmlString = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
</head>
<body>
<h1 style="color: red;">Technology: A Comprehensive Report</h1>
<p style="margin-bottom: 0cm;"><br/></p>
<h2 style="color: red; font-family: Arial, serif;">1. Introduction</h2>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">Technology refers to the application of scientific knowledge for practical purposes. From the invention of the wheel to artificial intelligence, technology has consistently shaped human civilization. In the 21st century, it influences every sector—from communication to healthcare. This report explores the evolution, trends, and implications of technology.</p>
<h2 style="color: red; font-family: Arial, serif;">2. Historical Evolution
of Technology</h2>
<h3 style="color: red; font-family: Arial, serif;">2.1 Ancient Innovations</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">Early humans created tools from stone and wood. The agricultural revolution brought irrigation systems and plows.</p>
<h3 style="color: red; font-family: Arial, serif;">2.2 Industrial
Revolution</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">The 18th–19th centuries saw mechanization via steam engines and electricity, transforming production and transportation.</p>
<h3 style="color: red; font-family: Arial, serif;">2.3 Digital Revolution</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">Computers, the internet, and mobile devices reshaped communication and laid the foundation for today’s digital age.</p>
<h2 style="color: red; font-family: Arial, serif;">3. Key Areas of
Technological Advancement</h2>
<h3 style="color: red; font-family: Arial, serif;">3.1 Information and
Communication Technology (ICT)</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">ICT encompasses computers, smartphones, networks, and software, enabling global connectivity.</p>
<h3 style="color: red; font-family: Arial, serif;">3.2 Artificial
Intelligence and Machine Learning</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">AI enables machines to mimic human intelligence, impacting industries with applications like virtual assistants and autonomous vehicles.</p>
<h3 style="color: red; font-family: Arial, serif;">3.3 Biotechnology</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">Gene editing, sequencing, and synthetic biology revolutionize healthcare, agriculture, and environmental science.</p>
<h3 style="color: red; font-family: Arial, serif;">3.4 Renewable Energy</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">Solar, wind, and hydroelectric energy reduce dependence on fossil fuels and combat climate change.</p>
<h3 style="color: red; font-family: Arial, serif;">3.5 Robotics and
Automation</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">Automation is growing in manufacturing and services. Robots perform tasks in surgeries, warehouses, and customer service.</p>
<h2 style="color: red; font-family: Arial, serif;">4. Impact of Technology
on Society</h2>
<h3 style="color: red; font-family: Arial, serif;">4.1 Positive Impacts</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">Technology improves communication, healthcare, education, and drives economic growth and innovation.</p>
<h3 style="color: red; font-family: Arial, serif;">4.2 Negative Impacts</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">While technology offers numerous benefits, it also introduces significant challenges and concerns that warrant careful consideration. These include fundamental issues such as <b style="font-family: Arial, serif;">data privacy</b>, the potential for widespread <b style="font-family: Arial, serif;">job displacement</b> due to increasing automation, and the exacerbation of <b style="font-family: Arial, serif;">digital inequality</b>, which creates a divide between those with access to technology and those without. Beyond these, there are growing concerns about the <b style="font-family: Arial, serif;">mental health impacts</b> of constant connectivity and social media use. Addressing these negative consequences is crucial for ensuring technology develops responsibly and inclusively. Additional points of concern include:</p>
<ul style="margin-bottom: 0cm; font-family: Arial, serif;">
  <li><b style="font-family: Arial, serif;">Cybersecurity Risks</b>: The increasing reliance on digital systems makes individuals, businesses, and governments vulnerable to cyberattacks, data breaches, and identity theft.</li>
  <li><b style="font-family: Arial, serif;">Ethical Dilemmas in AI</b>: As AI becomes more sophisticated, questions arise regarding algorithmic bias, accountability for AI decisions, and the potential for autonomous systems to operate without sufficient human oversight.</li>
  <li><b style="font-family: Arial, serif;">Environmental Impact</b>: The production, use, and disposal of electronic devices contribute to e-waste, energy consumption, and the depletion of natural resources, posing significant environmental challenges.</li>
  <li><b style="font-family: Arial, serif;">Misinformation and Disinformation</b>: Digital platforms can amplify the spread of false or misleading information, impacting public discourse, social cohesion, and democratic processes.</li>
  <li><b style="font-family: Arial, serif;">Erosion of Human Connection</b>: Over-reliance on digital communication can sometimes diminish face-to-face interactions and foster feelings of isolation.</li>
  <li><b style="font-family: Arial, serif;">Privacy and Surveillance</b>: The vast amounts of data collected by technological platforms raise concerns about surveillance, individual privacy, and the potential for misuse of personal information.</li>
</ul>
<h2 style="color: red; font-family: Arial, serif;">5. Future Trends in
Technology</h2>
<h3 style="color: red; font-family: Arial, serif;">5.1 Quantum Computing</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">Quantum computers will revolutionize data processing, cryptography, and simulations.</p>
<h3 style="color: red; font-family: Arial, serif;">5.2 Internet of Things
(IoT)</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">IoT links devices across homes, industries, and cities, enhancing automation and monitoring.</p>
<h3 style="color: red; font-family: Arial, serif;">5.3 Extended Reality
(XR)</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">VR, AR, and MR are transforming education, training, and entertainment experiences.</p>
<h3 style="color: red; font-family: serif;">5.4 Ethical AI and Tech
Regulation</h3>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">Responsible AI use requires transparency, fairness, and international regulation to prevent harm.</p>
<h2 style="color: red; font-family: Arial, serif;">6. Conclusion</h2>
<p style="margin-bottom: 0cm; font-family: Arial, serif;">Technology presents both opportunity and risk. Collaboration and ethical governance are essential to ensure inclusive and sustainable development.</p>
<p style="line-height: 108%; margin-bottom: 0cm;"><br/></p>
</body>
</html>`;


async function basicExample() {
  const result = await HtmlToDocx(htmlString);

  let buffer: Buffer;

  if (result instanceof ArrayBuffer) {
    buffer = Buffer.from(new Uint8Array(result));
  } else if (result instanceof Buffer) {
    buffer = result;
  } else if (result instanceof Blob) {
    // Convert Blob to ArrayBuffer
    const arrayBuffer = await result.arrayBuffer();
    buffer = Buffer.from(new Uint8Array(arrayBuffer));
  } else {
    throw new Error("Unsupported output type from HtmlToDocx");
  }

  await writeFile("document.docx", buffer);
  console.log("DOCX file saved as document.docx");
}

basicExample();
