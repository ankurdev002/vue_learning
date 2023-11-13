<!-- form creation of vue js and get values of all input field when click on submit using v-model -->

<template>
<h1>Form Value</h1>

<!-- <p>{{ form }}</p> -->
<ul>
    <li v-for="item in error" :key="item">{{ item }} not valid</li>
</ul>

<form>
    <label>Email : </label>
    <input type="text" placeholder="enter email" v-model="form.email" />
    <input type="number" placeholder="enter number" v-model.trim="dataValue" />
    <h2>Email is:{{typeof(dataValue)}}</h2>

    <br />
    <br />

    <label>Password : </label>
    <input type="password" placeholder="enter email" v-model="form.password" />
    <br />
    <br />

    <label>Country : </label>
    <select v-model="form.country">
        <option>India</option>
        <option>USA</option>
        <option>China</option>
    </select>
    <br />
    <br />

    <h3>Technology</h3>
    <label for="java">Java</label>
    <input type="checkbox" value="java" v-model="form.technology" id="java" />
    <br /><br />
    <label for="cpp">C++</label>
    <input type="checkbox" value="cpp" v-model="form.technology" id="cpp" />
    <br /><br />
    <label for="js">JS</label>
    <input type="checkbox" value="js" v-model="form.technology" id="js" />
    <br />
    <br />

    <label>Sex : </label>
    <label for="male">Male</label>
    <input type="radio" value="male" name="gender" v-model="form.gender" id="male" />
    <br /><br />
    <label for="female">Female</label>
    <input type="radio" value="female" name="gender" v-model="form.gender" id="female" />
    <br />
    <br />

    <button v-on:click="login" type="button">Submit</button>
</form>
</template>

<script>
export default {
    name: 'FormPage',
    data() {
        return {
            dataValue:'',
            form: {
                email: '',
                password: '',
                country: '',
                technology: [],
                gender: ''
            },
            error:[]
        }
    },
    methods: {
        login() {
            this.error=[]
            for (const item in this.form) {
                if (this.form[item] == '' || this.form[item].length == 0) {
                    this.error.push(item)
                }
            }
            if (this.error.length === 0) {
                alert('data successfully submitted')
            }
            console.log('login', this.form,this.error)
        }
    }
}
</script>
