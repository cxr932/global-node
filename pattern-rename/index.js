module.exports = () => {
  var fs = require('fs'),
    path = require('path'),
    args = process.argv.slice(2),
    dir = args[0],
    match = RegExp(args[1], 'g'),
    replace = args[2],
    files,
    toLowerCase = /<toLowerCase>(.+)<\/toLowerCase>/,
    toUpperCase = /<toUpperCase>(.+)<\/toUpperCase>/

  files = fs.readdirSync(dir);

  files.filter(function(file) {
    return file.match(match);
  }).forEach(function(file) {
    var filePath = path.join(dir, file),
        newFilePath = path.join(
          dir,
          file
            .replace(match, replace)
            .toLowerCase()
        );

    fs.renameSync(filePath, newFilePath);
  });
}