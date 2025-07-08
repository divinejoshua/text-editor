import { exec } from "child_process";

exec("/Applications/LibreOffice.app/Contents/MacOS/soffice --headless --convert-to html original.docx", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log("Conversion done!");
});
