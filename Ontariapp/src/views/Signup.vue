<template>
    <div class="columns is-flex is-vcentered is-centered" style="height:95vh">
        <div class="column"></div>
        <div class="column is-half">
            <div class="content">
                <div class="box">
                    <strong class="" style="font-size:2vw">Sign Up</strong>
                    <div class="field">
                        <div class="columns">
                            <div class="column">
                                <label class="label" style ="font-size:1.5vw">First Name:</label>
                                <input type="text" class="input" placeholder="John">
                            </div>
                            <div class="column">
                                <label class="label" style ="font-size:1.5vw">Last Name:</label>
                                <input type="text" class="input" placeholder="Doe">
                            </div>
                        </div>
                    </div>
                    <strong style="font-size:1.5vw">Type of Application:</strong>
                    <p>Please note the different types of applications</p>
                    <div class="select mb-2">
                        <select>
                            <option>Select application type</option>
                            <option>101 (Current Ontario high school students)</option>
                            <option>105 (Not a current Ontario high school student)</option>
                            <option>Law (Ontario Law School Application Service)</option>
                            <option>Rehab Sciences (ORPAS)</option>
                            <option>Teacher Ed (Teacher Education Application Service)</option>
                            <option>Medicine (Ontario Medical School Aplication Service)</option>
                        </select>
                    </div>
                    <div class="field">
                        <label class="label" style="font-size:1.5vw">Email:</label>
                        <input type="text" class="input" placeholder="example@example.com">
                    </div>
                    <div class="field">
                        <label class="label" style="font-size: 1.5vw">Password:</label>
                        <input type="password" class="input" placeholder="Password">
                    </div>
                    <div class="field">
                        <input type="password" class="input" placeholder="Confirm Password">
                    </div>
                    <a style="font-size: 1vw" href="login.html"><u>I already have an account</u></a>
                    <!-- button does not do anything -->
                    <div class="mt-1">
                        <a href="" class="button has-background-primary has-text-white">Enter</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="column"></div>
    </div>
</template>

<style>
</style>