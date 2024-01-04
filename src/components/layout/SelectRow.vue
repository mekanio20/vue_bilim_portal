<template>
    <div class="detail__row">
        <label :for="name">{{ title }}</label>
        <select type="text" :name="name">
            <option v-for="item in options" :value="item.id">{{ item.option }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "SelectRow",
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        options: []
    },
    emits: ['update:modelValue']
}
</script>