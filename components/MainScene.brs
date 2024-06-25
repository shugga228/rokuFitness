' entry point of  MainScene
sub Init()
    ' set background color for scene. Applied only if backgroundUri has empty value
    m.top.backgroundColor = "0x4a2b6b"
    m.top.backgroundUri= "pkg:/images/ground.png"

    ' add back if you want to use specific background image
    ' m.top.backgroundUri= "pkg:/images/background.png"
    m.loadingIndicator = m.top.FindNode("loadingIndicator") ' store loadingIndicator node to m
    InitScreenStack()
    ShowGridScreen()
    RunContentTask() ' retrieving content
    m.board = m.top.FindNode("keyboard")
    m.submit = m.top.FindNode("submitButton")
    m.board.SetFocus(true)
    m.submit.ObserveField("buttonSelected", "initMain")
end sub

' The OnKeyEvent() function receives remote control key events
function OnkeyEvent(key as String, press as Boolean) as Boolean
    result = false
    if press
        ' handle "back" key press
        if key = "back"
            numberOfScreens = m.screenStack.Count()
            ' close top screen if there are two or more screens in the screen stack
            if numberOfScreens > 1
                CloseScreen(invalid)
                result = true
                timer = m.top.findNode("testTimer")
                timer.control = "stop"
            end if
        end if
        if key = "down" and not m.submit.hasFocus() and m.submit.visible
            m.submit.setFocus(true)
            result = true
        
        else if key = "up" and not m.board.hasFocus() and m.board.visible
            m.board.setFocus(true)
            result = true
        end if 
    end if
    ' The OnKeyEvent() function must return true if the component handled the event,
    ' or false if it did not handle the event.
    return result
end function

function initMain()

    input = m.board.text
    '80kg 1.9m 400cal format digits dont matter
    height = Right(Left(input.ToStr(), Instr(1, input.ToStr(), "m") - 1), Instr(1, input.ToStr(), "kg"))
    weight = Left(input.ToStr(), Instr(1, input.ToStr(), "kg") - 1)
    calInit = Right(input.ToStr(), Instr(1, input.ToStr(), "m") - 3).Replace("cal", "")

    m.top.findNode("weight").text = weight.ToStr() + " kg"
    m.top.findNode("height").text = height.ToStr() + " m"

    bmi = weight.ToFloat() / (height.ToFloat() * height.ToFloat())


    if bmi < 18.5 then 
        calGoal = 1500
    else if 18.5 <= bmi and bmi < 24.9 then 
        calGoal = 2000
    else if 25 <= bmi and bmi < 29.9 then 
        calGoal = 2500
    else if 30 <= bmi and bmi < 34.9 then 
        calGoal = 3000
    else if 35 <= bmi and bmi < 39.9 then 
        calGoal = 3500
    else 
        calGoal = 4000
    end if 

    m.top.findNode("counter").text = calInit.toStr()

    barPercent = (calInit.ToInt() * 100) / calGoal

    barPercent = Fix(barPercent)

   if barPercent >= 100 then
        ringString = "100"
        notification.color = "0x77eb34ff"
    else
      ringString = barPercent.ToStr()
    end if

    
    m.top.findNode("ring").iconUri = "pkg:/images/ring/" + ringString + ".png"
    m.top.findNode("goalLabel").text = "Daily Calorie Goal: " + calGoal.ToStr()

    
    m.top.findNode("info").text = input.ToStr()
    
    m.top.findNode("goalLabel").visible = "true"
    m.top.findNode("weight").visible = "true"
    m.top.findNode("height").visible = "true"
    m.top.findNode("counter").visible = "true"
    m.top.findNode("ring").visible = "true"
    m.top.findNode("overhang").visible = "true"
    m.top.findNode("tos").visible = "false"
    m.top.findNode("keyboard").visible = "false"
    m.top.findNode("submitButton").visible = "false"

    m.submit = m.top.FindNode("submitButton")
    m.submit.SetFocus(false)
    m.board = m.top.FindNode("keyboard")
    m.board.SetFocus(false)

    OnMainContentLoaded2()
    


    
end function 
