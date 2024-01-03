<template>
    <div class="main__box">
        <div class="box__left">
            <div class="box__title">{{ title }}</div>
            <div class="box__links">
                <a href="/">Home</a>
                <span>></span>
                <a :href="link">{{ title }}</a>
            </div>
        </div>
        <div class="box__right">{{ date }}</div>
    </div>
</template>

<script>
export default {
    name: "TableBox",
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue']
}
</script>