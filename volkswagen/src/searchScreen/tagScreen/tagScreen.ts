import { toolbar, toolbarInit } from '../../components/toolbar/toolbar';
import html from './tagScreen.html';
import './tagScreen.scss';

export const tagScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();
}
