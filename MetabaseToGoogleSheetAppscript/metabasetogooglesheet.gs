function updateMetabaseUP() {
  var metabaseUrl = "<YOUR_METABASE_URL>"; // e.g., "http://your_metabase_instance_url"
  var queryId = <YOUR_METABASE_QUERY_ID>; // e.g., 808
  var metabaseUsername = "<YOUR_METABASE_USERNAME>"; // e.g., "your_email@example.com"
  var metabasePassword = "<YOUR_METABASE_PASSWORD>"; // e.g., "your_password"
  var spreadsheetId = "<YOUR_GOOGLE_SHEET_ID>"; // e.g., "your_google_sheet_id"
  var sheetName = "<YOUR_SHEET_TAB_NAME>"; // e.g., "YourTabName"
  var metabaseLoginEndpoint = metabaseUrl + "/api/session";
  
  var payload = {
    username: metabaseUsername,
    password: metabasePassword
  };
  
  var headersLoginMetabase = {
    "Content-Type": "application/json"
  };
  
  try {
    // Login to Metabase and get session token
    var responseLoginMetabase = UrlFetchApp.fetch(metabaseLoginEndpoint, {
      method: 'post',
      headers: headersLoginMetabase,
      payload: JSON.stringify(payload)
    });
    
    // Parse the session token from the response
    var sessionToken = JSON.parse(responseLoginMetabase.getContentText()).id;
    Logger.log("Session Token: " + sessionToken);
    
    var metabaseQueryEndpoint = metabaseUrl + "/api/card/" + queryId + "/query/json";
    var headersMetabase = {
      "Content-Type": "application/json",
      "X-Metabase-Session": sessionToken
    };
    
    // Query Metabase with the session token
    var responseMetabase = UrlFetchApp.fetch(metabaseQueryEndpoint, {
      method: 'post',
      headers: headersMetabase
    });
    
    Logger.log("Metabase Response for query " + queryId + ": " + responseMetabase.getContentText());
    
    var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    sheet.clear();
    
    var responseBody = JSON.parse(responseMetabase.getContentText());
    Logger.log("Response Body for query " + queryId + ": " + JSON.stringify(responseBody));
    
    if (responseBody.length) {
      // Write the data directly into the sheet
      var formattedData = responseBody.map(row => Object.values(row)); // Convert each row to an array of values
      
      // Insert data into the sheet
      sheet.getRange(1, 1, formattedData.length, formattedData[0].length).setValues(formattedData);
      Logger.log("Metabase query results for query " + queryId + " added to the spreadsheet");
    } else {
      Logger.log("The Metabase query " + queryId + " did not return any results.");
    }
  } catch (error) {
    Logger.log("Error: " + error.toString());
  }
}
