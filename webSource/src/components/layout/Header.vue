<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">feHelper</div>
      <div class="layout-nav">
        <!--item menu start-->
        <MenuItem name="1">
          <Icon type="ios-navigate"></Icon>Item 1
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad"></Icon>Item 2
        </MenuItem>
        <!--item menu end-->
        <!--user info start-->
        <Dropdown @on-click="dropdownClick">
          <Icon type="ios-contact" style="font-size:20px; color:#fff;" />
          <a href="javascript:;">您好，{{info.userName}}</a>
          <Icon type="ios-arrow-down"></Icon>
          <DropdownMenu slot="list">
            <DropdownItem name="logout">登出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <!--user info end-->
      </div>
    </Menu>
  </Header>
</template>

<script>
import ajax from 'js/ajax'
export default {
  name: "HeaderBar",
  data(){
    return {
      info: ''
    }
  },
  methods:{
    dropdownClick(v){
      if(v === 'logout'){
        ajax.get('/logout')
      }
    }
  },
  mounted(){
    this.info = window.infoData
  }
};
</script>

<style scoped>
.ivu-layout-header{
  padding: 0;
}
.layout-logo {
  width: 100px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  background: #5b6270;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  position: absolute;
  right: 10px;
}
</style>
