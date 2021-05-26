import { toolbar, toolbarInit } from '../../components/toolbar/toolbar';
import { hostname } from '../../utils';
import { locationScreen } from '../locationScreen/locationScreen';
import html from './tagScreen.html';
import './tagScreen.scss';

let tagContainer: HTMLDivElement;
let selectedTagsElement: HTMLElement;

let selectedTags: string[] = JSON.parse(sessionStorage.getItem('selectedTags') || '[]');

export const tagScreen = async () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();

    // tag stuff

    const tagSearch = document.getElementById('tagSearch') as HTMLInputElement;
    tagContainer = document.getElementById('tagContainer') as HTMLDivElement;
    selectedTagsElement = document.getElementById('tagsSelected') as HTMLElement;

    selectedTagsElement.innerText = "Tags valgt: " + selectedTags.toString().replace(/\,/g, ', ');
    if (selectedTagsElement.innerText === 'Tags valgt:') selectedTagsElement.innerText += ' Ingen';

    // tag initial get

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const fetched = await (await fetch(hostname + '/api/gettags', {headers: headers, body: JSON.stringify({search: tagSearch.value}), method: 'POST'})).json();

    const tags = [];
    for(let i in fetched.tags) tags.push(fetched.tags[i].title);

    generateTagButtons(tags)

    // next button

    const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
    nextButton.addEventListener('click', () => {
        const url = new URL(window.location.toString());
        url.searchParams.set('p', 'location');
        window.history.pushState({}, '', url.toString());
        locationScreen();
    })

    //search handling

    tagSearch.addEventListener('input', async () => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
    
        const fetched = await (await fetch(hostname + '/api/gettags', {headers: headers, body: JSON.stringify({search: tagSearch.value}), method: 'POST'})).json();
    
        const tags = [];
        for(let i in selectedTags) tags.push(selectedTags[i]);

        for(let i in fetched.tags) if (tags.findIndex( tag => tag === fetched.tags[i].title) === -1 ) tags.push(fetched.tags[i].title);
    
        generateTagButtons(tags)    
    })

}

const tagClickHandler = (button: HTMLButtonElement) => {
    button.addEventListener('click', () => {
        if (button.className === 'selected') {
            button.className = '';
            selectedTags = selectedTags.filter( id => id !== button.id.slice(5));
        } else {
            button.className = 'selected';
            selectedTags.push(button.id.slice(5))
        }
        selectedTagsElement.innerText = "Tags valgt: " + selectedTags.toString().replace(/\,/g, ', ');
        if (selectedTagsElement.innerText === 'Tags valgt:') selectedTagsElement.innerText += ' Ingen';

        sessionStorage.setItem('selectedTags', JSON.stringify(selectedTags));
    })
}

const generateTagButtons = (tagsList: string[]) => {
    tagContainer.innerHTML = '';
    tagsList.forEach( (tag) => {
        let tagElement = document.createElement('button') as HTMLButtonElement;
        tagElement.id = "tag--" + tag;
        tagElement.innerText = tag;
        
        if (selectedTags.findIndex(selectedTag => selectedTag === tag) !== -1) tagElement.className = "selected";
        
        tagContainer.appendChild(tagElement);
        tagClickHandler(tagElement);
    })
}