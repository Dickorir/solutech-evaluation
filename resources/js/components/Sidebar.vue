<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Core</div>
                    <router-link to="/" class="nav-link" exact>
                        <i class="fas fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </router-link>
                    <div class="sb-sidenav-menu-heading">Interface</div>
                    <router-link to="/categories" exact class="nav-link">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>Categories</span>
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
