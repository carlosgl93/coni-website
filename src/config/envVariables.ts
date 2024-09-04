/**;
 *
 * @param variable means the env variable that wants to be read
 * @returns  Returns the value of the env variable
 *
 */

enum EnvVariables {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID,
  VITE_FIREBASE_MEASUREMENT_ID,
  VITE_ENV,
  VITE_TITLE,
  VITE_EMAIL,
  VITE_REPOSITORY,
}

export function getEnvVariable(variable: EnvVariables) {
  return import.meta.env[EnvVariables[variable]];
}
