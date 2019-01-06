export default class ApiService {
  constructor(
    $http,
    $rootScope,
    $window
  ) {
   'ngInject'
   this.BASE_PATH = 'http://localhost:3000'
 
   this.$http = $http;
   this.$rootScope = $rootScope;
   this.$window = $window;
 
   if (window.location.hostname === "localhost" && window.location.port === "3000") {
     this.$rootScope.rvm.debug = true;
     this.$rootScope.rvm.fr = true;
     this.$rootScope.rvm.it = false;
   }
 
  }
 
  loginSignin (email, password) {
   return this.$http.post(this.BASE_PATH + '/api/user/signin', {email: email, password: password});
  }
 
  loginSendRequest (email) {
   return this.$http.post(this.BASE_PATH + '/api/user/sendrequest', {email: email});   
  }
 
  loginLogout (email) {
 
  }
 
  loginSignup (email, password) {
    return this.$http.post(this.BASE_PATH + '/api/user/signup', {email: email, password: password})
  }

  isAuthenticated () {
    let token = "token.token.token";
    let user = JSON.parse(this.$window.localStorage.getItem('user'));
    if (user) {
      token = user.token;
      return this.$http.post(this.BASE_PATH + '/api/user/verifytoken', {token: token})
    } else {
      return this.$http.post(this.BASE_PATH + '/api/user/verifytoken', {token: token})
    }
  }
 
 }
 