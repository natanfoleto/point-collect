const AWS = require('aws-sdk');

const awsConfig = require('../../config/aws');

exports.send = async function(number, token) {
  number = '17992424418';
  token = '123456';

  AWS.config.update({
    apiVersion: awsConfig.aws.apiVersion,
    region: awsConfig.aws.region,
    accessKeyId: awsConfig.aws.accessKeyId,
    secretAccessKey: awsConfig.aws.secretAccessKey,
  });
  
  var params = {
    PhoneNumber: '55' + number,
    MessageStructure: 'string',
    Message: `POINTCOLLECT: Use o codigo de verificacao ${token} para alterar sua senha APP Seguro Defeso do Pescador.`,
  };

  const sns = new AWS.SNS({ apiVersion: awsConfig.aws.apiVersion });

  sns.setSMSAttributes({
    attributes: {
      DefaultSMSType: 'Transactional'
    },
    function(error) {
      if (error) reject(error)
    }
  });

  sns.publish(params).promise()
    .then(function(data) {
      console.log(`SMS "${token}" enviado para ` + number);
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });
}