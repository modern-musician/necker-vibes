/**
 * Google Apps Script — Necker Vibes Application Webhook
 *
 * SETUP:
 * 1. Open the Google Sheet: https://docs.google.com/spreadsheets/d/1QZ-LKukQmJpYXmTNv5zrRqHqetRCQyPZO8yeSsoaWjc
 * 2. Extensions → Apps Script
 * 3. Paste this entire file into the script editor (replace any existing code)
 * 4. Click Deploy → New Deployment
 * 5. Type: Web app
 * 6. Execute as: Me
 * 7. Who has access: Anyone
 * 8. Click Deploy → copy the Web App URL
 * 9. Set the GOOGLE_SHEETS_WEBHOOK_URL env var in Vercel to that URL
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Instagram',
        'TikTok',
        'Spotify / Music Link',
        'Additional Content'
      ]);
      // Bold the header row
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
    }

    // Append the submission
    sheet.appendRow([
      new Date().toISOString(),
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.instagram || '',
      data.tiktok || '',
      data.musicLink || '',
      data.additionalContent || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test endpoint
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Necker Vibes webhook is active' }))
    .setMimeType(ContentService.MimeType.JSON);
}
