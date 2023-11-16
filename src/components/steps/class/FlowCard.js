
import { HtmlNode, HtmlNodeModel } from "@logicflow/core";
import store from '@/store';

const getFlowCard = (Vue) => {
    return Vue.component('flow-card', {
        template: `<div class="call-wrapper">
                        <ul @click="countNum">
                            <li>hello</li>
                            <li>{{count}}</li>
                            <input type="text" @blur="change" v-model="pname"/>
                        </ul>
                    </div>
                `,
        props: {
            name: {
                type: String,
                default: 'logicflow'
            },
        },
        data() {
            return {
                pname: '',
                count: 0
            }
        },
        mounted() {
            emitter.on('node:${node_id}',  (params) => {
                this.count = params;
            });
        },
        methods: {
            change() {
                this.$emit('change-name', this.pname)
            },
            countNum(){
                store.commit("SET_TEST_NUM");
            },
        },
    });
}


export const registerFlowNode = (Vue) => {
    class FlowCardNode extends HtmlNode {
        setHtml(rootEl) {
            // todo: 和react不一样，还没有找到合适的利用vue内置的diff算法来计算节点是否需要更新。
            // if (!this.shouldUpdate()) return;
            const { properties } = this.props.model;
            const { model } = this.props;
            const el = document.createElement('div');
            rootEl.innerHTML = '';
            rootEl.appendChild(el);
            const Profile = Vue.extend({
                render: (h) => {
                    return h(getFlowCard(Vue), {
                        props: {
                            name: properties.name
                        },
                        on: {
                            'change-name': (pname) => {
                                model.setProperties({
                                    name: pname
                                })
                            }
                        }
                    })
                }
            })
            new Profile().$mount(el)
        }
    }

    class FlowCardNodeModel extends HtmlNodeModel {
        setAttributes() {
            this.text.editable = false;
            const width = 200;
            const height = 100;
            this.width = width;
            this.height = height;

            this.anchorsOffset = [
                [width / 2, 0],
                [0, height / 2],
                [-width / 2, 0],
                [0, -height / 2],
            ]
        }
    }
    return {
        type: 'vue-node',
        view: FlowCardNode,
        model: FlowCardNodeModel
    };
}


