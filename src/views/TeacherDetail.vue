<template>
    <div class="wrapper">
        <Header />
        <div class="main">
            <div class="detail">
                <div class="_main__detail">
                    <SidebarRow v-for="item in sidebar" :key="item.title" :title="item.title" :img="item.img" />
                </div>
                <div class="main__detail">
                    <div class="detail__left">
                        <div class="detail__img">
                            <img :src="$image('img/photo1.jpg')">
                        </div>
                        <button class="detail__button">Üýtgetmek</button>
                    </div>
                    <div class="detail__right">
                        <InputRow :title="input[0].title" :type="input[0].type" :name="input[0].name" />
                        <SelectRow :title="select[0].title" :name="select[0].name" :options="select[0].options" />
                        <SelectRow :title="select[1].title" :name="select[1].name" :options="select[1].options" />
                        <InputRow :title="input[1].title" :type="input[1].type" :name="input[1].name" />
                        <InputRow :title="input[2].title" :type="input[2].type" :name="input[2].name" />
                        <SelectRow :title="select[2].title" :name="select[2].name" :options="select[2].options" />
                        <InputRow :title="input[3].title" :type="input[3].type" :name="input[3].name" :disabled="true" />
                        <div class="detail__row">
                            <button class="detail__button">Üýtgetmek</button>
                        </div>
                    </div>
                </div>
            </div>
            <Statistic :title="statistic" />
            <Table :title="table" />
        </div>
    </div>
</template>

<script>
import Table from '@/components/Table.vue'
import Header from '@/components/Header.vue'
import Statistic from '@/components/Statistic.vue'
import SidebarRow from '@/components/layout/SidebarRow.vue'
import InputRow from '@/components/layout/InputRow.vue'
import SelectRow from '../components/layout/SelectRow.vue'
export default {
    name: "TeacherDetail",
    components: {
        Header,
        Table,
        Statistic,
        SidebarRow,
        InputRow,
        SelectRow
    },
    data() {
        return {
            statistic: 'Mugallym görkezmeler',
            table: 'Üstünlikler',
            sidebar: [
                { title: "Üstünlikler", img: "svg/winner-cup.svg" },
                { title: "Wideo Ýazgylar", img: "svg/play-button.svg" },
                { title: "Prezentasiýalar", img: "svg/mac-folder.svg" }
            ],
            input: [
                { title: "Doly ady", type: "text", name: "fullname" },
                { title: "Telefon belgisi", type: "text", name: "phone" },
                { title: "Doglan senesi", type: "date", name: "birthday" },
                { title: "Ball", type: "text", name: "point" }
            ],
            select: [
                { 
                    title: "Fakulteti",
                    name: "faculty",
                    options: [
                        { id: 1, option: 'Kompyuter tehnologiyasy we awtomatika' },
                        { id: 2, option: 'Himiya tehnologiyasy' },
                        { id: 3, option: 'Binagarlik-Gurlushyk' }
                    ]   
                },
                { 
                    title: "Kafedrasy",
                    name: "department",
                    options: [
                        { id: 1, option: 'Kompyuter tehnologiyasy we ulgamlary' },
                        { id: 2, option: 'Maglumatlary olceyish tehnikasy we tehnologiasy' },
                        { id: 3, option: 'Senafat jay gurlushygy' }
                    ]   
                },
                { 
                    title: "Derejesi",
                    name: "level",
                    options: [
                        { id: 1, option: 'Owrenji Mugallym' },
                        { id: 2, option: 'Mugallym' },
                        { id: 3, option: 'Uly Mugallym' }
                    ]   
                }
            ]
        }
    }
}
</script>

<style>
@import '../assets/css/detail.css';
@import '../assets/css/faculty.css';
</style>