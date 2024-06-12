

sub ShowGridScreen()
    m.GridScreen = CreateObject("roSGNode", "GridScreen")
    m.GridScreen.ObserveField("rowItemSelected", "OnGridScreenItemSelected")
    ShowScreen(m.GridScreen) ' show GridScreen
    
end sub



sub OnGridScreenItemSelected(event as Object) ' invoked when GridScreen item is selected

    button = m.top.FindNode("greenButton")
    button1 = m.top.FindNode("redButton")
    label = m.top.FindNode("counter")

    caloriesBurned = label.text.ToInt()
    calorieGoal = 2500


    caloriesBurned = caloriesBurned + 500

    if caloriesBurned >= calorieGoal then
        button.visible = "true"
        button1.visible = "false"
    end if

    label.text = caloriesBurned

    grid = event.GetRoSGNode()
    ' extract the row and column indexes of the item the user selected
    m.selectedIndex = event.GetData()
    ' the entire row from the RowList will be used by the Video node
    rowContent = grid.content.GetChild(m.selectedIndex[0])
    itemIndex = m.selectedIndex[1]
    ShowVideoScreen(rowContent, itemIndex)
end sub