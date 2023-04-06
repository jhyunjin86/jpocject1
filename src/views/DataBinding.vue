<template>
    <h1>Hello, {{ title }}</h1>
    <div v-html="htmlString"></div>
    <input type="text" v-model="valueModel"><br>
    <textarea name="" id="" cols="30" rows="10" v-model="valueTextarea"></textarea>
    <h2 v-if="type!=='A'">A</h2>
    <button @click="getvale">ss</button>
</template>
<script>
export default{ 
    data(){
        return{
            title:'World',
            htmlString:'<input type=text/>',
            valueModel:"test001", 
            valueTextarea:"test002",
            type:'B'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        getvale(){
            alert('#1');
            alert('#1=' + this.title + ' ' + this.valueModel);
        }
    }
}
</script>