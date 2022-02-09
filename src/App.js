import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")
  const [encryptedText, setEncryptedText] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <h2>Text Encryption</h2>
        <p>Type in the text box to encrypt</p>
        <textarea className="Text-input" placeholder="Text to encrypt" value={text} onChange={(e) => setText(e.currentTarget.value)} />
        <button>Encrypt</button>
        <textarea contentEditable={false} className="Encrypted-Area" value={encryptedText}>
        </textarea>
      </header>
    </div>
  );
}

export default App;
