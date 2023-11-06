<template>
	<Header />
	<Sidebar />
	<LeftSidebar />
	<RightSidebar />
    <div class="main-container">
			<div class="pd-ltr-20">
				<div class="card-box pd-20 height-100-p mb-30">
					<div class="row align-items-center">
						<div class="col-md-4">
							<img src="../assets/images/banner-img.png" alt="" />
						</div>
						<div class="col-md-8">
							<h4 class="font-20 weight-500 mb-10 text-capitalize">
								Hosh geldiniz!
								<div class="weight-600 font-30 text-blue">"Dekanyn ady"!</div>
							</h4>
							<p class="font-18 max-width-600">
								Kompyuter tehnologiyasy we awtomatika fakultetinin
								dekany
							</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-3 mb-30">
						<div class="card-box height-100-p widget-style1">
							<div class="d-flex flex-wrap align-items-center">
								<div class="progress-data">
									<div id="chart"></div>
								</div>
								<div class="widget-data">
									<div class="h4 mb-0">21</div>
									<div class="weight-600 font-14">Dekanat</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 mb-30">
						<div class="card-box height-100-p widget-style1">
							<div class="d-flex flex-wrap align-items-center">
								<div class="progress-data">
									<div id="chart2"></div>
								</div>
								<div class="widget-data">
									<div class="h4 mb-0">314</div>
									<div class="weight-600 font-14">Talyplar</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 mb-30">
						<div class="card-box height-100-p widget-style1">
							<div class="d-flex flex-wrap align-items-center">
								<div class="progress-data">
									<div id="chart3"></div>
								</div>
								<div class="widget-data">
									<div class="h4 mb-0">45</div>
									<div class="weight-600 font-14">Toparlar</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 mb-30">
						<div class="card-box height-100-p widget-style1">
							<div class="d-flex flex-wrap align-items-center">
								<div class="progress-data">
									<div id="chart4"></div>
								</div>
								<div class="widget-data">
									<div class="h4 mb-0">450</div>
									<div class="weight-600 font-14">Bahalandyrma</div>
								</div>
							</div>
						</div>
					</div>
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
							<tr>
								<th scope="row">1</th>
								<td><a href="#">hunar</a></td>
								<td><a href="#">MTPU</a></td>
								<td><a href="#">2021</a></td>
								<td><a href="#">Gylyjowa. M</a></td>
								<td>
									<div class="dropdown">
										<a
											class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
											href="#"
											role="button"	
											data-toggle="dropdown"
										>
											<i class="dw dw-more"></i>
										</a>
										<div
											class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
										>
											<a class="dropdown-item" href="#"
												><i class="dw dw-eye"></i> View</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-edit2"></i> Edit</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-delete-3"></i> Delete</a
											>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">1</th>
								<td><a href="#">hunar</a></td>
								<td><a href="#">MTPU</a></td>
								<td><a href="#">2021</a></td>
								<td><a href="#">Gylyjowa. M</a></td>
								<td>
									<div class="dropdown">
										<a
											class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
											href="#"
											role="button"
											data-toggle="dropdown"
										>
											<i class="dw dw-more"></i>
										</a>
										<div
											class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
										>
											<a class="dropdown-item" href="#"
												><i class="dw dw-eye"></i> View</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-edit2"></i> Edit</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-delete-3"></i> Delete</a
											>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">1</th>
								<td><a href="#">hunar</a></td>
								<td><a href="#">MTPU</a></td>
								<td><a href="#">2021</a></td>
								<td><a href="#">Gylyjowa. M</a></td>
								<td>
									<div class="dropdown">
										<a
											class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
											href="#"
											role="button"
											data-toggle="dropdown"
										>
											<i class="dw dw-more"></i>
										</a>
										<div
											class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
										>
											<a class="dropdown-item" href="#"
												><i class="dw dw-eye"></i> View</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-edit2"></i> Edit</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-delete-3"></i> Delete</a
											>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">1</th>
								<td><a href="#">hunar</a></td>
								<td><a href="#">MTPU</a></td>
								<td><a href="#">2021</a></td>
								<td><a href="#">Gylyjowa. M</a></td>
								<td>
									<div class="dropdown">
										<a
											class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
											href="#"
											role="button"
											data-toggle="dropdown"
										>
											<i class="dw dw-more"></i>
										</a>
										<div
											class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
										>
											<a class="dropdown-item" href="#"
												><i class="dw dw-eye"></i> View</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-edit2"></i> Edit</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-delete-3"></i> Delete</a
											>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">1</th>
								<td><a href="#">hunar</a></td>
								<td><a href="#">MTPU</a></td>
								<td><a href="#">2021</a></td>
								<td><a href="#">Gylyjowa. M</a></td>
								<td>
									<div class="dropdown">
										<a
											class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
											href="#"
											role="button"
											data-toggle="dropdown"
										>
											<i class="dw dw-more"></i>
										</a>
										<div
											class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
										>
											<a class="dropdown-item" href="#"
												><i class="dw dw-eye"></i> View</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-edit2"></i> Edit</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-delete-3"></i> Delete</a
											>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">1</th>
								<td><a href="#">hunar</a></td>
								<td><a href="#">MTPU</a></td>
								<td><a href="#">2021</a></td>
								<td><a href="#">Gylyjowa. M</a></td>
								<td>
									<div class="dropdown">
										<a
											class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
											href="#"
											role="button"
											data-toggle="dropdown"
										>
											<i class="dw dw-more"></i>
										</a>
										<div
											class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
										>
											<a class="dropdown-item" href="#"
												><i class="dw dw-eye"></i> View</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-edit2"></i> Edit</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-delete-3"></i> Delete</a
											>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">1</th>
								<td><a href="#">hunar</a></td>
								<td><a href="#">MTPU</a></td>
								<td><a href="#">2021</a></td>
								<td><a href="#">Gylyjowa. M</a></td>
								<td>
									<div class="dropdown">
										<a
											class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
											href="#"
											role="button"
											data-toggle="dropdown"
										>
											<i class="dw dw-more"></i>
										</a>
										<div
											class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
										>
											<a class="dropdown-item" href="#"
												><i class="dw dw-eye"></i> View</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-edit2"></i> Edit</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-delete-3"></i> Delete</a
											>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th scope="row">1</th>
								<td><a href="#">hunar</a></td>
								<td><a href="#">MTPU</a></td>
								<td><a href="#">2021</a></td>
								<td><a href="#">Gylyjowa. M</a></td>
								<td>
									<div class="dropdown">
										<a
											class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
											href="#"
											role="button"
											data-toggle="dropdown"
										>
											<i class="dw dw-more"></i>
										</a>
										<div
											class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
										>
											<a class="dropdown-item" href="#"
												><i class="dw dw-eye"></i> View</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-edit2"></i> Edit</a
											>
											<a class="dropdown-item" href="#"
												><i class="dw dw-delete-3"></i> Delete</a
											>
										</div>
									</div>
								</td>
							</tr>
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