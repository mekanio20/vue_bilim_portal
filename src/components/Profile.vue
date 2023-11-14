<template>
    <div class="card-box pd-20 height-100-p mb-30">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img alt="image" />
            </div>
            <div class="col-md-8">
                <h4 class="font-20 weight-500 mb-10 text-capitalize">
                    Hosh geldiniz!
                    <div class="weight-600 font-30 text-blue">{{ fullname }}</div>
                </h4>
                <p class="font-18 max-width-600">{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        props: {
            image: {
                type: String,
                default: ''
            },
            fullname: {
                type: String,
                default: ''
            },
            desc: {
                type: String,
                default: ''
            }
        }
    }
</script>