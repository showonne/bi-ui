<template>
    <div class="bi-button" :class="['bi-button--' + type]"><slot></slot></div>
</template>

<script>
export default {
    name: 'bi-button',
    data(){
        return {}
    },
    props: {
        type: {
            type: String,
            default: 'default'
        }
    }
}
</script>
