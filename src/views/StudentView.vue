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
        name: "Student",
        components: {
            Header,
            Table,
            TableBox
        },
        data() {
            return {
                table: 'Talyplar',
                boxtitle: 'Students',
                link: '/students',
                date: 'Ýanwar 2024'
            }
        }
    }
</script>