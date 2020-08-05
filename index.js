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
        if (process && process.isClient != undefined && process.isClient == false) {
            return;
        }
        const el = document.createElement('div');
        document.body.appendChild(el);
        this.container = new Vue({
            data: {
                messages: [],
            },
            render: h => h(MessageContainer),
        });
        this.container.$mount(el);
    }

    message(msg, type) {
        return this.messages.push({
            message: msg,
            type,
        }) - 1;
    }

    flash(msg, type, timeout = 3) {
        timeout = timeout * 1000;

        this.message(msg, type);

        setTimeout(() => this.remove(this.indexOf(msg, type)), timeout);
    }

    remove(index) {
        this.messages.splice(index, 1);
    }

    indexOf(msg, type) {
        return this.messages.findIndex(m => m.message === msg && m.type === type);
    }

    get messages() {
        return this.container.messages;
    }
}

export const Flashes = new VueFlashes();

export default {
    install(vue) {
        vue.prototype.$flash = new VueFlashes();
    },
};
