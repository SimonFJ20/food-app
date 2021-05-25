import { tagScreen } from '../searchScreen/tagScreen/tagScreen';
import html from './landingScreen.html';
import './landingScreen.scss';

export const landingScreen = () => {
    document.body.innerHTML = html;
    const title = document.getElementById('title') as HTMLElement;
    const button = document.getElementById('start') as HTMLButtonElement;

    button.addEventListener('click', () => {
        tagScreen();
    })

    button.disabled = true;
    setTimeout( () => {
        title.className = 'underlined';
        button.disabled = false;
    }, 300)
}
