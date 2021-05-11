import { toolbar } from '../components/toolbar/toolbar';
import { User } from '../database';
import { loginScreen } from '../loginScreen/loginScreen';
import html from './registerScreen.html';
import './registerScreen.scss';

const setSubmitHandler = () => {
    document.getElementById('submit')?.addEventListener('click', () => {
        
        const nameInput = <HTMLInputElement>document.getElementById('name');
        const addressInput = <HTMLInputElement>document.getElementById('address');
        const emailInput = <HTMLInputElement>document.getElementById('email');
        const telInput = <HTMLInputElement>document.getElementById('tel');
        const passwordInput = <HTMLInputElement>document.getElementById('password');

        
        const name = nameInput.value;
        const address = addressInput.value;
        const email = emailInput.value;
        const tel = telInput.value;
        const password = passwordInput.value;

        if(!(name && address && email && tel && password)) return;

        const id = User.insert({
            name: name,
            address: address,
            email: email,
            tel: tel,
            password: password
        });

        loginScreen();
    })
}

const setLoginHandler = () => {
    document.getElementById('login')?.addEventListener('click', () => {
        loginScreen();
    })
}

export const registerScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();

    setLoginHandler();
    setSubmitHandler();
}


