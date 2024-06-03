import { PublicClientApplication } from '@azure/msal-browser';

const getRedirectUri = () => {
  if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === 'localhost';
    return isLocalhost
      ? 'http://localhost:3000/api/auth/microsoft/callback'
      : 'https://outro-umber.vercel.app/api/auth/microsoft/callback';
  }
  return 'http://localhost:3000/api/auth/microsoft/callback'; 
};

const msalConfig = {
  auth: {
    clientId: '14f63b39-4241-4173-84e2-9c632e81ab64',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: getRedirectUri(),
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
