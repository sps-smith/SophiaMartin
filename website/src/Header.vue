<template>
    <!-- <div class="myNav">
        <div class="headBanner">
            <div class="container">
                <b-navbar toggleable="md" type="dark" variant="" fixed="top">

                    <b-nav-toggle target="nav_collapse" position="right"></b-nav-toggle>

                    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

                    <!-- <b-collapse is-nav id="nav_collapse">

                            <b-nav-item> <router-link :to="`/Contact`" >Contact</router-link></b-nav-item>
                            <b-nav-item> <router-link :to="`/Books`" >Books</router-link></b-nav-item>
                            <b-nav-item> <router-link :to="`/Sermons`" >Sermons</router-link></b-nav-item>
                        </b-nav>
                           <b-nav is-nav-bar>
                            <b-nav-item> <router-link to="/Home" exact>Home</router-link></b-nav-item>
                            <b-nav-item> <router-link :to="`/About`">About</router-link></b-nav-item>                        
                 </b-collapse>
                </b-navbar>
            </div>
        </div>--> 
        <div>
            <Navigation @change="hidediv"></Navigation>

        <div class="banner" :class="{ hideview: menu, setview: !menu}" >
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="imgLogo">
                            <img src="/static/images/img_1284.jpg" class="logo img-responsive img-thumbnail" />
                        </div>
                        <div class="namecss">
                            <h1 class="stitle">Rev. Sophia Martin</h1>
                        </div>
                    </div>                    
                </div>
                 <hr>
            </div>           
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';

    export default{
        name: 'Header',
        data(){
            return {
                menu: false
            }
        },
        methods:{
            hidediv(st){
                this.menu = st;
            }
        },

        components:{
            'Navigation': Navigation
        }
    }
</script>

<style scoped>
.setview
{
    display: block;
}
.hideview
{
    display: none;
}
.logo {
    max-width: 180px;
}
.namecss
{
    max-width: 600px;
    padding-top: 50px;
}
div.imgLogo
{
    float: left;
    margin-top:15px;
}    
li.nav-item a.nav-link a.router-link-exact-active {
    color:#fff;
}
.banner
{
    position:fixed;
    width:100%;
    background: #fff;
    margin-top:-10px;
    z-index: 1;
}
@media (max-width: 320px) {
    .namecss h1
    {
        font-size:24pt;
    }
}
@media (max-width: 425px) {
    div.imgLogo
    {
        float: none;
    }  
    .namecss
    {
        max-width: 400px;
        padding-top: 0;
    }
    .banner
    {
        position: relative;
        z-index: auto;
    }
}
</style>
