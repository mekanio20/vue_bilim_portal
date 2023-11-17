<template>
    <Header />
	<Sidebar />
	<LeftSidebar />
	<RightSidebar />
    <div class="main-container">
		<div class="pd-ltr-20">
			<!-- /vendors/images/banner-img.png -->
            <Profile :image="this.image" :fullname="this.fullname" :desc="this.desc"/>
			<div class="row">
				<StatisticBox v-for="item in box" :key="item.id" :name="item.name"/>
			</div>
			<div class="card-box mb-30">
				<h2 class="h4 pd-20">Respisaniya</h2>
				<table class="data-table table nowrap">
					<thead>
						<tr>
							<th class="table-plus datatable-nosort">Product</th>
							<th>Name</th>
							<th>Color</th>
							<th>Size</th>
							<th>Price</th>
							<th>Oty</th>
							<th class="datatable-nosort">Action</th>
						</tr>
					</thead>
					<tbody>
                        <TableRowDers v-for="item in resp" :key="item.id" :name="item.ders"/>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import LeftSidebar from '../components/LeftSidebar.vue'
import RightSidebar from '../components/RightSidebar.vue'
import Select from '../components/Select.vue'
import Profile from '../components/Profile.vue'
import TableRowDers from '../components/layouts/TableRowDers.vue'
import StatisticBox from '../components/layouts/StatisticBox.vue'
export default {
    name: "StudentDetail",
    components: {
	    Header,
	    Sidebar,
	    LeftSidebar,
	    RightSidebar,
	    Select,
        Profile,
        TableRowDers,
        StatisticBox
    },
    data() {
        return {
            box: [
                { id: 1, name: "Gelmediler" },
                { id: 2, name: "Gelmediler" },
                { id: 3, name: "Gelmediler" },
                { id: 4, name: "Gelmediler" }
            ],
            resp: [
                { id: 1, ders: "Rus dili" },
                { id: 2, ders: "Inlis dili" },
                { id: 3, ders: "Programmirleme" }
            ],
			fullname: 'Plany Planyyew Planyyewic',
			desc: 'Lorem ipsum dolar sit amet...',
			image: '/vendors/images/banner-img.png'
        }
    }
}
</script>

<style>
@import '/vendors/styles/core.css';
@import '/vendors/styles/style.css';
@import '/vendors/styles/icon-font.min.css';
@import '/src/plugins/switchery/switchery.min.css';
@import '/src/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css';
@import '/src/plugins/datatables/css/dataTables.bootstrap4.min.css';
@import '/src/plugins/datatables/css/responsive.bootstrap4.min.css';
@import '/src/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.css';
</style>