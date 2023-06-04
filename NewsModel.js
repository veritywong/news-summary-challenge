class NewsModel {
    constructor() {
        this.news = [];
    }

    getNews() {
        return this.news;
    }

    setNews(fetchedNews) {
        this.news = fetchedNews;
    }
}

module.exports = NewsModel;