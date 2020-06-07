<template>
        <svg class="icon">
            <use v-bind:xlink:href="'#'+name" />
        </svg>
</template>

<script lang="ts">
    /*将一个目录同一后缀文件统一引用到当前文件*/
    let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {
        importAll(require.context('../assets/icons', true,  /\.svg$/));
    } catch (error) {
        console.log(error)
    }
    /*end*/
    export default {
        props:['name'],
        name: "Icon"
    }
</script>

<style lang="scss" scoped>
    .icon{
        width: 1em;
        height: 1em;
        fill:currentColor;
        overflow: hidden;
        vertical-align: -0.15em;
    }
</style>