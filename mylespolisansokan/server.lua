local DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1277254463413031023/DIi3w8xTzyAqKRSfM2x27JwPgEtnBcVNBn1OQCXDHV_NrrmUmVk7NZGSkExi9jHwS64W"


RegisterServerEvent('log2')
AddEventHandler('log2', function(data)



    local connect = {
        {
            ["color"] = "255",
            ["title"] = "Ny Ansökan | " ..data.plate,
            ["description"] = "**Förnamn & Efternamn:** "..data.plate.." \n\n **Telefonnummer:** "..data.telefonnummer.." \n\n **Ålder**: "..data.age.." \n\n **Personnummer:** "..data.personnummer.."\n\n **Kön:** "..data.gender.."\n\n",
	        ["footer"] = {
                ["text"] = "Polismyndigheten | Ny Ansökan",
            },
        }
    }
    PerformHttpRequest(DISCORD_WEBHOOK, function(err, text, headers) end, 'POST', json.encode({username = "Polismyndigheten AI",  avatar_url = "https://cdn.discordapp.com/attachments/1014906857795637398/1073747683912716358/polisen-logo-79ACFB0A87-seeklogo.com.png",embeds = connect}), { ['Content-Type'] = 'application/json' })
end)

