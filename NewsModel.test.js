NewsModel = require('./NewsModel');

describe('NewsModel', () => {
    let model

    beforeEach(() => {
        model = new NewsModel();
    })

    it('get news returns an empty array', () => {
        expect(model.getNews()).toEqual([])
    })

    it('sets news using setNews function', () => {
        const fetchedNews = [{id: 'article1'}, {id: 'article2'}, {id: 'article3'}];
        model.setNews(fetchedNews);

        expect(model.getNews()).toEqual([{id: 'article1'}, {id: 'article2'}, {id: 'article3'}])

        
    })
})