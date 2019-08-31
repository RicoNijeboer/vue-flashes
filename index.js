import Vue from 'vue';
import MessageContainer from './MessageContainer';

class VueFlashes {
    constructor() {
        if (VueFlashes.instance) {
            return VueFlashes.instance;
        }
        VueFlashes.instance = this;

        this._init();

        return this;
    }

    _init() {
        const el = document.createElement('div');
        document.appendChild(el);
        this.container = new Vue({
            data: {
                messages: [],
            },
            render: h => h(MessageContainer),
        });
        this.container.$mount(el);
    }
}

export const Flashes = new VueFlashes();

export default {
    install(vue) {
        vue.prototype.$flash = new VueFlashes();
    },
};
