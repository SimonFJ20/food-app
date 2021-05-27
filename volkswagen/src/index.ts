import './body.scss';
import { landingScreen } from './landingScreen/landingScreen';
import { loginScreen } from './loginScreen/loginScreen';
import { hostname } from './utils';

document.title = 'FeedMe App Draft';
document.head.innerHTML += `
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
    >
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&amp;display=swap"
    >
    <link rel="shortcut icon" href="https://feedme.simonfj20.site/favicon.png" type="image/png">
`;
const index = async () => {
    sessionStorage.removeItem('page')
    if (localStorage.getItem('token')) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const fetched = await (await fetch(hostname + '/api/checktoken', { headers: headers, body: JSON.stringify({ token: localStorage.getItem('token') }), method: 'POST' })).json();
        if (fetched.success && fetched.response === 'success') {
            landingScreen();
        } else {
            loginScreen();
        }
    } else {
        loginScreen();
    }
}

index();