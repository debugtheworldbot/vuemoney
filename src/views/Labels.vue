<template>
    <div>
        <Layout>
            <div class="olDiv">
                <router-link :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id" class="li" >
                    <span>{{tag.name}}</span> <Icon name="right"/>
                </router-link>
            </div>
            <div class="btn">
                <Button @click="createTag">NEW</Button>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
   import Vue from "vue";
   import {Component} from "vue-property-decorator";
   import {tagListModel} from "@/models/tagListModel";
   import Button from "@/components/Button.vue";
   tagListModel.fetch()
   @Component({
       components: {Button}
   })
   export default class Labels extends Vue {
       tags=tagListModel.data
       createTag(){
           const name = window.prompt('请输入标签名：')
           if(name){
               window.createTag(name)
           }
       }

    }
</script>

<style lang="scss" scoped>
    .olDiv{
        background: white;
        font-size: 16px;
        padding-left: 16px;
        >.li{
            display: flex;
            justify-content: space-between;
            min-height: 44px;
            padding: 5px 16px;
            align-items: center;
            border-bottom: 1px solid #e6e6e6;
            svg {
                width: 18px;
                height: 18px;
                color: #666;
                margin-right: 16px;
            }
        }
    }
    .btn{
        text-align: center;
        padding: 16px;
    }
</style>