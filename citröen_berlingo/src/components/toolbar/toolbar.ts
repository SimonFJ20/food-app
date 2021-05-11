import html from './toolbar.html';
import './toolbar.scss';

import settingsImage from './settings.png'
import settingsSelectImage from './settings-select.png'
import searchImage from './search.png'
import searchSelectImage from './search-select.png'
import deliveryImage from './delivery.png'
import deliverySelectImage from './delivery-select.png'

export const toolbar = () => {
    let returnHtml = html;
    returnHtml = returnHtml.replace(/{{settingsImage}}/g, settingsImage)
    returnHtml = returnHtml.replace(/{{settingsSelectImage}}/g, settingsSelectImage)
    returnHtml = returnHtml.replace(/{{searchImage}}/g, searchImage)
    returnHtml = returnHtml.replace(/{{searchSelectImage}}/g, searchSelectImage)
    returnHtml = returnHtml.replace(/{{deliveryImage}}/g, deliveryImage)
    returnHtml = returnHtml.replace(/{{deliverySelectImage}}/g, deliverySelectImage)    

    return returnHtml;
}
