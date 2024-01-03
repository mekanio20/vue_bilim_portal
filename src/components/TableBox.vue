<template>
    <div class="main__box">
        <div class="box__left">
            <div class="box__title">Students</div>
            <div class="box__links">
                <a href="/">Home</a>
                <span>></span>
                <a href="/students">Students</a>
            </div>
        </div>
        <div class="box__right">January 2023</div>
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
        }
    },
    emits: ['update:modelValue']
}
</script>