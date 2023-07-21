
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            name: '',
            email: '',
            phoneno: '',
            address: '',
            gender: '',
            dateOfBirth: '',
        }
    },
    methods: {
        next() {
            if (!(this.name && this.email && this.phoneno && this.address && this.gender && this.dateOfBirth)) {
                alert("please fill the value");
                return;
            }
            this.$router.push({ name: "HomeHome", params: { name: this.name, email: this.email, phoneno: this.phoneno, address: this.address, gender: this.gender, Dateofbirth: this.dateOfBirth } })
        },
    }
}
</script>

<template>
    <div id="general-info-page">
        <h1>General Information</h1>
        <div class="form-group">
            <label><b>Name</b></label>
            <input v-model="name" />
        </div>
        <div class="form-group">
            <label><b>Email</b></label>
            <input type="email" v-model="email" />
        </div>
        <div class="form-group">
            <label><b>Phone No</b></label>
            <input type="number" v-model="phoneno" />
        </div>
        <div class="form-group">
            <label><b>Address</b></label>
            <input v-model="address" />
        </div>
        <div class="form-group">
            <label><b>Gender</b></label>
            <input v-model="gender" />
        </div>
        <div class="form-group">
            <label><b>Date of Birth</b></label>
            <input type="date" v-model="dateOfBirth" />
        </div>
        <button @click="next">Next</button>
    </div>
</template>
  
<style>
/* Dark theme styles */
body {
    background-color: #232323;
    /* Dark gray background color */
    color: #fff;
    /* Light text color */
}

#general-info-page {
    padding: 20px;
    margin: 0 auto;
    max-width: 600px;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

label {
    font-weight: bold;
}

input,
select {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #2b2b2b;
    /* Darker gray background color for input fields */
    color: #fff;
    /* Light text color for input fields */
}

select {
    appearance: none;
    /* Remove default arrow for select element */
    cursor: pointer;
}

button {
    padding: 10px 20px;
    background-color: #4caf50;
    /* Green button background color */
    color: #fff;
    /* Light text color for buttons */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
    /* Darker green on hover */
}
</style>
  