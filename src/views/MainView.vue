<template>
    <div class="wrapper">
        <Header />
        <div class="main">
            <Statistic />
            <Department />
            <Table />
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Statistic from '@/components/Statistic.vue'
    import Department from '@/components/Department.vue'
    import Table from '@/components/Table.vue'
    export default {
        name: "Main",
        components: {
            Header,
            Statistic,
            Department,
            Table
        }
    }
</script>