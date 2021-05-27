import html from './cardViewer.html';
import './cardViewer.scss';

export const cardViewer = (title: string, description: string, imageSrc: string, imageAlt: string, price: number) => {
    let rhtml = html;
    rhtml = rhtml.replace(/{{cardTitle}}/g, title);
    rhtml = rhtml.replace(/{{cardDescription}}/g, description);
    rhtml = rhtml.replace(/{{imageSrc}}/g, imageSrc);
    rhtml = rhtml.replace(/{{imageAlt}}/g, imageAlt);
    rhtml = rhtml.replace(/{{cardPrice}}/g, price.toString());
    return rhtml;
}
