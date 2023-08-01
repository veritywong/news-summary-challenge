const NewsModel = require('./NewsModel');
const NewsView = require('./NewsView');
const NewsClient = require('./NewsClient');

const model = new NewsModel();
const client = new NewsClient();

const view = new NewsView(model, client);

view.loadNewsFromApi();