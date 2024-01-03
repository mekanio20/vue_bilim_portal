<template>
    <div class="wrapper">
        <Header />
        <div class="main">
            <Profile />
            <Statistic :title="statistic" />
            <Table :title="table" />
        </div>
    </div>
</template>

<script>
    import Statistic from '@/components/Statistic.vue'
    import Header from '@/components/Header.vue'
    import Table from '@/components/Table.vue'
    import Profile from '@/components/Profile.vue'
    export default {
        name: "Faculty",
        components: {
            Statistic,
            Header,
            Table,
            Profile
        },
        data() {
            return {
                statistic: 'Fakultet görkezmeler',
                table: 'Mugallym Bahalandyrmalar'
            }
        }
    }
</script>

<style>
@import '../assets/css/faculty.css';
</style>