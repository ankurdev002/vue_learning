<!-- In this i have used it sending of data from parent to child and vice versa -->
<!-- some code is hidden due to practic time -->
<!-- conditonal rendering -->
<!-- dynamic styling -->
<!-- iteration on array -->
<!-- v-model usage -->
<template>
<h1>{{ dataforce }}</h1>
<ChildComp name="parent to child data test ankur " :user="user" :getData="getData" />
<button v-on:click="showTable=!showTable">Render Table</button>

<ul>
    <li v-for="item in usersData" :key="item.name">
        <User :data="item" :getNameAlert="getNameAlert" :showTable="showTable" />
    </li>
</ul>

<h1>HTML BINDING</h1>

<!-- iteration -->
<!-- <ul>
    <li v-for="item in technology" :key="item.name">{{ item }}</li>
</ul>
<ul>
    <li v-for="item in user" :key="item.email">Name:{{ item.name }} and Email is: {{  item .email }}</li>
</ul> -->

<!-- conditional renderign -->
<!-- <h1 v-if="show">If render</h1>
<h1 v-else>Else render 2</h1>

<button v-on:click="show=!show">render</button> -->
<!-- checkbox radio -->
<!-- <h3>Technology</h3>
<label for="java">Java</label>
<input type="checkbox" value="java" v-model="technology" id="java"/>
<br /><br />
<label for="cpp">C++</label>
<input type="checkbox" value="cpp" v-model="technology" id="cpp"/>
<br /><br />
<label for="js">JS</label>
<input type="checkbox" value="js" v-model="technology" id="js"/>
<br /><br />

<h3>Who i am</h3>
<label for="student">student</label>
<input type="radio" value="student" v-model="who" name="who" id="student"/>
<br /><br />
<label for="developer">developer</label>
<input type="radio" value="developer" v-model="who" name="who" id="developer"/>
<br /><br />
<h4>Selected Technology:{{ technology }}</h4>
<h4>I am a:{{ who }}</h4> -->

<!-- input field with model -->
<!-- <input type="text" v-model="email" placeholder="enter email" />
<br /><br />
<input type="text" v-model="password" placeholder="enter password" />
<br /><br />

<button v-on:click="getData()" type="button">Get Values</button> -->
<!-- <input type="text" v-model="count"/>
<h2>{{ count }}</h2> -->
<!-- <h1>{{ email }}</h1>
<h1>{{ mob }}</h1>
<h1>{{ mob==1234 }}</h1>
<h1>Interpolation</h1>
<h1>data():{{ getName('param') }}</h1>
<h1>methods():{{ getMyName('hello') }}</h1>
<h1>methods():{{ getData().email }}</h1> -->
<!-- <button @click="test()">Click ME</button>
<h2>Count: {{ count }}</h2> -->
<h1>{{ text }}</h1>
<div v-html="tag">
</div>

<h2 :class="applyStyle">Home Component New Parent</h2>
<button v-on:click="colorFull=!colorFull">Dynamic Class</button>
<!-- send data to child from parent -->
<Student :name="name" />
<h1>Child User Teacher {{ ChildUser }}</h1>
<Teacher :name="name" :getChildProp="getChildProp"/>


<h1>Using REf</h1>
<RefUse />
</template>

<script>
import ChildComp from './ChildComp.vue';
import RefUse from './RefUse.vue';
import Student from './Student.vue';
import Teacher from './Teacher.vue';
import User from './User.vue';

export default {
    name: "HomePage",
    props: {
        dataforce: String
    },
    components: {
    ChildComp,
    User,
    Student,
    Teacher,
    RefUse
},
    // send data to child from parent
    data() {
        return {
            ChildUser:'',
            name:'brue',
            colorFull: false,
            text: 'ankur saini',
            tag: "<h1>Ankur Saini</h1>",
            showTable: false,
            usersData: [{
                name: 'ankur',
                email: 'test1@gmail.com'
            }, {
                name: 'aman',
                email: 'test2@gmail.com'
            }, {
                name: 'sumit',
                email: 'test3@gmail.com'
            }, {
                name: 'nishant',
                email: 'test4@gmail.com'
            }, ],
            user: {
                name: 'sachin ',
                email: 'test5@gmail.com'
            }
        }
    },
    computed: {
        applyStyle() {
            return {
                green: this.colorFull,
                otherclass: this.colorFull,
            }

        }
    },
    methods: {
        getChildProp(name) {
            this.ChildUser = name;
        },
        getNameAlert(name) {
            alert(name)
        },
        getData() {
            console.log('parent to child')
        }
    }
}
</script>

<style scoped>
h1 {
    color: red;
}

ul {
    color: brown;
}

.green {
    color: green;
}

.otherclass {
    background: red;
}
</style>
