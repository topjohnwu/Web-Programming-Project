function counter() {
	var count = 0;
	return {
		getCount: function () { return count; },
		increase: function () { ++count; },
		decrease: function () { --count; }
	};
}