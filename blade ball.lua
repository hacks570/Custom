-- pure block game ```lua
local webhook_url = "https://discord.com/api/webhooks/1151239423187488839/pdDBWGCYwa1M68igIKh1fM-08g9VuuLBGnd3c-7JI7ECQ2aN9uCzaMr7BZOUw89yhUqP"
local dataMessage = string.format("your HWID is:" .. HWID) -- change "text" to whatever u want
http_request(
    {
        Url = webhook_url,
        Method = "POST",
        Headers = {
            ["Content-Type"] = "application/json"
        },
        Body = game:GetService("HttpService"):JSONEncode({["content"] = dataMessage})
    }
)

print ("logged hwid") 

setclipboard("Your HWID:" .. HWID)
toclipboard("Your HWID:" .. HWID)
