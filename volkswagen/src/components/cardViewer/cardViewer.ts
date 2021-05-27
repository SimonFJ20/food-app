import html from './cardViewer.html';
import './cardViewer.scss';

export const cardViewer = (title: string, description: string, imageSrc: string, imageAlt: string, price: number, links: string[]) => {
    let rhtml = html;
    rhtml = rhtml.replace(/{{cardTitle}}/g, title);
    rhtml = rhtml.replace(/{{cardDescription}}/g, description);
    rhtml = rhtml.replace(/{{imageSrc}}/g, imageSrc);
    rhtml = rhtml.replace(/{{imageAlt}}/g, imageAlt);
    rhtml = rhtml.replace(/{{cardPrice}}/g, price.toString());
    rhtml = rhtml.replace(/{{cardLinks}}/g, (): string => {
        let out = '';
        links.forEach(link => out += `<a href="${link}" target="blank">${link}</a><br>`)
        return out

    });
    return rhtml;
}
