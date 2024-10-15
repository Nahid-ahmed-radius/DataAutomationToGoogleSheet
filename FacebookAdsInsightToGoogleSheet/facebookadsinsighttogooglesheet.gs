function fetchFacebookAdsData() {
  var accessToken = "YOUR_FACEBOOK_ACCESS_TOKEN"; // Your Facebook access token
  var adAccountId = "act_YOUR_AD_ACCOUNT_ID"; // Your Facebook Ad Account ID
  var spreadsheetId = "YOUR_GOOGLE_SHEET_ID"; // Google Sheet ID
  var sheetName = "FacebookAdsData"; // Tab name in the Google Sheet

  var url = "https://graph.facebook.com/v14.0/" + adAccountId + "/insights?access_token=" + accessToken + "&fields=campaign_name,adset_name,ad_name,spend,impressions,clicks&date_preset=last_30d";

  try {
    // Fetch data from Facebook Ads API
    var response = UrlFetchApp.fetch(url);
    var jsonResponse = JSON.parse(response.getContentText());

    if (jsonResponse.data && jsonResponse.data.length) {
      var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
      sheet.clear(); // Clear the existing content

      // Create the header row
      var headerRow = Object.keys(jsonResponse.data[0]);
      sheet.getRange(1, 1, 1, headerRow.length).setValues([headerRow]);

      // Prepare and insert data
      var formattedData = jsonResponse.data.map(row => {
        return headerRow.map(column => row[column] || ''); // Handle missing data
      });

      sheet.getRange(2, 1, formattedData.length, headerRow.length).setValues(formattedData);
      Logger.log("Facebook Ads data has been successfully fetched and added to the spreadsheet.");
    } else {
      Logger.log("No data returned from Facebook Ads API.");
    }
  } catch (error) {
    Logger.log("Error fetching Facebook Ads data: " + error.toString());
  }
}
