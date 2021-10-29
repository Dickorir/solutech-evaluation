<template>
    <body class="form-membership" style="background-image: url('../../assets/img/cover.jpg')">
    <div class="form-wrapper">
        <!-- logo -->
        <div id="logo" style="margin-top:-30px;">
            <img class="logo" :src="'../../assets/media/image/logo.png'" alt="logo" style="width:300px;margin-bottom:-30px;">

        </div>
        <!-- ./ logo -->

        <h5>Sign in</h5>
            <router-view> </router-view>


    </div>
    </body>
</template>

<script>
    export default {
        name:'GuestLayout',
    };
</script>
