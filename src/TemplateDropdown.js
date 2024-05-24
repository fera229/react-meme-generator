import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TemplateDropdown = ({ template, setTemplate }) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get('https://api.memegen.link/templates');
        setTemplates(response.data);
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };
    fetchTemplates().catch((error) =>
      console.error('Failed to fetch templates:', error),
    ); // Additional catch to satisfy ESlint :D
  }, []);

  return (
    <div>
      <label>
        Meme Template:
        <select value={template} onChange={(e) => setTemplate(e.target.value)}>
          {templates.map((temp) => (
            <option key={`template-${String(temp.id)}`} value={temp.id}>
              {temp.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default TemplateDropdown;
