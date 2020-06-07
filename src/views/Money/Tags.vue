<template>
    <div class="tags">
        <div class="new">
            <button >新增标签</button>
        </div>
        <ul class="current">
            <li>
                餐饮
            </li>
        </ul>

    </div>
</template>

<script lang="ts">
    export default {
        name: "Tags"
    }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        flex-grow: 1;
        font-size: 14px;
        padding: 16px;
        display: flex;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            flex-wrap: wrap;
            overflow: auto;

            > li {
                $bg: #d9d9d9;
                background: $bg;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;

                &.selected {
                    background: darken($bg, 40%);
                    color: #fff;
                }
            }
        }

        > .new {
            padding-top: 16px;
            display: flex;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>