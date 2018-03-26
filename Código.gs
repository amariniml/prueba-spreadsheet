function messageOnScreen() {
  Browser.msgBox("Hola como va?")
  Browser.msgBox('Que tal como te va?')
}

function getActiveCellValue(){
  return SpreadsheetApp.getActive().getActiveSheet().getActiveCell().getValue();
}

function testingFunction(){
  Logger.log('Esta es una función de testeo para saber como funciona la creación de branch');
}