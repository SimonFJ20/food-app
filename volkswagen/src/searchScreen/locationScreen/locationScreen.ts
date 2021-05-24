import { toolbar, toolbarInit } from '../../components/toolbar/toolbar';
import { sortScreen } from '../sortScreen/sortScreen';
import { tagScreen } from '../tagScreen/tagScreen';
import html from './locationScreen.html';
import './locationScreen.scss';

export const locationScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();

    const text = document.getElementById('text') as HTMLElement;
    const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
    const backButton = document.getElementById('backButton') as HTMLButtonElement;
    const geoButton = document.getElementById('geolocation') as HTMLElement;

    nextButton.disabled = true;

    if (sessionStorage.getItem('location')) {
        const savedPosition = JSON.parse(sessionStorage.getItem('location')!)
        text.innerText = "Vi havde planer for selvvalgte lokationer men det havde vi " +
        "småproblemer med, så pt fungerer den ekslusivt gennem geolokation." + 
        "\nLat: " + savedPosition[0] + " \nLong: " + savedPosition[1];

        nextButton.disabled = false;
    }

    nextButton.addEventListener('click', () => {
        const url = new URL(window.location.toString());
        url.searchParams.set('p', 'sort');
        window.history.pushState({}, '', url.toString());
        sortScreen();
    })

    backButton.addEventListener('click', () => {
        const url = new URL(window.location.toString());
        url.searchParams.set('p', 'tags');
        window.history.pushState({}, '', url.toString());
        tagScreen();
    })

    geoButton.addEventListener('click', () => {
        navigator.geolocation?.getCurrentPosition( (position) => {
            text.innerText = "Vi havde planer for selvvalgte lokationer men det havde vi " +
            "småproblemer med, så pt fungerer den ekslusivt gennem geolokation." + 
            "\nLat: " + position.coords.latitude + " \nLong: " + position.coords.longitude;
            sessionStorage.setItem('location', JSON.stringify([position.coords.latitude, position.coords.longitude]));
            nextButton.disabled = false;
        })
    
    })
}