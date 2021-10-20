$(document).ready(function() {
  
  $(".JavaScript").click(function() {  
    $("#JavaScriptTitle").toggle();
    $("#JavaScriptDefinition").toggle();
  });
    
  $(".Operators").click(function() {
    $("#OperatorstTitle").toggle();
    $("#OperatorsDefinition").toggle();
  });

  $(".Variables").click(function() {
    $("#VariablestTitle").toggle();
    $("#VariablesDefinition").toggle();
  });

  $(".VariableNamingConventions").click(function() {
    $("#VariableNamingConventionsTitle").toggle();
    $("#VariableNamingConventionsDefinition").toggle();
  });

});
