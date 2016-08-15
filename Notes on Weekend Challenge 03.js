Notes on Weekend Challenge #3

Dropdown menu:

<select name="operation">
	<option value="add">Add</option>
	etc...

</select>



In app.js file:
var calculate = require('./routes/calculate');

//routes
app.use('/calculate', )  ......


$.ajax({
	type: 'POST',
	url: '/calculate/' + problem.type,
	data: problem,
	success: updateDom
});

function updateDom(response) {
	console.log('server says: ', response);
}




In calculate.js file:

router.post('/add', function(req, res) {

});


converts response to json: 
res.json({answer: answer});

could use res.send(answer.toString());  //because you can't send a number via Express