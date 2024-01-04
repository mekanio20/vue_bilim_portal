<template>
    <div class="header">
        <div class="sidenav">
            <a class="closebtn" href="javascript:void(0)" @click="closeNav()">&times;</a>
            <a class="sidenav__item" href="/">Home</a>
            <a class="sidenav__item" href="/login">Login</a>
            <a class="sidenav__item" href="/register">Register</a>
            <a class="sidenav__item" href="/faculty">Fakultetler</a>
            <a class="sidenav__item" href="/teachers">Teachers</a>
            <a class="sidenav__item" href="/students">Students</a>
        </div>
        <div class="header__left">
            <div class="header__burger" @click="openNav()">
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
    methods: {
        async openNav() {
            try {
                document.getElementsByClassName("sidenav")[0].style.width = "250px"
            } catch (error) {
                console.log(error)
            }
        },
        async closeNav() {
            try {
                document.getElementsByClassName("sidenav")[0].style.width = "0"
            } catch (error) {
                console.log(error)
            }
        }
    },
    emits: ['update:modelValue']
}
</script>

<style>
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #334148;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav__item {
    padding: 20px 10px 20px 30px;
    text-decoration: none;
    color: #818181;
    font-size: 25px;
    transition: 0.3s;
    align-items: center;
    display: flex;

}

.sidenav__item:hover {
    color: #f1f1f1;
}

.closebtn {
    position: absolute;
    padding-top: 12px;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    color: #818181;
}
</style>