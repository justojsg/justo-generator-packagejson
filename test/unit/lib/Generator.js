//imports
const path = require("path");
const Dir = require("justo-fs").Dir;
const file = require("justo-assert-fs").file;
const Generator = require("../../../dist/es5/nodejs/justo-generator-packagejson");
const suite = require("justo").suite;
const test = require("justo").test;
const init = require("justo").init;
const fin = require("justo").fin;

//suite
suite("Genertaor", function() {
  suite("#constructor()", function() {
    test("constructor()", function() {
      var gen = new Generator({});

      gen.must.be.instanceOf(Generator);
    });
  });

  suite("#generate()", function() {
    var gen, DST;

    init("*", function() {
      DST = Dir.createTmpDir();
      gen = new Generator({src: "dist/es5/nodejs/justo-generator-packagejson/template", dst: DST.path}, {});
    });

    fin("*", function() {
      DST.remove();
    });

    test("generate(answers)", function() {
      gen.generate({});
      file(DST.path, "package.json").must.exist();
    });
  });
})();
