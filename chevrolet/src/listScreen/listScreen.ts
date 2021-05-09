import { cardViewer } from '../components/cardViewer/cardViewer';
import { toolbar } from '../components/toolbar/toolbar';
import html from './listScreen.html';
import './listScreen.scss';
import vodkaImage from './vodka.jpg';

const addCardViewerRemover = () => {
    document.getElementById('CardViewer')!.addEventListener('click', (e) => {
        document.getElementById('CardViewer')!.remove();
        addCards();
    });
}

const addCards = () => {
    document.querySelectorAll('.card').forEach(card => card.addEventListener('click', () => {
        document.body.innerHTML += cardViewer('hej', 'med dig', vodkaImage, 'vodka');
        addCardViewerRemover();
    }));
}

export const listScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();

    addCards();
}
