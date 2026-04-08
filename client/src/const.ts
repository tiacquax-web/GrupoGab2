export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const LOGIN_PATH = "/login";
export const FORGOT_PASSWORD_PATH = "/esqueci-senha";

const getRedirectUri = () => `${window.location.origin}/api/oauth/callback`;

// Generate OAuth login URL at runtime so redirect URI reflects the current origin.
export const getPortalLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = getRedirectUri();
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

export const getPortalForgotPasswordUrl = (email?: string) => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const url = new URL(`${oauthPortalUrl}/forgot-password`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", getRedirectUri());

  if (email) {
    url.searchParams.set("email", email);
  }

  return url.toString();
};

// Backwards compatibility for existing imports.
export const getLoginUrl = getPortalLoginUrl;
