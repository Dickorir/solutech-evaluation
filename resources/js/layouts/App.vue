<template>
    <div class="layout-wrapper">
        <Header />
        <div class="content-wrapper">
            <Nav />
            <div class="content-body">
                <div class="content">
                    <router-view></router-view>
                </div>
                <Footer />
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Header from '../components/Header.vue'
import Nav from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {
        Header,
        Nav,
        Footer
    },
    computed: {

    },
    created() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");

        // this.$store.dispatch('cu')
    }
}
</script>
