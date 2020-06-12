<template>
    <div>
        <Layout>
            <div class="olDiv">
                <router-link :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id" class="li" >
                    <span>{{tag.name}}</span> <Icon name="right"/>
                </router-link>
            </div>
            <div class="btn">
                <button @click="createTag">NEW</button>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
   import Vue from "vue";
   import {Component} from "vue-property-decorator";
   import {tagListModel} from "@/models/tagListModel";
   tagListModel.fetch()
   @Component
   export default class Labels extends Vue {
       tags=tagListModel.data
       createTag(){
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
    button{
        background: #767676;
        border: none;
        color: #ffffff;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px  ;
    }
    .btn{
        text-align: center;
        padding: 16px;
    }
</style>