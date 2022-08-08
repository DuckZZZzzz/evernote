<template>
  <div id="sidebar">
    <span :title="username">{{slug}}</span>
    <div class="icons">
      <router-link to="/note" title="笔记"><i class="iconfont icon-note"></i></router-link>
      <router-link to="/notebooks" title="笔记本"><i class="iconfont icon-notebook"></i></router-link>
      <router-link to="/trash" title="回收站"><i class="iconfont icon-trash"></i></router-link> 
    </div> 
    <div class="logout" >
      <i class="iconfont icon-logout" @click="onLogout"></i>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

 
export default {
  data() {
    return {

    }
  },
  created() {
    this.setUser()
  },
  methods: {
  ...mapActions(['logout']),
  ...mapActions({
  'setUser': 'checkLogin'
  }),

  onLogout() {
    this.logout({ path: '/login' })
  },

},

  computed: {
    ...mapGetters([
      'username',
      'slug'
      ])
  }
}

</script>

<style lang="less" scoped>
#sidebar {
  position: relative;
  width: 56px;
  text-align: center;
  background-color: #2c333c;
  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 32px;
    border-radius: 50%;
    background: #f2b81c;
    color: #fff;
    text-shadow: 1px 0 1px #795c19;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    margin-top: 15px;
  }
}
//http://js.jirengu.com/heriyipowa/1/edit?html,css,output 思考为什么不用写高度
.icons {
  margin-top: 15px;

  a {
    padding: 6px 0;
    display: block;

  }
}

.icons .router-link-active {
  background-color: #5e6266;
}
.logout {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.iconfont {
  color: #fff;
}
</style>