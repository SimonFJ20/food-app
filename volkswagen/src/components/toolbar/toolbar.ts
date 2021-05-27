import html from './toolbar.html';
import './toolbar.scss';

import settingsImage from './settings.png'
import settingsSelectImage from './settings-select.png'
import searchImage from './search.png'
import searchSelectImage from './search-select.png'
import listImage from './list.png'
import listSelectImage from './list-select.png'
import { removeEventlistenersOnId } from '../../utils';
import { listScreen } from '../../listScreen/listScreen';
import { settingsScreen } from '../../settingsScreen/settingsScreen';
import { tagScreen } from '../../searchScreen/tagScreen/tagScreen';

export const toolbar = () => {
    let returnHtml = html;

    if (sessionStorage.getItem('page') === 'settings') {
        returnHtml = returnHtml.replace('{{settingsImage}}', '{{settingsSelectImage}}')
    } else if (sessionStorage.getItem('page') === 'list') {
        returnHtml = returnHtml.replace('{{listImage}}', '{{listSelectImage}}')
    } else {
        returnHtml = returnHtml.replace('{{searchImage}}', '{{searchSelectImage}}')
    }

    returnHtml = returnHtml.replace(/{{settingsImage}}/g, settingsImage)
    .replace(/{{settingsSelectImage}}/g, settingsSelectImage)
    .replace(/{{searchImage}}/g, searchImage)
    .replace(/{{searchSelectImage}}/g, searchSelectImage)
    .replace(/{{listImage}}/g, listImage)
    .replace(/{{listSelectImage}}/g, listSelectImage);

    return returnHtml;
}

export const toolbarInit = () => {
    removeEventlistenersOnId('settingsToolbar')
    removeEventlistenersOnId('searchToolbar')
    removeEventlistenersOnId('listToolbar')

    document.getElementById('settingsToolbar')?.addEventListener('click', () => {
        sessionStorage.setItem('page', 'settings')
        settingsScreen();
    })
    document.getElementById('searchToolbar')?.addEventListener('click', () => {
        sessionStorage.setItem('page', 'search')
        tagScreen();
    })
    document.getElementById('listToolbar')?.addEventListener('click', () => {
        if (sessionStorage.getItem('tags') && sessionStorage.getItem('location') && sessionStorage.getItem('sort')) {
            sessionStorage.setItem('page', 'list')
            listScreen();
        } else {
            tagScreen();
        }
    })
}