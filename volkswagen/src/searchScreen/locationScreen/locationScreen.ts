import { toolbar, toolbarInit } from '../../components/toolbar/toolbar';
import { sortScreen } from '../sortScreen/sortScreen';
import { tagScreen } from '../tagScreen/tagScreen';
import html from './locationScreen.html';
import './locationScreen.scss';

export const locationScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();

    const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
    nextButton.addEventListener('click', () => {
        const url = new URL(window.location.toString());
        url.searchParams.set('p', 'sort');
        window.history.pushState({}, '', url.toString());
        sortScreen();
    })
    nextButton.disabled = true;

    const backButton = document.getElementById('backButton') as HTMLButtonElement;
    backButton.addEventListener('click', () => {
        const url = new URL(window.location.toString());
        url.searchParams.set('p', 'tags');
        window.history.pushState({}, '', url.toString());
        tagScreen();
    })

    const text = document.getElementById('text')!
    navigator.geolocation?.getCurrentPosition( (position) => {
        text.innerText = "Lat: " + position.coords.latitude + " \nLong: " + position.coords.longitude;
        sessionStorage.setItem('location', JSON.stringify(position))
        nextButton.disabled = false;
    })
}