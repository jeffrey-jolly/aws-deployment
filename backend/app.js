var path = require("path");
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const supplierRoutes = require('./routes/supplier');
const inventoryRoutes = require('./routes/inventory');
const userRoutes = require('./routes/user');
const salesRoutes = require('./routes/sales');
const doctorUserRoutes = require('./routes/doctorUser');
const doctorOderRoutes = require('./routes/doctorOders');
const verifiedDoctorOderRoutes = require('./routes/verifiedDoctorOder');
const pickedUpOdersRoutes = require('./routes/pickedUpOders');



mongoose.connect('mongodb+srv://userone:user0ne@fsdfiles.gpcsd.mongodb.net/Pharma?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to database!');
    })
    .catch(() => {
        console.log('connection failed! ');
    });
mongoose.set('useCreateIndex', true);





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join("images")));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With ,Content-Type,Authorization ,Accept",
        "HTTP/1.1 200 OK",
        "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE,OPTIONS,PUT"
    );
    next();
});

app.use("/api/supplier", supplierRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/user", userRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/doctorUser", doctorUserRoutes);
app.use("/api/doctorOder", doctorOderRoutes);
app.use("/api/verifiedDoctorOder", verifiedDoctorOderRoutes);
app.use("/api/pickedUpOders", pickedUpOdersRoutes);


app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join())
})

module.exports = app;