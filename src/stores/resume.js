import { configure, observable, decorate, action } from 'mobx'

configure({ 
  enforceActions: true,
  isolateGlobalState: false 
})

class Store {

  constructor() {
    this.langauge = 'ch'
  }

  setLangauge = action((value) => {
    this.langauge = value
  })

}

decorate(Store, {
  langauge: observable
})

const resume = new Store()

export default resume