<template>
  <div class="content">
      <div class="myContact">
        <div>
           <h4>How to contact Sophia Martin</h4>
           <span class="elabel">Email:</span> <span><a href="mailto:ladymartin13@gmail.com">ladymartin13@gmail.com</a></span>
           <div class="imgfacebook" title="Visti Sophia Martin Facebook page">
             <a href="https://www.facebook.com/susan.martin.71868" target="_blank"><img src="/static/images/find-me-on-facebook-1.png" width="150" /></a>
           </div>
        </div>
        <div>
           <h4>My upcoming speaking engagements</h4>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myContact
{
  display: flex;
  justify-content: space-between;
  -ms-flex-flow:row wrap;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
}
div.row > div
{
  text-align: justify;;
}
div.imgfacebook
{
  margin-top: 10px;
}
h4
{
  white-space: pre;
}
</style>
