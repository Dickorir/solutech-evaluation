<template>
    <body class="form-membership" style="background-image: url('../../assets/img/cover.jpg')">
    <div class="form-wrapper">
        <!-- logo -->
        <div id="logo" style="margin-top:-30px;">
            <h1 style="color: blue">Solutech Evaluation</h1>
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
