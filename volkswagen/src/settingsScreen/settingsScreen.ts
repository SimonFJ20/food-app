import { toolbar, toolbarInit } from '../components/toolbar/toolbar';
import { hostname } from '../utils';
import html from './settingsScreen.html';
import './settingsScreen.scss';

export const settingsScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();

    // update information

    const userNameElement = document.getElementById('name') as HTMLInputElement;
    const userEmailElement = document.getElementById('email') as HTMLInputElement;
    const userPhoneElement = document.getElementById('tel') as HTMLInputElement;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch(hostname + '/api/getuser', { headers: headers, body: JSON.stringify({ 
        token: localStorage.getItem('token')
    }), method: 'POST' })
    .then( response => response.json() )
    .then( data => {
        userNameElement.value = data.user.name,
        userEmailElement.value = data.user.email,
        userPhoneElement.value = data.user.phone
    });


    const updateInfoButton = document.getElementById('update') as HTMLButtonElement;
    updateInfoButton.addEventListener('click', () => {
    
        fetch(hostname + '/api/updateuser', { headers: headers, body: JSON.stringify({ 
            token: localStorage.getItem('token'),
            name: userNameElement.value,
            email: userEmailElement.value,
            phone: userPhoneElement.value        
        }), method: 'POST' });
    })

    // delete account ?
}
