import { toolbar, toolbarInit } from '../components/toolbar/toolbar';
import { loginScreen } from '../loginScreen/loginScreen';
import { hostname, removeEventlistenersOnId } from '../utils';
import html from './registerScreen.html';
import './registerScreen.scss';

const setSubmitHandler = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const errorElement = document.getElementById('error') as HTMLElement;

    removeEventlistenersOnId('submit');
    document.getElementById('submit')?.addEventListener('click', async () => {
        
        const nameInput = <HTMLInputElement>document.getElementById('name');
        const emailInput = <HTMLInputElement>document.getElementById('email');
        const telInput = <HTMLInputElement>document.getElementById('tel');
        const passwordInput = <HTMLInputElement>document.getElementById('password');

        
        const name = nameInput.value;
        const email = emailInput.value;
        const tel = telInput.value;
        const password = passwordInput.value;

        if(!(name && email && tel && password)) return;

        const fetched = await (await fetch(hostname + '/api/register', { headers: headers, body: JSON.stringify({     
            name: name,
            email: email,
            phone: tel,
            password: password
        }), method: 'POST' })).json();

        if (fetched.success) {
            loginScreen();
        } else if (fetched.response === 'invalid') {
            errorElement.innerText = 'Der opstod en fejl:\n';
            for (let i in fetched.errors) {
                const error = fetched.errors[i]
                errorElement.innerText += error.param + ': ' + error.msg + "\n";
            }
        } else if (fetched.response === 'occupied') {
            errorElement.innerText = 'Der opstod en fejl:\n Telefon nr. er allerede optaget.';
        } else {
            errorElement.innerText = 'Der opstod en fejl.';
        }
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
    toolbarInit();

    setLoginHandler();
    setSubmitHandler();
}


