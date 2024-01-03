<template>
    <div class="main__profile">
        <div class="profile__img">
            <img src="../assets/img/photo1.jpg">
        </div>
        <div class="profile__content">
            <div class="profile__title">Johnny Brown!</div>
            <div class="profile__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic non
                repellendus debitis iure, doloremque assumenda. Autem modi, corrupti, nobis ea iure fugiat,
                veniam non quaerat mollitia animi error corporis.</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue']
}
</script>