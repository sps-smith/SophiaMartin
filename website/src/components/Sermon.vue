
<template>
  <div id="vdContent" class="content">
    <div class="container ">  
          <h2>Sermons</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="videoWrapper">
              <iframe  height="315" src="https://www.youtube.com/embed/34BY2KjJxwo" frameborder="0" allowfullscreen></iframe>  
              <p>Brampton Triumphant Church Of God - Revival Service - Saturday Night - Pastor Sophia Martin - May 2014</p>          
          </div>
        </div>
        <div class="col-md-6">
          <div class="videoWrapper">
              <iframe  height="315" src="https://www.youtube.com/embed/nafrUI4Bu44" frameborder="0" allowfullscreen></iframe>
              <p>Brampton Triumphant Church Of God - Revival Service - Sunday Morning - Pastor Sophia Martin - June 2014</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="videoWrapper">
              <iframe height="315" src="https://www.youtube.com/embed/c1KX97sSIE0" frameborder="0" allowfullscreen></iframe>
              <p>Your dream is not dead! - Pastor Sophia Martin - June 2014</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="videoWrapper">
                <iframe height="315" src="https://www.youtube.com/embed/AJrK50C5DOA" frameborder="0" allowfullscreen></iframe>
                <p>Brampton Triumphant Church Of God - Revival Service - Sunday Night Service - Pastor Sophia Martin - June 2014</p>
          </div>
         
        </div>
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
.showVideo
{
    z-index:auto;
}
iframe
{
    width:550px;
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
@media (max-width:1024px)
{
    iframe
    {
        width: 100%;
    }
}
@media (min-width:1200px)
{
    iframe
    {
        width: 550px;
    }
}
</style>
