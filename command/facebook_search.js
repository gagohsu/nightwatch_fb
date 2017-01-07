/*
	type  
		search or url
	

*/
exports.command=function (type,input) {
	var brower = this;
	if(type==="search")
	{
		brower
			.page.facebook()
			.setValue('@search_input',input)
			.click('@search_button')
	}
	else if(type ==="url")
	{
		brower
			.url(input)
			.page.facebook()
			.waitForElementVisible('@allsell',"進入商品頁")
	}
	else
	{
		console.log('type error!!')
	}
	return this;
}