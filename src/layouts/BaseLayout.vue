<template>
  <div className="wrapper">
    <base-toolbar/>

    <v-container>
      <slot/>
      <base-popup ref="BasePopup">
        <component
          :is="popup.component"
          v-bind="popup.componentProps"
        />
      </base-popup>
    </v-container>
  </div>
</template>

<script>
import {defineComponent, shallowRef} from "vue";
import BasePopup from "@/components/base/BasePopup.vue";
import BaseToolbar from "@/components/base/BaseToolbar.vue";

export default defineComponent({
  name: "BaseLayout",

  components: {
    BaseToolbar,
    BasePopup
  },

  data: () => ({
    popup: {
      component: shallowRef(undefined),
      componentProps: {},
      openPopup: null,
      closePopup: null
    }
  }),

  mounted() {
    this.popup.openPopup = this.openPopup;
    this.popup.closePopup = this.closePopup;
  },

  methods: {
    openPopup() {
      this.$refs.BasePopup.open();
    },
    closePopup() {
      this.$refs.BasePopup.close();
    },
    setComponent(component) {
      this.popup.component = component;
    },
    setComponentProps(props) {
      this.popup.componentProps = props;
    }
  },

  provide() {
    return {
      popup: this.popup
    }
  }
})
</script>
