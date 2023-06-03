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
                            <select>
                                <option v-for="program in university.Programs" :key=program>
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
            <textarea class="textarea" rows="20" placeholder="Type here" maxlength="2000"></textarea>
        </div>
        <div class="save-submit mt-4">
            <div class="columns">
                <div class="column">
                    <button class="button is-primary is-fullwidth">Save</button>
                </div>
                <div class="column">
                    <button class="button is-info is-fullwidth" title="Disabled button" disabled>Submit</button>
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
            setSupp() {
                let suppuri = 'http://127.0.0.1:8000/supplimental';

                this.axios.get(suppuri, {
                    params: {
                        uniId: this.university.UniversityID
                    }
                }).then(res => {
                    console.log(res.data)
                    this.supplimental = res.data;
                });
            }
        }
    },
    created() {
        let uri = 'http://127.0.0.1:8000/universities';
        let mockuri = 'http://127.0.0.1:8000/mock';
        let index = parseInt(this.$route.query.id);

        if (!index) {
            this.axios.get(mockuri).then(res => {
                this.university = res.data;
                this.setSupp();
            });
        } else {
            this.axios.get(uri).then(res => {
                this.university = res.data[index];
                this.setSupp();
            });
        }
    }
}
</script>