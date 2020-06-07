<template>
    <nav>
        <router-link to="/money" class="item">
            <Icon name="money"/>
            记账</router-link>
        <router-link to="/labels" class="item">
            <Icon name="tag"/>
            标签</router-link>
        <router-link to="/statistics" class="item">
            <Icon name="chart"/>
            统计</router-link>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "Nav",
    }
</script>

<style lang="scss" scoped>
    nav{
        display: flex;
        flex-direction: row;
        box-shadow: 0 0 3px rgba(0,0,0,0.3);
        font-size: 14px;
        > .item{
            padding: 2px 0;
            width: 33.33%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            > .icon{
                width: 32px;
                height: 32px;
            }
        }
    }
</style>