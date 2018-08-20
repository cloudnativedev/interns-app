fb = {};
fb = firebase;

function fnCreate(path, body, callBack){
		if(!path || !body) return;
		fb.database().ref(path).set(body, callBack);
}

fb.data = {
		create: fnCreate,
}
