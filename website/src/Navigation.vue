<template>
    <div class="myNav">
        <nav class="navbar fixed-top navbar-toggleable navbar-light bg-faded">                
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="navClick">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav">
                    <li v-if="items" @click="hideNav"> <router-link to="/Home" exact>Home</router-link></li>                             
                    <li v-if="items" @click="hideNav"> <router-link :to="`/About`">About</router-link></li> 
                    <li v-if="items" @click="hideNav"> <router-link :to="`/Contact`">Contact</router-link></li> 
                    <li v-if="items" @click="hideNav"> <router-link :to="`/Books`">Books</router-link></li> 
                    <li v-if="items" @click="hideNav"> <router-link :to="`/Sermons`">Sermons</router-link></li> 
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    
    export default{
        name: 'Navigation',
        data(){
            return {
               State : false,
               items: true
            }
        },
        methods:{
            navClick()
            {
                this.State = !this.State;
                this.$emit('change',this.State);
            },
            hideNav()
            {
                this.State = false;
                $(".navbar-collapse").collapse('hide');
                this.$emit('change',this.State);
            }
        }
    }
</script>

<style scoped>
.myNav
{
    max-width: 100%;
    width: 100%;
    background-color: #d48c06;
    position: fixed;
    z-index: 1;
}
.navbar-collapse
{
    padding-right: 15px;
    padding-left:0;
}
.navbar
{
    
    width: 100%;
    margin:auto;
    padding:0;
}
.navbar-nav > li > a
{
    color:#000;
}
.navbar-nav > li > a:hover
{
    background:#fff;
    color:#d48c06;
}
.navbar-nav > li > a.router-link-exact-active {
    color:#d48c06;
    background:#fff;
}
.navbar-light .navbar-toggler
{
    border-color: #000;
    padding:8px;
    border-radius: 5px;
    margin-left:10px;
}
nav.navbar-toggleable
{
    border: none;
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
    background-color: transparent;
    max-width: 1140px;
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

.banner
{
    position:fixed;
    width:100%;
    background: #fff;
    margin-top:-10px;
    z-index: 1;
}
@media (max-width: 1140px) {
    nav.navbar-toggleable
    {
        padding-left:10px;
    }
    .navbar-nav
    {
        margin-left: 0;
        padding-right: 15px;
    }
}
@media (max-width: 320px) {
    .namecss h1
    {
        font-size:24pt;
    }
}
@media (max-width: 575px) {
    div.imgLogo
    {
        float: none;
    }  
    .namecss
    {
        max-width: 400px;
        padding-top: 0;
    }
    .navbar-collapse
    {
        width:100%;
        margin-top:50px;
    }
    .navbar-light .navbar-toggler
    {
        margin-left:15px;
        margin-top: 7px;
    }
    div.col-md-12
    {
        padding-left:0;
        padding-right:0;
    }
}
@media (min-width: 576px)
{
    .navbar-nav > li > a {
        padding-top: 10px; 
        padding-bottom: 10px;
    }
}
</style>
