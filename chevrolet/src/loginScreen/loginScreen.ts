import { toolbar } from '../components/toolbar/toolbar';
import html from './loginScreen.html';
import './loginScreen.scss';

export const loginScreen = () => {
    document.body.innerHTML = html;

    document.body.innerHTML += toolbar();
}


