function curringSum (a) {
	return function (b) {
		return function (c) {
			return a + b + c;
		};
	};
}