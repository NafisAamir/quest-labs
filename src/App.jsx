import { useState } from 'react';
import { Nav } from './Components/Nav';
import { Boxes } from './Components/Boxes';

function App() {
  return (
    <div style={{ height:"620px",backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/737/338/350/night-cityscape-colorful-new-york-city-wallpaper-preview.jpg")' }}>
      <Nav />
      <Boxes />
    </div>
  );
}

export default App;
