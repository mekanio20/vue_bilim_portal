<template>
    <a class="_detail__row" href="#">
        <div class="_detail__icon">
            <img :src="$image(img)">
        </div>
        <div class="_detail__link">
            {{ title }}
        </div>
    </a>
</template>

<script>
export default {
    name: "SidebarRow",
    props: {
        title: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue']
}
</script>