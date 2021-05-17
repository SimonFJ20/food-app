import { toolbar, toolbarInit } from '../../components/toolbar/toolbar';
import html from './sortScreen.html';
import './sortScreen.scss';

export const sortScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();
}