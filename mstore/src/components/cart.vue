<template>
    <ul class="list-group">
        <li class="list-group-item">
         <span class="item-name">Name</span>
         <span class="item-price float-right">Price</span>

        </li>

        <hr>
        <li v-for="(item, index) in items" :key="index" class="list-group-item">
            <span class="item-name">{{item.title}}</span>
            <button class="btn btn-sm btn-danger" @click="removeItems(index)">Remove</button>
            <span class="item-price float-right">{{item.Price}}</span>

        </li>
        <hr>
        <li class="list-group-item">
            <span class="item-name">Total</span>
            <span class="item-price float-right">{{totalprice}}</span>

        </li>
    </ul>
</template>
<script>

    export default {
        props: ['items'],
        computed : {
            totalprice(){
                var total =0

                this.items.forEach(item => {
                    total += parseFloat(item.Price)
                })

                return total

            }
        },
        methods :{
            removeItems(index){
                this.$emit('itemRemoved', index)

            }
        }

    }
</script>

<style>

</style>