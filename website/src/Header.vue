<template>
    <div>
        <Navigation @change="hidediv(menu,$event)"></Navigation>

        <div class="banner" :class="{ hideview: menu, setview: !menu }" >
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

</style>
