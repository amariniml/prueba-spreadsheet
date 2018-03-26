function messageOnScreen() {
  Browser.msgBox("Hola como va?")
  Browser.msgBox('Que tal como te va?')
}

function getActiveCellValue(){
  return SpreadsheetApp.getActive().getActiveSheet().getActiveCell().getValue();
}
