<template>
  <div class="book">
    <object data="../../../static/index.pdf" type="application/pdf" width="100%" height="100%">
      This browser does not support PDFs. Please download the PDF to view it: <a href="/static/index.pdf">Download PDF</a>
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
  .book{
    background-color black
    padding-top 90px
    height 749px
  }
</style>
