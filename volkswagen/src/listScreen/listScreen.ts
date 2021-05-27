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

const sortRelevance = (foodList: any, selectedTags: string[]): any => {
    let newFoodList = foodList;
    let previousScore = -500;
    let didReplace = false;

    newFoodList.forEach((food: any, index: number) => {
        if (index > 0) {
            let currentScore = 0;
            food.tags.forEach((tag: string) => {
                if (selectedTags.findIndex( (currentTag: string) => currentTag == tag) !== -1) {
                    currentScore += 2;
                }
            });
            currentScore -= food.tags.length;
    
            if (currentScore < previousScore) {
                const previous = newFoodList[index-1];
                const current = newFoodList[index];
                newFoodList[index-1] = current;
                newFoodList[index] = previous;
                didReplace = true;
            }
            previousScore = currentScore;    
        }
    });

    if (didReplace)
        return sortRelevance(newFoodList, selectedTags);
    else 
        return newFoodList;
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

    if (tags.length !== 0)
        fetched.foods = sortRelevance(fetched.foods, tags);

    console.log(fetched.foods)

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
        document.getElementById(ids[i])!.addEventListener('click', async () => {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const restaurant = await (await fetch(hostname + '/api/getrestaurant', { headers: headers, body: JSON.stringify({ name: fetched.foods[i].restaurant }), method: 'POST' })).json()
            document.body.innerHTML += cardViewer(fetched.foods[i].name, fetched.foods[i].description, fetched.foods[i].image, fetched.foods[i].name, fetched.foods[i].price, restaurant.restaurant.external_links);
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
