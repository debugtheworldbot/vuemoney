<template>
    <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="removeContent">删除</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="clearContent">清空</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button class="ok" @click="ok">OK</button>
            <button class="zero" @click="inputContent">0</button>
            <button @click="inputContent">.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from "vue-property-decorator";
    @Component
    export default class NumberPad extends Vue{
        output='0'
        inputContent(event:MouseEvent){
            const button=(event.target as HTMLButtonElement)
            const text =button.textContent as string
            if(this.output.length===16){return}
            if(this.output==='0' && '0123456789'.indexOf(text)>=0){return this.output=text}
            if(this.output.indexOf('.')>=0 && text==='.'){return;}
            else{this.output+=text}

        }
        clearContent(){
            this.output='0'
        }
        removeContent(){
            if(this.output.length===1){
                this.output='0'
            }else {
                this.output=this.output.slice(0,-1)
            }
        }
        ok(){
            let output=parseFloat(this.output)
            this.$emit('update:value',output)
            alert('保存成功！')
            this.clearContent()
        }



    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/helper.scss';
    @import '~@/assets/styles/reset.scss';
    .numberPad {
        .output {
            @extend %clearFix;
            @extend %innerShadow;
            font-size: 36px;
            font-family: Consolas, monosapce;
            padding: 9px 16px;
            text-align: right;
            min-height: 72px;
        }

        .buttons {
            @extend %clearFix; /*我继承%x*/
            > button {
                width: 25%;
                height: 64px;
                float: left;
                background: transparent;
                border: none;

                &.ok {
                    height: 64*2px;
                    float: right;
                }

                &.zero {
                    width: 25*2%;
                }

                $bg: #f2f2f2;

                &:nth-child(1) {
                    background: $bg;
                }

                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%); /*使变暗4%*/
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 4*2%);
                }

                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background: darken($bg, 4*3%);
                }

                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background: darken($bg, 4*4%);
                }

                &:nth-child(14) {
                    background: darken($bg, 4*5%);
                }

                &:nth-child(12) {
                    background: darken($bg, 4*6%);
                }
            }
        }
    }
</style>