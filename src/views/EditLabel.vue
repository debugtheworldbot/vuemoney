<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left" @click.native="goBack"/>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="formBar">
            <FormItem field-name="标签名" placeholder="修改" :value="tag.name"
            @update:value="updateTag"/>
        </div>
        <div class="btnBar">
            <Button @click="confirm">确定</Button>
            <Button class="btn" @click="remove">删除</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator'
    import {tagListModel} from "@/models/tagListModel";
    import FormItem from "@/views/Money/FormItem.vue";
    import Button from "@/components/Button.vue";
    @Component({
        components: {Button, FormItem}
    })
    export default class EditLabel extends Vue {
        tag?:{id:string,name:string}=undefined
        created(){
            const id=this.$route.params.id
            tagListModel.fetch()
            const tags=tagListModel.data
            const tag=tags.filter(tag=>tag.id===id)[0]
            if(tag) {
                this.tag=tag
            }else {
                this.$router.replace('/404')
            }
        }
        updateTag(name:string){
            if(this.tag){
                tagListModel.update(this.tag.id,name)

            }else{
                return
            }
        }
        remove(){
            if(this.tag){
            tagListModel.remove(this.tag.id)
            alert('删除成功')
            this.goBack()
            }
        }
        confirm(){
            console.log(111)
        }
        goBack(){
            this.$router.replace('/labels')
        }

    }
</script>

<style lang="scss" scoped>
    .navBar{
        text-align: center;
        font-size: 16px;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        > .leftIcon{
            width: 18px;
            height: 18px;
        }
        > .title{
        }
        > .rightIcon{
            width: 18px;
            height: 18px;
        }
    }
    .formBar{
        margin-top: 8px;
        background: #ffffff;
    }
    .btnBar{
        text-align: center;
        padding: 16px;
    }
    .btn{
        margin-left: 10px;
    }
</style>