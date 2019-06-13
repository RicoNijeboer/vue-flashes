<template>
    <div :class="`message ${type}-message`">
        {{ message }}
    </div>
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
