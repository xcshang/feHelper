
<template>
  <div class="layout">
    <Layout>
      <HeaderBar />
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <MenuBar />
        </Sider>
        <Layout :style="{padding: '0 24px 24px',minHeight: '500px'}">
          <router-view></router-view>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import MenuBar from "./Menu";
import HeaderBar from "./Header";
export default {
  components: {
    HeaderBar,
    MenuBar
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>