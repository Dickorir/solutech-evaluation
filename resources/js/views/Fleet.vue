<template>
    <div class="">
        <div class="page-header">
            <div class="col-md-4">
                <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">orders</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center">
                    <p class="font-weight-bold">orders</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">

                <div class="row">
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-body " id="index-table">

                                <table id="group-tb" class="table table-striped table-sm">
                                    <thead>
                                    <tr class="text-dark">
                                        <th>#</th>
                                        <th>Year</th>
                                        <th>Status</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="product in getAllOrders" :key="product.id">
                                        <td class="text-center">3</td>
                                        <td>{{ product.id }}</td>
                                        <td class="text-capitalize">{{ product.year }}</td>
                                        <td class="text-capitalize">{{ product.status }}</td>
                                        <td class="text-capitalize">{{ product.start_date }}</td>
                                        <td class="text-capitalize">{{ product.end_date }}</td>
                                        <td>
                                            <a href="" class="text-secondary btn btn-sm btn-info" id="" data-toggle="tooltip" title="Manage member">
                                                <span style="color: white"><i class="fa fa-tasks"></i>&nbsp;&nbsp;Assign</span>
                                            </a>
                                            <button class="btn btn-success" data-toggle="modal" data-target="#addNew" @click="openModalWindow">Add New <i class="fas fa-user-plus fa-fw"></i></button>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    </tfoot>
                                </table>
                            </div>
                        </div>


                        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">

                                        <h5 class="modal-title" id="addNewLabel">Add New User</h5>

                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div class="modal-body view-body">
                                        <div class="row" id="info">
                                            <div class="col-md-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        Nomare
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            editMode: false,
            products: []
        }
    },
    computed: {
      getAllOrders: {
          get() {
              return this.$store.state.theOrders.orders;
          }
      }
    },
    created() {
        this.$store.dispatch('theOrders/getOrders')

        // axios
        //     .get('http://bursary_v2.io/api/v1/periods')
        //     .then(response => {
        //         this.products = response.data.data;
        //     });
    },
    methods: {
        openModalWindow(){
            this.editMode = false
            this.form.reset();
            $('#addNew').modal('show');
        },
    }
}
</script>
