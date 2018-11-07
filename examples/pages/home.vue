<template>
    <div class="m-homepage">
        <m-header></m-header>
        <div class="m-main">
            <h2 class="m-title">BI UI</h2>
            <div class="m-button-group">
                <router-link to="/components" class="m-nav-button">Get Start</router-link>
                <div style="margin: 0 20px;"></div>
                <a class="m-nav-button" target="blank" href="https://github.com/showonne/gitdemo">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
import mHeader from 'components/m-header'

export default {
    name: 'home',
    data(){
        return {}
    },
    components: {
        'm-header': mHeader
    }
}
</script>

<style lang="postcss">
.m-homepage{
    height: 100%;
    .m-main{
        height: calc(100% - 80px);
        display: flex;
        /* align-items: center; */
        justify-content: center;
        flex-flow: column;
        background: url(/bg-homepage.png) 50% 20px no-repeat;
        background-size: 80%;
    }
    .m-title{
        width: 100%;
        font-size: 40px;
        font-weight: 800;
        text-align: center;
    }
    .m-button-group{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .m-nav-button{
        cursor: pointer;
        width: 120px;
        height: 40px;
        border-radius: 20px;
        text-align: center;
        line-height: 40px;
        font-weight: 800;
        border: 1px solid #666;
    }
}
</style>
