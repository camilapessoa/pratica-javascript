function foo() {
  for (var i = 0, j = arguments.length; i < j; i++) {
    document.write(arguments[i] + " ");
  }
  document.write("<br />");
}
