import React, { useEffect, useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import Notification from './components/Notification';

const API_BASE_URL = 'http://localhost:8080';

const theme = createMuiTheme();

function App() {
  const [temperatures, setTemperatures] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);
  const [message, setMessage] = useState({ text: '', ok: true});
  const uploadTemperatures = async file => {
    const formData = new FormData();
    formData.append('temperatureFile', file);

    try {
      const response = await fetch(`${API_BASE_URL}/temperatures/upload`, {
        method: 'POST',
        body: formData,
      });
      if (response.status >= 400) {
        throw Error('Upload failed');
      }

      console.log('POST /temperatures/upload');
      const newTemperatures = await response.json();
      setTemperatures(newTemperatures);
      setMessage({
        text: 'Uploaded temperatures successfully!',
        ok: true
      });
    } catch (ex) {
      console.error(ex);
      setMessage({
        text: 'Oops! Failed to upload temperatures.',
        ok: false
      });
    }
  }

  useEffect(() => {
    const fetchTemperatures = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/temperatures`);
        if (response.status >= 400) {
          throw Error('Upload failed');
        }

        console.log('GET /temperatures');
        const newTemperatures = await response.json();
        setTemperatures(newTemperatures);
        setMessage({
          text: 'Fetched temperatures successfully!',
          ok: true
        });
      } catch (ex) {
        console.error(ex);
        setMessage({
          text: 'Oops! Failed to fetch temperatures.',
          ok: false
        });
      }
    }

    fetchTemperatures();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Notification message={message} timeout={5000} />
      <Map temperatures={temperatures} isCelsius={isCelsius} />
      <Sidebar 
        uploadTemperatures={uploadTemperatures}
        changeIsCelsius={setIsCelsius}
        isCelsius={isCelsius} />
    </ThemeProvider>
  );
}

export default App;
