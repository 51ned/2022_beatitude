import { get, makeAutoObservable, set } from 'mobx'


class СheckboxStore {
  checked = false
  items = new Map([])

  constructor() {
    makeAutoObservable(this)
  }

  reg = (params) => {
    const value = {           
      disabled: params.disabled,       
      isChecked: false     
    }

    set(this.items, params.name, value)
  }
  
  setChecked = (name: string) => {
    get(this.items, name).isChecked = true
    console.log(this.items)
  }
}


export const checkboxStore = new СheckboxStore()