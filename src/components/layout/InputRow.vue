<template>
    <div class="detail__row">
        <label for="">{{ title }}</label>
        <input :type="type" :name="name" :disabled="disabled">
    </div>
</template>

<script>
export default {
    name: "InputRow",
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue']
}
</script>