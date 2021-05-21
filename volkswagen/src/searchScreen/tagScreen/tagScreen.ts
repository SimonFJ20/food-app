import { toolbar, toolbarInit } from '../../components/toolbar/toolbar';
import { locationScreen } from '../locationScreen/locationScreen';
import html from './tagScreen.html';
import './tagScreen.scss';

let tagContainer: HTMLDivElement;
let selectedTagsElement: HTMLElement;

let selectedTags: string[] = JSON.parse(sessionStorage.getItem('selectedTags') || '[]');

export const tagScreen = () => {
    document.body.innerHTML = html;
    document.body.innerHTML += toolbar();
    toolbarInit();

    // tag stuff

    tagContainer = document.getElementById('tagContainer') as HTMLDivElement;
    selectedTagsElement = document.getElementById('tagsSelected') as HTMLElement;

    selectedTagsElement.innerText = "Tags valgt: " + selectedTags.toString().replace(/\,/g, ', ');
    if (selectedTagsElement.innerText === 'Tags valgt:') selectedTagsElement.innerText += ' Ingen';

    generateTagButtons(['tag'])

    // next button

    let nextButton = document.getElementById('nextButton') as HTMLButtonElement;
    nextButton.addEventListener('click', () => {
        const url = new URL(window.location.toString());
        url.searchParams.set('p', 'location');
        window.history.pushState({}, '', url.toString());
        locationScreen();
    })
}

const tagClickHandler = (button: HTMLButtonElement) => {
    button.addEventListener('click', () => {
        if (button.className == 'selected') {
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
    tagsList.forEach( (tag) => {
        let tagElement = document.createElement('button') as HTMLButtonElement;
        tagElement.id = "tag--" + tag;
        tagElement.innerText = tag;
        
        if (selectedTags.findIndex(selectedTag => selectedTag === tag) !== -1) tagElement.className = "selected";
        
        tagContainer.appendChild(tagElement);
        tagClickHandler(tagElement);
    })
}