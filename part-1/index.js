const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

daysOfWeek = {monday: 1,
              tuesday:2,
              wednesday: 3,
              thursday: 4,
              friday: 5,
              saturday: 6,
              sunday: 7};

app.get('/api/days/:day', function (req, res) {
  const targetDay = req.params.day;
  res.set('Content-Type', 'application/text');

  if (daysOfWeek[targetDay] !== undefined) {
    res.status(200)
    res.send(daysOfWeek[req.params.day].toString())
  } else {
    res.status(400).send(`${targetDay} is not a valid day!`);
  }
})

app.post('/api/array/concat', function (req, res) {
  const array1 = JSON.parse(req.body.array1);
  const array2 = JSON.parse(req.body.array2);

  if (Array.isArray(array1) && Array.isArray(array2)) {
    res.json({result: array1.concat(array2)});
  } else {
    res.status(400).json({error: "Input data should be of type Array."})
  }
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
