const express = require('express');
const app = express();
const request = require('request');
const port = 3000;
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: '814ec4aa44d3d1a13ee82e3a1256dbfa-us21',
  server: 'us21',
});



const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/signup.html'); 
});

app.post('/', async (req,res)=>{
    var firstName= req.body.prenom;
    var lastName= req.body.nom;
    var mail = req.body.email;
    console.log(firstName, lastName, mail);

    try {
        const response = await mailchimp.lists.addListMember('a8cf562d3b', {
          email_address: mail,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName
          }
          
        });
    
        console.log('Subscriber added:', response);
        // res.send('Subscriber added successfully');
        res.sendFile(__dirname+'/success.html');
      } catch (error) {
        console.error('Error adding subscriber:', error);
        res.sendFile(__dirname+'/failure.html');
        // res.status(500).send('Error adding subscriber');
      }


})

app.post('/failure', (req, res)=>{
  res.redirect('/');
});

app.listen(port, ()=>{
    console.log('Server is up and running. Listening on port: '+port); 
})

// API Key 
// 814ec4aa44d3d1a13ee82e3a1256dbfa-us21
// audienceID a8cf562d3b