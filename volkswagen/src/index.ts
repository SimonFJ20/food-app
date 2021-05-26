import './body.scss';
import { deliveriesScreen } from './deliveriesScreen/deliveriesScreen';
import { landingScreen } from './landingScreen/landingScreen';
import { listScreen } from './listScreen/listScreen';
import { loginScreen } from './loginScreen/loginScreen';
import { locationScreen } from './searchScreen/locationScreen/locationScreen';
import { sortScreen } from './searchScreen/sortScreen/sortScreen';
import { tagScreen } from './searchScreen/tagScreen/tagScreen';
import { settingsScreen } from './settingsScreen/settingsScreen';

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
`;


const params = new URLSearchParams(window.location.search);

if(params.has('p')) {
    const page = params.get('p');
    
    switch(page) {
        case 'sort':
            sortScreen();
            break;
        case 'location':
            locationScreen();
            break;
        case 'tags':
            tagScreen();
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
            landingScreen();
            break;
    }
} else {
    landingScreen();
}

