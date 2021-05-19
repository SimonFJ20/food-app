import { toolbar, toolbarInit } from '../../components/toolbar/toolbar';
import { listScreen } from '../../listScreen/listScreen';
import html from './sortScreen.html';
import './sortScreen.scss';

const buttonClickHandler = (button: HTMLDivElement) => {
    document.querySelectorAll('div.option').forEach((div) => {
        div.className = 'option';
    });
    button.className = 'option active';
    setTimeout(() => {
        listScreen();
    }, 500);
}

const setButtonEventHandlers = () => {
    document.querySelectorAll('div.option').forEach((div) => {
        div.addEventListener('click', () => buttonClickHandler(div as HTMLDivElement));
    });
}

export const sortScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();
    setButtonEventHandlers();
}