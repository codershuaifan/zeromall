import {ADDSHOPCOUNT,ADDSHOP} from './mutations_type'

export default {
    [ADDSHOPCOUNT](state,payload){
      payload.count+=1
    },
    [ADDSHOP](state,payload){
      state.shoplist.push(payload)
    },
}
