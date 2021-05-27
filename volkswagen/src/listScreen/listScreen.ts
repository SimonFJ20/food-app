import { cardViewer } from '../components/cardViewer/cardViewer';
import { toolbar, toolbarInit } from '../components/toolbar/toolbar';
import { generateId, hostname } from '../utils';
import html from './listScreen.html';
import './listScreen.scss';

const addCardViewerRemover = () => {
    document.getElementById('CardViewer')!.addEventListener('click', (e) => {
        document.getElementById('CardViewer')!.remove();
        addCards();
        toolbarInit();
    });
}

const getTags = (tags: any) => {
    let out = '';
    for(let i in tags) {
        out += /*html*/`<p>${tags[i]}</p>`
    }
    return out
}

const addCards = async () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const tags = JSON.parse(sessionStorage.getItem('tags') || '[]')
    const locationArray = JSON.parse(sessionStorage.getItem('location') || '[0,0]');
    const location = {latitude: locationArray[0], longitude: locationArray[1]}

    const fetched = await (await fetch(hostname + '/api/getfood', { headers: headers, body: JSON.stringify({ tags: tags, location: location }), method: 'POST' })).json();
    
    let newInnerHtml = '';

    const ids: string[] = [];

    fetched.foods.forEach((food: any) => {
        const id = generateId(16);
        ids.push(id);
        newInnerHtml += /*html*/`
            <div class="card" id="${id}">
                <img src="${food.image}" alt="${food.name}">
                <div class="content">
                    <h3>${food.name}</h3>
                    <p>${food.description}</p>
                    <div class="tags">
                        ${getTags(food.tags)}
                    </div>
                </div>
            </div>
        `
    });

    document.getElementById('cards')!.innerHTML = newInnerHtml;

    for(let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i])!.addEventListener('click', () => {
            document.body.innerHTML += cardViewer(fetched.foods[i].name, fetched.foods[i].description, fetched.foods[i].image, fetched.foods[i].name, fetched.foods[i].price, fetched.foods[i].links);
            addCardViewerRemover();
        })
    }

}

export const listScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();

    addCards();
}
