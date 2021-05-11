import html from './toolbar.html';
import './toolbar.scss';

import settingsImage from './settings.png'
import settingsSelectImage from './settings-select.png'
import searchImage from './search.png'
import searchSelectImage from './search-select.png'
import deliveriesImage from './deliveries.png'
import deliveriesSelectImage from './deliveries-select.png'
import { removeEventlistenersOnId } from '../../utils';

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
    const params = new URLSearchParams(window.location.search);

    removeEventlistenersOnId('settingsToolbar')
    removeEventlistenersOnId('searchToolbar')
    removeEventlistenersOnId('deliveriesToolbar')

    document.getElementById('settingsToolbar')?.addEventListener('click', () => {
        params.set('p', 'settings')

        window.location.search = params.toString();
    })
    document.getElementById('searchToolbar')?.addEventListener('click', () => {
        params.set('p', 'list')

        window.location.search = params.toString();

    })
    document.getElementById('deliveriesToolbar')?.addEventListener('click', () => {
        params.set('p', 'deliveries')

        window.location.search = params.toString();
    })
}