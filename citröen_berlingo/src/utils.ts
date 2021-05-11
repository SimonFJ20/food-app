
export const removeEventlistenersOnId = (id: string) => {
    const oldElement = document.getElementById(id);
    if(!oldElement) return;
    const newElement = oldElement.cloneNode(true);
    oldElement.parentNode?.replaceChild(newElement, oldElement);
}
