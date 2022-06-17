import React, {useEffect, useState} from 'react';
import fetchRandomImage from './requests/requestHandler';

function App() {
  const [imageUrl, setImageUrl] = useState<string>();

  const loadImage = async () => {
    const imageLink = await fetchRandomImage();
    setImageUrl(imageLink);
  }

  useEffect(() => {
    loadImage()
  }, []);

  return (
    <>
      <div>
        <h1>Image:</h1>
        <img src={imageUrl} alt="randomimage" />
      </div>
    </>
  );
}

export default App;
