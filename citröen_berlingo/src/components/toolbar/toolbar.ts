import html from './toolbar.html';
import './toolbar.scss';

import { listScreen } from '../../listScreen/listScreen';
import { settingsScreen } from '../../settingsScreen/settingsScreen';

import settingsImage from './settings.png'
import settingsSelectImage from './settings-select.png'
import searchImage from './search.png'
import searchSelectImage from './search-select.png'
import deliveryImage from './delivery.png'
import deliverySelectImage from './delivery-select.png'

export const toolbar = () => {
    let returnHtml = html;
    returnHtml = returnHtml.replace(/{{settingsImage}}/g, settingsImage)
    .replace(/{{settingsSelectImage}}/g, settingsSelectImage)
    .replace(/{{searchImage}}/g, searchImage)
    .replace(/{{searchSelectImage}}/g, searchSelectImage)
    .replace(/{{deliveryImage}}/g, deliveryImage)
    .replace(/{{deliverySelectImage}}/g, deliverySelectImage);

    return returnHtml;
}

export const toolbarInit = () => {
    document.getElementById('settingsToolbar')?.addEventListener('click', () => {
        settingsScreen();
    })
    document.getElementById('searchToolbar')?.addEventListener('click', () => {
        listScreen();
    })
    document.getElementById('deliveryToolbar')?.addEventListener('click', () => {
        
    })
}