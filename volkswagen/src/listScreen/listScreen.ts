import { cardViewer } from '../components/cardViewer/cardViewer';
import { toolbar, toolbarInit } from '../components/toolbar/toolbar';
import { hostname } from '../utils';
import html from './listScreen.html';
import './listScreen.scss';
import vodkaImage from './vodka.jpg';

const addCardViewerRemover = () => {
    document.getElementById('CardViewer')!.addEventListener('click', (e) => {
        document.getElementById('CardViewer')!.remove();
        addCards();
        toolbarInit();
    });
}

const addCards = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const tags = JSON.parse(sessionStorage.getItem('tags') || '[]')
    const locationArray = JSON.parse(sessionStorage.getItem('location') || '[0,0]');
    const location = {latitude: locationArray[0], longitude: locationArray[1]}

    fetch(hostname + '/api/getfood', {headers: headers, body: JSON.stringify({tags: tags, location: location}), method: 'POST'})
        .then( response => response.json() )
        .then( data => console.log(data) )


    document.querySelectorAll('.card').forEach(card => card.addEventListener('click', () => {
        document.body.innerHTML += cardViewer('hej', 'med dig', vodkaImage, 'vodka');
        addCardViewerRemover();
    }));
}

export const listScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();

    addCards();
}
