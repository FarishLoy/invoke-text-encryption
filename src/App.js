import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AppAlphabet from './utils/Alphabet'

function App() {
  const [text, setText] = useState("")
  const [encryptedText, setEncryptedText] = useState("")
  const [randomKeys, setRandomKeys] = useState(null)

  const alphabet = new AppAlphabet()

  const onEncrypt = (text) => {
    const encrypted = alphabet.encrypt(text)
    setEncryptedText(encrypted.encryptedText)
    setRandomKeys(encrypted.randomKeys)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Text Encryption</h2>
        <p>Type in the text box to encrypt</p>
        <textarea className="Text-input" placeholder="Text to encrypt" value={text} onChange={(e) => setText(e.currentTarget.value)} />
        <button onClick={() => onEncrypt(text)}>Encrypt</button>
        <textarea readOnly contentEditable={false} className="Encrypted-Area" value={encryptedText}>
        </textarea>
        {
          randomKeys ? <p>Random keys generated for encryption: {randomKeys}</p> : null
        }
      </header>
    </div>
  );
}

export default App;
