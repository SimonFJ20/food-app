import './body.scss';
import { listScreen } from './listScreen/listScreen';
import { loginScreen } from './loginScreen/loginScreen';
import { settingsScreen } from './settingsScreen/settingsScreen';

document.title = 'FeedMe App Draft';
document.head.innerHTML += /*html*/`
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
    >
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&amp;display=swap"
    >
`;


const params = new URLSearchParams(window.location.search);

if(params.has('p')) {
    const page = params.get('p');
    
    switch(page) {
        case 'list':
            listScreen();
            break;
        case 'login':
            loginScreen();
            break;
        case 'settings':
            settingsScreen();
            break;
        default:
            listScreen();
            break;
    }
    
} else {
    listScreen();
}

