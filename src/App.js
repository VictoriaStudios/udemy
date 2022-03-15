import './App.css';
import { useState, useEffect } from 'react';
import { ErrorModal } from './components/ErrorModal';
import Button from './components/Button';

function App() {
  const [errorOpen, setErrorOpen] = useState(false)
  const handleOpenErrorModal = () => {
    localStorage.setItem ('error', 'true')
    setErrorOpen (true)
  }
  const handleCloseErrorModal = () => {
    localStorage.setItem ('error', 'false')
    setErrorOpen (false)
  }

  useEffect(() => {
    if (localStorage.getItem('error') === 'true') handleOpenErrorModal()
    else handleCloseErrorModal ()
  }, [])
  


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
