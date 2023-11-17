<template>
	<Header />
	<Sidebar />
	<LeftSidebar />
	<RightSidebar />
    <div class="main-container">
			<div class="pd-ltr-20">
				<Profile :image="this.image" :fullname="this.fullname" :desc="this.desc"/>
				<div class="row">
					<StatisticBox :name="this.dekanat" />
					<StatisticBox :name="this.talyplar" />
					<StatisticBox :name="this.toparlar" />
					<StatisticBox :name="this.bahalandyrma" />
				</div>
				<div class="row" style="justify-content: center;">
					<div class="col-xl-8 mb-30">
						<div class="card-box height-100-p pd-20">
							<h2 class="h4 mb-20">Gorkeziji</h2>
							<div id="chart5"></div>
						</div>
					</div>
				</div>
				<div class="card-box mb-30 pd-20">
					<h2 class="h4 pd-20">Toparlar</h2>
					<table class="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th scope="col">Bolum</th>
								<th scope="col">Topar</th>
								<th scope="col">Yyly</th>
								<th scope="col">Kurator</th>
								<th scope="col" class="datatable-nosort">Action</th>
							</tr>
						</thead>
						<tbody>
							<TableRowTopar v-for="item in topar" :id="item.id" :hunar="item.hunar" :ugur="item.ugur" :year="item.year" :kurator="item.kurator" />
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
	import Profile from '../components/Profile.vue'
	import TableRowTopar from '../components/layouts/TableRowTopar.vue'
	import StatisticBox from '../components/layouts/StatisticBox.vue'
    export default {
		name: "Faculty",
		components: {
			Header,
			Sidebar,
			LeftSidebar,
			RightSidebar,
			Profile,
			TableRowTopar,
			StatisticBox
		},
        data() {
            return {
				fullname: '"Dekanyn ady"!',
				desc: 'Kompyuter tehnologiyasy we awtomatika fakultetinin dekany',
				topar: [
					{ id: 1, hunar: 'hunar', ugur: 'MTPU', year: '2003', kurator: 'Gylyjowa. M' },
					{ id: 1, hunar: 'hunar', ugur: 'MTPU', year: '2003', kurator: 'Gylyjowa. M' },
					{ id: 1, hunar: 'hunar', ugur: 'MTPU', year: '2003', kurator: 'Gylyjowa. M' },
					{ id: 1, hunar: 'hunar', ugur: 'MTPU', year: '2003', kurator: 'Gylyjowa. M' },
					{ id: 1, hunar: 'hunar', ugur: 'MTPU', year: '2003', kurator: 'Gylyjowa. M' },
					{ id: 1, hunar: 'hunar', ugur: 'MTPU', year: '2003', kurator: 'Gylyjowa. M' },
					{ id: 1, hunar: 'hunar', ugur: 'MTPU', year: '2003', kurator: 'Gylyjowa. M' },
					{ id: 1, hunar: 'hunar', ugur: 'MTPU', year: '2003', kurator: 'Gylyjowa. M' },
					{ id: 1, hunar: 'hunar', ugur: 'MTPU', year: '2003', kurator: 'Gylyjowa. M' },
					{ id: 1, hunar: 'hunar', ugur: 'MTPU', year: '2003', kurator: 'Gylyjowa. M' }
				],
				dekanat: 'Dekanat',
				talyplar: 'Talyplar',
				toparlar: 'Toparlar',
				bahalandyrma: 'Bahalandyrma'
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