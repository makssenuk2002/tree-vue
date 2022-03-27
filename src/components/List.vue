<template>
   <div class="wrapper">
       <ul>
           <li @click="delItem(d[0].id)" v-for="(d,i) in data" :key="i">
               {{ d[0].name }}
           </li>
       </ul>
   </div>
</template>

<script>
export default {
    props: ['data'],
    name: "List",
    data() {
        return {
            delItem(el) {
                let arr = JSON.parse(localStorage.getItem('listData'))
                arr = arr.filter((e) => e[0].id !== el)
                localStorage.setItem('listData', JSON.stringify(arr))
                this.$store.commit('setData', arr)
            }
        }
    }
}
</script>

<style scoped>

</style>