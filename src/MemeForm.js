import { useState } from 'react';

const MemeForm = ({
  topText,
  setTopText,
  bottomText,
  setBottomText,
  generateMeme,
}) => {
  const [localTopText, setLocalTopText] = useState(topText);
  const [localBottomText, setLocalBottomText] = useState(bottomText);

  const handleGenerateMeme = (event) => {
    event.preventDefault();
    setTopText(localTopText);
    setBottomText(localBottomText);
    generateMeme();
  };

  return (
    <form onSubmit={handleGenerateMeme}>
      <label>
        Top Text: <br />
        <input
          placeholder="Enter Top Text"
          value={localTopText}
          onChange={(e) => setLocalTopText(e.target.value)}
          onFocus={(e) => {
            e.target.value = '';
            setLocalTopText('');
          }}
        />
      </label>
      <label>
        Bottom Text:
        <input
          placeholder="Enter Bottom Text"
          value={localBottomText}
          onChange={(e) => setLocalBottomText(e.target.value)}
          onFocus={(e) => {
            e.target.value = '';
            setLocalBottomText('');
          }}
        />
      </label>
      <button>Generate Meme</button>
    </form>
  );
};

export default MemeForm;
