import { HtmlNode, HtmlNodeModel } from "@logicflow/core";

class SingleNode extends HtmlNode {
  // 重写HtmlNode的setHtml，来控制html节点内容。
  setHtml(rootEl) {
    const cardEl = this.getCardEl();
    rootEl.innerHtml = "";
    rootEl.appendChild(cardEl);
    const { id } = this.props.model;
    document.querySelector(`#${id}`).addEventListener('click', (e) => {
      e.stopPropagation();
      this.props.graphModel.cloneNode(id);
    }, false);
  }
  getCardEl() {
    const { properties, id } = this.props.model;
    const el = document.createElement("div");
    let footerFn = ``;
    if (properties.answers) {
      properties.answers.forEach((answer) => {
        footerFn += `
          <div class="flow_box_footer_text">
            ${answer.text}
          </div>
        `;
      });
    }
    let cardTemplate = `
      <div class="flow_box flex_col">
        <div class="flow_box_header flex_row">
          <div class="color_fff box_center">
            ${properties.title}
          </div>
          <div id="${id}" class="copy_icon">复制</div>
        </div>
        <div class="flow_box_body box_center bg_fef">
          ${properties.content}
        </div>
        <div class="flow_box_footer">
          ${footerFn}
        </div>
      </div>
    `;
    el.innerHTML = cardTemplate;

    return el;
  }
}
class SingleNodeModel extends HtmlNodeModel {
  initNodeData(data) {
    super.initNodeData(data);
    // 禁止节点文本可以编辑
    this.text.editable = false;
    this.width = 230;
    this.height = 145;
    // 定义连接规则，只允许出口节点连接入口节点
    // const rule = {
    //   message: "只允许出口节点连接入口节点",
    //   validate: (sourceNode, targetNode, sourceAnchor, targetAnchor) => {
    //     console.log(sourceAnchor, targetAnchor)
    //     return (
    //       sourceAnchor.type === "sourceAnchor" &&
    //       targetAnchor.type === "targetAnchor"
    //     );
    //   }
    // };
    // this.sourceRules.push(rule);
  }
  setAttributes() {
    // const {
    //   properties: { height }
    // } = this;
    // this.height = height;
  }
  /**
   * 计算每个锚点的位置
   */
  getDefaultAnchor() {
    const { width, height, x, y, id, properties } = this;
    const anchorPositon = [];
    anchorPositon.push({
      x,
      y: y - height / 2,
      // type: "targetAnchor",
      id: `${id}_targetAnchor`
    });
    if (properties.answers) {
      properties.answers.forEach((answer, i) => {
        // const text = answer.text;
        anchorPositon.push({
          x: x + width/2,
          y: y + (height/3) + 10,
          type: "sourceAnchor",
          id: answer.id
        });
      });
    }
    return anchorPositon;
  }
  getBytesLength(word) {
    if (!word) {
      return 0;
    }
    let totalLength = 0;
    for (let i = 0; i < word.length; i++) {
      const c = word.charCodeAt(i);
      if (word.match(/[A-Z]/)) {
        totalLength += 1.5;
      } else if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
        totalLength += 1.2;
      } else {
        totalLength += 2;
      }
    }
    return totalLength;
  }
}

export default {
  type: "single-node",
  view: SingleNode,
  model: SingleNodeModel
};
