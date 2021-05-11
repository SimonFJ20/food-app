import html from './toolbar.html';
import './toolbar.scss';

import settingsImage from './settings.png'
import settingsSelectImage from './settings-select.png'
import searchImage from './search.png'
import searchSelectImage from './search-select.png'
import deliveriesImage from './deliveries.png'
import deliveriesSelectImage from './deliveries-select.png'
import { removeEventlistenersOnId } from '../../utils';
import { listScreen } from '../../listScreen/listScreen';
import { settingsScreen } from '../../settingsScreen/settingsScreen';
import { deliveriesScreen } from '../../deliveriesScreen/deliveriesScreen';

export const toolbar = () => {
    let returnHtml = html;

    const params = new URLSearchParams(window.location.search);

    if(params.has('p')) {
        const page = params.get('p');
        
        switch(page) {
            case 'list':
                returnHtml = returnHtml.replace(/{{searchImage}}/g, '{{searchSelectImage}}')
                break;
            case 'settings':
                returnHtml = returnHtml.replace(/{{settingsImage}}/g, '{{settingsSelectImage}}')
                break;
            case 'deliveries':
                returnHtml = returnHtml.replace(/{{deliveriesImage}}/g, '{{deliveriesSelectImage}}')
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
    .replace(/{{deliveriesImage}}/g, deliveriesImage)
    .replace(/{{deliveriesSelectImage}}/g, deliveriesSelectImage);

    return returnHtml;
}

export const toolbarInit = () => {
    const url = new URL(window.location.toString());

    removeEventlistenersOnId('settingsToolbar')
    removeEventlistenersOnId('searchToolbar')
    removeEventlistenersOnId('deliveriesToolbar')

    document.getElementById('settingsToolbar')?.addEventListener('click', () => {
        url.searchParams.set('p', 'settings');
        window.history.pushState({}, '', url.toString());
        settingsScreen();
    })
    document.getElementById('searchToolbar')?.addEventListener('click', () => {
        url.searchParams.set('p', 'list');
        window.history.pushState({}, '', url.toString());
        listScreen();
    })
    document.getElementById('deliveriesToolbar')?.addEventListener('click', () => {
        url.searchParams.set('p', 'deliveries');
        window.history.pushState({}, '', url.toString());
        deliveriesScreen();
    })
}