import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CharacterEditor />
      <Footer />
      <div id="perspective"></div>
    </>
  );
}

export default App;
