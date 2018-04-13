<template>
  <div class="book">
    <object data="http://p6r6eunr6.bkt.clouddn.com/web/static/Cargoos%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf" type="application/pdf" width="100%"
            height="100%">
      This browser does not support PDFs. Please download the PDF to view it: <a href="/static/Cargoos白皮书.pdf">Download PDF</a>
    </object>
  </div>
</template>

<script>
  export default {
    name: "book",
    data() {
      return {}
    },
  }
</script>

<style scoped lang="stylus">
  .book {
    background-color #000000
    padding-top 90px
    height 749px
  }
</style>
