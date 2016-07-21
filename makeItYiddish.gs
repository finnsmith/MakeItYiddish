function onInstall() {
  onOpen();
  showSidebar();
}

function onOpen() {
  SpreadsheetApp.getUi()
  .createAddonMenu() 
  .addItem("Make it Yiddish!", "showSidebar")
  .addToUi();
}

function showSidebar() {
  var html = HtmlService.createTemplateFromFile("makeItYiddishSidebar")
    .evaluate()
    .setTitle("Make it Yiddish! (Or English.)"); 
  SpreadsheetApp.getUi().showSidebar(html);
}

function makeItYiddish() {
  translate('', 'yi');
}

function makeItEnglish() {
  translate('yi', 'en');
}


function translate(sourceLanguage, targetLanguage) {
  var selection = SpreadsheetApp.getActiveRange();
  var oldData = selection.getValues();
  var newData = [];
  
  for (i in oldData) {
    var thisRow = oldData[i];
    var newRow = [];
    for (j in thisRow) {
      var thisCell = thisRow[j];
      newRow.push(LanguageApp.translate(thisCell, sourceLanguage, targetLanguage));
    }
    newData.push(newRow);
  }
  selection.setValues(newData);
}
 