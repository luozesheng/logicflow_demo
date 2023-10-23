<template>
  <div class="container">
    <component ref="sids"  :is="componentName" @showLayer="showLayer"/>
    <div class="flowTools">
      <div @click="largerCanvas" class="demo_item">
        放大
      </div>
      <div @click="smallerCanvas" class="demo_item">
        缩小
      </div>
      <div @click="centerCanvas" class="demo_item">
        居中
      </div>
    </div>
  </div>
</template>
<script>
import SimgleNode from '@/components/steps/single-node.vue';

export default {
  name: "test",
  components: {
    SimgleNode,
  },
  data() {
    return {
      componentName: "SimgleNode",
    };
  },
  mounted() {
    
  },
  methods: {
    showLayer(){
      console.log("asds");
    },
    largerCanvas(){
      this.$refs.sids.lf.zoom(true);
    },
    smallerCanvas(){
      this.$refs.sids.lf.zoom(false);
    },
    centerCanvas(){
      this.$refs.sids.lf.fitView(10, 10);
    },
  },
};
</script>
<style>
  .flowIds{
    width: 100vw;
    height: calc(100% - 105px);
    background-color: #999999;
  }
  .flowTools{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>
