import { toolbar, toolbarInit } from '../../components/toolbar/toolbar';
import { listScreen } from '../../listScreen/listScreen';
import { locationScreen } from '../locationScreen/locationScreen';
import html from './sortScreen.html';
import './sortScreen.scss';

const buttonClickHandler = (button: HTMLDivElement) => {
    document.querySelectorAll('div.option').forEach((div) => {
        div.className = 'option';
    });
    button.className = 'option selected';
    sessionStorage.setItem('sortBy', button.id);
}

const setButtonEventHandlers = () => {
    const storageSortBy = sessionStorage.getItem('sortBy') || 'relevant'
    document.querySelectorAll('div.option').forEach((div) => {
        div.addEventListener('click', () => buttonClickHandler(div as HTMLDivElement));
        if (storageSortBy === div.id) div.className = 'option selected';
    });

    const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
    nextButton.addEventListener('click', () => {
        const url = new URL(window.location.toString());
        url.searchParams.set('p', 'list');
        window.history.pushState({}, '', url.toString());
        listScreen();
    })

    const backButton = document.getElementById('backButton') as HTMLButtonElement;
    backButton.addEventListener('click', () => {
        const url = new URL(window.location.toString());
        url.searchParams.set('p', 'location');
        window.history.pushState({}, '', url.toString());
        locationScreen();
    })

}

export const sortScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();
    setButtonEventHandlers();
}