# Vue Flashes
-------------
Vue Flashes is a package that simply adds a generic way of displaying (Flash) messages,
like you would when you want to display both error- and success-messages.

## Installation
To install this package follow the following steps.

1. Run `npm install vue-flashes`
2. Import the plugin using
   ```js
   import Vue from 'vue';
   import VueFlashes from 'vue-flashes';

   Vue.use(VueFlashes);

   ...

   new Vue({
       ...
   });
   ```
3. You are now able to run any of the message functions in this plugin.

## Styling your messages
A message has the `.message` class by default, and by default has the type `error`.
You can style specific message types by styling; `.error-message` for error messaging.
```scss
.message-container {
    .message {
        &.error-message { // Style messages of type error
            background-color: red;
            color: white;
        }

        &.success-message { // Style messages of type success
            background-color: green;
            color: white;
        }
    }
}
```

## Message Functions

### Message
In your Vue component display a message that will only be removed when it is either clicked or removed using the *reset* function. As you can see in the example below the second parameter is to specify a type that you want the message to have.

```js
// HelloWorld.vue
export default {
    mounted() {
        this.$message('Hello world!'); // Create a message of the default type ('error')
        this.$message('Hello World!', 'success'); // Create a message of type 'success'
    },
};
```

### Flash message
Much like the `$message` function you can display a message for a short period of time (3 seconds by default).
Below you can see all possible varieties of the `$flashMessage` call.

```js
// HelloWorld.vue
export default {
    mounted() {
        this.$flashMessage('Hello world!'); // Create a message of the default type ('error') that lasts 3 seconds
        this.$flashMessage('Hello World!', 'success'); // Create a message of type 'success' that lasts 3 seconds
        this.$flashMessage('Hello World!', 'success', 1); // Create a message of type 'success' that lasts 1 second
    },
};
```

### Reset messages
Reset messages does exactly what it says it will; It removes all messages that have previously been added.
```js
// HelloWorld.vue
export default {
    mounted() {
        this.$resetMessages();

        // ... 

        this.$message('Hello world');
    },
};
```