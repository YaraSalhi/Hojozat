const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();

process.env.SECRET_KEY = "secret";

// //Config DB
const mongoURI = require("./config/keys").mongoURI;

mongoose.connect(mongoURI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we are connected");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src"));
app.use(cors());
const reservationsModel = require("./models/item.js").reservationsModel;
const hallsModel = require("./models/item.js").hallsModel;
const ShopsModel = require("./models/item.js").ShopsModel;
const Coll = require("./models/item.js").Coll;
const Appointments = require("./models/item.js").AppointmentsModel;
const saveAppointment = require("./models/item.js");

app.post("/Appointments", function(req, res) {
  saveAppointment.saveAppointment(req.body, data => {
    console.log("data is: ", data);
    res.send(data);
  });
});

app.get("/Appointments", (req, res) => {
  Appointments.find({}).then(Appointments => {
    res.json(Appointments);
  });
});

app.get("/shops/:id", (req, res) => {
  ShopsModel.findOne({}).then(ShopsModel => {
    res.json(ShopsModel);
  });
});
app.get("/shops", (req, res) => {
  ShopsModel.find({}).then(ShopsModel => {
    res.json(ShopsModel);
  });
});

app.get("/id", function(req, res) {
  var d = req.query.id;
  console.log(d);
  console.log("Request Type:", req.method);
  ShopsModel.findOne({ id: d }, (err, data) => {
    if (err) {
      console.log("Err", err);
    }
    console.log(data);
    res.status(200).send(data);
  });
  //next();
});

//============================================================================
//________________________________Sign UP____________________________________
//============================================================================
app.post("/signup", (req, res) => {
  // res.header("Access-Control-Allow-Origin",'*');
  // res.header("Access-Control-Allow-Headers", "*");
  // Form validation
  // const { errors, isValid } = validateRegisterInput(body);
  // // // Check validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }
  var body = req.body;
  console.log(body.Email);
  const userData = {
    userName: body.userName,
    Email: body.Email,
    password: body.password
  };
  console.log(userData);
  Coll.findOne({
    Email: body.Email
  })
    .then(user => {
      if (!user) {
        //console.log(user.Email)
        bcrypt.hash(body.password, 10, (err, hash) => {
          userData.password = hash;
          Coll.create(userData).then(user => {
            res
              .send({
                status: user.Email + " welcome !!"
              })
              .catch(err => {
                res.send("error");
              });
          });
        });
      } else {
        res.send({
          error: "User is already exists !!"
        });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});
//////////////////////////////////////////////////////////
app.post("/signupO", (req, res) => {
  // Form validation
  // const { errors, isValid } = validateRegisterInput(body);
  // // // Check validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }
  var body = req.body;
  console.log(body.Email);
  const userData = {
    userName: body.userName,
    Email: body.Email,
    password: body.password
  };
  console.log(userData);
  Coll.findOne({
    Email: body.Email
  })
    .then(user => {
      if (!user) {
        //console.log(user.Email)
        bcrypt.hash(body.password, 10, (err, hash) => {
          userData.password = hash;
          Coll.create(userData).then(user => {
            res
              .send({
                status: user.Email + " welcome !!"
              })
              .catch(err => {
                res.send("error");
              });
          });
        });
      } else {
        res.send({
          error: "User is already exists !!"
        });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

//============================================================================
//________________________________login____________________________________
//============================================================================

app.post("/login", (req, res) => {
  Coll.findOne({
    Email: req.body.Email
  })
    .then(user => {
      console.log(user);
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            Email: user.Email,
            password: user.password
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "24h"
          });
          console.log(token);
          res.send(token);
        } else {
          res.json({ error: "wrong password !" });
        }
      } else {
        res.send({ error: "user does not exist" });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//============================================================================
//_______________________________Owner____________________________________
//============================================================================
app.post("/shops", function(req, res) {
  console.log(req.body);
  var ownerInfo = req.body;
  res.json(ownerInfo);
  const itemData = {
    name: ownerInfo.name,
    locaion: ownerInfo.location,
    contactInfo: ownerInfo.contactInfo,
    price: ownerInfo.price,
    location: ownerInfo.location,
    openingHours: ownerInfo.openingHours,
    capacity: ownerInfo.capacity,
    description: ownerInfo.description
  };
  console.log(itemData);
});

//============================================================================
//_______________________________Appointments____________________________________
//============================================================================

app.post("/Appointments", function(req, res) {
  saveAppointment.saveAppointment(req.body, data => {
    console.log("data is: ", data);
    res.send(data);
  });
});

app.get("/item/:id", (req, res) => {
  ShopsModel.findOne({}).then(ShopsModel => {
    res.json(ShopsModel);
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("server started on port " + port);
});
