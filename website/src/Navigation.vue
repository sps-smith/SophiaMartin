<template>
    <div class="myNav">
        <div class="headBanner">
            <div class="container">
                <b-navbar toggleable="md" type="dark" variant="" fixed="top">

                    <b-nav-toggle target="nav_collapse" position="right" @click="navClick"></b-nav-toggle>

                    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

                    <b-collapse is-nav id="nav_collapse">

                        <b-nav is-nav-bar>
                            <b-nav-item> <router-link to="/Home" exact>Home</router-link></b-nav-item>
                            <b-nav-item> <router-link :to="`/About`">About</router-link></b-nav-item>                        
                            <b-nav-item> <router-link :to="`/Contact`" >Contact</router-link></b-nav-item>
                            <b-nav-item> <router-link :to="`/Books`" >Books</router-link></b-nav-item>
                            <b-nav-item> <router-link :to="`/Sermons`" >Sermons</router-link></b-nav-item>
                        </b-nav>
                    </b-collapse>
                </b-navbar>
            </div>
        </div>
        <!-- <div class="banner">
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
        </div> -->
    </div>
</template>

<script>

    export default{
        name: 'Navigation',
        data(){
            return {
               State : false
            }
        },
        methods:{
            navClick()
            {
                this.State = !this.State;
                this.$emit('change', this.State);
            }
        }
    }
</script>

<style scoped>
.myNav
{
    max-width: 100%;
}
.headBanner
{
    background-color: #d48c06;
    width: 100%;
    height: 56px;
    position: fixed;
    top: 0;
    z-index: 1;
}
.fixed-top
{
    background-color: #d48c06;
    max-width: inherit;
    margin:auto;
    color: #000;
}
hr{
    margin-top:10px;
    margin-bottom:10px;
}
.navbar-dark .navbar-toggler{
    background-color: #000;
    padding:0;
}
li.nav-item a.nav-link a {
    color: #000;
    font-size: 12pt;
    margin-left: 10px
}
li.nav-item a.nav-link a:hover {
    color: #fff;
    text-decoration: none;
    border-bottom: 1px dotted;
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
}
</style>
