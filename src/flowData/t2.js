const data = {
    nodes: [
      {
        id: "node_id_1",
        type: "single-node",
        x: 200,
        y: 100,
        width: 230,
        height: 145,
        properties: {
            title: "触发器",
            content: "新访客",
            answers: [
              { id: "1", text: "条件1" },
              { id: "2", text: "条件2" },
            ]
          }
      },{
        id: "node_id_2",
        type: "rect",
        x: 500,
        y: 100,
        width: 230,
        height: 145,
      },{
        id: "node_id_3",
        type: "rect",
        x: 500,
        y: 100,
        width: 230,
        height: 145,
      },
    ],
    edges: [
        {
            sourceNodeId: "node_id_1",
            targetNodeId: "node_id_2",
            type: "bezier"
          },
    ],
  };
  
  export default data;
  