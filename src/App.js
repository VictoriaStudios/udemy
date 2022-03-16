import './App.css';
import { useState, useEffect, useReducer } from 'react';
import { ErrorModal } from './components/ErrorModal';
import Button from './components/Button';

const modalReducer = (state, action) => {
    if (action.type==="USER_ERROR_ONE_ENABLE") {
      if (action.val===true) return {errorOneOpen:true, errorTwoOpen: state.errorTwoOpen}
      if (action.val===false) return {errorOneOpen:false, errorTwoOpen: state.errorTwoOpen}
    }
    if (action.type==="USER_ERROR_TWO_ENABLE") {
      if (action.val===true) return {errorOneOpen:state.errorOneOpen, errorTwoOpen: true}
      if (action.val===false) return {errorOneOpen:state.errorOneOpen, errorTwoOpen: false}
    }
    return {errorOneOpen:false, errorTwoOpen: false}
}

function App() {


  const [modalState, dispatchModal] = useReducer(modalReducer, {errorOneOpen:false, errorTwoOpen: false})

  //classical states commented out, using reducer state instead

  // const [errorOpen, setErrorOpen] = useState(false)
  // const [errorTwoOpen, setErrorTwoOpen] = useState(false)
  // const handleOpenErrorModal = () => {
  //   localStorage.setItem ('error', 'true')
  //   setErrorOpen (true)
  // }
  // const handleCloseErrorModal = () => {
  //   localStorage.setItem ('error', 'false')
  //   setErrorOpen (false)
  // }
  // const handleOpenErrorTwoModal = () => {
  //   localStorage.setItem ('errorTwo', 'true')
  //   setErrorTwoOpen (true)
  // }
  // const handleCloseErrorTwoModal = () => {
  //   localStorage.setItem ('errorTwo', 'false')
  //   setErrorTwoOpen (false)
  // }

  // useEffect(() => {
  //   if (localStorage.getItem('error') === 'true') handleOpenErrorModal()
  //   else handleCloseErrorModal ()
  //   if (localStorage.getItem('errorTwo') === 'true') handleOpenErrorTwoModal()
  //   else handleCloseErrorTwoModal ()
  // }, [])
  


  return (
    <div className="App">
      App
      <Button  onClick={() => dispatchModal({type:'USER_ERROR_ONE_ENABLE', val:true})}>
        Overlay One
      </Button>
      <Button  onClick={() => dispatchModal({type:'USER_ERROR_TWO_ENABLE', val:true})}>
        Overlay Two
      </Button>
      {modalState.errorOneOpen? (<ErrorModal onClose={() => dispatchModal({type:'USER_ERROR_ONE_ENABLE', val:false})} header={"header1"} />): ("")}
      {modalState.errorOneOpen? (<ErrorModal onClose={() => dispatchModal({type:'USER_ERROR_TWO_ENABLE', val:false})} header={"header2"} />): ("")}
    </div>
  );
}

export default App;
