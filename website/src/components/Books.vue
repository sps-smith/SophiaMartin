<template>
  <div class="content">
      <div class="myBooks">
        <div class="mybookImg">
            <div class="bookimg">
                <img class="img-responsive" src="static/images/book.jpg" />
            </div>
            <div class="amazonimage">
                <a title="get this book at Amazon.ca" href="https://www.amazon.ca/If-You-Only-Knew-Story-ebook/dp/B017GRBII2" target="_blank"><img class="img-responsive" src="static/images/amazon.jpg" width="306"/></a>
            </div>
        </div>
        <div class="bookcontent">
            <h2 class="" style="text-align:center;font-family:Arial;color:#AC471B;text-transform:uppercase;margin-top:0">If you only knew my <span style="font-family:cursive;font-size:52px;font-style:italic;color:#78CDEA;text-transform:none">Story</span></h2>
            <h4 style="text-align:center">A preivew of what's inside</h4>
            <p>We all have a story to tell. It has been said that there are three sides to any story: your side, 
            my side and yes the right side. Whether it is fact or fiction, true or false, this is my side of the story.</p>

            <p>I was born in Whitfield Town, Kingston, Jamaica. A few years after my birth my mom moved to Tewari Crescent which is 
            located in the Kingston 13 area. There were six of us, myself, Shawn, Novelette, Nekeisha, Tameka, and Kyron. With little 
            or no contact with our fathers, mom played both roles and as much as was humanly possible; she did it so well we sometimes forgot what we were missing. 
            I believed she was superwoman as she raised us 
            all by herself and a mighty good job she did. However, how mom managed to raise us all without complaint or murmur was beyond me. </p>

            <p>Life was hard, and poverty took us as prisoners. Some days we had nothing to eat for lunch and even worst were the days that the nothingness extended to supper. 
            We wore each other’s clothes; we drank sugar with water and bread at times, (known to all Jamaicans as suga and wata). We had a make shift bed padded with old 
            clothes as our mattress to sleep on. Our material possessions were limited, we did not have much, but we loved each other. I can tell you this - we never fought 
            with or against each other. Like true soldiers we helped each other survive.</p>

            <p>Every young adult dreams of the day when they can open their own door and there's no one to question their activities. They can do whatever they want, when 
            they want and however they want, and it’s good in their eyes.</p>

            <p>After high school, I lived and worked in the area of Molynes Road also located Kingston. However, after much consideration, I decided to go back to school 
            because I knew there was more to life, and education was the only way out if I wanted a better future. With much enthusiasm I registered at the Jamaica School of 
            Commerce. I completed a three year course in Secretarial Studies and earned a Diploma. It was a very exciting time in my life and a great accomplishment. 
            I did not know or even believed this was something I could have achieved. I understand now that it was God's mercies that kept me. In my life I had known of 
            God but had never experienced a personal relationship with Him. My closest relationship with God relates to the experience I had living with my step mom as 
            she ensured I attended every church event regardless if I felt liked it or not.</p>
            <p><router-link to="/BookLaunch" class="bklaunch">Book launch pictures</router-link></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  methods:{
      isSmall: function(){
        if (window.screen.availWidth <= 763)
            return true;
        else
            return false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myBooks
{
  display: flex;
  justify-content:flex-start;
  -ms-flex-flow:row ;
  -webkit-flex-flow: row ;
  flex-flow: row ;
}
.myBookImg
{
    order:1;
}
.bookcontent
{
  max-width: 760px;
  width:100%;
  padding-left:40px;
  order: 2;
}
.smallscreen
{
  display: none;
}
.content{
  margin-bottom: 30px;
}
div.row > div
{
  text-align: justify;;
}
h4
{
  white-space: nowrap;
}
div.amazonimage
{
  margin-top:10px;
}
a.bklaunch
{
  color: #d48c06;
}
a.bklaunch:hover
{
  text-decoration: none;
  border-bottom:1px dotted;
}
@media (max-width:575px)
{
    .myBooks
    {
        -ms-flex-flow:column ;
        -webkit-flex-flow: column ;
        flex-flow: column ;
    }
    .mybookImg
    {
        order:2;
    }
    .bookcontent
    {
      order:1;
      padding-left: 0;
    }
}
@media (max-width: 755px)
{     
     .mdpic
     {
       display: none;
     }
     .smallscreen
     {
       display: inline;
     }
}
</style>
