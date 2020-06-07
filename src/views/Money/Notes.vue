<template>
    <div>
        <label class="notes"> <span class="name">note</span>
            <input type="text">
        </label>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Notes"
    }
</script>

<style lang="scss" scoped>
    /**/
    .notes {
        font-size: 14px;
        padding-left: 16px;
        display: flex;
        align-items: center;

        .name {
            padding-right: 16px;
        }

        input {
            height: 40px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 1px;
        }
    }
</style>