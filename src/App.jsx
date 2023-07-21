import './App.css';
import Connector from './components/Connector/Connector.jsx';
import ImagemHeader from './components/ImgHeader/ImgHeader.jsx';
import InputMessage from './components/InputMessage/Input.jsx';
import KeyDownEvents from './components/KeyDownEvents/KeyDownEvents.jsx';
import { MessageArrived } from './components/MessagesArrived/MessageArrived.jsx';
import { Buttons } from './components/Buttons/Buttons.jsx';
import { StatusBox } from './components/StatusBox/StatusBox.jsx';

function App() {

  return (
    <div className="App">
    <ImagemHeader/>
    <Connector/>
    <MessageArrived/>
    <Buttons/>
    <InputMessage/>
    <StatusBox/>
    <KeyDownEvents/>
    </div>
  )
}

export default App;