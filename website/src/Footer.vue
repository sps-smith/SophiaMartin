<template>
    <div class="myFooter">
        <div class="ftContent">
            <div>
                <footer>
                    <p>&copy; {{currentDate}} - Sophia Martin</p>
                </footer>
            </div>
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
.myFooter
{
    position: fixed;
    bottom:-15px;
    width: 100%;
    background:#fff;
}
.ftContent
{
    padding: 10px;
    max-width: 1140px;
    width: 100%;
    background:#fff;
    margin:auto;
}
</style> 
