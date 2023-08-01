class NewsView {
    constructor(model, client) {
        this.model = model;
        this.client = client;
        this.mainContainerEl = document.querySelector('#main-container');
    }

    loadNewsFromApi() {
         return this.client.loadNews((apiData) => {
            this.model.setNews(apiData);
            this.displayNews()
        }, (callback) => {
            callback(this.displayError())
        });
    }

    displayNews() {
        const articles = this.model.getNews();
        articles.forEach((article) => {
            const newArticle = document.createElement('div');
            newArticle.className = 'article';
            newArticle.textContent = article.webTitle;
            this.mainContainerEl.append(newArticle);
        })
    }
}

module.exports = NewsView;