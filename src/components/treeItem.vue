<template>
    <li :style="{'border-left' :isFolder ? '1px solid gray' : 'none'}">
        <div class="wrap">
            <div
                :class="[newStyle ? 'active-class' : 'old-style' , isFolder ? 'folder' : 'not-folder']"
                @click="newStyle = !newStyle"
                @dblclick="toggle(items)"
            >
                <span v-if="isFolder">{{ isOpen ? '&#9650' : '&#9660;' }}</span>
                {{ name }}
                <span

                    style="cursor: pointer"
                    @click="addItemToList(name,items)">
                [+]</span>
            </div>
        </div>
        <ul v-show="isOpen" v-if="isFolder && items != undefined">
            <tree-item
                class="item"
                v-for="(child, index) in items"
                :key="index"
                :name="child._name"
                :items="child.cat || child.leaf"
            ></tree-item>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'treeItem',
    props: ['items', 'name'],
    data: function () {
        return {
            isOpen: false,
            newStyle: false,
        };
    },
    computed: {
        isFolder: function () {
            for (let k in this.items) {
                if (typeof (this.items[k] === 'object')) {
                    return true
                }
            }
            return false
        },
    },
    mounted() {
    },
    methods: {
        addItemToList(name,items){
            console.log(items)
            this.$store.commit('setNewData',[{name:name,id:Math.random()}])
            localStorage.setItem('lastItem', JSON.stringify(items))
        },
        open() {
            this.isOpen = true
        },
        toggle: function (e) {
            console.log(e)
            if (this.isFolder) {
                this.isOpen = !this.isOpen;
            }
        },
        makeFolder: function () {
            if (!this.isFolder) {
                this.$emit("make-folder", this.items);
                this.isOpen = true;
            }
        },
    },
}
</script>

<style scoped>
.active-class {
    background: #f67f7f;
    transition: 3s
}

.old-style {
    background: white;
    transition: 3s
}

li{
    list-style: none;
    padding-right: 20px;
}
</style>
