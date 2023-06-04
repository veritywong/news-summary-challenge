const NewsClient = require('./NewsClient');
require('jest-fetch-mock').enableFetchMocks()

describe('NewsClient', () => {
    it('fetches news stories', () => {
        const client = new NewsClient();

        fetch.mockResponseOnce(JSON.stringify({
            response: { results: [ {
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
            }]}
           
        }));
    

        client.loadNews((returnedData) => {
            expect(returnedData[0].pillarName).toBe('Arts');
        });
    })
});

