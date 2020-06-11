<template>
        <Layout class-prefix="layout">
            <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
            <Types :value.sync="record.types" />
            <Notes @update:value="onUpdateNotes"/>
            <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
        </Layout>
</template>


<script lang="ts">
    import Vue from "vue";
    import Tags from "@/views/Money/Tags.vue";
    import Types from "@/views/Money/Types.vue";
    import Notes from "@/views/Money/Notes.vue";
    import NumberPad from "@/views/Money/NumberPad.vue";
    import Component from "vue-class-component";
    import {Watch} from "vue-property-decorator";
    import {recordListModel} from "@/models/recordListModel";
    import {tagListModel} from "@/models/tagListModel";

    @Component({
        components: {NumberPad, Notes, Types, Tags}
    })
    export default class Money extends Vue{
        recordList=recordListModel.fetch()
        tagList=tagListModel.fetch()
        tags= this.tagList
        record:RecordItem={
            tags:[],types:'-',notes:'',amount:0
        }
        onUpdateTags(tags:string[]){
           this.record.tags=tags

        }
        onUpdateNotes(value:string){
            this.record.notes=value
        }

        onUpdateAmount(value:number){
            this.record.amount=value
        }
        saveRecord(){
            const deepClone=recordListModel.clone(this.record)
            deepClone.createdAt=new Date()
            this.recordList.push(deepClone)
            console.log(this.recordList)
        }
        @Watch('recordList')
        onRecordListChanged(){
            recordListModel.save(this.recordList)
        }
    }
</script>

<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
<style lang="scss" scoped>
</style>