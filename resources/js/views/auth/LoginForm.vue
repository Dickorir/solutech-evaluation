<template>
    <form v-on:submit.prevent="login">
        <div class="">
            <h1>
<!--                {{ count }}-->
            </h1>
        </div>
        <div class="form-group">
            <input id="username" type="email" v-model="user.email" class="form-control" required value="" placeholder="Email" autofocus>
        </div>
        <div class="form-group">
            <input id="password" type="password" v-model="user.password" class="form-control" required autocomplete="current-password" placeholder="Password">
        </div>
        <div class="form-group d-flex justify-content-between">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" checked="" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember me</label>
            </div>
            <a href="#">Reset password</a>
        </div>
        <button type="submit" id="submit" name="submit"
                class="btn btn-primary btn-block"><span id="create">Sign in</span>
            <i id="spin" style="display: none" class="fa fa-spinner fa-pulse fa-fw"></i>
        </button>
    </form>
</template>
<script>
import axios from 'axios';

export default {
    data: () => ({
        user: {
            email: "",
            password: ""
        }
    }),
    methods: {
        login() {
            this.$store.dispatch('currentUser/loginUser', this.user)
            /*const data = {
                email: this.user.email,
                password: this.user.password
            };
            axios.post('http://bursary_v2.io/api/v1/login', data).then(response => {
                console.log(response.data.data.token);
                // this.$root.$emit("login", true);
                localStorage.setItem("auth", true);
                localStorage.setItem("user", response.data.data.info);
                localStorage.setItem("token", response.data.data.token);
                this.$router.push({name:"home"})
            }).catch((error) =>{
                this.error=true;
            }); // credentials didn't match*/
        }
    }
}
</script>
