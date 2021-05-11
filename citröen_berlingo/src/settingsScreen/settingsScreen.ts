import { toolbar, toolbarInit } from '../components/toolbar/toolbar';
import html from './settingsScreen.html';
import './settingsScreen.scss';

export const settingsScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();
}
