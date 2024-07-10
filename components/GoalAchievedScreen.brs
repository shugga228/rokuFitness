sub Init()

    if GetAuthData() <> invalid
        temp = GetAuthData().ToInt()
        temp = temp + 1
        m.top.findNode("streak").text = temp.ToStr() + " Day Streak"

    else
        temp = 1
        m.top.findNode("streak").text = "1 Day Streak"
    end if

    SetAuthData(temp.ToStr())



    
end sub

Function GetAuthData() As Dynamic

    reg = CreateObject("roRegistry")
    sec = CreateObject("roRegistrySection", "Authentication")

    if sec.Exists("UserRegistrationToken")
        return sec.Read("UserRegistrationToken")
    endif
    return invalid

End Function

Function SetAuthData(currentStreak As String) As Void

    reg = CreateObject("roRegistry")
    sec = CreateObject("roRegistrySection", "Authentication")
    sec.Write("UserRegistrationToken", currentStreak)
    sec.Flush()

End Function