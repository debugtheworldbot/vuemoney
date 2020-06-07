<template>
        <Layout class-prefix="layout">
            <NumberPad />
            <Types :xxx="123"/>
            <Notes />
           <Tags />
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