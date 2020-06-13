<template>
    <Layout>
        <div>
            <Icon name="left"/>
            <span>编辑标签</span>
        </div>
        <FormItem field-name="edit" placeholder="修改" />
        <Button>删除标签</Button>
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
        created(){
            const id=this.$route.params.id
            tagListModel.fetch()
            const tags=tagListModel.data
            const tag=tags.filter(tag=>tag.id===id)[0]
            if(tag){
                console.log(tag)
            }else {
                this.$router.replace('/404')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>