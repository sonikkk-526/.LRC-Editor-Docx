<template>
  <div class="menu-item" :class="{ opened: expanded }">
    <div
      class="label"
      :style="{ paddingLeft: depth * 20 + 20 + 'px' }"
    >
      <RouterLink :to="{name: route}">
        <div class="left">
          <!--path: `/feature/${route}`-->
          <i v-if="icon" class="material-icons-outlined">{{ icon }}</i>
          <span v-if="showLabel">{{ label }}</span>
        </div>
      </RouterLink>

      <div @click="toggleMenu()" v-if="data" class="right">
        <i class="expand material-icons" :class="{ opened: expanded }">expand_more</i>
      </div>
    </div>

    <div
      v-show="showChildren"
      :class="{ 'small-menu': smallMenu }"
      class="items-container"
      :style="{ height: containerHeight }"
      ref="container"
    >
    <menu-item
        :class="{ opened: showChildren }"
        v-for="(item, index) in data"
        :key="index"
        :data="item.children"
        :label="item.label"
        :icon="item.icon"
        :depth="depth + 1"
        :smallMenu="smallMenu"
        :route="item.route"
      />
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "menu-item",
  data: () => ({
    showChildren: false,
    expanded: false,
    containerHeight: 0,
  }),
  props: {
    data: {
      type: Array,
    },
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
    depth: {
      type: Number,
    },
    smallMenu: {
      type: Boolean,
    },
    route: {
      type: String
      //default: 'StartPage',
      //required: true
    }
  },
  computed: {
    showLabel() {
      return this.smallMenu ? this.depth > 0 : true;
    }
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
      if (!this.showChildren) { // show content
        this.showChildren = true;
        this.$nextTick(() => {
          this.containerHeight = this.$refs["container"].scrollHeight + "px";
          setTimeout(() => {
            this.containerHeight = "fit-content"; // adjust drop down height (not to overlap)
            this.$refs["container"].style.overflow = "visible";
          }, 300);
        });
      } else { // hide content
        this.containerHeight = this.$refs["container"].scrollHeight + "px";
        this.$refs["container"].style.overflow = "hidden";
        setTimeout(() => {
          this.containerHeight = 0 + "px";
        }, 10);
        setTimeout(() => {
          this.showChildren = false;
        }, 300);
      }
    }
  }
};
</script>

<style scoped>
* {
  color: #5a5a5a;
  text-decoration: none;
  font-size: 15px;
}
.menu-item {
  position: relative;
  width: 100%;
}
.menu-item .label {
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  white-space: nowrap;
  user-select: none;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  & div,a {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .small-item {
    width: fit-content;
  }
  &:hover {
    background: rgba(45, 45, 60, 0.10);
    transition: all 0.3s ease;
  }
  .left:hover,.right:hover {
    cursor: pointer;
  }
  /* right class hover animation for dropdown arrow icon */
  .right {
    width: 23px;
    &:hover {
      border-radius: 6px;
      background: rgba(34, 34, 46, 0.15);
      transition: all 0.2s ease;
      & i {
        color: #6e6e6e;
        font-weight: bold;
      }
    }
  }
}

.menu-item .opened .label {
  font-weight: normal;
}

/* icons */
i {
  font-size: 20px;
  color: #6e6e6e;
  transition: all 0.4s ease;
  /* dropdown icon (regardless of state) */
  &.expand {
    font-size: 16px;
    color: #cacaca;
    padding-left: 4px;
    &.opened {
      transform: rotateX(180deg);
    }
  }
}

/* small labels */
.items-container {
  width: 100%;
  left: calc(100% + 6px);
  transition: height 0.3s ease;
  overflow: hidden;
  z-index: 2;
  &.small-menu {
    width: fit-content;
    position: absolute;
    background: #fff;
    box-shadow: 0 0 4px #9e9e9e;
    top: 0;
    &.small-menu .label {
      width: 100% !important;
      padding-left: 20px !important;
    }
  }
}
</style>