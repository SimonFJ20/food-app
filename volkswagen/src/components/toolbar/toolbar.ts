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

    const params = new URLSearchParams(window.location.search);

    if(params.has('p')) {
        const page = params.get('p');
        
        switch(page) {
            case 'settings':
                returnHtml = returnHtml.replace(/{{settingsImage}}/g, '{{settingsSelectImage}}')
                break;
            case 'list':
                returnHtml = returnHtml.replace(/{{listImage}}/g, '{{listSelectImage}}')
                break;    
            default:
                returnHtml = returnHtml.replace(/{{searchImage}}/g, '{{searchSelectImage}}')
                break;
        }
    } else {
        returnHtml = returnHtml.replace(/{{searchImage}}/g, '{{searchSelectImage}}')
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
    const url = new URL(window.location.toString());

    removeEventlistenersOnId('settingsToolbar')
    removeEventlistenersOnId('searchToolbar')
    removeEventlistenersOnId('listToolbar')

    document.getElementById('settingsToolbar')?.addEventListener('click', () => {
        url.searchParams.set('p', 'settings');
        window.history.pushState({}, '', url.toString());
        settingsScreen();
    })
    document.getElementById('searchToolbar')?.addEventListener('click', () => {
        url.searchParams.set('p', 'tags');
        window.history.pushState({}, '', url.toString());
        tagScreen();
    })
    document.getElementById('listToolbar')?.addEventListener('click', () => {
        if (sessionStorage.getItem('tags') && sessionStorage.getItem('location') && sessionStorage.getItem('sort')) {
            url.searchParams.set('p', 'list');
            window.history.pushState({}, '', url.toString());
            listScreen();
        } else {
            url.searchParams.set('p', 'tags');
            window.history.pushState({}, '', url.toString());
            tagScreen();
        }
    })
}