# Sign In

This journey explains how to authenticate and gain access to the app using ZAPT.

## Steps

1. **Open the App**
   - Launch the app in your web browser.
   - You will be directed to the sign-in page if not already authenticated.

2. **Locate Sign In Section**
   - On the sign-in page, find the "Sign in with ZAPT" heading at the top.
   - Below the heading, there's a link to learn more about ZAPT and the authentication component.

3. **Learn About ZAPT**
   - Click on the "Learn more about ZAPT" link to visit the ZAPT marketing site in a new tab.
   - This provides additional information about the authentication service used.

4. **Choose Authentication Method**
   - Below the link, you will see the Supabase Auth UI component.
   - Select your preferred authentication provider: Google, Facebook, or Apple.
   - Alternatively, use the magic link option for passwordless authentication.

5. **Authenticate**
   - Click on your chosen provider button.
   - Follow the prompts to complete authentication.
     - For social providers, you may need to log in to your account.
     - For magic links, an email will be sent to your registered address.

6. **Complete Sign In**
   - After successful authentication, you will be redirected back to the app.
   - The app will display the home page with access to all features.

7. **Sign Out (Optional)**
   - To sign out, click the "Sign Out" button located at the top-right corner of the home page.
   - This will end your session and redirect you to the sign-in page.

## Important Information
- **Session Handling**: The app listens for authentication state changes to manage user sessions in real-time.
- **Error Handling**: Any authentication errors are logged to the console and can be monitored via Sentry.

## Warnings
- **Unstable Connections**: Ensure a stable internet connection during the sign-in process to prevent interruptions.
- **Security**: Always sign out after using the app on shared or public devices to maintain account security.

By following these steps, you can securely authenticate and gain full access to the app's features using ZAPT.