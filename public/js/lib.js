internsApp = {};

(function(){

	function fnCreate(){
		uid = $('#internID').val();
		var path = 'interns/' + uid;
		var internName = $("#internName").val();
		var internTeam = $("#internTeam").val();
		var internProject = $("#internProject").val();
		var data = {
			name: internName,
			team: internTeam,
			project: internProject
		}
		fb.data.create(path, data, messageHandler);
	}

	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}
	internsApp.Create = fnCreate;
})()
