<template>
  <div class="about">
    <h3>{{ todo }}</h3>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      todo: '?',
      msg: '내가 개발한 To Do 어플이다.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
