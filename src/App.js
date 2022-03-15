import './App.css';
import { useState } from 'react';
import { ErrorModal } from './components/ErrorModal';
import Button from './components/Button';

function App() {
  const [errorOpen, setErrorOpen] = useState(false)
  const handleOpenErrorModal = () => setErrorOpen (true)
  const handleCloseErrorModal = () => setErrorOpen (false)


  return (
    <div className="App">
      App
      <Button type="submit" onClick={handleOpenErrorModal}>
        Hi
      </Button>
      {errorOpen? (<ErrorModal onClose={handleCloseErrorModal} />): ("")}
    </div>
  );
}

export default App;
