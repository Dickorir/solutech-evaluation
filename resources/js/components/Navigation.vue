<template>
    <div class="navigation">
        <div class="navigation-menu-body" id="navigation">
            <ul>
                <li>
                    <router-link to="/home" class="load">
                            <span class="nav-link-icon">
                                <pie-chart-icon size="1.5x" className="custom-class"></pie-chart-icon>
                            </span>
                        <span>Dashboard</span>
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
                    <router-link to="#" class="">
                            <span class="nav-link-icon">
                                <i class="fa fa-credit-card"></i>
                            </span>
                        <span>Payments</span>
                    </router-link>
                    <ul>
                        <li>
                            <router-link to="" class="">Payouts</router-link>
                        </li>
                        <li>
                            <router-link to="" class="">Defaulters</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="#" class="">
                            <span class="nav-link-icon">
                                <user-check-icon size="1.5x" className="custom-class"></user-check-icon>
                            </span>
                        <span>Users</span>
                    </router-link>
                    <ul>
                        <li>
                            <router-link  to="">Users</router-link>
                        </li>
                        <li>
                            <router-link  to="">Consumers</router-link>
                        </li>
                        <li>
                            <router-link  to="">Citizens</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="#" class="">
                            <span class="nav-link-icon">
                                <briefcase-icon size="1.5x" className="custom-class"></briefcase-icon>
                            </span>
                        <span>Company</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="">
                            <span class="nav-link-icon">
                                <i class="fa fa-envelope"></i>
                            </span>
                        <span>SMS</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="" class="">
                            <span class="nav-link-icon">
                                <i data-feather="layers"></i>
                                    <activity-icon size="1.5x" className="custom-class"></activity-icon>
                            </span>
                        <span>Reports</span>
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
