// var cw = $('.projicon img').width();
$("#abouttab").hide();
$("#abouttablabel").click(function(){
  $("#projtab").hide();
  $("#abouttab").show();
  $("#abouttablabel").addClass("active");
  $("#projtablabel").removeClass("active");

  // action goes here!!
});
$("#projtablabel").click(function(){
  $("#projtab").show();
  $("#abouttab").hide();
  $("#abouttablabel").removeClass("active");
  $("#projtablabel").addClass("active");
  // action goes here!!
});
// $('svg').css({'height':cw+'px'; 'width':cw+'px'});
// $('#picofme').css({'height':cw+'px'});
// $('#picofme').resizable();
