<template>
        <Layout class-prefix="layout">
            <NumberPad />
            <Types />
            <Notes />
<<<<<<< HEAD
           <Tags :data-source.sync="tags"/>
=======
           <Tags />
>>>>>>> ef8c74552be19321aa75b21ee6ffddeab89772f5
        </Layout>
</template>

<script lang="ts">

    import Tags from "@/views/Money/Tags.vue";
    import Types from "@/views/Money/Types.vue";
    import Notes from "@/views/Money/Notes.vue";
    import NumberPad from "@/views/Money/NumberPad.vue";
    export default {
        name: "Money",
        components: {NumberPad, Notes, Types, Tags},
        data(){
            return {
                tags: ['吃喝玩乐', '服饰美容', '生活日用', '交通出行']
            }
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