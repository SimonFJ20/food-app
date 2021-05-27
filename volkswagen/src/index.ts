import './body.scss';
import { landingScreen } from './landingScreen/landingScreen';
import { loginScreen } from './loginScreen/loginScreen';

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

sessionStorage.removeItem('page')
if (localStorage.getItem('token')) { //& check token validity when api is available
    landingScreen();
} else {
    loginScreen();
}