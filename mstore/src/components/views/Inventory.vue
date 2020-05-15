<template>
    <div class="row">
        <div v-for="(item, index) in items" :key="index" class="col-sm-3 card" style="width: 13rem;">
            <img :src="item.photo" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text"> {{item.Price}}</p>
                <a @click="addTocart(item)" class="btn btn-primary">Add</a>
            </div>
        </div>


    </div>
</template>
<script>

    export default {
        data(){
            return{
                items:[]

            }
        },
        props: ['items'],

        methods : {
            addTocart(item){
                this.$emit('newItemadded', item)

            }
        }


    }
</script>

<style>

</style>