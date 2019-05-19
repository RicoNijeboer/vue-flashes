<template>
    <transition name="message">
        <div :class="`message ${type}-message`">
            {{ message }}
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'MessageContainerItem',
        props: {
            message: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: false,
                default() {
                    return 'error';
                },
            },
        },
    };
</script>
