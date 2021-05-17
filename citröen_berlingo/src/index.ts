import './body.scss';
import { deliveriesScreen } from './deliveriesScreen/deliveriesScreen';
import { listScreen } from './listScreen/listScreen';
import { loginScreen } from './loginScreen/loginScreen';
import { searchScreen } from './searchScreen/searchScreen';
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
        case 'search':
            searchScreen();
            break;
        case 'list':
            listScreen();
            break;
        case 'login':
            loginScreen();
            break;
        case 'settings':
            settingsScreen();
            break;
        case 'deliveries':
            deliveriesScreen();
            break;
        default:
            listScreen();
            break;
    }
    
} else {
    listScreen();
}

