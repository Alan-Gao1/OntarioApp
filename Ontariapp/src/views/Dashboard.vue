<template>
            <section class="section">
                <div class="columns">
                    <div class="column">
                        <button class="button is-info is-fullwidth">OntarioApp</button>
                    </div>
                    <div class="column">
                        <button class="button is-info is-fullwidth">Dashboard</button>
                    </div>
                    <div class="column">
                        <button class="button is-info is-fullwidth">Communications</button>
                    </div>
                    <div class="column">
                        <router-link to="/search" class="button is-info is-fullwidth">
                                University Search
                            </router-link>
                    </div>
                </div>
                <div class="container has-background-light">
                    <button type="button" class="collapsible">Personal Information</button>
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
                                                  <option>Select dropdown</option>
                                                  <option>With options</option>
                                                </select>
                                              </div>
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
        created() {
            var coll = document.getElementsByClassName("collapsible");
            var i;
            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.display === "block") {
                    content.style.display = "none";
                    } else {
                    content.style.display = "block";
                    }
                });
            }
        }
    }




</script>

<style>
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
