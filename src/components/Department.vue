<template>
    <div class="main__department">
        <div class="department__box">
            <div class="department__header">
                <div class="department__title">Kafedra Bahalandyrmalar</div>
                <span class="department__button">---</span>
            </div>
            <div class="department__body">
                <div class="department__item">
                    <div class="item__id">#1</div>
                    <div class="item__title">
                        <div class="item__rating">4.9</div>
                        <div class="item__title">MUT</div>
                        <div class="item__faculty">KTAF</div>
                    </div>
                    <div class="item__link">Detail</div>
                </div>
                <div class="department__item">
                    <div class="item__id">#2</div>
                    <div class="item__title">
                        <div class="item__rating">4.9</div>
                        <div class="item__title">MUT</div>
                        <div class="item__faculty">KTAF</div>
                    </div>
                    <div class="item__link">Detail</div>
                </div>
                <div class="department__item">
                    <div class="item__id">#3</div>
                    <div class="item__title">
                        <div class="item__rating">4.9</div>
                        <div class="item__title">MUT</div>
                        <div class="item__faculty">KTAF</div>
                    </div>
                    <div class="item__link">Detail</div>
                </div>
                <div class="department__item">
                    <div class="item__id">#4</div>
                    <div class="item__title">
                        <div class="item__rating">4.9</div>
                        <div class="item__title">MUT</div>
                        <div class="item__faculty">KTAF</div>
                    </div>
                    <div class="item__link">Detail</div>
                </div>
            </div>
        </div>
        <div class="department__box">
            <div class="department__header">
                <div class="department__title">Kafedra statistic</div>
                <span class="department__button">---</span>
            </div>
            <div class="department__body">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Department",
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