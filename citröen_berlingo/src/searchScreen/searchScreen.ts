import { toolbar, toolbarInit } from '../components/toolbar/toolbar';
import html from './searchScreen.html';
import './searchScreen.scss';

export const searchScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();
}
