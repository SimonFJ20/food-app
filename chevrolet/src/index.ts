import './body.scss';
import { listScreen } from './listScreen/listScreen';

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


listScreen();

