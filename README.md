# Google Sheets Data Automation

This repository contains Google Apps Scripts to automate data fetching from Metabase and Facebook Ads into Google Sheets. These scripts can be customized for different queries and data needs, providing a streamlined way to manage and analyze your data.

## Table of Contents
- [Overview](#overview)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
  - [Metabase to Google Sheets](#metabase-to-google-sheets)
  - [Facebook Ads to Google Sheets](#facebook-ads-to-google-sheets)
- [How to Use](#how-to-use)
- [License](#license)

## Overview

This project allows you to:
- Fetch data from **Metabase** and populate a Google Sheet with the results of specific queries.
- Retrieve insights from **Facebook Ads** and display them in Google Sheets for easy analysis.

## Requirements

- A **Google Account** to use Google Sheets and Google Apps Script.
- Access to **Metabase** with appropriate credentials and query IDs.
- A **Facebook Developer Account** with a created app to generate an access token.

## Setup Instructions

### Metabase to Google Sheets

1. **Get Metabase Credentials**:
   - Ensure you have the Metabase URL, username, and password.

2. **Identify Your Query ID**:
   - Log in to Metabase and find the query you want to use. Note its query ID.

3. **Create a Google Sheet**:
   - Create a new Google Sheet and add a tab named `MetabaseUP`.

4. **Open Google Apps Script**:
   - In your Google Sheet, click on `Extensions` > `Apps Script`.

5. **Add the Script**:
   - Paste the provided Metabase script into the editor.

6. **Replace Placeholders**:
   - Update the placeholders in the code:
     - **Metabase URL**: Your Metabase instance URL.
     - **Username**: Your Metabase username.
     - **Password**: Your Metabase password.
     - **Query ID**: The ID of the query you want to fetch.
     - **Google Sheet ID**: The ID of your Google Sheet.
     - **Sheet Tab Name**: The tab name for the data (default is `MetabaseUP`).

7. **Authorize the Script**:
   - Save and run the script for the first time to authorize it.

### Facebook Ads to Google Sheets

1. **Create a Facebook App**:
   - Go to the [Facebook Developer Portal](https://developers.facebook.com/) and create a new app.

2. **Get Your Access Token**:
   - Under the "Graph API" section, generate a long-lived access token with the required permissions.

3. **Find Your Ad Account ID**:
   - Locate your Ad Account ID in the Facebook Ads Manager.

4. **Setup Your Google Sheet**:
   - Create a new Google Sheet and add a tab named `FacebookAdsData`.

5. **Open Google Apps Script**:
   - In your Google Sheet, click on `Extensions` > `Apps Script`.

6. **Add the Script**:
   - Paste the provided Facebook Ads script into the editor.

7. **Replace Placeholders**:
   - Update the placeholders in the code:
     - **Facebook Access Token**: Your long-lived Facebook access token.
     - **Ad Account ID**: Your Facebook Ad Account ID.
     - **Google Sheet ID**: The ID of your Google Sheet.
     - **Sheet Tab Name**: The tab name for the data (default is `FacebookAdsData`).

8. **Authorize the Script**:
   - Save and run the function to authorize it.

## How to Use

1. **Running the Scripts**:
   - After setting up the scripts, you can run them directly from the Google Apps Script editor.
   - The data will automatically populate in the designated Google Sheet tabs (`MetabaseUP` for Metabase data and `FacebookAdsData` for Facebook Ads data).

2. **Custom Modifications**:
   - Feel free to modify the scripts to customize queries, adjust data formatting, or change the destination tabs as needed.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the license terms.
