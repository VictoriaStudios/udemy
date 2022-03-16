import './App.css';
import { useState, useEffect } from 'react';
import { ErrorModal } from './components/ErrorModal';
import Button from './components/Button';

function App() {
  const [errorOpen, setErrorOpen] = useState(false)
  const [errorTwoOpen, setErrorTwoOpen] = useState(false)
  const handleOpenErrorModal = () => {
    localStorage.setItem ('error', 'true')
    setErrorOpen (true)
  }
  const handleCloseErrorModal = () => {
    localStorage.setItem ('error', 'false')
    setErrorOpen (false)
  }
  const handleOpenErrorTwoModal = () => {
    localStorage.setItem ('errorTwo', 'true')
    setErrorTwoOpen (true)
  }
  const handleCloseErrorTwoModal = () => {
    localStorage.setItem ('errorTwo', 'false')
    setErrorTwoOpen (false)
  }

  useEffect(() => {
    if (localStorage.getItem('error') === 'true') handleOpenErrorModal()
    else handleCloseErrorModal ()
    if (localStorage.getItem('errorTwo') === 'true') handleOpenErrorTwoModal()
    else handleCloseErrorTwoModal ()
  }, [])
  


  return (
    <div className="App">
      App
      <Button type="submit" onClick={handleOpenErrorModal}>
        Overlay One
      </Button>
      <Button type="submit" onClick={handleOpenErrorTwoModal}>
        Overlay Two
      </Button>
      {errorOpen? (<ErrorModal onClose={handleCloseErrorModal} header={"header1"} />): ("")}
      {errorTwoOpen? (<ErrorModal onClose={handleCloseErrorTwoModal} header={"header2"} />): ("")}
    </div>
  );
}

export default App;
