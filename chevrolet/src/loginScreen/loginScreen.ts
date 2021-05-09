import { toolbar } from '../components/toolbar/toolbar';
import { registerScreen } from '../registerScreen/registerScreen';
import html from './loginScreen.html';
import './loginScreen.scss';

const setSubmitHandler = () => {
    document.getElementById('register')?.addEventListener('click', () => {
        registerScreen();
    })
}

export const loginScreen = () => {
    document.body.innerHTML = html;

    document.body.innerHTML += toolbar();

    setSubmitHandler();
}


