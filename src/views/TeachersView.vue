<template>
    <Header />
    <Sidebar />
    <LeftSidebar />
    <RightSidebar />
    <div class="mobile-menu-overlay"></div>
    <div class="main-container">
        <div class="pd-ltr-20 xs-pd-20-10">
            <div class="min-height-200px">
                <div class="page-header">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <div class="title">
                                <h4>DataTable</h4>
                            </div>
                            <nav aria-label="breadcrumb" role="navigation">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        DataTable
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div class="col-md-6 col-sm-12 text-right">
                            <div class="dropdown">
                                <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                    January 2018
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="#">Export List</a>
                                    <a class="dropdown-item" href="#">Policies</a>
                                    <a class="dropdown-item" href="#">View Assets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Simple Datatable start -->
                <div class="card-box mb-30">
                    <div class="pd-20">
                        <h4 class="text-blue h4">Data Table Simple</h4>
                    </div>
                    <div class="pb-20">
                        <table class="data-table table stripe hover nowrap">
                            <thead>
                                <tr>
                                    <th class="table-plus datatable-nosort">Name</th>
                                    <th>Age</th>
                                    <th>Office</th>
                                    <th>Address</th>
                                    <th>Start Date</th>
                                    <th class="datatable-nosort">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRowTeacher v-for="item in 10" :key="item" />
                            </tbody>
                        </table>
                    </div>
                </div>
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
import TableRowTeacher from '../components/layouts/TableRowTeacher.vue'
export default {
    name: "Teacher",
    components: {
        Header,
        Sidebar,
        LeftSidebar,
        TableRowTeacher,
        RightSidebar,
        Select,
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