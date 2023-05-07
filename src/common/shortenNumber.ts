const shortenNumber = (num: number): string => {
	const suffixes: string[] = ["", "K", "M", "B", "T"];
	const magnitude: number = Math.floor(Math.log10(num) / 4);
	const suffix: string = suffixes[magnitude];
	const shortNum: number = Math.floor(num / Math.pow(10, magnitude * 3));
	return shortNum.toString() + suffix;
};

export default shortenNumber;
