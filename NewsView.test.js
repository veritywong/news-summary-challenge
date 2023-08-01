/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NewsView = require('./NewsView');
const NewsModel = require('./NewsModel');
const NewsClient = require('./NewsClient');

jest.mock('./NewsClient');
// jest.mock('./NewsModel');


describe('NotesView', () => {
    let model;
    let client;
    let view;
  
    beforeEach(() => {
      // line below this comment has to go before others!
      // Otherwise you can't put elements in the constructor methods
      document.body.innerHTML = fs.readFileSync('./index.html');
      model = new NewsModel();
      client = new NewsClient();
      view = new NewsView(model, client);
      NewsClient.mockClear();
    });

    it('constructs', () => {
        expect(view).toBeTruthy();
        expect(view).toHaveProperty('model', model);
        expect(view).toHaveProperty('client', client);
      });

    it('shows list of news articles from API', () => {
        const mockData = [ {
            apiUrl: "https://content.guardianapis.com/tv-and-radio/2023/jun/04/gods-of-tennis-review-a-hefty-tale-of-the-epic-battles-that-rocked-tennis",
            id: "tv-and-radio/2023/jun/04/gods-of-tennis-review-a-hefty-tale-of-the-epic-battles-that-rocked-tennis",
            isHosted: false,
            pillarId: "pillar/arts",
            pillarName: "Arts",
            sectionId: "tv-and-radio",
            sectionName: "Television & radio",
            type: "article",
            webPublicationDate: "2023-06-04T21:00:09Z",
            webTitle: "Gods of Tennis review – a hefty tale of the epic battles that rocked tennis ",
            webUrl: "https://www.theguardian.com/tv-and-radio/2023/jun/04/gods-of-tennis-rev"
        }];
         // this replaces loadNotes with a new function that takes a callback
        // and returns a promise that is using the mockData in the
        // callback. So it's very similar to the real loadNotes, but it
        // skips the fetch to make the test deterministic.
        client.loadNews.mockImplementation((callback) => {
            return Promise.resolve(callback(mockData));
        });
    
        return view.loadNewsFromApi()
            .then(() => {
                const articles = document.querySelectorAll('div.article');
                expect(articles.length).toBe(1);
                expect(articles.item(0).textContent).toBe('Gods of Tennis review – a hefty tale of the epic battles that rocked tennis ');

        })
    })

})