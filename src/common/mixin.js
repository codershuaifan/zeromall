import BackTop from "@/components/content/backtop/BackTop";

export const listenmixin={
  mounted(){
    const refresh=this.debounce(this.$refs.srcoll.refresh,20)

    this.ItemImgListener=()=>{
      refresh()
    }

    this.$bus.$on('imgload',this.ItemImgListener)
  },
  methods:{
    debounce(func,delay){
      let timer=null
      return function (...args){
        if(timer)clearTimeout(timer)
        timer=setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    }
  }
}

export const mixbacktop={
  data(){
    return {
      isshowback:false
    }
  },
  methods:{
    backtop(){
      this.$refs.srcoll.scroll.scrollTo(0,0,500)
    },
    mixshowback(position){
      this.isshowback=position.y<-1000
    }
  },
  components:{
    BackTop
  }
}
