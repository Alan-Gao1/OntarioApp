//This is an example of how to connect to the server. It features a function that lists databases, and one that will print out university information by ID

const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://admin:admin@cluster0.v5pzhsu.mongodb.net/?retryWrites=true&w=majority";


    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // lists the databases.
        await  listDatabases(client);

        //IMPORTANT: the id is a number NOT A STRING
        await findUniID(client, 13);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


//runs the main function
main().catch(console.error);


//
async function findUniID(client, id) {

    //use Ontariapp as db, collection can be either Universities or Students.
    //For our purposes, we will use Universities as our collection because this is where all our uni info is
    //Universities are ID'd 0 thru 22.
    let result = await client.db('Ontariapp').collection('Universities').findOne({ UniversityID: id });


    if (result) {
        console.log(`Found a listing in the collection with id: ${id}`);

        //result will be a json string. It can be returned and such
        console.log(result);
    } else {
        console.log(`No listings found with id: ${id}`);
    }
}



