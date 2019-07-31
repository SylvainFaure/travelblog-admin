class HomeController {
  constructor(
    $rootScope, 
    $state,
    ArticlesList,
    TravelsList,
    AssetsList,
    Settings,
    ApiService,
    AuthService,
    toastr
  ) {
    'ngInject';
    this.articles = ArticlesList 
    this.travels = TravelsList
    this.assets = AssetsList
    this.settings = Settings
    this.AuthService = AuthService;
    this.ApiService = ApiService
    console.log('HomeController')
    this.rvm = $rootScope.rvm;
    this.$rootScope = $rootScope
    this.$state = $state
    this.toastr = toastr

    this.AWS_BUCKET_PATH = process.env.AWS_BUCKET_PATH

    this.cover = this.getCover()

    this.isLogged = $rootScope.rvm.isLogged;
    $('.settings .image').dimmer({on: 'hover'})
    $rootScope.$on('changeAsset', (e, from, asset) => {
      if (from == "home" && this) {
        if (this.$rootScope.rvm.fr) {
          this.settings.cover_fr = asset.asset_id
        }
        if (this.$rootScope.rvm.it) {
          this.settings.cover_it = asset.asset_id          
        }
        this.ApiService.updateSettings(this.settings)
          .then(resp => {
            console.log(resp)
            this.toastr.success("The main cover has been correctly updated")
          })
          .catch(err => {
            console.log(err)
            this.toastr.error("There was an unexpected error, please try again")
          })
      }
    });
  }
  changeLang() {
    this.$rootScope.rvm.fr = !this.$rootScope.rvm.fr; 
    this.$rootScope.rvm.it = !this.$rootScope.rvm.it;
    this.$rootScope.$emit('changeLang')
    this.$state.reload('logged')
  }

  getCover() {
    return this.assets.filter(asset => {
      const id = this.rvm.fr ? Number(this.settings.cover_fr) : Number(this.settings.cover_it)
      return Number(asset.asset_id) == id
    })[0]
  }

  logout() {
    this.AuthService.loginLogout();
    this.$window.location.reload();
  }

  changeCover(cover) {
    $('.ui.modal.maincover').modal('show')
  }

  closeModal() {
    $('.ui.modal.maincover').modal('hide')
    this.ApiService.settings()
      .then(resp => {
        this.settings = resp.data
        this.cover = this.getCover()
        this.$state.reload()
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export default HomeController;