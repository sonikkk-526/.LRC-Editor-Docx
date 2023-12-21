<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <MenuItem
      v-for="(item, index) in menuTree"
      :key="index"
      :data="item.children"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
      :route="item.route"
    />
    <i @click="this.clickSmallMenu" class="material-icons">menu</i>
  </div>
</template>

<script scoped>
import MenuItem from './MenuItem.vue';

export default {
  name: 'recursive-menu',
  data: () => ({
    smallMenu: false,
    menuTree: [
      /* Start Page */
      {
        label: "Getting Start",
        route: 'Start',
        icon: "apps",
        children: [
          /* Create LRC Page */
          {
            label: "Creating your .LRC",
            route: "createLRC",
            icon: "file_download_done"
          },
        ]
      },
      /* Editor Page */
      {
        label: "Lyrics Editor",
        route: "Editor",
        icon: "edit",
        children: [
          {
            label: "Merging Features",
            route: "editor-merging",
            children: [
              {
                label: "Options for Merging",
                route: "editor-mergeOptions"
              }
            ]
          },
          {
            label: "Timestamp Editing",
            route: "editor-timestamp"
          },
          {
            label: "Auto Generate Headers",
            route: "editor-autoGen",
            children: [{ label: "Generate empty headers", route: "editor-emptyHeader" }]
          }
        ]
      },
      /* Trimming Page */
      {
        label: "Lyrics Trimming",
        route: "Trim",
        icon: "cut",
        children: [
          {
            label: "The nitty-gritty",
            route: "trimShowcase",
            children: [
              {
                label: "Inverse Selection Option",
                route: "trimInverse"
              }
            ]
          },
          {
            label: "Other Options",
            route: "trimOptions"
          }
        ]
      },
      /* Side Notes */
      {
        label: "Side Note",
        icon: "report"
      }
    ]
  }),
  methods: {
    clickSmallMenu: function() {
      this.smallMenu = !this.smallMenu;
      this.$emit('smallMenuState', this.smallMenu);
    }
  },
  components: {
    MenuItem
  }
}
</script>

<style scoped>
.menu {
  /* menu div/display style */
  height: 100vh;
  width: 245px;
  border-right: 1px solid #ececec;
  transition: all 0.3s ease;
  overflow: auto;
  overflow-x: hidden;
  z-index: 2;
  &.small-menu {
    overflow: inherit;
    width: 70px;
    padding-top: 40px;
    &.small-menu i {
      left: 21px;
    }
  }
}

/* hamburger menu button */
i {
  display: block;
  position: absolute;
  top: 123px;
  left: 265px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>