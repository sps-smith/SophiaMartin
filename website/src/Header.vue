<template>
    <div>
        <Navigation @change="hidediv(menu,$event)"></Navigation>
        <div class="myHeader">
            <div class="banner" :class="{ hideview: menu, setview: !menu }" >
                <div class="imgLogo">
                    <img src="/static/images/img_1284.jpg" class="logo img-responsive img-thumbnail" />
                </div>
                <div class="namecss">
                    <h1 class="stitle">Rev. Sophia Martin</h1>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';

    export default{
        name: 'Header',
        data(){
            return {
                menu: Navigation.data().State
            }
        },
        methods:{
            hidediv(menu,event){
                this.menu = event;
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
    z-index:1;
}
.hideview
{
    z-index:auto;
}
.logo {
    max-width: 180px;
}
.namecss
{
    max-width: 600px;
    padding-top: 20px;
}
div.imgLogo
{
    padding-right: 20px;
}    
li.nav-item a.nav-link a.router-link-exact-active {
    color:#fff;
}
.myHeader
{
    position:fixed;
    width:100%;
    padding:10px;
    background: #fff;
    margin-bottom: 20px;
}
hr{
    max-width: 1140px;
    width:100%;
    margin: auto;   
    margin-top:10px; 
}
.banner
{
    display: flex;
    -ms-flex-flow:row wrap;
    -webkit-flex-flow: row wrap;
    flex-flow:row wrap;
    max-width: 1140px;
    width:100%;
    margin:auto;
    background: #fff;
    margin-top: 50px;
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
        max-width: 100%;
        padding-top: 0;
        text-align:center;
    }    
}
@media (max-width:520px)
{
    .banner
    {

    }
}
</style>
