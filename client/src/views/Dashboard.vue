<template>
            <section class="section">
                <div class="columns">
                    <div class="column">
                        <button class="button is-info is-fullwidth" v-on:click="openOntarioapp">OntarioApp</button>
                    </div>
                    <div class="column">
                        <button class="button is-info is-fullwidth" v-on:click="openDash">Dashboard</button>
                    </div>
                </div>
                    <div class="ontario-app" id="ontarioapp">
                        <div class="container has-background-light">
                            <button type="button" class="collapsible" v-on:click="toggleColapsible($event)">Personal Information</button>
                                <div class="content">
                                    <section class="section">
                                        <div class="full-name">
                                            <div class="field">
                                                <label class="label">Full Name</label>
                                                <div class="control">
                                                    <input class="input" type="text" placeholder="John Doe" v-model="user.Name">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="date-of-birth mt-3">
                                            <div class="field">
                                                <label class="label">Date of Birth</label>
                                                <div class="control">
                                                    <input class="input" type="date" v-model="user.Dob">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="address mt-3">
                                            <div class="field">
                                                <label class="label">Address</label>
                                                <div class="control">
                                                    <input class="input" type="text" placeholder="1 Address rd." v-model="user.Address">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="phone-number mt-3">
                                            <div class="field">
                                                <label class="label">Phone Number</label>
                                                <div class="control">
                                                    <input class="input" type="tel" placeholder="123-456-7890" v-model="user.Phone">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="legal-sex mt-3">
                                            <div class="field">
                                                <label class="label">Legal Sex</label>
                                                <div class="control">
                                                    <label class="radio">
                                                    <input type="radio" name="answer" value="Male" v-model="user.Sex">
                                                    Male
                                                    </label>
                                                    <label class="radio">
                                                    <input type="radio" name="answer"  value="Female" v-model="user.Sex">
                                                    Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="nationality mt-3">
                                            <div class="field">
                                                <label class="label">Nationality</label>
                                                <div class="control">
                                                    <div class="select">
                                                        <select v-model="user.Nationality">
                                                            <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                                                            <option value="Asian">Asian</option>
                                                            <option value="Black or African American">Black or African American</option>
                                                            <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                                                            <option value="White">White</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        
                                    </section>
                                </div>
                                
                            <button type="button" class="collapsible" v-on:click="toggleColapsible($event)">Education</button>
                                <div class="content">
                                    <section class="section">
                                        <div class="school-name">
                                            <div class="field">
                                                <label class="label">School Name</label>
                                                <div class="control">
                                                    <input class="input" type="text" placeholder="Ontario School" v-model="user.School">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="graduate mt-3">
                                            <div class="field">
                                                <label class="label">Did or will you graduate from this school?</label>
                                                <div class="control">
                                                    <label class="radio">
                                                    <input type="radio" name="answer" :value="true" v-model="user.Graduate">
                                                    Yes
                                                    </label>
                                                    <label class="radio">
                                                    <input type="radio" name="answer" :value="false" v-model="user.Graduate">
                                                    No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="class-size mt-3">
                                            <div class="field">
                                                <label class="label">Graduating Class Size</label>
                                                <div class="control">
                                                    <input class="input" type="number" placeholder="80" v-model="user.GradSize">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="gpa mt-3">
                                            <div class="field">
                                                <label class="label">Cumulative GPA</label>
                                                <div class="control">
                                                    <input class="input" type="number" placeholder="90" v-model="user.GPA">
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                            <button type="button" class="collapsible" v-on:click="toggleColapsible($event)">Activities</button>
                                <div class="content">
                                    <section class="section">
                                        <div class="activty-header title is-5">
                                            <b>Mention three activities in which you have taken part since grade 9 that best demonstrate your leadership, responsibility, and organization skills.</b>
                                        </div>
                                        <div class="activity">
                                            <div class="activty-number title is-5">
                                                Activity 1
                                            </div>
                                            <div class="activity-type">
                                                <div class="field">
                                                    <label class="label">Activity Type</label>
                                                    <div class="control">
                                                        <div class="select">
                                                            <select v-model="user.Activities[0].Type">
                                                                <option value="Academic">Academic</option>
                                                                <option value="Art">Art</option>
                                                                <option value="Athletics">Athletics</option>
                                                                <option value="Career Oriented">Career Oriented</option>
                                                                <option value="Community Service">Community Service</option>
                                                                <option value="Computer/Technology">Computer/Technology</option>
                                                                <option value="Cultural">Cultural</option>
                                                                <option value="Environmental">Environmental</option>
                                                                <option value="Family Responsibilities">Family Responsibilities</option>
                                                                <option value="Internship">Internship</option>
                                                                <option value="Music">Music</option>
                                                                <option value="Robotics">Robotics</option>
                                                                <option value="Work">Work</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="position-description mt-3">
                                                <div class="field">
                                                    <label class="label">Position/Leadership description</label>
                                                    <div class="control">
                                                        <input class="input" type="text" v-model="user.Activities[0].Leadership">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="organization-name mt-3">
                                                <div class="field">
                                                    <label class="label">Organization Name</label>
                                                    <div class="control">
                                                        <input class="input" type="text" v-model="user.Activities[0].Org">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="activity-description mt-3">
                                                <div class="field">
                                                    <label class="label">Activity Description</label>
                                                    <div class="control">
                                                        <textarea class="textarea" maxlength="500" v-model="user.Activities[0].Description"></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="participation-grades mt-3">
                                            <div class="field">
                                                <label class="label">Participation Grade Levels</label>
                                                <div class="control">
                                                    <label class="checkbox" >
                                                        <input type="checkbox" v-model="user.Activities[0].Grades.Nine">
                                                        Grade 9
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox" v-model="user.Activities[0].Grades.Ten">
                                                        Grade 10
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox" v-model="user.Activities[0].Grades.Eleven">
                                                        Grade 11
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox" v-model="user.Activities[0].Grades.Twelve">
                                                        Grade 12
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                        <div class="activity mt-6">
                                            <div class="activty-number title is-5">
                                                Activity 2
                                            </div>
                                            <div class="activity-type">
                                                <div class="field">
                                                    <label class="label">Activity Type</label>
                                                    <div class="control">
                                                        <div class="select">
                                                            <select v-model="user.Activities[1].Type">
                                                                <option value="Academic">Academic</option>
                                                                <option value="Art">Art</option>
                                                                <option value="Athletics">Athletics</option>
                                                                <option value="Career Oriented">Career Oriented</option>
                                                                <option value="Community Service">Community Service</option>
                                                                <option value="Computer/Technology">Computer/Technology</option>
                                                                <option value="Cultural">Cultural</option>
                                                                <option value="Environmental">Environmental</option>
                                                                <option value="Family Responsibilities">Family Responsibilities</option>
                                                                <option value="Internship">Internship</option>
                                                                <option value="Music">Music</option>
                                                                <option value="Robotics">Robotics</option>
                                                                <option value="Work">Work</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="position-description mt-3">
                                                <div class="field">
                                                    <label class="label">Position/Leadership description</label>
                                                    <div class="control">
                                                        <input class="input" type="text" v-model="user.Activities[1].Leadership">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="organization-name mt-3">
                                                <div class="field">
                                                    <label class="label">Organization Name</label>
                                                    <div class="control">
                                                        <input class="input" type="text" v-model="user.Activities[1].Org">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="activity-description mt-3">
                                                <div class="field">
                                                    <label class="label">Activity Description</label>
                                                    <div class="control">
                                                        <textarea class="textarea" maxlength="500" v-model="user.Activities[1].Description"></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="participation-grades mt-3">
                                            <div class="field">
                                                <label class="label">Participation Grade Levels</label>
                                                <div class="control">
                                                    <label class="checkbox" >
                                                        <input type="checkbox" v-model="user.Activities[1].Grades.Nine">
                                                        Grade 9
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox" v-model="user.Activities[1].Grades.Ten">
                                                        Grade 10
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox" v-model="user.Activities[1].Grades.Eleven">
                                                        Grade 11
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox" v-model="user.Activities[1].Grades.Twelve">
                                                        Grade 12
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                        <div class="activity mt-6">
                                            <div class="activty-number title is-5">
                                                Activity 3
                                            </div>
                                            <div class="activity-type">
                                                <div class="field">
                                                    <label class="label">Activity Type</label>
                                                    <div class="control">
                                                        <div class="select">
                                                            <select v-model="user.Activities[2].Type">
                                                                <option value="Academic">Academic</option>
                                                                <option value="Art">Art</option>
                                                                <option value="Athletics">Athletics</option>
                                                                <option value="Career Oriented">Career Oriented</option>
                                                                <option value="Community Service">Community Service</option>
                                                                <option value="Computer/Technology">Computer/Technology</option>
                                                                <option value="Cultural">Cultural</option>
                                                                <option value="Environmental">Environmental</option>
                                                                <option value="Family Responsibilities">Family Responsibilities</option>
                                                                <option value="Internship">Internship</option>
                                                                <option value="Music">Music</option>
                                                                <option value="Robotics">Robotics</option>
                                                                <option value="Work">Work</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="position-description mt-3">
                                                <div class="field">
                                                    <label class="label">Position/Leadership description</label>
                                                    <div class="control">
                                                        <input class="input" type="text" v-model="user.Activities[2].Leadership">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="organization-name mt-3">
                                                <div class="field">
                                                    <label class="label">Organization Name</label>
                                                    <div class="control">
                                                        <input class="input" type="text" v-model="user.Activities[2].Org">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="activity-description mt-3">
                                                <div class="field">
                                                    <label class="label">Activity Description</label>
                                                    <div class="control">
                                                        <textarea class="textarea" maxlength="500" v-model="user.Activities[2].Description"></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="participation-grades mt-3">
                                            <div class="field">
                                                <label class="label">Participation Grade Levels</label>
                                                <div class="control">
                                                    <label class="checkbox" >
                                                        <input type="checkbox" v-model="user.Activities[2].Grades.Nine">
                                                        Grade 9
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox" v-model="user.Activities[2].Grades.Ten">
                                                        Grade 10
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox" v-model="user.Activities[2].Grades.Eleven">
                                                        Grade 11
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox" v-model="user.Activities[2].Grades.Twelve">
                                                        Grade 12
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </section>
                                </div>
                        
                    
                            
                        </div>

                        <div class="container mt-3">
                            <button class="button is-primary is-fullwidth" @click="saveUser()">Save</button>
                        </div>
                    </div>

                    <div class="dashboard is-hidden" id="dashboard">
                        <div class="container has-background-light">
                            <section class="section">
                                <div class="is-flex is-justify-content-space-between">
                                    <div>
                                        <div class="title">Dashboard</div>
                                        <div class="subtitle is-6">All submitted University applications will appear here.</div>
                                    </div>
                                    <router-link to="/apply"><button class="button is-info">Apply Now</button></router-link>
                                </div>
                                <UniCard v-for="university in user.Universities.filter(uni => uni.Submitted == true)" :key=university :name=university.Name :icon=university.Logo :site=university.Site isodate="2023-05-25T13:08:03+0000"/>
                            </section>
                        </div>
                    </div>

            </section>

</template>

<script setup>
    import UniCard from '../components/UniCard.vue'
</script>

<script>
    export default{
        data() {
            return {
                user: {},
                authUser: this.$auth0.user,
                email: '',
                univerisities: []
            }
        },
        methods: {
            openDash() {
                let dash = document.getElementById("dashboard");
                let ontariapp = document.getElementById("ontarioapp");

                dash.classList.remove("is-hidden");
                ontariapp.classList.add("is-hidden");
            },
            openOntarioapp() {
                let dash = document.getElementById("dashboard");
                let ontariapp = document.getElementById("ontarioapp");

                ontariapp.classList.remove("is-hidden");
                dash.classList.add("is-hidden");
            },
            toggleColapsible(event) {
                let button = event.target;

                button.classList.toggle("active");
                let content = button.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                     content.style.display = "block";
                }
            },
            saveUser() {
                let uri = 'http://127.0.0.1:8000/updateuser';

                this.axios.post(uri, {
                    newUser: this.user
                });
            },
            removeApp() {

            },

        },
        created() {
            let userUri = 'http://127.0.0.1:8000/user';

            if (this.authUser.email != undefined) sessionStorage.setItem("Email", this.authUser.email);

            this.email = sessionStorage.getItem("Email");

            this.axios.get(userUri, {
                params: {
                    userEmail: this.email
                }
            }).then(res => {
                this.user = res.data;
            });

            let uniUri = 'http://127.0.0.1:8000/universities';

            this.axios.get(uniUri).then(res => {
                this.universities = res.data;
            })
        }

    }
</script>

<style>
    .upload-file label{
        background-color: #209cee;
        color: white;
        padding: 0.5rem;
        font-family: sans-serif;
        border-radius: 0.3rem;
        cursor: pointer;
        margin-top: 1rem;
    }
    /* Style the button that is used to open and close the collapsible content */
    .collapsible {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    }

    /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
    .active, .collapsible:hover {
    background-color: #ccc;
    }

    /* Style the collapsible content. Note: hidden by default */
    .content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;
    }
</style>
