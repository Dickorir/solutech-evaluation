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
                            <li class="breadcrumb-item active" aria-current="page">Vehicles</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center">
                    <p class="font-weight-bold">Vehicles</p>
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
                                        <th>Number Plate</th>
                                        <th>Vehicle Status</th>
                                        <th>Depot</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="item in getVehicles" :key="item.id">
                                        <td>{{ item.id }}</td>
                                        <td class="text-capitalize">{{ item.number_plate }}</td>
                                        <td class="text-capitalize">{{ item.stage }}</td>
                                        <td class="text-capitalize">{{ item.depot }}</td>
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
        getVehicles: {
            get() {
                return this.$store.state.theVehicles.vehicles;
            }
        }
    },
    created() {
        this.$store.dispatch('theVehicles/getVehicles');
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
