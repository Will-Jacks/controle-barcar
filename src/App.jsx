import './App.css';
import Connector from './components/Connector/Connector';
import ImagemHeader from './components/ImgHeader/ImgHeader';
import InputMessage from './components/InputMessage/Input';
import KeyDownEvents from './components/KeyDownEvents/KeyDownEvents';
import Message from './components/Message/Message';
import { Buttons } from './components/Buttons/Buttons';
import { StatusBox } from './components/StatusBox/StatusBox';

function App() {

  return (
    <div className="App">
    <ImagemHeader/>
    <Connector/>
    <Message/>
    <Buttons/>
    <InputMessage/>
    <StatusBox/>
    <KeyDownEvents/>
    </div>
  )
}

export default App;