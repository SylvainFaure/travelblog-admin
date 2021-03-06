import { format } from 'date-fns'
class ArticleController {
  constructor(
    $rootScope, 
    $scope, 
    $stateParams, 
    $state, 
    ArticleDetail, 
    Assets, 
    Travels,
    Anecdotes,
    ApiService,
    TextEditor,
    toastr
  ) {
    this.$rootScope = $rootScope; 
    this.$scope = $scope;
    this.$stateParams = $stateParams; 
    this.$state = $state;

    this.json_in = ArticleDetail;
    this.articleAssets = Assets;
    this.travels = Travels;
    this.anecdotes = Anecdotes;
    this.ApiService = ApiService;
    this.TextEditor = TextEditor;
    this.toastr = toastr;
    this.format = format
    this.AWS_BUCKET_PATH = process.env.AWS_BUCKET_PATH
    
    this.stepOne = true;
    this.hasGallery = this.hasGallery();
    this.editGallery = false;
    this.TextEditor.context = 'article'
    this.modalId = this.json_in.newarticle ? 'newarticle' : this.json_in.article_id.toString()

    /* Mapping db data */
    if (this.json_in.newarticle) {
      this.assetsGallery = [];
      this.articleDates = {
        from: this.format(new Date(), 'dd/MM/yyyy'),
        to: this.format(new Date(), 'dd/MM/yyyy')
      }
      setTimeout(() => {
        this.initDatepicker()
      })
    } else {
      /* Dates */
      this.articleDates = {
        from: "",
        to: ""
      }
      if (this.json_in.article_start_date) {
        this.articleDates.from = this.format(new Date(this.json_in.article_start_date), 'dd/MM/yyyy')
      }
      if (this.json_in.article_end_date) {
        this.articleDates.to = this.format(new Date(this.json_in.article_end_date), 'dd/MM/yyyy')        
      }
      
      /* Travel */
      if (this.json_in.article_travel_id) {
        const travel = this.travels.filter(travel => {
          return travel.travel_id == this.json_in.article_travel_id;
        })
        this.selectedTravel = travel[0]
        this.selectedTravelCountries = this.$rootScope.rvm.fr 
                                        ? JSON.parse(travel[0].travel_countries_fr) 
                                        : JSON.parse(travel[0].travel_countries_it)
        this.selectedCountry = this.$rootScope.rvm.fr 
                                ? this.selectedTravelCountries.filter(country => country == this.json_in.article_country_fr)[0]
                                : this.selectedTravelCountries.filter(country => country == this.json_in.article_country_it)[0]
        console.log(this.selectedCountry)
      }

      if (this.$rootScope.rvm.fr) {
        /* Gallery */
        let parsed = JSON.parse(this.json_in.article_gallery_fr);
        this.assetsGallery = typeof parsed == "object" && parsed !== null ? parsed : [];

        /* Editor, long desc */
        let parsedComponents = JSON.parse(this.json_in.article_long_desc_fr);
        this.articleComponents = typeof parsedComponents == "object" && parsedComponents !== null ? parsedComponents : [];
        this.TextEditor.components = this.articleComponents;

        this.isPublished = this.json_in.article_published_fr;
      }
      if (this.$rootScope.rvm.it) {
        let parsed = JSON.parse(this.json_in.article_gallery_it);
        this.assetsGallery = typeof parsed == "object" && parsed !== null ? parsed : [];

        let parsedComponents = JSON.parse(this.json_in.article_long_desc_it);
        this.articleComponents = typeof parsedComponents == "object" && parsedComponents !== null ? parsedComponents : [];
        this.TextEditor.components = this.articleComponents;

        this.isPublished = this.json_in.article_published_it;
      }
    }
    $rootScope.$on("componentsChange", (e, context, comps) => {
      console.log(context, comps)
      if (context === 'article') {
        this.articleComponents = comps;
      }
      // $state.reload();
    })

    /* Gallery */
		$rootScope.$on('addAssetGallery', (e, asset, context) => {
      if (context == 'article' && this.assetsGallery.length < 4) {
        this.assetsGallery.push(asset);
      }
		});
		$rootScope.$on('deleteAssetGallery', (e, asset, context) => {
      if (context == 'article') {
        const copyAssetGallery = this.assetsGallery;
        this.assetsGallery.map((a, i) => {
          if (a.asset_id == asset.asset_id) {
            copyAssetGallery.splice(i, 1);
          }
          this.assetsGallery = copyAssetGallery;
        })
      }
    });
    
    $rootScope.$on('changeAsset', (e, from, asset) => {
      if (from == "article" && this) {
        if (this.fr) {
          this.json_in.article_cover_fr = asset.asset_name;
        }
        if (this.it) {
          this.json_in.article_cover_it = asset.asset_name;
        }
      }
    });
    
    /* Lang */
    this.fr = this.$rootScope.rvm.fr;
    this.it = this.$rootScope.rvm.it;
    this.$rootScope.$on('changeLang', () => {
      this.fr = this.$rootScope.rvm.fr;
      this.it = this.$rootScope.rvm.it;
    })

    if (!this.json_in.newarticle) {
      this.json_in.newarticle = false;
      this.isEditing = false;
    } else {
      this.isEditing = true;
    }

    if (this.fr) {
      this.months = this.fr 
                  ? ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
                  : ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
      this.monthsShort = this.fr 
                  ? ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc']
                  : ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'sett', 'ott', 'nov', 'dic']
      this.days = this.fr ? ['D', 'L', 'Ma', 'Me', 'J', 'V', 'S'] : ['D', 'L', 'Ma', 'Me', 'G', 'V', 'S']
      this.actions = [
        {
          label: this.fr ? "Paragraphe" : "Paragrafo",
          key: 'paragraph',
          icon:  "font"
        },
        {
          label: this.fr ? "Sous-titre" : "Sottotitolo",
          key: "subtitle",
          icon:  "heading"
        },
        {
          label: this.fr ? "Image" : "Immagine",
          key: "image",
          icon:  "image outline"
        },
        {
          label: this.fr ? "Phrase d'accroche" : "Frase catchy",
          key: "catch",
          icon: "font"
        },
        {
          label: this.fr ? "Musique" : "Musica",
          key: "music",
          icon: "music"
        }
      ]
    }
    console.log(this.json_in)
    this.formatTravelCountries();
  }

  edit() {
    this.isEditing = !this.isEditing
    if (this.isEditing) {
      setTimeout(() => {
        $('.ui.dropdown').dropdown()        
        this.initDatepicker()
      })
    }
  }

  hasGallery() {
    if (this.fr) return this.json_in.article_gallery_fr.length
    if (this.it) return this.json_in.article_gallery_it.length
  }

  addArticleGallery() {
    if (this.fr) {
      this.json_in.article_gallery_fr = JSON.stringify(this.assetsGallery);
    }
    if (this.it) {
      this.json_in.article_gallery_it = JSON.stringify(this.assetsGallery);
    }
    this.editGallery = false;
  }

  removeFromGallery (img) {
    this.assetsGallery = this.assetsGallery.filter(a => a.asset_id !== img.asset_id)
  }

  formatTravelCountries() {
    if (this.fr) {
      this.travels.forEach((travel) => {
        travel.travel_countries_fr = JSON.parse(travel.travel_countries_fr)
      })
    }
    if (this.it) {
      this.travels.forEach((travel) => {
        travel.travel_countries_it = JSON.parse(travel.travel_countries_it)
      })
    }
  }

  getSelectedTravelCountries() {
    let travelId = Number(this.selectedTravel.travel_id);
    this.json_in.article_travel_id = travelId
    if (travelId) {
      this.selectedTravelCountries = this.fr ? this.selectedTravel.travel_countries_fr : this.selectedTravel.travel_countries_it 
    }
  }
  setSelectedCountry() {
    if (this.$rootScope.rvm.fr) {
      this.json_in.article_country_fr = this.selectedCountry
    }
    if (this.$rootScope.rvm.it) {
      this.json_in.article_country_it = this.selectedCountry
    }
  }

  openModal() {
    $('.ui.modal').modal('hide others')
    $(`.ui.modal.articlecover#${this.modalId}`).modal('show')
  }

  initDatepicker() {
    console.log(this.articleDates)

    $('#rangestart').calendar({
      type: 'date',
      monthFirst: false,
      text: {
        days: this.days,
        months: this.months,
        monthsShort: this.monthsShort
      },
      onChange: (date, text, mode) => {
        this.json_in.article_start_date = Date.parse(new Date(date))
        this.articleDates.from = this.format(new Date(date), 'dd/MM/yyyy')
	    }    
    });
    $('#rangeend').calendar({
      type: 'date',
      monthFirst: false,
      text: {
        days: this.days,
        months: this.months,
        monthsShort: this.monthsShort
      },
      onChange: (date, text, mode) => {
        this.json_in.article_end_date = Date.parse(new Date(date))
        this.articleDates.to = this.format(new Date(date), 'dd/MM/yyyy')
	    }
    });
  }

  editCover() {
   this.openModal('cover');
  }

  toggleStep() {
    this.stepTwo = !this.stepTwo
    this.isEditing = false
  }

  cleanComponents(components) {
    return components.map(comp => {
      console.log(comp)
      if (comp.$$hashKey) {
        delete comp.$$hashKey
      }
      if (typeof comp.content == 'string') {
        comp.content.replace(/<!--[^>]*-->?/gm, '');
      }
      if (typeof comp.content == 'object') {
        Object.keys(comp.content).forEach(key => {
          if (comp.content[key]['$$hashKey']) {
            delete comp.content[key]['$$hashKey']
          }
        })
      }
      return comp
    })
  }

  formatArticle(article) {
    if (this.fr) {
      if (!article.article_slug_fr) {
        article.article_slug_fr = this.slugify(article.article_title_fr)
      }
      if (article.article_travel_fr) {
        delete article.article_travel_fr
      }
      if (this.assetsGallery.length) {
        article.article_gallery_fr = JSON.stringify(this.assetsGallery)
      } else {
        article.article_gallery_fr = '[]';
      }
      if (this.articleComponents) {
        const components = this.cleanComponents(this.articleComponents)
        article.article_long_desc_fr = JSON.stringify(components);
        this.resetTextEditor();
      }
      if (!article.article_long_desc_fr) {
        article.article_long_desc_fr = '[]'; 
      }
      if (article.newarticle) {
        article.article_title_it = ''
        article.article_long_desc_it = '[]'
        article.article_gallery_it = '[]'
      }
    }
    if (this.it) {
      if (!article.article_slug_it) {
        article.article_slug_it = this.slugify(article.article_title_it)
      }
      if (article.article_travel_it) {
        delete article.article_travel_it
      }
      if (this.assetsGallery.length) {
        article.article_gallery_fr = JSON.stringify(this.assetsGallery)
      } else {
        article.article_gallery_fr = '[]';
      }
      

      if (this.articleComponents) {
        const components = this.cleanComponents(this.articleComponents)
        article.article_long_desc_it = JSON.stringify(components);
        this.resetTextEditor();
      }
      if (!article.article_long_desc_it) {
        article.article_long_desc_it = '[]'; 
      }
      if (article.newarticle) {
        article.article_title_fr = ''
        article.article_long_desc_fr = '[]'
        article.article_gallery_fr = '[]'
      }
    }
    return article;
  }

  slugify (string) {
    return string.toLowerCase().replace(/[^\w\s]/g, '').split(' ').join('-')
  }

  saveArticle(mode) {
    const article = this.formatArticle(this.json_in);
    if (article.newarticle) {
      delete article.newarticle
      this.ApiService.articleCreate(article).then((resp) => {
        this.$state.go('logged.article', {articleId: resp.data.insertId})
        this.toggleStep();
      }, (error) => {
        console.warn(error);
      })
    } else {
      delete article.newarticle
      this.ApiService.articleUpdate(article, article.article_id).then((resp) => {
        console.log(resp)
        this.isEditing = false;
        console.log(mode)
        if (mode == 'direct') {
          this.$state.reload();
        }
      }, (error) => {
        console.warn(error)
      })
    }
  }

  publishArticle() {
    if (this.$rootScope.rvm.fr) {
      this.json_in.article_published_fr = 1;
      this.json_in.article_published_date_fr = Date.now();
    }
    if (this.$rootScope.rvm.it) {
      this.json_in.article_published_it = 1;
      this.json_in.article_published_date_it = Date.now();
    }
    this.saveArticle(this.json_in);
    this.ApiService.articlePublish(this.json_in.article_id, this.json_in)
      .then(success => {
        console.log(success)
        this.toastr.success("Your article has been published !", "Success !")
      }, err => {
        console.log(err)
        this.toastr.error("There was an unexpected error, please retry !", "Error")
      })
  }

  unpublishArticle() {
    if (this.$rootScope.rvm.fr) {
      this.json_in.article_published_fr = 0;
    }
    if (this.$rootScope.rvm.it) {
      this.json_in.article_published_it = 0;
    }
    this.saveArticle(this.json_in);
    this.ApiService.articleUnpublish(this.json_in.article_id)
      .then(success => {
        console.log(success)
        this.toastr.success("Your article has been unpublished !", "Success !")
      }, err => {
        console.log(err)
        this.toastr.error("There was an unexpected error, please retry !", "Error")
      })
  }

  deleteArticle(id) {
    this.ApiService.articleDelete(id).then((result) => {
      console.log(result)
      this.$state.go('logged.articles', {success: true})
    })
  }

  resetTextEditor() {
    this.TextEditor.components = [];
    this.TextEditor.isEditingComponent = false;
  }

  addCountry() {
    // ouvrir popup
    // form avec informations basiques
    // appeler fonction save
    // reload ?
  } 

  addTravel() {
    // ouvrir popup
    // form avec informations basiques
    // appeler fonction save
    // reload ?
  } 

  $onDestroy() {
    console.log('on destroy')
    // todo : dialog to save / not to save ?
    this.resetTextEditor();
  }
}

export default ArticleController;
