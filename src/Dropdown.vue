<template>
  <div 
    v-show="show" 
    :class="[dropdownClass,custClass,'animate',{'dropUp': dropUp}]" 
    :style="[styleSheet]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'v-dropdown',
  props: {
    position: {
      type: String,
      default: 'left',
    },
    custClass: {
      type: String,
      default: 'left',
    },
  },
  data() {
    return {
      show: false,
      styleSheet: {
        top: '',
        left: '',
      },
      dropdownClass: 'v-dropdown-container',
      dropUp: false,
      lastCaller: null,
      lastCallerHeight: -1,
    };
  },
  mounted() {
    this.MouseEventPolyfill();
    document.body.appendChild(this.$el);
    this.$on('show', this.visible);
    this.$on('adjust', this.adjust);
    document.addEventListener('mousedown', this.whole);
  },
  destroyed() {
    this.$off('show', this.visible);
    this.$off('adjust', this.adjust);
    document.removeEventListener('mousedown', this.whole);
    this.$el.remove();
  },
  methods: {
    visible(state, caller) {
      if (typeof state === 'boolean' && this.show !== state) {
        this.show = state;
        this.$nextTick(() => {
          if (this.show) {
            this.adjust(caller);
            this.lastCaller = caller;
          } else {
            this.$emit('show-change', false);
          }
        });
      }
    },
    adjust(caller) {
      const pos = caller.getBoundingClientRect();
      const gap = 5;
      let t = 0;
      let l = 0;
      const menuPos = this.$el.getBoundingClientRect();
      const screenScrollTop = window.pageYOffset;
      const viewHeight = document.documentElement.clientHeight;

      if (this.rightClick) {
        let top = this.y;
        if (this.y + menuPos.height > screenScrollTop + viewHeight)
          top = this.y - menuPos.height;
        l = this.x;
        t = top;
      } else {
        t = pos.top + pos.height + gap + screenScrollTop;
        let overDown = false;
        let overUp = false;
        // list over screen
        if (t + menuPos.height > screenScrollTop + viewHeight) overDown = true;
        if (pos.top - gap - menuPos.height < 0) overUp = true;

        if (!overUp && overDown) {
          t = pos.top - gap - menuPos.height + screenScrollTop;
          this.dropUp = true;
        } else this.dropUp = false;

        switch (this.position) {
          case 'left':
            l = pos.left;
            break;
          case 'center':
            l = pos.left + pos.width / 2 - menuPos.width / 2;
            break;
          case 'right':
            l = pos.left + pos.width - menuPos.width;
            break;
          default:
            break;
        }
      }

      this.styleSheet.top = `${t}px`;
      this.styleSheet.left = `${l}px`;
      this.lastCallerHeight = pos.height;
    },
    whole(e) {
      const that = this;
      if (this.show) {
        const idx = e.path.findIndex(
          val =>
            val.className &&
            (val.className.includes(that.dropdownClass) ||
              val.outerHTML === that.lastCaller.outerHTML)
        );
        if (idx === -1) {
          this.show = false;
          this.$emit('show-change', false);
        }
      }
    },
    MouseEventPolyfill() {
      if (!('path' in Event.prototype)) {
        Object.defineProperty(Event.prototype, 'path', {
          get() {
            const path = [];
            let currentElem = this.target;
            while (currentElem) {
              path.push(currentElem);
              currentElem = currentElem.parentElement;
            }
            if (path.indexOf(window) === -1 && path.indexOf(document) === -1)
              path.push(document);
            if (path.indexOf(window) === -1) path.push(window);
            return path;
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div.v-dropdown-container {
  border: 1px solid #d6d7d7;
  margin: 0;
  padding: 0;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  vertical-align: middle;
  box-sizing: border-box;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
  &.animate {
    -webkit-animation: dropDownFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
    animation: dropDownFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
    &.dropUp {
      -webkit-animation: dropDownFadeInUp 300ms cubic-bezier(0.23, 1, 0.32, 1);
      animation: dropDownFadeInUp 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
}

@keyframes dropDownFadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes dropDownFadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
