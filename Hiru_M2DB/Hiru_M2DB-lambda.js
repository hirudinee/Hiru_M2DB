let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.put({
		TableName: 'HiruTest',
		Item: { 'sample': '123' }
	}, function (err, data) {
		if (err) {
			console.log('Error',err);
		} else {
			console.log('success',data);
		}
	});


	callback(null, 'Successfully executed');
}