<template>
        <Layout class-prefix="layout">
            {{record}}
            <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
            <Types :value.sync="record.types" />
            <div class="notes">
                <FormItem field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
            </div>
            <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
        </Layout>
</template>


<script lang="ts">
    import Vue from "vue";
    import Tags from "@/views/Money/Tags.vue";
    import Types from "@/views/Money/Types.vue";
    import NumberPad from "@/views/Money/NumberPad.vue";
    import Component from "vue-class-component";
    import {Watch} from "vue-property-decorator";
    import {recordListModel} from "@/models/recordListModel";
    import FormItem from "@/views/Money/FormItem.vue";

    @Component({
        components: {NumberPad, FormItem, Types, Tags}
    })
    export default class Money extends Vue{
        recordList=recordListModel.fetch()
        tags= window.tagList
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
            recordListModel.create(this.record)
        }
        @Watch('recordList')
        onRecordListChanged(){
            recordListModel.save()
        }
    }
</script>

<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
    .notes{
        padding: 12px 0;
    }
</style>
<style lang="scss" scoped>
</style>