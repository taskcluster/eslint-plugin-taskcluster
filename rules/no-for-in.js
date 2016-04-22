module.exports = function(context) {
  return {
    "ForInStatement": function(node) {
      context.report(node, "Avoid for-in loops! Replace with a for-of loop.");
    }
  };
}
