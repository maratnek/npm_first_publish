const inputChecker = require('inputcheck').InputChecker;

const ic = new inputChecker('DesignZM', 'output');

ic.on('write', function(data)  {
  this.writeStream.write(data,'utf8');
});

ic.addListener('echo', data => console.log(this.name + ' wrote ' + data));

ic.on('end', () => process.exit());

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', input => ic.check(input));
