const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const usersDB = ('./users.json');
const optr = ('./operators.json');
const _weldlog = ('./weldlog.json');
const partsDB = ('./parts.json');
const deptDB = ('./dept.json');



const router = express.Router();

router.get('/', (req, res) => {
    console.log("test");
    res.send('From Api Route');
})

router.post('/login', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
// console.log("test");
// res.send(req.body);
     fs.exists(usersDB, (exist, err) => {
        if (exist) {
            if (err) throw err
            let userData = '';
            let data = "";
            var readerStream = fs.createReadStream(usersDB);
            readerStream.setEncoding('UTF8');
            readerStream.on('data', (chunk) => {
                data += chunk;
                // console.log(chunk);
            });

            readerStream.on("end", () => {
                let userData = JSON.parse(data);
                let testdata = (userData["Users"]);

                let result = testdata.filter(function (item) {
                    return item.team === req.body.team && item.password === req.body.password;
                });

                if (result.length > 0) {
                    let payload = { subject: req.body.team }
                    let token = jwt.sign(payload, "key");
                    res.status(200).send({ token });
                    // console.log(JSON.stringify(result[0]));
                }
                else {
                    res.status(401).send({"err":"User Not Found"})
                    console.log("Not exists");
                }
            });
//             // console.log("found")
//         }
        // else {
            // console.log("not found")
        }
    })
})

// router.get('/operator',(req, res)=>
// {
//     fs.exists(optr,(exist,err)=>
//     {
//         if (exist) {
//             if (err) throw err
//             let data = "";
//             var readerStream = fs.createReadStream(usersDB);
//             readerStream.setEncoding('UTF8');
//             readerStream.on('data', (chunk) => {
//                 data += chunk;
//                 // console.log(chunk);
//             });
//             readerStream.on("end", () => {
//                 let userData = JSON.parse(data);
//             });

//            readerStream.on('error', function (err) {
//                 console.log(err.stack);
//             });

//         }
//     })
// })


// router.post('/register', (req, res) => {
//     fs.exists(usersDB, (exist, err) => {
//         if (exist) {
//             if (err) throw err
//             // let userData = '';
//             let data = "";
//             let id = "";
//             let userData = "";
//             let testdata = "";

//             var readerStream = fs.createReadStream(usersDB);
//             readerStream.setEncoding('UTF8');
//             readerStream.on('data', (chunk) => {
//                 data += chunk;
//             });

//             readerStream.on('end', function () {
//                 if (data === '') {
//                     id = "K00000001"
//                     userData = { "Users": [] }
//                 }
//                 else {
//                     userData = JSON.parse(data);
//                     testdata = (userData["Users"]);
//                     let result = testdata.filter(function (item) {
//                         return item.team === req.body.team;
//                     });
//                     if (result.length > 0) {
//                         console.log("Found user");
//                         res.status(401).send({ error: "Already exists" })
//                         return;
//                     }

//                     testdata.sort((a, b) => a.id.localeCompare(b.id));
//                     var newEntry = testdata.length-1;
//                     var _id = testdata[newEntry].id.slice(1);
//                     var x = parseInt(_id) + 1;
//                     var l = String(x).length;
//                     id = 'K' + (String('0').repeat(8 - l) + x)
//                     // console.log(_id);
//                     // return;
//                 }
//                 var newUser = { "id": id, "team": req.body.team, "userid": req.body.userid, "password": req.body.password };
//                 userData["Users"].push(newUser);
//                 var writerStream = fs.createWriteStream(usersDB);
//                 writerStream.write(JSON.stringify(userData), 'UTF8');
//                 writerStream.end();
//                 writerStream.on('finish', function () {
//                     let payload = { subject: req.body.id }
//                     let token = jwt.sign(payload, "key");
//                     res.status(200).send({ token });
//                 })
//             });

//             readerStream.on('error', function (err) {
//                 console.log(err.stack);
//             });
//             // console.log("yes");
//             // return;
//         } else {
//             console.log("user not found");
//             res.status(401).send({ err: "File not found" });
//             return;

//         }
//     })
// })

// function verifyToken(req, res, next) {
//     if (!req.header.authorization) {
//         return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if (token === 'null') {
//         return res.status(401).send('Unauthorized request')
//     }
//     let payload = jwt.verify(token, 'key')
//     if (!payload) {
//         return res.status(401).send('Unauthorized request')
//     }
//     req.team = payload.subject
//     next();
// }



// router.get('/operator',(req, res)=>
// {
//     fs.exists(optr,(exist,err)=>
//     {
//         if (exist) {
//             if (err) throw err
//             let data = "";
//             var readerStream = fs.createReadStream(optr);
//             readerStream.setEncoding('UTF8');
//             readerStream.on('data', (chunk) => {
//                 data += chunk;
//                 // console.log(chunk);
//             });
//             readerStream.on("end", () => {
//                 let optrData = JSON.parse(data);
//                 res.status(200).send( optrData['Operators'] );

//                 // console.log(optrData);
//             });

//            readerStream.on('error', function (err) {
//                 console.log(err.stack);
//             });

//         }
//     })
// })


// router.get('/weldlog',(req, res)=>
// {
//     fs.exists(_weldlog,(exist,err)=>
//     {
//         if (exist) {
//             if (err) throw err
//             let data = "";
//             var readerStream = fs.createReadStream(_weldlog);
//             readerStream.setEncoding('UTF8');
//             readerStream.on('data', (chunk) => {
//                 data += chunk;
//                 // console.log(chunk);
//             });
//             readerStream.on("end", () => {
//                 let weldData = JSON.parse(data);
//                 res.status(200).send( weldData['WeldLog'] );

//                 // console.log(weldData);
//             });

//            readerStream.on('error', function (err) {
//                 console.log(err.stack);
//             });

//         }
//     })
// })

// router.get('/getWeldLogItem/:id',(req,res)=>
// {
//     fs.exists(_weldlog,(exist,err)=>
//     {
//         if(exist)
//         {
//             if(err) throw err
//             let data = "";
//             var readerStream = fs.createReadStream(_weldlog);
//             readerStream.setEncoding('UTF8');
//             readerStream.on('data', (chunk) => {
//                 data += chunk;
//             });
//             readerStream.on("end", () => {

//                 let weldData = JSON.parse(data);
//                 let allLog = weldData['WeldLog'];
//                 allLog.sort((a, b) => a.BoxId.localeCompare(b.BoxId));
//                 let result = allLog.filter(function(item)
//                 {
//                     return item.BoxId === req.params.id;
//                 })
//                 if(result.length >0)
//                 {
//                     console.log(result);
//                     res.status(200).send( result);
//                 }
//             });

//            readerStream.on('error', function (err) {
//                 console.log(err.stack);
//             });

//             // console.log(req.params.id);

//         }
//     })
// })




// router.post('/saveWeldLog', (req, res) => {
//     fs.exists(_weldlog, (exist, err) => {
//         if (exist) {
//             if (err) throw err
//             let data = "";
//             // let id = "";
//             // let userData = "";
//             // let testdata = "";

//             var readerStream = fs.createReadStream(_weldlog);
//             readerStream.setEncoding('UTF8');
//             readerStream.on('data', (chunk) => {
//                 data += chunk;
//             });

//             readerStream.on('end', function () {
//                 let weldLogData = JSON.parse(data);
//                 weldLogData["WeldLog"].push(req.body);
//                 var writerStream = fs.createWriteStream(_weldlog);
//                 writerStream.write(JSON.stringify(weldLogData), 'UTF8');
//                 writerStream.end();
//                 res.status(200).send({'Saved':'Weld log saved..'});
//             });

//             readerStream.on('error', function (err) {
//                 console.log(err.stack);
//             });
//         } else {
//             console.log("user not found");
//             res.status(401).send({ err: "File not found" });
//             return;

//         }
//     })
// })


// router.get('/parts',(req, res)=>
// {
//     fs.exists(partsDB,(exist,err)=>
//     {
//         if (exist) {
//             if (err) throw err
//             let data = "";
//             var readerStream = fs.createReadStream(partsDB);
//             readerStream.setEncoding('UTF8');
//             readerStream.on('data', (chunk) => {
//                 data += chunk;
//                 // console.log(chunk);
//             });
//             readerStream.on("end", () => {
//                 let partsData = JSON.parse(data);
//                 res.status(200).send( partsData['Parts'] );

//                 // console.log(partsData);
//             });

//            readerStream.on('error', function (err) {
//                 console.log(err.stack);
//             });

//         }
//     })
// })

// router.get('/dept',(req, res)=>
// {
//     fs.exists(deptDB,(exist,err)=>
//     {
//         if (exist) {
//             if (err) throw err
//             let data = "";
//             var readerStream = fs.createReadStream(deptDB);
//             readerStream.setEncoding('UTF8');
//             readerStream.on('data', (chunk) => {
//                 data += chunk;
//                 // console.log(chunk);
//             });
//             readerStream.on("end", () => {
//                 let deptData = JSON.parse(data);
//                 res.status(200).send( deptData['Dept'] );

//                 // console.log(deptData);
//             });

//            readerStream.on('error', function (err) {
//                 console.log(err.stack);
//             });

//         }
//     })
// })


module.exports = router

