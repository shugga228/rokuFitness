sub Init()

    m.top.findNode("streak").font.size = 150
    
    m.top.backgroundUri= "pkg:/images/background.jpeg"
    'm.top.findNode("motionTimer").control = "stop"

    fTime = m.top.findNode("animationTimer")
    fTime.control = "start"
    m.fc = 1
    fTime.ObserveField("fire", "frame")


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


function OnkeyEvent(key as String, press as Boolean) as Boolean

    result = false

    if press
        ' handle "back" key press
        if key = "back"  
                m.top.findNode("animationTimer").control = "stop"
            end if
        end if
 
    return result
end function
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

function frame()

    m.top.findNode("streakIcon").uri = "pkg:/images/streak/" + m.fc.ToStr() + ".png"
    m.fc = m.fc + 1

    if m.fc = 5 then
        m.fc = 1
    end if 

end function