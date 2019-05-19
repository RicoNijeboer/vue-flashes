<template>
    <div class="message-container"
         @click="resetMessages">
        <message-container-item v-for="(message, key) in messages"
                                :key="`message-${key}`"
                                v-bind="message" />
    </div>
</template>

<script>
    import MessageContainerItem from './MessageContainerItem';

    export default {
        name: 'MessageContainer',
        components: {MessageContainerItem},
        methods: {
            resetMessages() {
                this.$root.messages = [];
            },
        },
        computed: {
            messages() {
                return this.$root.messages;
            },
        },
    };
</script>

<style lang="scss">
    .message-enter-active, .message-leave-active {
        transition: all .2s ease-out;
        transition-delay: .3s;
        transform: translateX(0);
    }
    .message-leave-active {
        transition-delay: 0s;
    }

    .message-enter, .message-leave-to {
        opacity: 0;
        transform: translateX(15%);
    }

    .message-container {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        margin: 16px;

        .message {
            display: block;
            position: relative;
            padding: 16px 24px;
            margin-bottom: 8px;
            background: white;
            box-shadow: 0 1px 35px rgba(0, 0, 0, .2);
        }
    }

</style>