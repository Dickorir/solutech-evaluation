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
                            <li class="breadcrumb-item active" aria-current="page">Orders</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center">
                    <p class="font-weight-bold">Orders</p>
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
                                        <th>Order</th>
                                        <th>Depot</th>
                                        <th>Vehicle</th>
                                        <th>Order Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="order in getAllOrders" :key="order.id">
                                        <td>{{ order.id }}</td>
                                        <td class="text-capitalize">{{ order.order }}</td>
                                        <td class="text-capitalize">{{ order.depot }}</td>
                                        <td class="text-capitalize">{{ order.vehicle }}</td>
                                        <td class="text-capitalize">{{ order.order_status }}</td>

                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    </tfoot>
                                </table>
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
            orders: []
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
