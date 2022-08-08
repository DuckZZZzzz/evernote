import Vue from 'vue'

export default new Vue()


/*
使用方法

import Bus from '@/helpers/bus'

Bus.$on('test', msg => {
  console.log(msg)
})


Bus.$emit('test', 'hello jirengu')


*/


//但是我们用vuex方法不用这个bus