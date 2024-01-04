<template>
    <div class="wrapper">
        <Header />
        <div class="main">
            <Detail />
            <Statistic :title="statistic" />
            <Table :title="table" />
        </div>
    </div>
</template>

<script>
    import Table from '@/components/Table.vue'
    import Header from '@/components/Header.vue'
    import Detail from '@/components/Detail.vue'
    import Statistic from '@/components/Statistic.vue'
    export default {
        name: "StudentDetail",
        components: {
            Header,
            Table,
            Detail,
            Statistic
        },
        data() {
            return {
                table: 'Üstünlikler',
                statistic: 'Talyp görkezmeler'
            }
        }
    }
</script>

<style>
@import '../assets/css/detail.css';
@import '../assets/css/faculty.css';
</style>