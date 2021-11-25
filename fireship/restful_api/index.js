// const app = require("express");
const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());


// ---- adding an "end point":

// GET http:localhost:8080/tshirt
                 // req - request - incoming data
                      // res - response - outgoing data
app.get('/tshirt', (req, res) => { // Handler: run this function when the route is requested 
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
}); 
//                :id - route params - capture dynamic values in the URL
app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body; // BODY NOT PARSED YET
//  REQ > MIDDLEWARE > RESPONSE
//        PARSE JSON


    if (!logo) {
        res.status(418).send({ message: 'We nedd a logo!' })
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });

});


app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)