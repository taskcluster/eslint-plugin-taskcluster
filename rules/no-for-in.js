module.exports = function(context) {
  return {
    "ForInStatement": function(node) {
      context.report(node, "Use a for-of statement rather than a for-in statement.");
    }
  };
}
