import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//import './components/ListCards';
import { ContextProvider } from './Context';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/Main";

ReactDOM.createRoot(document.getElementById('app')).render(


    <BrowserRouter>

        <ContextProvider>
            <Main />
        </ContextProvider>

    </BrowserRouter>
)