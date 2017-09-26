<template>
    <div>
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">            
                <div class="navbar-header">                
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse">               
                    <ul class="nav navbar-nav">
                        <li> <router-link :to="`/Home`">Home</router-link></li>
                        <li> <router-link :to="`/About`">About</router-link></li>
                        <li> <router-link :to="`/Contact`">Contact</router-link></li>
                        <li> <router-link :to="`/Books`">Books</router-link></li>
                        <li> <router-link :to="`/Sermons`">Sermons</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container" style="margin-top:5px;">
            <div class="row">
                <div class="col-md-12">
                    <div style="float:left;">
                        <img src="./images/img_1284.jpg" class="logo img-responsive img-thumbnail" />
                    </div>
                    <div class="namecss">
                        <h1 class="stitle">Rev. Sophia Martin</h1>
                    </div>
                </div>
                
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    export default{
        name: 'Navigation'
    }
</script>

<style>
.navbar-inverse {
    background-color: #d48c06;
    border: none;
    margin-bottom: 5px;
}
.navbar-inverse .navbar-nav > li > a {
    color: #000;
}
.logo {
    max-width: 180px;
}
.namecss
{
    max-width: 600px;
    padding-top: 20px;
}
</style>
