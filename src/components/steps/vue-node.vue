<template>
 <div class="flowIds"></div>
</template>
<script>
import { mapState, } from 'vuex'
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import { registerFlowNode } from '@/components/steps/class/FlowCard';

export default {
  name: "vueNode",
  data() {
    return {
      lf: {},
    };
  },
  watch:{
    testNum:{
      immediate: true,
      handler(val){
        emitter.emit('node:update', val)
        console.log('+++++++:',this.$events)
      }
    },
  },
  computed: {
    ...mapState(['flowVueData', 'testNum']),
  },
  mounted() {
    this.init().then(lf => this.addEvents(lf));
  },
  methods: {
    init() {
      const lf = new LogicFlow({
        container: document.querySelector(".flowIds"),
        grid: false,
        edgeType: "bezier",
        idGenerator: () => {
          return `node_id_${new Date().getTime()}`;
        },
        background: {
          backgroundColor: "#eff2f5"
        },
      });
      lf.register(registerFlowNode(window.Vue));
      lf.render(this.flowVueData);

      this.lf = lf;
      window.lf = lf;
      return Promise.resolve(lf);
    },
    addEvents(lf){
      const { eventCenter } = lf.graphModel;
      eventCenter.on("node:click", (node) => {
        // console.log("node:click", node);
        this.$emit('showLayer', node);
      });
    },
  },
};
</script>
<style scoped>

</style>
