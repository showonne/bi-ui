<template>
    <div>
        <m-header></m-header>
        <div class="m-container">
            <div class="m-left-nav">
                <nav-list></nav-list>
            </div>
            <div class="m-right-preview">
                <!-- 2 -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import mHeader from 'components/m-header'
import navList from 'components/nav-list'

export default {
    name: 'comp-preview',
    data(){
        return {}
    },
    components: {
        'm-header': mHeader,
        'nav-list': navList
    }
}
</script>

<style lang="postcss">
.m-container{
    margin: 30px auto;
    width: 90%;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,.5);
    display: flex;
    &:after{
        content: '';
        clear: both;
        display: block;
    }
    .m-left-nav{
        margin: 20px 0;
        width: 200px;
    }
    .m-right-preview{
        wdith: 100%;
        flex: 1;
        padding: 20px;
        h1{
            font-size: 24px;
            font-weight: 800;
            line-height: 1.5;
            margin: 20px 0;
        }
        h2{
            font-size: 16px;
            font-weight: 800;
            line-height: 1.5;
            margin: 20px 0;
        }
        hr{
            box-sizing: border-box;
            height: 1px;
            background-color: #c5d9e8;
            border: none;
            margin: 20px 0;
        }
    }
}
.demo-block{
    border: 1px solid #e2ecf4;
    padding: 20px;
    margin-top: 10px;
    &>div{
        &+div{
            margin-top: 10px;
        }
    }
}
.highlight-wrapper pre{
    padding: 14px;
}
.hljs-tag{
    color: #3182bd;
}
.hljs-string{
    color: #756bb1;
}
section p{
    font-size: 14px;
    line-height: 1.5;
    color: #3f536e;
}
.code_inline{
    padding: 0 .5em;
    background: #f7f7f7;
    border: 1px solid #ececec;
    border-radius: 2px;
    font-size: .9em;
}
</style>
