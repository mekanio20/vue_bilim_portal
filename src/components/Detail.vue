<template>
    <div class="main__detail">
        <div class="detail__left">
            <div class="detail__img">
                <img src="../assets/img/photo1.jpg">
            </div>
            <button class="detail__button">Üýtgetmek</button>
        </div>
        <div class="detail__right">
            <div class="detail__row">
                <label for="">Doly ady</label>
                <input type="text">
            </div>
            <div class="detail__row">
                <label for="">Fakulteti</label>
                <select type="text">
                    <option value="KTAF">Kompyuter tehnologiyasy we awtomatika</option>
                    <option value="KTAF">Kompyuter tehnologiyasy we awtomatika</option>
                    <option value="KTAF">Kompyuter tehnologiyasy we awtomatika</option>
                    <option value="KTAF">Kompyuter tehnologiyasy we awtomatika</option>
                </select>
            </div>
            <div class="detail__row">
                <label for="">Kafedrasy</label>
                <select type="text">
                    <option value="KTU">Kompyuter tehnologiyasy we ulgamlary</option>
                    <option value="KTU">Kompyuter tehnologiyasy we ulgamlary</option>
                    <option value="KTU">Kompyuter tehnologiyasy we ulgamlary</option>
                    <option value="KTU">Kompyuter tehnologiyasy we ulgamlary</option>
                </select>
            </div>
            <div class="detail__row">
                <label for="">Topary</label>
                <select type="text">
                    <option value="MTPU">MTPU</option>
                    <option value="MTPU">MTPU</option>
                    <option value="MTPU">MTPU</option>
                    <option value="MTPU">MTPU</option>
                </select>
            </div>
            <div class="detail__row">
                <label for="">Telefon belgisi</label>
                <input type="text">
            </div>
            <div class="detail__row">
                <label for="">Doglan senesi</label>
                <input type="date">
            </div>
            <div class="detail__row">
                <button class="detail__button">Üýtgetmek</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Detail",
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