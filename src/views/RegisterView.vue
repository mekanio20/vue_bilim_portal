<template>
    <div class="wrapper">
        <div class="container">
            <img class="login__img" src="../assets/img/register-page-img.png">
            <div class="login">
                <div class="login__title">Register To Portal</div>
                <div class="login__role">
                    <div class="role">
                        <div class="role__icon">
                            <img src="../assets/svg/briefcase.svg">
                        </div>
                        <div class="role__name">
                            I'm Student
                        </div>
                    </div>
                    <div class="role">
                        <div class="role__icon">
                            <img src="../assets/svg/person.svg">
                        </div>
                        <div class="role__name">
                            I'm Teacher
                        </div>
                    </div>
                </div>
                <div class="login__input">
                    <input class="input" type="text" placeholder="Ulanyjy ady">
                    <input class="input" type="password" placeholder="Paroly">
                    <input class="input" type="text" placeholder="Doly ady">
                    <input class="input" type="text" placeholder="+993">
                </div>
                <div class="login__button">
                    <a class="login__sumbit" href="/">Register</a>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    name: "Register",
    components: {
        Header
    }
}
</script>

<style>
@import '../assets/css/login.css';
</style>