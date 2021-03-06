export default class ApiService {
  constructor(
    $http,
    $rootScope,
    Upload
  ) {
    'ngInject'
    this.BASE_PATH = process.env.BASE_PATH;
    this.NETLIFY_DEPLOY_ENDPOINT = process.env.NETLIFY_DEPLOY_ENDPOINT

    this.$http = $http;
    this.$rootScope = $rootScope;
    this.Upload = Upload;

    if (!this.$rootScope.rvm) {
      this.$rootScope.rvm = {};
    }
  }

  travelsList() {
    return this.$http.get(this.BASE_PATH + 'api/travels');
  }

  travelDetail(id) {
    return this.$http.get(this.BASE_PATH + 'api/travels/' + id);
  }

  travelArticles(id) {
    return this.$http.get(this.BASE_PATH + 'api/travels/' + id + '/articles')
  }

  travelCreate(travel) {
    return this.$http.post(this.BASE_PATH + 'api/travels', travel)
  }

  travelUpdate(travel, id) {
    return this.$http.put(this.BASE_PATH + 'api/travels/' + id, travel)
  }

  travelPublish(travel, id) {
    return this.$http.post(this.BASE_PATH + 'api/travels/published/' + id, travel)
  }

  travelUnpublish(id) {
    return this.$http.delete(this.BASE_PATH + 'api/travels/published/' + id)
  }

  travelDelete(id) {
    return this.$http.delete(this.BASE_PATH + 'api/travels/' + id);
  }

  articlesList() {
    return this.$http.get(this.BASE_PATH + 'api/articles');
  }

  articleCreate(article) {
    return this.$http.post(this.BASE_PATH + 'api/articles', article);
  }

  articleDetail(id) {
    return this.$http.get(this.BASE_PATH + 'api/articles/' + id);
  }

  articleUpdate(article, id){
    return this.$http.put(this.BASE_PATH + 'api/articles/' + id, article);
  }

  articlePublish(id, article){
    return this.$http.post(this.BASE_PATH + 'api/articles/published/' + id, article);
  }

  articleUnpublish(id){
    return this.$http.delete(this.BASE_PATH + 'api/articles/published/' + id);
  }

  articleDelete(id) {
    return this.$http.delete(this.BASE_PATH + 'api/articles/' + id);  
  }

  assetsUpload(assets, data) {
    return this.Upload.upload({
      method: 'POST',
      url: this.BASE_PATH + 'api/assets', //webAPI exposed to upload the file
      data:{file:assets, infos: data} //pass file as data, should be user ng-model
    })
  }

  assetsList() {
    return this.$http.get(this.BASE_PATH + 'api/assets');  
  }

  assetsDelete(ids, names) {
    return this.$http.post(this.BASE_PATH + 'api/assets/delete', {ids: ids, names: names}); 
  }

  assetUpdate(asset, id) {
    return this.$http.put(this.BASE_PATH + 'api/assets/' + id, asset);
  }

  settings() {
    return this.$http.get(this.BASE_PATH + 'api/settings')
  }

  updateSettings(settings) {
    return this.$http.put(this.BASE_PATH + 'api/settings', settings);
  }

  anecdotesList() {
    return this.$http.get(this.BASE_PATH + 'api/anecdotes');
  }

  anecdoteDetail(id) {
    return this.$http.get(this.BASE_PATH + 'api/anecdotes/' + id);
  }

  anecdoteCreate(anecdote) {
    return this.$http.post(this.BASE_PATH + 'api/anecdotes', {anecdote})
  }

  anecdoteUpdate(anecdote, id) {
    return this.$http.put(this.BASE_PATH + 'api/anecdotes/' + id, anecdote)
  }

  categoryDelete(id) {
    return this.$http.delete(this.BASE_PATH + 'api/categories/' + id)
  }

  categoriesList() {
    return this.$http.get(this.BASE_PATH + 'api/categories');
  }

  categoryDetail(id) {
    return this.$http.get(this.BASE_PATH + 'api/categories/' + id);
  }

  categoryCreate(category) {
    return this.$http.post(this.BASE_PATH + 'api/categories', {category})
  }

  categoryUpdate(category, id) {
    return this.$http.put(this.BASE_PATH + 'api/categories/' + id, category)
  }

  categoryDelete(id) {
    return this.$http.delete(this.BASE_PATH + 'api/categories/' + id)
  }

  siteDeploy() {
    return this.$http.post(this.NETLIFY_DEPLOY_ENDPOINT)
  }
}
