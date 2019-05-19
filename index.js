import MessageContainer from './MessageContainer';

export default {
    install(Vue) {
        const messageContainer = new Vue({
            data() {
                return {
                    messages: [],
                };
            },
            render: h => h(MessageContainer),
        });

        const el = document.createElement('div');

        document.body.appendChild(el);

        messageContainer.$mount(el);

        Vue.prototype.$resetMessages = () => {
            messageContainer.messages = [];
        };

        Vue.prototype.$message = (msg, type) => {
            messageContainer.messages.push({
                message: msg,
                type,
            });
        };

        Vue.prototype.$flashMessage = (msg, type, timeout = 3) => {
            Vue.prototype.$message(msg, type);

            setTimeout(() => {
                const index = messageContainer.messages.findIndex(m => m.message === msg);

                messageContainer.messages.splice(index, 1);
            }, timeout * 1000);
        };
    },
};