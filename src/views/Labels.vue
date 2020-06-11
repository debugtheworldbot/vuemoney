<template>
    <div>
        <Layout>
            <ol>
                <li v-for="tag in tags" :key="tag">
                    <span>{{tag}}</span> <Icon name="right"/>
                </li>
            </ol>
            <div class="btn">
                <button>NEW</button>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
   import Vue from "vue";

   export default class Labels extends Vue {
       tags= ['吃喝玩乐', '服饰美容', '生活日用', '交通出行']
    }
</script>

<style lang="scss" scoped>
    ol{
        background: white;
        font-size: 16px;
        padding-left: 16px;
        >li{
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