import './body.scss';
import { loginScreen } from "./loginScreen/loginScreen";
import { registerScreen } from './registerScreen/registerScreen';

document.title = 'FeedMe App Draft';
document.head.innerHTML += /*html*/`
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&amp;display=swap" rel="stylesheet">
`;


loginScreen()

registerScreen()



