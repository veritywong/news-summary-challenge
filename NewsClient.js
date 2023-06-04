class NewsClient {
    
    loadNews(callback) {
        return fetch('https://content.guardianapis.com/search?api-key=b89bcfdc-3145-4bd0-a3da-76d956fcce0d')
        .then(response => response.json())
        .then(data => {
          const newsInfo = data.response.results; // returns an array of article objects
          callback(newsInfo)
        });
    }

}


module.exports = NewsClient;