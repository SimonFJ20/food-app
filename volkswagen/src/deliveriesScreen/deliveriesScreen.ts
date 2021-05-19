import { cardViewer } from '../components/cardViewer/cardViewer';
import { toolbar, toolbarInit } from '../components/toolbar/toolbar';
import html from './deliveriesScreen.html';
import './deliveriesScreen.scss';
import vodkaImage from './vodka.jpg';

const addCardViewerRemover = () => {
    document.getElementById('CardViewer')!.addEventListener('click', (e) => {
        document.getElementById('CardViewer')!.remove();
        addCards();
        toolbarInit();
    });
}

const addCards = () => {
    document.querySelectorAll('.card').forEach(card => card.addEventListener('click', () => {
        document.body.innerHTML += cardViewer('hej', 'med dig', vodkaImage, 'vodka');
        addCardViewerRemover();
    }));
}

export const deliveriesScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();

    addCards();
}
