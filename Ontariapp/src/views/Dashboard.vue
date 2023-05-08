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
                                                    <input class="input" type="text" placeholder="John Doe">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="date-of-birth mt-3">
                                            <div class="field">
                                                <label class="label">Date of Birth</label>
                                                <div class="control">
                                                    <input class="input" type="date">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="address mt-3">
                                            <div class="field">
                                                <label class="label">Address</label>
                                                <div class="control">
                                                    <input class="input" type="text" placeholder="1 Address rd.">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="phone-number mt-3">
                                            <div class="field">
                                                <label class="label">Phone Number</label>
                                                <div class="control">
                                                    <input class="input" type="tel" placeholder="123-456-7890">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="legal-sex mt-3">
                                            <div class="field">
                                                <label class="label">Legal Sex</label>
                                                <div class="control">
                                                    <label class="radio">
                                                    <input type="radio" name="answer">
                                                    Male
                                                    </label>
                                                    <label class="radio">
                                                    <input type="radio" name="answer">
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
                                                        <select>
                                                        <option>American Indian or Alaska Native</option>
                                                        <option>Asian</option>
                                                        <option>Black or African American</option>
                                                        <option>Native Hawaiian or Other Pacific Islander</option>
                                                        <option>White</option>
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
                                                    <input class="input" type="text" placeholder="Ontario School">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="graduate mt-3">
                                            <div class="field">
                                                <label class="label">Did or will you graduate from this school?</label>
                                                <div class="control">
                                                    <label class="radio">
                                                    <input type="radio" name="answer">
                                                    Yes
                                                    </label>
                                                    <label class="radio">
                                                    <input type="radio" name="answer">
                                                    No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                        

                                        <div class="date-of-birth mt-3">
                                            <div class="field">
                                                <label class="label">Date of Graduation</label>
                                                <div class="control">
                                                    <input class="input" type="date">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="class-size mt-3">
                                            <div class="field">
                                                <label class="label">Graduating Class Size</label>
                                                <div class="control">
                                                    <input class="input" type="number" placeholder="80">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="gpa mt-3">
                                            <div class="field">
                                                <label class="label">Cumulative GPA</label>
                                                <div class="control">
                                                    <input class="input" type="number" placeholder="90">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="transcript mt-3">
                                            <div class="field">
                                                <label class="label">Upload Transcript</label>
                                                <div class="control">
                                                    <div class="upload-file">
                                                        <input type="file" id="myFile" hidden>
                                                        <label for="myFile">Choose File</label>
                                                    </div>
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
                                                            <select>
                                                                <option>Academic</option>
                                                                <option>Art</option>
                                                                <option>Athletics</option>
                                                                <option>Career Oriented</option>
                                                                <option>Community Service</option>
                                                                <option>Computer/Technology</option>
                                                                <option>Cultural</option>
                                                                <option>Environmental</option>
                                                                <option>Family Responsibilities</option>
                                                                <option>Internship</option>
                                                                <option>Music</option>
                                                                <option>Robotics</option>
                                                                <option>Work</option>
                                                            </select>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="position-description mt-3">
                                                <div class="field">
                                                    <label class="label">Position/Leadership description</label>
                                                    <div class="control">
                                                        <input class="input" type="text">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="organization-name mt-3">
                                                <div class="field">
                                                    <label class="label">Organization Name</label>
                                                    <div class="control">
                                                        <input class="input" type="text">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="activity-description mt-3">
                                                <div class="field">
                                                    <label class="label">Activity Description</label>
                                                    <div class="control">
                                                        <textarea class="textarea"></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="participation-grades mt-3">
                                            <div class="field">
                                                <label class="label">Participation Grade Levels</label>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input type="checkbox">
                                                        Grade 9
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox">
                                                        Grade 10
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox">
                                                        Grade 11
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox">
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
                                                            <select>
                                                                <option>Academic</option>
                                                                <option>Art</option>
                                                                <option>Athletics</option>
                                                                <option>Career Oriented</option>
                                                                <option>Community Service</option>
                                                                <option>Computer/Technology</option>
                                                                <option>Cultural</option>
                                                                <option>Environmental</option>
                                                                <option>Family Responsibilities</option>
                                                                <option>Internship</option>
                                                                <option>Music</option>
                                                                <option>Robotics</option>
                                                                <option>Work</option>
                                                            </select>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="position-description mt-3">
                                                <div class="field">
                                                    <label class="label">Position/Leadership description</label>
                                                    <div class="control">
                                                        <input class="input" type="text">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="organization-name mt-3">
                                                <div class="field">
                                                    <label class="label">Organization Name</label>
                                                    <div class="control">
                                                        <input class="input" type="text">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="activity-description mt-3">
                                                <div class="field">
                                                    <label class="label">Activity Description</label>
                                                    <div class="control">
                                                        <textarea class="textarea"></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="participation-grades mt-3">
                                            <div class="field">
                                                <label class="label">Participation Grade Levels</label>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input type="checkbox">
                                                        Grade 9
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox">
                                                        Grade 10
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox">
                                                        Grade 11
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox">
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
                                                            <select>
                                                                <option>Academic</option>
                                                                <option>Art</option>
                                                                <option>Athletics</option>
                                                                <option>Career Oriented</option>
                                                                <option>Community Service</option>
                                                                <option>Computer/Technology</option>
                                                                <option>Cultural</option>
                                                                <option>Environmental</option>
                                                                <option>Family Responsibilities</option>
                                                                <option>Internship</option>
                                                                <option>Music</option>
                                                                <option>Robotics</option>
                                                                <option>Work</option>
                                                            </select>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="position-description mt-3">
                                                <div class="field">
                                                    <label class="label">Position/Leadership description</label>
                                                    <div class="control">
                                                        <input class="input" type="text">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="organization-name mt-3">
                                                <div class="field">
                                                    <label class="label">Organization Name</label>
                                                    <div class="control">
                                                        <input class="input" type="text">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="activity-description mt-3">
                                                <div class="field">
                                                    <label class="label">Activity Description</label>
                                                    <div class="control">
                                                        <textarea class="textarea"></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="participation-grades mt-3">
                                            <div class="field">
                                                <label class="label">Participation Grade Levels</label>
                                                <div class="control">
                                                    <label class="checkbox">
                                                        <input type="checkbox">
                                                        Grade 9
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox">
                                                        Grade 10
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox">
                                                        Grade 11
                                                    </label><br>
                                                    <label class="checkbox mt-2">
                                                        <input type="checkbox">
                                                        Grade 12
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        
                                    </section>
                                </div>
                        </div>
                    </div>

                    <div class="dashboard is-hidden" id="dashboard">
                        <div class="container has-background-light">
                            <section class="section">
                                <div class="is-flex is-justify-content-space-between">
                                    <div>
                                        <div class="title">Dashboard</div>
                                        <div class="subtitle is-6">Select a university to continue their application or start a new one!</div>
                                    </div>
                                    <button class="button is-info">Apply Now</button>
                                </div>
                                <div class="card mt-5">
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-48x48">
                                                    <img class="is-rounded" src="/images/uoft-logo.png" alt="Placeholder image">
                                                </figure>
                                                </div>
                                                <div class="media-content">
                                                <p class="title is-3"><a href="#">University of Toronto</a></p>
                                                <p class="subtitle is-6">Results have been released to your registered email account.</p>
                                            </div>
                                            <button class="delete"></button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
            </section>

</template>

<script>
    export default{
        data() {
            return {}
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
            }
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
