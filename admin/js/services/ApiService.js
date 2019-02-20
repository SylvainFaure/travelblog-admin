export default class ApiService {
 constructor(
   $http,
   $rootScope,
   Upload
 ) {
  'ngInject'
  this.BASE_PATH = process.env.BASE_PATH;

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
  return this.$http.post(this.BASE_PATH + 'api/articles/publish/' + id, {article});
 }

 articleUnpublish(id){
  return this.$http.delete(this.BASE_PATH + 'api/articles/unpublish/' + id);
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
  return this.$http.post(this.BASE_PATH + 'api/delete-assets', {ids: ids, names: names}); 
 }

 assetUpdate (asset, id) {
  return this.$http.put(this.BASE_PATH + 'api/assets/' + id, asset);
 }
}