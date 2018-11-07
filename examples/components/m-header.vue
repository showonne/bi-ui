<template>
    <header class="m-header">
        <router-link to="/"><div>BI UI</div></router-link>
        <div>
            <router-link to="/components">组件</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'm-header',
    data(){
        return {}
    }
}
</script>

<style lang="postcss">
.m-header{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,.07);
}
</style>
