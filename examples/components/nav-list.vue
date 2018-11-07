<template>
    <ul class="m-nav-list">
        <li v-for="(nav, index) in navInfo" :key="index" class="nav-item">
            <span class="nav-title">{{nav.label}}</span>
            <ul class="m-sub-group" v-for="(group, index) in nav.groups" :key="index">
                <span class="sub-group-label">{{group.label}}</span>
                <li v-for="(link, index) in group.children" :key="index">
                    <router-link class="nav-link" :to="link.path">{{link.label}}</router-link>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
import navInfo from 'nav.config'

console.log(navInfo)

export default {
    name: 'nav-list',
    data(){
        return {
            navInfo
        }
    }
}
</script>

<style lang="postcss">
.m-nav-list{
    padding-left: 20px;
    .nav-title{
        color: #ccc;
    }
    .nav-item{
        margin-bottom: 20px;
    }
    .nav-title{
        color: #8dabc4;
        font-size: 14px;
    }
    .sub-group-label{
        color: #2c405a;
        font-weight: 700;
    }
    .m-sub-group{
        margin-top: 10px;
        padding-left: 10px;
    }
    .nav-link{
        padding-left: 10px;
        text-decoration: none;
        display: inline-block;
        margin-top: 10px;
        color: #616367;
        &.router-link-active{
            color: #3faaf5;
        }
    }
}
</style>
