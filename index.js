module.exports.processors = {
  ".json": {
    preprocess: function(text, filename) {
      var toTest = `(${text})`
      return [toTest]
    },
    postprocess: function(messages, filename) {
      return messages[0];
    }
  }
}
