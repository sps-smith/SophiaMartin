<template>
  <div class="content">
    <div class="container">  
          <h2>Book Launch Pictures</h2>
      <div class="row">
        <div class="col-md-12">

            <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="600"
                img-height="600"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                    <b-carousel-slide img-src="/static/images/IMG_1356_new.jpg">
                    </b-carousel-slide>
                    <b-carousel-slide img-src="/static/images/IMG_1358.JPG">
                    </b-carousel-slide>
            </b-carousel>
            </div>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookLaunch'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-inner {
    background: #e3e4e3;
}
div#myCarousel img
{
    height: 600px;
    margin: auto;
}
h2
{
    text-align: justify;
    margin-top:0;
    white-space: nowrap;
}
div.videoWrapper
{
    max-width: 550px;
    width:100%;
    margin-bottom: 10px;
    margin-right: 10px;
}
div.main-container
{
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
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
