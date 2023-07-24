
<script>
export default {
    name: 'FinalSubmit',
    data() {
        return {
            name: '',
            email: '',
            phoneno: '',
            address: '',
            gender: '',
            dateOfBirth: '',
            collegename: '',
            courseName: '',
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
        this.collegename = this.$route.params.collegename;
        this.coursename = this.$route.params.coursename;
        this.stream = this.$route.params.stream;
        this.rollno = this.$route.params.rollno;
        this.cgpa = this.$route.params.cgpa;
    }

}
</script>

<template>
    <div id="Validation">
        <div id="container">
            <div id="leftcont">
                <img src="../assets/user.png" alt="User avatar" />
            </div>
            <div id="rightcont">
                <p><b> NAME: </b><u>{{ this.name }}</u></p>
                <p><b> EMAIL: </b><u>{{ this.email }}</u></p>
                <p><b> PHONENO: </b><u>{{ this.phoneno }}</u></p>
                <p><b> ADDRESS: </b><u>{{ this.address }}</u></p>
                <p><b> GENDER: </b><u>{{ this.gender }}</u></p>
                <p><b> dateOfBirth: </b><u>{{ this.dateOfBirth }}</u></p>
                <p><b> COLLEGENAME: </b><u>{{ this.collegename }}</u></p>
                <p><b> COURSENAME: </b><u>{{ this.coursename }}</u></p>
                <p><b> STREAM: </b><u>{{ this.stream }}</u></p>
                <p><b> ROLLNO: </b><u>{{ this.rollno }}</u></p>
                <p><b> CGPA: </b><u>{{ this.cgpa }}</u></p>
            </div>
        </div>
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

#Validation {
    padding: 20px;
    margin: 0 auto;
    max-width: 600px;
}

#container {
    display: flex;
    align-items: center;
}

#leftcont {
    margin-right: 20px;
}

img {
    max-width: 100px;
}

#rightcont {
    display: flex;
    flex-direction: column;
}

p {
    margin-bottom: 10px;
}

b {
    font-weight: bold;
}

u {
    text-decoration: underline;
    color: #fff;
    /* Light text color for underlined content */
}
</style>
  