<template>
    <div class="header">
        <div class="header__left">
            <div class="header__burger" onclick="myFunction(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <input class="header__input" type="text" placeholder="Gozleg...">
        </div>
        <div class="header__right">
            <div class="header__image">
                <img class="profile__image" src="../assets/img/photo1.jpg">
            </div>
            <div class="header__fullname">
                Mekan Balyyew
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue']
}
</script>