

const NEWS_FEED_URL =  'https://www.biblegateway.com/votd/get/?format=atom';

const client = new XMLHttpRequest();


(function getXMLNewsFeeD() {
    client.addEventListener('load',  resp => {
        const verseOfTheDay = client.responseXML.querySelector('content').innerHTML;
        renderVerseOfTheDay(verseOfTheDay.slice(9,verseOfTheDay.length - 3));
    });

    client.open('GET', NEWS_FEED_URL);
    client.send();
})();


 async function renderVerseOfTheDay(verseOfTheDay) {
    document.querySelector('p[id="verseOfTheDay"]').innerHTML = verseOfTheDay;
 }