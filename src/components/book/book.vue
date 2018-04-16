<template>
  <div class="book">
    <object data="http://p6r6eunr6.bkt.clouddn.com/web/static/CDB_CarDataBlockchain%E4%B8%AD%E6%96%87%E7%99%BD%E7%9A%AE%E4%B9%A6-V1.0.1-20180413.pdf" type="application/pdf" width="100%"
            height="100%">
      <p>This browser does not support PDFs. Please download the PDF to view it: <a
        href="http://p6r6eunr6.bkt.clouddn.com/web/static/CDB_CarDataBlockchain%E4%B8%AD%E6%96%87%E7%99%BD%E7%9A%AE%E4%B9%A6-V1.0.1-20180413.pdf"
        target="_blank">Download PDF</a></p>
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
    height 1000px
    object {
      p {
        text-align center
        font-size 18px
        margin-top 200px
        a{
          text-decoration:underline
        }
      }
    }
  }
</style>
