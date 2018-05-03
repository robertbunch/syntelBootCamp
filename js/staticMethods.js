class doMath{
	static add(x,y){
		return x+y;
	}
	static substract(x,y){
		return x-y;
	}
	static double(x){
		return x*x;
	}
}
// const x = new doMath()
// x.add(1,2)
doMath.add(1,2);

module.exports = doMath;