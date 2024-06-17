

sub ShowGridScreen()
    m.GridScreen = CreateObject("roSGNode", "GridScreen")
    m.GridScreen.ObserveField("rowItemSelected", "OnGridScreenItemSelected")
    ShowScreen(m.GridScreen) ' show GridScreen
    
end sub



sub OnGridScreenItemSelected(event as Object) ' invoked when GridScreen item is selected

    ring = m.top.FindNode("ring")
    count = m.top.FindNode("counter")
    title = m.top.FindNode("titleLabel")
    notification = m.top.FindNode("goalLabel")
    weight = m.top.FindNode("weight")


    weightInt = weight.text.Replace("kg", "").ToInt()
    caloriesBurned = count.text.ToInt()
    calorieGoal = 5000

    ' Formula for calculating calories burned: METS X 3.5 X BW (KG) / 200 X MIN = KCAL
    METS = 1 
    min = title.text.Right(5).Left(2).ToInt()
    caloriesBurned = Fix((METS * 3.5 * weightInt / 200 * min) + caloriesBurned)

    barPercent = (caloriesBurned * 100) / calorieGoal

    barPercent = Fix(barPercent)

   if barPercent >= 100 then
        ringString = "100"
        notification.text = "Daily Goal Met"
        notification.color = "0x77eb34ff"
    else
      ringString = barPercent.ToStr()
    end if

    
    ring.iconUri = "pkg:/images/ring/" + ringString + ".png"

    count.text = caloriesBurned.ToStr()

    grid = event.GetRoSGNode()
    ' extract the row and column indexes of the item the user selected
    m.selectedIndex = event.GetData()
    ' the entire row from the RowList will be used by the Video node
    rowContent = grid.content.GetChild(m.selectedIndex[0])
    itemIndex = m.selectedIndex[1]
    ShowVideoScreen(rowContent, itemIndex)
end sub