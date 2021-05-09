import { toolbar } from '../components/toolbar/toolbar';
import { User } from '../database';
import { registerScreen } from '../registerScreen/registerScreen';
import { removeEventlistenersOnId } from '../utils';
import html from './loginScreen.html';
import './loginScreen.scss';

const setSubmitHandler = () => {
    removeEventlistenersOnId('submit');
    document.getElementById('submit')?.addEventListener('click', () => {
        
        const identifierInput = <HTMLInputElement>document.getElementById('identifier');
        const passwordInput = <HTMLInputElement>document.getElementById('password');

        
        const identifier = identifierInput.value;
        const password = passwordInput.value;

        if(!(identifier && password)) return;

        const user = User.find(user => user.email === identifier || user.tel === identifier);

        if(!user) return;

        if(user) alert('sdfds');
    })
}

const setRegisterHandler = () => {
    document.getElementById('register')?.addEventListener('click', () => {
        registerScreen();
    })
}


export const loginScreen = () => {
    document.body.innerHTML = html;

    document.body.innerHTML += toolbar();

    setRegisterHandler();
    setSubmitHandler();
}


