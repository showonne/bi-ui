<template>
    <button :disabled="disabled" class="bi-button" :class="['bi-button--' + type, {
        'is-plain': plain, 'is-round': round
    }]" @click="onClick"><slot></slot></button>
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
        },
        disabled: {
            type: Boolean
        },
        round: {
            type: Boolean
        },
        plain: {
            type: Boolean
        }
    },
    methods: {
        onClick(e){
            this.$emit('click', e)
        }
    }
}
</script>
