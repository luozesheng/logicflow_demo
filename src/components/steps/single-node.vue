<template>
 <div class="flowIds"></div>
</template>
<script>
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";
import SingleNode from "./single-node.js";
import FlowData from "@/flowData/t2.js";

export default {
  name: "test",
  data() {
    return {
      lf: {},
    };
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
      lf.register(SingleNode);
      lf.render(FlowData);
      this.lf = lf;
      window.lf = lf;
      return Promise.resolve(lf);
    },
    addEvents(lf){
      const { eventCenter } = lf.graphModel;
      eventCenter.on("node:click", (node) => {
        console.log("node:click", node);
        // let { id, } = node.data;
        //克隆
        // lf.cloneNode(id)
        this.$emit('showLayer', node);
      });
    },
  },
};
</script>
<style scoped>

</style>
