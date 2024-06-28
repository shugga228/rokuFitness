

sub ShowGridScreen()
    m.GridScreen = CreateObject("roSGNode", "GridScreen")
    m.GridScreen.ObserveField("rowItemSelected", "OnGridScreenItemSelected")
    ShowScreen(m.GridScreen) ' show GridScreen
    
end sub



sub OnGridScreenItemSelected(event as Object) ' invoked when GridScreen item is selected

    title = m.top.FindNode("titleLabel")
    timer = m.top.findNode("testTimer")

    min = title.text.Right(5).Left(2).ToInt()

    sec = 3 'min.ToInt() * 60 for actual use 

    timer.duration = sec.ToStr()
    timer.repeat = "false"
    timer.control = "start"
    timer.ObserveField("fire", "addCal")


    grid = event.GetRoSGNode()
    ' extract the row and column indexes of the item the user selected
    m.selectedIndex = event.GetData()
    ' the entire row from the RowList will be used by the Video node
    rowContent = grid.content.GetChild(m.selectedIndex[0])
    itemIndex = m.selectedIndex[1]
    ShowVideoScreen(rowContent, itemIndex)

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
    else
      ringString = barPercent.ToStr()
    end if

    
    ring.iconUri = "pkg:/images/ring/" + ringString + ".png"

    count.text = caloriesBurned.ToStr() 

end function