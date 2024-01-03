<template>
    <div class="wrapper">
        <Header />
        <div class="main">
            <TableBox :title="boxtitle" :link="link" :date="date" />
            <Table :title="table" />
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Table from '@/components/Table.vue'
    import TableBox from '../components/TableBox.vue'
    export default {
        name: "Teacher",
        components: {
            Header,
            Table,
            TableBox
        },
        data() {
            return {
                table: 'Mugallymlar',
                boxtitle: 'Teachers',
                link: '/teachers',
                date: 'Ýanwar 2024'
            }
        }
    }
</script>