<template>
  <div class="hello">
    <!-- <h3>{{ todo }}</h3> -->
    <b-card
    header="오늘 해야 할 일"
    style="max-width: 40rem; margin: auto; margin-top: 10vh;"
    class="mb-2"
    border-variant="info"
    align="left">

      <b-from-group id="to-do-input">
        <b-container fluid>
          <b-row class="my-1">
            <b-col sm="10">
              <b-form-input v-model="title" type="text" placeholder="새 할 일을 적으세요."/>
            </b-col>
            <b-col sm="2">
              <b-button variant="outline-primary">추가</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-from-group>

      <b-list-group v-if="toDoItems && toDoItems.length">
        <b-list-group-item
          v-for="toDoItem of toDoItems"
          v-bind:data="toDoItem.title"
          v-bind:key="toDoItem.id">
          <b-form-checkbox
            v-model="toDoItem.done">
              {{toDoItem.title}}
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
      
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: () => {
    return {
      todo: '오늘 해야 할 일',
      toDoItems: []
    }
  },
  created () {
    axios.get('http://127.0.0.1:5000/todo/')
      .then(response => {
        this.toDoItems = response.data.map(r => r.data) // 반환되는 값을 toDoItems에 저장.
      })
      .catch(e => {
        console.log('error: ', e)
      })
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
