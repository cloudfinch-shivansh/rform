<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            phoneno: '',
            address: '',
            gender: '',
            dateOfBirth: '',
            collegename: '',
            coursename: '',
            stream: '',
            rollno: '',
            cgpa: ''
        }
    },
    created() {
        this.name = this.$route.params.name;
        this.email = this.$route.params.email;
        this.phoneno = this.$route.params.phoneno;
        this.address = this.$route.params.address;
        this.gender = this.$route.params.gender;
        this.dateOfBirth = this.$route.params.dateOfBirth;
    },
    mounted() {
    },
    methods: {
        submit() {
            this.$router.push({ name: "FinalSubmit", params: { name: this.name, email: this.email, phoneno: this.phoneno, address: this.address, gender: this.gender, dateOfBirth: this.dateOfBirth, collegename: this.collegename, coursename: this.coursename, stream: this.stream, rollno: this.rollno, cgpa: this.cgpa } })
        }
    }
}

</script>

<template>
    <div id="education-info-page">
        <h1>Educational Information</h1>
        <div class="form-group">
            <label><b>College Name</b></label>
            <input v-model="collegename" />
        </div>
        <div class="form-group">
            <label><b>Course Name</b></label>
            <input v-model="coursename" />
        </div>
        <div class="form-group">
            <label><b>Stream</b></label>
            <input v-model="stream" />
        </div>
        <div class="form-group">
            <label><b>Roll No</b></label>
            <input type="number" v-model="rollno" />
        </div>
        <div class="form-group">
            <label><b>College Marks</b></label>
            <input type="number" v-model="cgpa" />
        </div>

        <button @click="submit">Submit</button>
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

#education-info-page {
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

input {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #2b2b2b;
    /* Darker gray background color for input fields */
    color: #fff;
    /* Light text color for input fields */
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
}</style>
