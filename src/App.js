// import logo from './logo.svg';
import './App.css';
import React ,{ Component } from 'react';
import ZipCodes from './components/zipsearch'
import ReactDOM from 'react-dom';

class App extends Component {
	
  render() {
  
  return (
      <div>
        <ZipCodes />
     </div>   
     );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
