<template>
    <div class="navigation">
        <div class="navigation-menu-body" id="navigation">
            <ul>
                <li>
                    <router-link to="/fleet" class="load">
                            <span class="nav-link-icon">
                                <pie-chart-icon size="1.5x" className="custom-class"></pie-chart-icon>
                            </span>
                        <span>Fleet</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/orders" class="">
                            <span class="nav-link-icon">
                                <i class="fa fa-user"></i>
                            </span>
                        <span>Orders</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/vehicles" class="">
                            <span class="nav-link-icon">
                                <i class="fa fa-car"></i>
                            </span>
                        <span>Vehicles</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/depots" class="">
                            <span class="nav-link-icon">
                                <i class="fa fa-building"></i>
                            </span>
                        <span>Depots</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {ActivityIcon,PieChartIcon,UsersIcon,BriefcaseIcon,UserCheckIcon} from 'vue-feather-icons'

export default {
    components: {
        ActivityIcon,
        PieChartIcon,
        UsersIcon,
        BriefcaseIcon,
        UserCheckIcon,
    }
}
</script>
