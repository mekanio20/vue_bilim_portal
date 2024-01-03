<template>
    <div class="main__statistic">
        <div class="main__title">
            {{ title }}
        </div>
        <div class="main__cards">
            <div class="card">
                <div class="card__left">
                    <div class="card__number">75</div>
                    <div class="card__title">Mugallymlar</div>
                </div>
                <div class="card__right"></div>
            </div>
            <div class="card">
                <div class="card__left">
                    <div class="card__number">124,551</div>
                    <div class="card__title">Talyplar</div>
                </div>
                <div class="card__right"></div>
            </div>
            <div class="card">
                <div class="card__left">
                    <div class="card__number">4002</div>
                    <div class="card__title">Üstünlikler</div>
                </div>
                <div class="card__right"></div>
            </div>
            <div class="card">
                <div class="card__left">
                    <div class="card__number">1560</div>
                    <div class="card__title">Gelmediler</div>
                </div>
                <div class="card__right"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Statistic",
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