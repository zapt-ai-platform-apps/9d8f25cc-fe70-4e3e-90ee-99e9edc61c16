# SolidJS Calculator & Content Manager App

## Overview
This app allows users to manage jokes, perform mathematical calculations, and manage various content types like apps, files, photos, and music. It integrates authentication, error logging, and analytics for a seamless and secure user experience.

## User Journeys
1. [Sign In](docs/journeys/sign-in.md) - Authenticate using ZAPT to access the app.
2. [Manage Jokes](docs/journeys/manage-jokes.md) - Create, view, and save your favorite jokes.
3. [Use Calculator](docs/journeys/use-calculator.md) - Perform mathematical calculations with ease.
4. [Manage Content](docs/journeys/manage-content.md) - Hide or show Apps, Files, Photos, and Music within the app.
5. [Generate Features](docs/journeys/generate-features.md) - Utilize additional features like image generation and text-to-speech.

## External APIs
- **Supabase**: Used for authentication and real-time database interactions.
- **Sentry**: Implements error logging for both frontend and backend.
- **Umami**: Provides analytics for tracking website usage.
- **Progressier**: Adds PWA functionality to the app.

Ensure you have the required environment variables set in the `.env` file before running the app.