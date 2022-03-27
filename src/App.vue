<template>
    <div class="wrapper">
        <div class="tree-wrapper">
            <h3>tree</h3>
            <h5>(click '+' to add to list)</h5>
            <ul  class="tree">
                <tree-item
                    :name="Object.keys(treeData)[0]"
                    class="item"
                    :items="[...treeData.tree.cat]"
                    @addNewListItem="addNewListItem"
                ></tree-item>
            </ul>
        </div>
        <div class="list-wrapper">
            <h3>list</h3>
            <h5>(click to delete) </h5>
            <List
                :data="$store.state.data"
                class="list"
            />
        </div>
    </div>
</template>

<script>
import data from "@/data";
import treeItem from "@/components/treeItem";
import List from "@/components/List";
export default {
  name: 'App',
  components: {
      List,
      treeItem
  },
    data(){
      return{
          treeData: {},
          name:'',
          listData:[]
      }
    },
    methods: {
        addNewListItem(e){
            console.log(e)
            this.listData.push(e)
            localStorage.setItem('listData',this.listData)

        }
    },
    mounted() {
        this.treeData = JSON.parse(JSON.stringify(data))
        this.name = Object.keys(this.treeData)
        if (JSON.parse(localStorage.getItem('listData')).length >0){
            this.$store.commit('setData',JSON.parse(localStorage.getItem('listData')))
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper{
    display: flex;
    justify-content: space-between;
    .tree-wrapper{
        display: flex;
        flex: 1 1 50%;
        flex-direction: column;
        align-items: flex-start;
        h3{
            color: blue;
        }

    }
    .list-wrapper{
        display: flex;
        flex: 1 1 50%;
        flex-direction: column;
        align-items: flex-start;
    }
}

.tree{

}
</style>
