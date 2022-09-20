// Forgot Password Processes
#1. User clicks on Forgot Password
#2. Create a reset token (string) and save in our database
#3. Send reset token to user email in the form of a link
#4. When User clicks the link, compare the reset token in the link with that saved in the database
#5. If they match, change reset the user's Password 

// Forgot Password Steps
#1. Create forgot Password route
#2. Create Token Model
#3. Create Email Sender function
#4. Create controller function  