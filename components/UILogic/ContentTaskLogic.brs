sub RunContentTask()
    m.contentTask = CreateObject("roSGNode", "MainLoaderTask") ' create task for feed retrieving
    ' observe content so we can know when feed content will be parsed
    m.contentTask.ObserveField("content", "OnMainContentLoaded")
    m.contentTask.control = "run" ' GetContent(see MainLoaderTask.brs) method is executed
    m.loadingIndicator.visible = true ' show loading indicator while content is loading
end sub

sub OnMainContentLoaded() ' invoked when content is ready to be used
    m.GridScreen.SetFocus(true) ' set focus to GridScreen
    m.loadingIndicator.visible = false ' hide loading indicator because content was retrieved
    m.GridScreen.content = m.contentTask.content ' populate GridScreen with content

    loadMotion()
    
    time = m.top.findNode("motionTimer")
    time.ObserveField("fire", "updateMotion")
    

end sub

sub OnMainContentLoaded2()
    'm.GridScreen.SetFocus(true)
    m.loadingIndicator.visible = false ' hide loading indicator because content was retrieved
    'm.GridScreen.content = m.contentTask.content
    m.top.findNode("titleLabel").visible = "true"
    m.top.findNode("descriptionLabel").visible = "true"
    m.top.findNode("rowList").visible = "true"
end sub

sub setFocus()

    m.GridScreen.SetFocus(true)

end sub

function loadMotion()

    m.xfer = CreateObject("roURLTransfer")
    m.xfer.SetCertificatesFile("common:/certs/ca-bundle.crt")
    m.xfer.SetURL("https://drive.usercontent.google.com/uc?id=1Z6SnTYv3oPnCZdl9KXyzj_gFR5hc8lLB&export=download")
    m.top.findNode("debug").text = m.xfer.GetToString()

end function

function updateMotion()

    mxx = m.xfer.GetToString()
    m.top.findNode("debug").text = mxx

    if Instr(1, mxx, "true") <> 0 then
        m.top.findNode("motionIndicator").uri = "pkg:/images/green.png"
    else
        m.top.findNode("motionIndicator").uri = "pkg:/images/red.png"
    end if 
end function