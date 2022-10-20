/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

render(() => <App />, document.getElementById('root') as HTMLElement);
