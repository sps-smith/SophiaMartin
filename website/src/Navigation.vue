<template>
    <div class="">
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="container divNav">            
                <div class="navbar-header">                
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse">               
                    <ul class="nav navbar-nav">
                        <li> <router-link to="/Home" exact>Home</router-link></li>
                        <li> <router-link :to="`/About`">About</router-link></li>
                        <li> <router-link :to="`/Contact`" >Contact</router-link></li>
                        <li> <router-link :to="`/Books`" >Books</router-link></li>
                        <li> <router-link :to="`/Sermons`" >Sermons</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="imgLogo">
                            <img src="./images/img_1284.jpg" class="logo img-responsive img-thumbnail" />
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
    export default{
        name: 'Navigation'
    }
</script>

<style scoped>
hr{
    margin-top:10px;
    margin-bottom:10px;
}
.navbar-inverse{
    background-color: #d48c06;
    border: none;
}
.navbar-inverse .navbar-nav > li > a {
    color: #000;
}
.navbar-inverse .navbar-nav > li > a:hover {
    color: #fff;
}
.logo {
    max-width: 180px;
}
.namecss
{
    max-width: 600px;
    padding-top: 35px;
}
div.imgLogo
{
    float: left;
    margin-top:10px;
}    
.navbar-inverse .navbar-nav > li > a.router-link-exact-active {
    color:#fff;
}
.banner
{
    position:fixed;
    width:100%;
    z-index: 1030;
    background: #fff;
    margin-top:-10px;
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
