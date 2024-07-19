import { OAuth2Client } from 'google-auth-library';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { env } from './env.js';

const googleAuthSettingsPath = path.resolve('google-auth.json');
const googleAuthSettings = JSON.parse(await readFile(googleAuthSettingsPath));
const clientId = env('GOOGLE_AUTH_CLIENT_ID');
const clientSecret = env('GOOGLE_AUTH_CLIENT_SECRET');

export const generateAuthUrl = () => {};
