<template>
	<Header />
	<Sidebar />
	<LeftSidebar />
	<RightSidebar />
    
</template>

<script>
	import Header from '../components/Header.vue'
	import Sidebar from '../components/Sidebar.vue'
	import LeftSidebar from '../components/LeftSidebar.vue'
	import RightSidebar from '../components/RightSidebar.vue'
    export default {
		components: {
			Header,
			Sidebar,
			LeftSidebar,
			RightSidebar
		},
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>
    @import '../assets/css/core.css';
    @import '../assets/css/icon-font-min.css';
    @import '../assets/css/dataTables.bootstrap4.min.css';
    @import '../assets/css/responsive.bootstrap4.min.css';
    @import '../assets/css/style.css';
</style>