<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="test">测试</el-button>
  </div>
</template>

<script>
import {useGlobalConfig} from '@/hooks'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const {$message} = useGlobalConfig()
    const test = () => {
      $message({
        type: 'success',
        message: 'test'
      })
    }

    return { test}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
