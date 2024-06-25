' entry point of  MainScene
sub Init()
    ' set background color for scene. Applied only if backgroundUri has empty value
    m.top.backgroundColor = "0x662D91"
    m.top.backgroundUri= "pkg:/images/background.jpeg"

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
    'for debugging
    m.top.findNode("info").visible = "true"
    input = m.board.text
    m.top.findNode("info").text = input.ToStr()
    
    m.top.findNode("goalLabel").visible = "true"
    m.top.findNode("weight").visible = "true"
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
