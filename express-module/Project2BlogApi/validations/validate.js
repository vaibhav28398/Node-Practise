module.exports={isValidatePost(req)
{
	if(!req.body.name.trim()||!req.body.url.trim()||!req.body.text.trim())
		return false
	return true
},
isValidateComment(req)
{
	if(!req.body.text.trim())
		return false
	return true
}
}