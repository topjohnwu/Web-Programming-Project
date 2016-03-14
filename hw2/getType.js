function getType(a) {
	if(a !== a) return 'NaN';
	else if(a === null) return 'null';
	else if(a instanceof(Array)) return 'array';
	else return typeof(a);
}