import {ADDSHOPCOUNT,ADDSHOP}from './mutations_type'

export default {
    acaddshop(context,payload){
      return new Promise(resolve=>{
        const oldproduct=context.state.shoplist.find(item=>item.iid===payload.iid)

        if(oldproduct){
          context.commit(ADDSHOPCOUNT,oldproduct)
          resolve('当前商品+1')
        }
        else {
          payload.count=1
          payload.check=true
          context.commit(ADDSHOP,payload)
          resolve('添加商品成功')
        }
      })
    }
}
