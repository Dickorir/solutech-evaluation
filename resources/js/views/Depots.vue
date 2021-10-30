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
                            <li class="breadcrumb-item active" aria-current="page">Depots</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center">
                    <p class="font-weight-bold">Depots</p>
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
                                        <th>Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="depot in getDepots" :key="depot.id">
                                        <td>{{ depot.id }}</td>
                                        <td class="text-capitalize">{{ depot.name }}</td>
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

import {ChevronRightIcon} from 'vue-feather-icons'

export default {
    data: () => ({
        depots: []
    }),
    components: {
        ChevronRightIcon,
    },
    computed: {
        getDepots: {
            get() {
                return this.$store.state.theDepots.depots;
            }
        },

    },
    created() {
        this.$store.dispatch('theDepots/getDepots');
    }
}
</script>
