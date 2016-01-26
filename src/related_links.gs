var FIELD_TITLE_INDEX = 1,
    FIELD_URL_INDEX = 7;

/**
 * Adds a custopm menu to the active spreadsheet, containing a single menu item
 * for invoking logRelatedLinks method.
 * onOpen, if defined is automaticly invoked whenever the spreadsheet is opened
 */
function onOpen() {
  addMenu();
}


/**
 * Adds a menu item, called on load.
 */
function addMenu() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  
  var menuList = [{
      name: 'Get Links',
      functionName: 'renderList'
  }];
  
  sheet.addMenu('Related Links', menuList);
}


/**
 * Renders the lightbox with the UI.
 *
 * @return {String} of structured UL, LI HTML element markup.
 */
function renderList() {
  var title = 'HTML Links Structure';
  
  var linksList = getSelectedRows(),
      sheet = SpreadsheetApp.getActiveSpreadsheet(),
      app = UiApp.createApplication().setTitle(title),
      html = '';

  html += '<ul class="related_links">';
  for (var link, i = 0, len = linksList.length; i < len; i++) {
    link = Object(linksList[i]);
    html += '<li><a href="'+ link.href +'">'+ link.title +'</a></li>';
  }
  html += '</ul>';
  
  app.add(app.createLabel(html));
  sheet.show(app);
}


/**
 * Gets a list of active rows. Data is structured into a key,value pairs of title, link.
 *
 * @return {Array} of links
 */
function getSelectedRows() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var range = sheet.getActiveRange();
  var values = range.getValues();
  
  var outputList = [];
  
  for (var i = 0, numRows = range.getNumRows(); i <= numRows - 1; i++) {
    outputList.push({
      title: values[i][FIELD_TITLE_INDEX],
      href: values[i][FIELD_URL_INDEX]
    });
  }
  
  Logger.log(outputList);
  return outputList;
}
