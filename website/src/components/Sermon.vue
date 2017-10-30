
<template>
  <div id="vdContent" class="content">
        <h2>Sermons</h2>
        <div id="myVideo">
            <div class="videoWrapper">
                <iframe  height="315" src="https://www.youtube.com/embed/34BY2KjJxwo" frameborder="0" allowfullscreen></iframe>  
                <p>Brampton Triumphant Church Of God - Revival Service - Saturday Night - Pastor Sophia Martin - May 2014</p>          
            </div>
            <div class="videoWrapper">
                <iframe  height="315" src="https://www.youtube.com/embed/nafrUI4Bu44" frameborder="0" allowfullscreen></iframe>
                <p>Brampton Triumphant Church Of God - Revival Service - Sunday Morning - Pastor Sophia Martin - June 2014</p>
            </div>
            <div class="videoWrapper">
                <iframe height="315" src="https://www.youtube.com/embed/c1KX97sSIE0" frameborder="0" allowfullscreen></iframe>
                <p>Your dream is not dead! - Pastor Sophia Martin - June 2014</p>
            </div>
            <div class="videoWrapper">
                    <iframe height="315" src="https://www.youtube.com/embed/AJrK50C5DOA" frameborder="0" allowfullscreen></iframe>
                    <p>Brampton Triumphant Church Of God - Revival Service - Sunday Night Service - Pastor Sophia Martin - June 2014</p>
            </div>         
        </div>
  </div>
</template>

<script>

export default {
  name: 'Sermon'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#myVideo
{
    display: flex;
    -webkit-flex-flow:row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    justify-content:flex-start;
}
div#myVideo p
{
    text-align: center;
    padding:5px;
    color:#000;
    width: auto;
}
.showVideo
{
    z-index:auto;
}
iframe
{
    max-width: 550px;
    width:100%;;
}
h2
{
    text-align: justify;
    margin-top:0;
}
div.videoWrapper
{
    max-width: 550px;
    width:100%;
    margin-bottom: 10px;
    margin-right: 10px;
}
@media (max-width:1140px)
{
    div#myVideo
    {
        justify-content: center;
    }
}
</style>
