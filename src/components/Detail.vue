<template>
    <div class="detail">
        <div class="_main__detail">
            <a class="_detail__row" href="#">
                <div class="_detail__icon">
                    <img src="../assets/svg/winner-cup.svg">
                </div>
                <div class="_detail__link">
                    Üstünlikler
                </div>
            </a>
            <a class="_detail__row" href="#">
                <div class="_detail__icon">
                    <img src="../assets/svg/play-button.svg">
                </div>
                <div class="_detail__link">
                    Wideo Yazgylar
                </div>
            </a>
            <a class="_detail__row" href="#">
                <div class="_detail__icon">
                    <img src="../assets/svg/mac-folder.svg">
                </div>
                <div class="_detail__link">
                    Prezentasiyalar
                </div>
            </a>
        </div>
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
                    <label for="">Telefon belgisi</label>
                    <input type="text">
                </div>
                <div class="detail__row">
                    <label for="">Doglan senesi</label>
                    <input type="date">
                </div>
                <div class="detail__row">
                    <label for="">Derejesi</label>
                    <select type="text">
                        <option value="">Owrenji Mugallym</option>
                        <option value="">Mugallym</option>
                        <option value="">Uly Mugallym</option>
                        <option value="">Dosent</option>
                        <option value="">Professor</option>
                    </select>
                </div>
                <div class="detail__row">
                    <label for="">Ball</label>
                    <input type="text" disabled>
                </div>
                <div class="detail__row">
                    <button class="detail__button">Üýtgetmek</button>
                </div>
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