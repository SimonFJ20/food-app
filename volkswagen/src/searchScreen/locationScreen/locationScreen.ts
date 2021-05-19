import { toolbar, toolbarInit } from '../../components/toolbar/toolbar';
import html from './locationScreen.html';
import './locationScreen.scss';

export const locationScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();

    const text = document.getElementById('text')!
    navigator.geolocation?.getCurrentPosition( (position) => {
        text.innerText = "Lat: " + position.coords.latitude + " \nLong: " + position.coords.longitude;
    })
}