<template>
    <div class="ftContent">
        <div class="container">
            <footer>
                <p>&copy; {{currentDate}} - Sophia Martin</p>
            </footer>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'PageFooter',
        computed:{
            currentDate: function()
            {
                return new Date().getFullYear();
            }
        }
    }
</script>

<style scoped>
footer p{
    color:#000;
    text-align: justify;   
    font-weight: bold;
}
.ftContent
{
    padding-top:10px;
    padding-bottom: 10px;
    position: fixed;
    bottom:-15px;
    width: 100%;
    background:#fff;
}
</style> 
