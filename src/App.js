import './App.css';
import { useEffect, useState } from 'react';
import MemeDisplay from './MemeDisplay';
import MemeForm from './MemeForm';
import TemplateDropdown from './TemplateDropdown';

export default function App() {
  const [topText, setTopText] = useState('Want');
  const [bottomText, setBottomText] = useState('Memes');
  const [template, setTemplate] = useState('doge'); // Default template
  // const [selectedTemplate, setSelectedTemplate] = useState('doge');
  const [memeUrl, setMemeUrl] = useState('');

  const generateMeme = () => {
    const memeURL = `https://api.memegen.link/images/${template}/${topText || '_'}/${bottomText || '_'}.png`;
    setMemeUrl(memeURL);
    setTemplate(template);
  };

  useEffect(() => {
    // Automatically generate meme when the page loads
    generateMeme();
  }, []); // Only run on initial load

  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Meme Generator</h1>
        <MemeForm
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
          generateMeme={generateMeme}
        />
        <TemplateDropdown template={template} setTemplate={setTemplate} />
        <MemeDisplay memeUrl={memeUrl} />
      </header>
    </div>
  );
}
