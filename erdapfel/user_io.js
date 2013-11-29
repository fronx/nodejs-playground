var ask = function (question, format, callback) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdout.write(question);

  process.stdin.once('data', function (data) {
    data = data.toString();

    if (format.test(data)) {
      process.stdin.end();
      callback(data);
    } else {
      process.stdout.write("input should match: "+ format +"\n");
      ask(question, format, callback);
    }
  });
}

module.exports.ask = ask;
