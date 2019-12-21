<template>
  <div>
    <Menu ref="menu" :active-name="activeName" theme="light" width="auto" :open-names="openNames">
      <template v-for="item in menus">
        <template v-if="!item.children">
          <MenuItem :name="item.name" :to="item.path">
            <Icon v-if="item.icon" :type="item.icon" />
            {{item.title}}
          </MenuItem>
        </template>
        <template v-if="item.children">
          <Submenu :name="item.name">
            <template slot="title">
              <Icon v-if="item.icon" :type="item.icon" />
              {{item.title}}
            </template>
            <MenuItem
              v-for="itemMenu in item.children"
              :name="itemMenu.name"
              :to="itemMenu.path"
            >{{itemMenu.title}}</MenuItem>
          </Submenu>
        </template>
      </template>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      activeName: "",
      openNames: [],
      menus: [
        {
          title: "首页",
          name: "index",
          icon: "ios-paper",
          path: "/"
        },
        {
          title: "关于我们",
          name: "about",
          icon: "ios-keypad",
          children: [
            {
              title: "公司简介",
              name: "aboutC",
              path: "/about"
            },
            {
              title: "企业文档",
              path: "/about/doc",
              name: "aboutQ"
            }
          ]
        }
      ]
    };
  },
  watch: {
    openNames() {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
        this.$refs.menu.updateActiveName();
      });
    }
  },
  methods: {
    getPath() {
      let path = location.href.split("#")[1];
      path = path.split("?")[0];
      path = path.split(":")[0];
      return path;
    },

    getCurrentMenu(menus, parent) {
      let path = this.getPath();
      for (var i = 0; i < menus.length; i++) {
        let menu = menus[i];
        if (menu.path === path) {
          this.activeName = menu.name;
          if (parent) {
            this.openNames.push(parent.name);
          }
          break;
        }
        if (menu.children) {
          this.getCurrentMenu(menu.children, menu);
        }
      }
    }
  },

  mounted() {
    this.getCurrentMenu(this.menus);
  }
};
</script>

<style scoped>
.ivu-menu-vertical.ivu-menu-light:after {
  background: none;
}
</style>
