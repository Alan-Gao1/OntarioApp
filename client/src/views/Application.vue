<template>
    <section class="section">
        <div class="school-information">
            <div class="title">
                {{university.Name}}
            </div>
            <div class="columns">
                <div class="column">
                    <div class="contact">
                        <div class="subtitle">
                            Contact
                        </div>
                        <p class="phone">Phone: {{university.Phone}}</p>
                        <p class="email">Email: {{university.Email}}</p>
                        <p class="postal-code">Address: {{university.Address[0]}}, {{university.Address[1]}}, {{university.Address[2]}}</p>
                        <p><a :href=university.WebsiteLink>University website</a></p>
                    </div>

                </div>
                <div class="column">
                    <div class="fees">
                        <div class="subtitle">
                            Fees
                        </div>
                        <p class="application-fee">$50 non-refundable application fee</p>
                        <p class="deposit">{{university.Deposit}} deposit</p>
                        <p class="tuition-cost">{{university.AvgTuition}} tuition first year average</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="select-program mt-6">
            <div class="title is-4">
                Select Program
            </div>
            <div class="program-dropdown">
                <div class="field">
                    <div class="control">
                        <div class="select">
                            <select v-model="user.Universities[uniIndex].Program">
                                <option v-for="program in university.Programs" :key=program :value=program>
                                    {{program}}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="supplemental mt-6">
            <div class="title is-4">
                Supplemental Application
            </div>
            <div class="subtitle is-6">{{supplimental}} Max 2000 characters.</div>
            <textarea class="textarea" rows="20" placeholder="Type here" maxlength="2000" v-model="user.Universities[uniIndex].Essay"></textarea>
        </div>
        <div class="save-submit mt-4">
            <div class="columns">
                <div class="column">
                    <button class="button is-primary is-fullwidth" @click="save()">Save</button>
                </div>
                <div class="column">
                    <button class="button is-info is-fullwidth" :disabled="isNotValid()" @click="submit()">Submit</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            university: {},
            supplimental: "Loading...",
            email: sessionStorage.getItem("Email"),
            user: {},
            uniIndex: 0
        }
    },
    methods: {
        setSupp() {
            let suppuri = 'https://ontarioapp-backend.onrender.com/supplimental';

            this.axios.get(suppuri, {
                params: {
                    uniId: this.university.UniversityID
                }
            }).then(res => {
                this.supplimental = res.data;
            });
        },
        getUser() {
            let userUri = 'https://ontarioapp-backend.onrender.com/user';

            this.axios.get(userUri, {
                params: {
                    userEmail: this.email
                }
            }).then(res => {
                this.user = res.data;
 
                this.uniIndex = res.data.Universities.findIndex(uni => uni.Id == this.$route.query.id);

                if (this.uniIndex == -1) {
                    this.uniIndex = this.user.Universities.length;
                    this.user.Universities.push({
                        "Id": this.$route.query.id,
                        "Name": this.university.Name,
                        "Logo": this.university.Logo,
                        "Site": this.university.Site,
                        "Essay": "",
                        "Program": "",
                        "Submitted": false
                    });

                    console.log(this.user.Universities)
                }
            });
        },
        submit() {
            if (this.isNotValid()) return;

            if (window.confirm(`Are you sure you are ready to submit? ${this.university.Name} will receive your application as it is now.`)) {
                this.user.Universities[this.uniIndex].Submitted = true;
                this.save();
                this.$router.push('/dashboard')
            } 
        },
        save() {
            let uri = 'https://ontarioapp-backend.onrender.com/updateuser';

            this.axios.post(uri, {
                newUser: this.user
            });
        },
        isNotValid() {
            return this.user.Universities[this.uniIndex].Essay.length < 10 || this.user.Universities[this.uniIndex] == '';
        }
    },
    created() {
        let uri = 'https://ontarioapp-backend.onrender.com/universities';
        let mockuri = 'https://ontarioapp-backend.onrender.com/mock';
        let index = parseInt(this.$route.query.id);

        if (!index) {
            this.axios.get(mockuri).then(res => {
                this.university = res.data;
                this.setSupp();
                this.getUser();
            });
        } else {
            this.axios.get(uri).then(res => {
                this.university = res.data[index];
                this.setSupp();
                this.getUser();
            });
        }
    }
}
</script>