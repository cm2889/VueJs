<template>
  <div id="app">


      <!--<router-link :to="{path: '/'}">Home</router-link>
      <router-link :to="{path: '/test'}">Test</router-link>-->


     <navbar @search="search"></navbar>

      <div class="container">
      <div class="row">
          <div class="col-sm-9">
              <router-view></router-view>
           <!--   <inventory @newItemadded="addcartItem" :items="items"></inventory>-->

          </div>
          <div class="col-sm-3">
                 <cart @itemRemoved="removeItems" :items="cart"></cart>

          </div>
      </div>
      </div>
  </div>
</template>

<script>

import navbar from './components/navbar'
import cart from './components/cart'
/*import inventory from './components/views/Inventory'*/

import data from './data.js'
export default {
    components :{
        navbar,
        cart,
        /*inventory*/
    },
    data(){
  return{
      items:[],
      cart :[

      ]
        }
    },
    mounted() {
        this.items=data
    },
    methods: {
        search(keyword){
           this.items= data.filter(item => {
               return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            })

        },
    addcartItem(item){
        this.cart.push(item)
    },
        removeItems(index){
     this.cart.splice(index,1)
        }
    }

}
</script>

<style>
.container{
    padding: 15px;
}
</style>
