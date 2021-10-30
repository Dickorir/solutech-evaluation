<template>
    <div class="">
        <div class="page-header">
            <div class="col-md-4">
                <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li> <chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
                            <li class="breadcrumb-item active" aria-current="page">fleets</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center">
                    <p class="font-weight-bold">fleets</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="float-right">
                    <b-button id="show-btn" @click="showModal">Add Fleet <i class="fas fa-plus fa-fw"></i></b-button>
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
                                        <th>Vehicle</th>
                                        <th>Destination</th>
                                        <th>Vehicle Status</th>
                                        <th>Order Status</th>
                                        <th>More</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="fleet in getAllFleets" :key="fleet.id">
                                        <td>{{ fleet.id }}</td>
                                        <td class="text-capitalize">{{ fleet.order }}</td>
                                        <td class="text-capitalize">{{ fleet.vehicle }}</td>
                                        <td class="text-capitalize">{{ fleet.destination_depot }}</td>
                                        <td class="text-capitalize">{{ fleet.vehicle_status }}</td>
                                        <td class="text-capitalize">{{ fleet.order_status }}</td>
                                        <td>

                                            <a href="#" data-id="fleet.id" @click="editModalWindow(fleet)" class="text-secondary btn btn-sm btn-info" data-toggle="tooltip" title="Manage member">
                                                <span style="color: white"><i class="fa fa-edit"></i>&nbsp;&nbsp;Edit</span>
                                            </a>
                                            |
                                            <a href="#" @click="deleteFleet(fleet.id)" class="text-secondary btn btn-sm btn-danger" id="" data-toggle="tooltip" title="Manage member">
                                                <span style="color: white"><i class="fa fa-trash"></i>&nbsp;&nbsp;Delete</span>
                                            </a>

                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <b-modal ref="my-modal" hide-footer title="Add New Flee">
                            <div class="d-block">

                                <form v-on:submit.prevent="saveFleet">
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <label for="">Order</label>
                                            <select class="form-control" v-model="form.order_id" >
                                                <option value="admin">Admin</option>
                                                <option v-for="item in getOrders" :value="item.id" :key="item.id">
                                                    {{ item.order }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="">Order Status</label>
                                            <select class="form-control" v-model="form.delivery_id" >
                                                <option v-for="item in getDeliveries" :value="item.id" :key="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="">Vehicle</label>
                                            <select class="form-control" v-model="form.vehicle_id" >
                                                <option v-for="item in getVehicles" :value="item.id" :key="item.id">
                                                    {{ item.number_plate }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="">Vehicle Status</label>
                                            <select class="form-control" v-model="form.stage_id" >
                                                <option v-for="item in getStages" :value="item.id" :key="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="">Destination Depot</label>
                                            <select class="form-control" v-model="form.depot_id" >
                                                <option v-for="item in getDepots" :value="item.id" :key="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="submit"
                                            class="btn btn-primary btn-block"><span id="create">Submit</span>
                                    </button>

                                </form>

                            </div>
                            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                        </b-modal>

                        <b-modal ref="edit-modal" hide-footer title="Edit Fleet">
                            <div class="d-block">

                                <form v-on:submit.prevent="saveFleet">
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <label for="">Order</label>
                                            <select class="form-control" v-model="form.order_id" >
                                                <option value="admin">Admin</option>
                                                <option v-for="item in getOrders" :value="item.id" :key="item.id">
                                                    {{ item.order }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="">Order Status</label>
                                            <select class="form-control" v-model="form.delivery_id" >
                                                <option v-for="item in getDeliveries" :value="item.id" :key="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="">Vehicle</label>
                                            <select class="form-control" v-model="form.vehicle_id" >
                                                <option v-for="item in getVehicles" :value="item.id" :key="item.id">
                                                    {{ item.number_plate }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="">Vehicle Status</label>
                                            <select class="form-control" v-model="form.stage_id" >
                                                <option v-for="item in getStages" :value="item.id" :key="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="">Destination Depot</label>
                                            <select class="form-control" v-model="form.depot_id" >
                                                <option v-for="item in getDepots" :value="item.id" :key="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="submit"
                                            class="btn btn-primary btn-block"><span id="update">update</span>
                                    </button>

                                </form>

                            </div>
                            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                        </b-modal>



                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import axios from "axios";
import {ChevronRightIcon} from 'vue-feather-icons'

export default {
    data: () => ({
        editMode: false,
        fleets: {},
        status: false,
        form: {
            order_id : '',
            delivery_id : '',
            vehicle_id : '',
            stage_id : '',
        }
    }),
    components: {
        ChevronRightIcon,
    },
    computed: {
        getAllFleets: {
            get() {
                return this.$store.state.theFleets.fleets;
            }
        },
        getVehicles: {
            get() {
                return this.$store.state.theVehicles.vehicles;
            }
        },
        getDepots: {
            get() {
                return this.$store.state.theDepots.depots;
            }
        },
        getDeliveries: {
            get() {
                return this.$store.state.theDeliveries.deliveries;
            }
        },
        getStages: {
            get() {
                return this.$store.state.theStages.stages;
            }
        },
        getOrders: {
            get() {
                return this.$store.state.theOrders.orders;
            }
        },
    },
    created() {
        this.$store.dispatch('theFleets/getFleets');
        this.$store.dispatch('theVehicles/getVehicles');
        this.$store.dispatch('theDepots/getDepots');
        this.$store.dispatch('theDeliveries/getDeliveries');
        this.$store.dispatch('theStages/getStages');
        this.$store.dispatch('theOrders/getOrders');
    },
    methods: {
        showModal() {
            this.$refs['my-modal'].show();
            /*toastr.success('Noma sana Mabuda')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })*/
        },
        hideModal() {
            this.$refs['my-modal'].hide()
            this.$refs['edit-modal'].hide()
        },
        editModalWindow(fleet) {
            // this.form.clear();
            // this.editMode = true
            // this.form.reset();
            this.$refs['edit-modal'].show();
            this.form.fill(fleet)
        },
        saveFleet(){
            axios.post('/api/fleet', this.form)
                .then(response => {
                    // console.log(response.data.success)
                    if (response.data.success === true) {
                        this.$refs['my-modal'].hide();
                        toastr.success('Fleet Saved Successful', 'Success');
                        this.$store.dispatch('theFleets/getFleets');
                    }
                })
                .catch(error => {
                    // console.log(error.response.data.success)
                    toastr.error(error.response.data.data, 'Error')
                });
        },
        deleteFleet(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {

                if (result.value) {
                    //Send Request to server
                    axios.delete(`/api/fleet/${id}`)

                        .then((response)=> {
                            Swal.fire(
                                'Deleted!',
                                'User deleted successfully',
                                'success'
                            )
                            // toastr.success('Fleet Saved Successful', 'Success');
                            this.$store.dispatch('theFleets/getFleets');

                        }).catch(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href>Why do I have this issue?</a>'
                        })
                    })
                }

            })
        }
    }
}
</script>
