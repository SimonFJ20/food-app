import { registerScreen } from '../registerScreen/registerScreen';
import { tagScreen } from '../searchScreen/tagScreen/tagScreen';
import { hostname, removeEventlistenersOnId } from '../utils';
import html from './loginScreen.html';
import './loginScreen.scss';

const setSubmitHandler = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const responseElement = document.getElementById('response') as HTMLElement;

    removeEventlistenersOnId('submit');
    document.getElementById('submit')?.addEventListener('click', async () => {
        
        const identifierInput = <HTMLInputElement>document.getElementById('identifier');
        const passwordInput = <HTMLInputElement>document.getElementById('password');

        const identifier = identifierInput.value;
        const password = passwordInput.value;

        if(!(identifier && password)) return;

        const fetched = await (await fetch(hostname + '/api/login', { headers: headers, body: JSON.stringify({     
            phone: identifier,
            password: password
        }), method: 'POST' })).json();

        switch (fetched.response) {
            case 'success':
                localStorage.setItem('token', fetched.token)
                tagScreen();
                break;
            case 'unknown':
                responseElement.innerText = 'Der opstod en fejl: \nUkendt bruger eller forkert password.';
                break;
            default:
                responseElement.innerText = 'Der opstod en fejl.';
                break;
        }
    })
}

const setRegisterHandler = () => {
    document.getElementById('register')?.addEventListener('click', () => {
        registerScreen();
    })
}


export const loginScreen = () => {
    document.body.innerHTML = html;
    
    setRegisterHandler();
    setSubmitHandler();
}


