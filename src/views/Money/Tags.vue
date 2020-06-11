<template>
    <div class="tags">
        <div class="new">
            <button @click="newTag()">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tags" :key="tag" @click="toggle(tag)"
            :class="{selected:selectedTags.indexOf(tag)>=0}">
                {{tag}}
            </li>
        </ul>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";
    import {tagListModel} from "@/models/tagListModel";
    tagListModel.fetch()
    @Component
    export default class Tags extends Vue {
        @Prop() readonly dataSource: string[] | undefined
        selectedTags: string[] = []
        tags=tagListModel.data
        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag)
            if (index >= 0) {
                this.selectedTags.splice(index, 1)
            } else {
                this.selectedTags.push(tag)
            }
            this.$emit('update:selected',this.selectedTags)
        }

        newTag() {
            const name = window.prompt('请输入标签名：')
            if (name === '') {
                window.alert('标签名不能为空')
            } else if(name){
                tagListModel.create(name)
            }
        }
    }

</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        flex-grow: 1;
        font-size: 14px;
        padding: 16px;
        display: flex;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            flex-wrap: wrap;
            overflow: auto;

            > li {
                $bg: #d9d9d9;
                background: $bg;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;

                &.selected {
                    background: darken($bg, 40%);
                    color: #fff;
                }
            }
        }

        > .new {
            padding-top: 16px;
            display: flex;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>