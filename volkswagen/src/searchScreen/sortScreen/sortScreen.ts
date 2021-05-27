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
    sessionStorage.setItem('sort', button.id);
}

const setButtonEventHandlers = () => {
    const storageSortBy = sessionStorage.getItem('sort') || 'relevant'
    document.querySelectorAll('div.option').forEach((div) => {
        div.addEventListener('click', () => buttonClickHandler(div as HTMLDivElement));
        if (storageSortBy === div.id) div.className = 'option selected';
    });

    const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
    nextButton.addEventListener('click', () => {
        listScreen();
    })

    const backButton = document.getElementById('backButton') as HTMLButtonElement;
    backButton.addEventListener('click', () => {
        locationScreen();
    })

}

export const sortScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();
    setButtonEventHandlers();
}