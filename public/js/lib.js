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

	function fnRead(){
		var path = 'interns/';
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}else{
				console.log(snapShot.val());
	  	}
		}
}
	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}
	internsApp.Create = fnCreate;
	internsApp.Read = fnRead;
})()

internsApp.Read();
