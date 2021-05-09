import { toolbar } from '../components/toolbar/toolbar';
import { loginScreen } from '../loginScreen/loginScreen';
import html from './registerScreen.html';
import './registerScreen.scss';

const setSubmitHandler = () => {
    document.getElementById('login')?.addEventListener('click', () => {
        loginScreen();
    })
}

export const registerScreen = () => {
    document.body.innerHTML = html;

    document.body.innerHTML += toolbar();

    setSubmitHandler();
}


