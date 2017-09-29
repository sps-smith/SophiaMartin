<template>
    <div class="content">
        <div class="container">  
            <h2>Book Launch Pictures</h2>
            <div class="row">
                <div class="col-md-12">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            
                        </ol>

                        <!-- Wrapper for slides -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="img-responsive" src="/static/images/IMG_1356_new.jpg" />
                            </div>

                            <div class="carousel-item">
                                <img class="img-responsive" src="/static/images/IMG_1358.JPG" />
                            </div>                    
                        </div>

                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
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
