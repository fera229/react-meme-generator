import axios from 'axios';

const MemeDisplay = ({ memeUrl }) => {
  const downloadMeme = async () => {
    try {
      const response = await axios.get(memeUrl, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'meme.png'); // Specify the file name
      document.body.appendChild(link);
      link.click();
      link.remove(); // Remove the element from the DOM
      window.URL.revokeObjectURL(url); // Free up memory
    } catch (error) {
      console.error('Error downloading meme:', error);
    }
  };

  return (
    <div>
      {memeUrl ? (
        <>
          <img
            src={memeUrl}
            alt="Generated Meme"
            data-test-id="meme-image"
            style={{ width: '300px', height: '300px' }}
          />
          <br />
          <button className="downloadBtn" onClick={downloadMeme}>
            Download
          </button>
        </>
      ) : null}
    </div>
  );
};

export default MemeDisplay;
