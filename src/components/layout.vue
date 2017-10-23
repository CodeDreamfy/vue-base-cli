<template>
  <div class="index layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">消防系统管理平台</div>
      <div class="layout-nav">
        <MenuItem name="1">
          <Icon type="ios-person"></Icon>
          管理员
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-bell"></Icon>
          154
        </MenuItem>
        <MenuItem name="3">
          账户设置
        </MenuItem>
        <MenuItem name="4">
          退出登录
        </MenuItem>
      </div>
    </Menu>
    <div class="layout-content">
      <Row>
        <Col span="5">
          <Menu width="auto" active-name="1">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              首页
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-navigate"></Icon>
              用户管理
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-navigate"></Icon>
              设备管理
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-navigate"></Icon>
              电池管理
            </MenuItem>
            <MenuItem name="5">
              <Icon type="ios-navigate"></Icon>
              维修管理
            </MenuItem>
            <MenuItem name="6">
              <Icon type="ios-navigate"></Icon>
              报警管理
            </MenuItem>
            <MenuItem name="7">
              <Icon type="ios-navigate"></Icon>
              计费管理
            </MenuItem>
            <Submenu name="8">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                后台管理
              </template>
              <MenuItem name="8-1">帐号管理</MenuItem>
              <MenuItem name="8-2">账号计费</MenuItem>
            </Submenu>
          </Menu>
        </Col>
        <Col span="19">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </Col>
      </Row>
    </div>
    <div class="layout-copy">
      2011-2017 &copy; 中国移动我不动
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.layout-logo{
  width: 200px;
  height: 30px; line-height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  text-align: center;
  color: #fff;
}
.layout-nav{
  float: right;
  color: #fff;
}
.layout-assistant{
  width: 300px;
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb{
  padding: 10px 15px 0;
}
.layout-content{
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main{
  padding: 10px;
}
.layout-copy{
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>
