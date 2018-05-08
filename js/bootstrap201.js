console.log("Sanity Check!");


setTimeout(function(){
	$('#myModal').modal('toggle');
},1000)


$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})