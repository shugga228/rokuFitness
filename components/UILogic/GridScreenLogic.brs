sub ShowGridScreen()
    m.GridScreen = CreateObject("roSGNode", "GridScreen")
    m.GridScreen.ObserveField("rowItemSelected", "OnGridScreenItemSelected")
    ShowScreen(m.GridScreen) ' show GridScreen
    
end sub

sub OnGridScreenItemSelected(event as Object) ' invoked when GridScreen item is selected

    m.top.FindNode("logoBack").visible = "false"
    m.top.FindNode("overhang").visible = "false"

    flash = m.top.FindNode("alertTimer")

    m.alertCount = 0 
    flash.ObserveField("fire", "alert")
    flash.control = "start"


    m.top.findNode("goalBack").visible = "true"
    m.top.findNode("miniGoal1").visible = "true"
    m.top.findNode("miniGoal2").visible = "true"
    
    title = m.top.FindNode("titleLabel")
    timer = m.top.findNode("testTimer")
    m.top.FindNode("backgroundTimer").duration = "0.1"

    min = title.text.Right(5).Left(2).ToInt()

    sec = 3 'min.ToInt() * 60 for actual use 

    
    timer.duration = sec.ToStr()
    timer.ObserveField("fire", "addCal")
    timer.control = "start"
    


    grid = event.GetRoSGNode()
    ' extract the row and column indexes of the item the user selected
    m.selectedIndex = event.GetData()
    ' the entire row from the RowList will be used by the Video node
    rowContent = grid.content.GetChild(m.selectedIndex[0])
    itemIndex = m.selectedIndex[1]
    ShowVideoScreen(rowContent, itemIndex)

    'checkGoal("miniGoal1")
    'checkGoal("miniGoal2")

end sub

function addCal()

    ring = m.top.FindNode("ring")
    count = m.top.FindNode("counter")
    title = m.top.FindNode("titleLabel")
    notification = m.top.FindNode("goalLabel")
    weight = m.top.FindNode("weight")
    des = m.top.FindNode("descriptionLabel")
    timer = m.top.findNode("testTimer")

    
    weightInt = weight.text.Replace("kg", "").ToInt()
    caloriesBurned = count.text.ToInt()
    calorieGoal = notification.text.Replace("Daily Calorie Goal:", "").ToInt()

    ' Formula for calculating calories burned: METS X 3.5 X BW (KG) / 200 X MIN = KCAL
    index = des.text.Len() - des.text.Instr("|")
    METS = des.text.Right(index - 1).Replace("METS", "").ToFloat()
    min = title.text.Right(5).Left(2).ToInt()

    caloriesBurned = Fix((METS * 3.5 * weightInt / 200 * min)) + caloriesBurned

    barPercent = (caloriesBurned * 100) / calorieGoal

    barPercent = Fix(barPercent)

   if barPercent >= 100 then
        ringString = "100"
        notification.color = "0x77eb34ff"
        m.goalString = "Two"
        m.top.FindNode("infoPanel").uri = "pkg:/images/infoPanel2.png"
    else
      ringString = barPercent.ToStr()
    end if

    
    ring.iconUri = "pkg:/images/ring/" + ringString + ".png"

    count.text = caloriesBurned.ToStr() 
    m.top.FindNode("testTimer").unobserveField("fire")

end function

function alert()

    if m.alertCount MOD 2 = 1 then
        m.top.FindNode("miniGoal1").visible = "false"
        m.top.FindNode("miniGoal2").visible = "false"
    else
        m.top.FindNode("miniGoal1").visible = "true"
        m.top.FindNode("miniGoal2").visible = "true"
    end if

    m.alertCount = (m.alertCount + 1) 
    m.top.FindNode("debug").text = m.alertCount.ToStr()

    if m.alertCount = 8 then
        m.top.FindNode("alertTimer").control = "stop"
        m.top.FindNode("miniGoal1").visible = "true"
        m.top.FindNode("miniGoal2").visible = "true"
        m.top.FindNode("debug").text = m.alertCount.ToStr()
    end if 

end function

function checkGoal(goal as String)

    ' Watch 2 Cardio videos | (0/2)
    full = m.top.findNode(goal).text
    leftSide = Left(full, Instr(1, full, "|"))
    goalCount = (Right(full, Len(full) - Instr(1, full, "|")).Replace("(","").Left(2)).ToInt()
    goalLimit = (Right(full, Len(full) - Instr(1, full, "|")).Replace(")","").Right(1)).ToInt()
    ogTitle = m.top.findNode("titleLabel").text.Left(Instr(1, m.top.findNode("titleLabel").text, " "))
    sameType = Instr(1, leftSide, ogTitle)
    test = (leftSide.ToStr() + "  " + ogTitle.ToStr() + " " + sameType.ToStr())

    
    
    m.top.findNode(goal).text = Instr(1, leftSide, ogTitle).ToStr()

end function