import './App.css';

import Form from './components/Form/Form'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons



function App() {
    return (
        <div className="App">
            <Form />
        </div>
    );
}

export default App;
