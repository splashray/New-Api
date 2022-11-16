const {NewsArticle} = require("../models/newsArticle");

exports.postAddNewsArticle = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const details = req.body.details;
  const date = req.body.date;
  const newsArticle = new NewsArticle({
    title: title,
    details: details,
    date: date,
    imageUrl: imageUrl
  });
  newsArticle
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created News');
      // res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getNewsArticle = (req, res, next) => {
  NewsArticle.find()
  .then(newsArticles => {
    res.status(200).json({
      news: newsArticles
    })
  })
  .catch(err => {
    console.log(err)
  })
};

exports.getOneNewsArticle = (req, res, next) => {
  const articleId = req.params.newsArticleId;
  NewsArticle.findByID(articleId)
  .then(newsArticle => {
    res.status(200).json({
      oneArticle: newsArticle
    })
  })
}