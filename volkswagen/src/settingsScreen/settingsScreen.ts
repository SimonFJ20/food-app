import { toolbar, toolbarInit } from '../components/toolbar/toolbar';
import { hostname } from '../utils';
import html from './settingsScreen.html';
import './settingsScreen.scss';

export const settingsScreen = async () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();

    // update information

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const userNameElement = document.getElementById('name') as HTMLInputElement;
    const userEmailElement = document.getElementById('email') as HTMLInputElement;
    const userPhoneElement = document.getElementById('tel') as HTMLInputElement;

    const responseElement = document.getElementById('response') as HTMLElement;

    const fetched = await (await fetch(hostname + '/api/getuser', { headers: headers, body: JSON.stringify({ 
        token: localStorage.getItem('token')
    }), method: 'POST' })).json();

    userNameElement.value = fetched.user.name,
    userEmailElement.value = fetched.user.email,
    userPhoneElement.value = fetched.user.phone


    const updateInfoButton = document.getElementById('update') as HTMLButtonElement;
    updateInfoButton.addEventListener('click', async () => {
    
        const fetched = await (await fetch(hostname + '/api/updateuser', { headers: headers, body: JSON.stringify({ 
            token: localStorage.getItem('token'),
            name: userNameElement.value,
            email: userEmailElement.value,
            phone: userPhoneElement.value        
        }), method: 'POST' })).json();

        switch (fetched.response) {
            case 'success':
                responseElement.className = 'success';
                responseElement.innerText = 'Bruger information opdateret.';
                break;
            case 'invalid':
                responseElement.className = '';
                responseElement.innerText = 'Der opstod en fejl:\n';
                for (let i in fetched.errors) {
                    const error = fetched.errors[i]
                    responseElement.innerText += error.param + ': ' + error.msg + "\n";
                }
                break;
            case 'occupied':
                responseElement.className = '';
                responseElement.innerText = 'Der opstod en fejl:\n Telefon nr. er allerede optaget.';
                break;
            default:
                responseElement.className = '';
                responseElement.innerText = 'Der opstod en fejl.';
                break;
        }

    })

    // delete account ?
}
