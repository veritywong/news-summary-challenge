const apiKey = require('./apiKey')

class NewsClient {
    
    loadNews(callback) {
        return fetch(`https://content.guardianapis.com/search?api-key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const newsInfo = data.response.results; // returns an array of article objects
          callback(newsInfo)
        });
    }

}


module.exports = NewsClient;