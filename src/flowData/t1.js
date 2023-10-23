export default  {
    nodes: [
      {
        id: "1",
        type: "rect",
        x: 100,
        y: 100,
        text: "矩形"
      },
      {
        id: "3",
        type: "ellipse",
        x: 500,
        y: 100,
        text: "椭圆"
      },
      {
        id: "4",
        type: "polygon",
        x: 100,
        y: 250,
        text: "多边形1"
      },
      {
        id: "5",
        type: "diamond",
        x: 300,
        y: 250,
        text: "菱形"
      }
    ],
    edges: [
      {
        sourceNodeId: "1",
        targetNodeId: "3",
        startPoint: {
          x: 100,
          y: 70
        },
        endPoint: {
          x: 500,
          y: 50
        },
        type: "polyline"
      },
      {
        sourceNodeId: "3",
        targetNodeId: "4",
        type: "line"
      },
      {
        sourceNodeId: "3",
        targetNodeId: "5",
        type: "bezier"
      }
    ]
  };
  