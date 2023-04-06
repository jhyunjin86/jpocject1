<template>
    <div></div>
    </template>
<script>
export default {
    methods: {
    callFromParent() {
        alert('부모 컴포넌트에서 직접 호출한 함수')
        console.log('부모 컴포넌트에서 직접 호출한 함수');
    }
    }
}
</script>