import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";

const app = (env: any) => {
  const activeApps = getApps();

  const serviceAccount = {
    type: "service_account",
    project_id: env?.FIREBASE_PROJECT_ID || import.meta.env.FIREBASE_PROJECT_ID,
    private_key_id: env?.FIREBASE_PRIVATE_KEY_ID || import.meta.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: (env?.FIREBASE_PRIVATE_KEY || import.meta.env.FIREBASE_PRIVATE_KEY).replace(/\\n/g, '\n'),
    client_email: env?.FIREBASE_CLIENT_EMAIL || import.meta.env.FIREBASE_CLIENT_EMAIL,
    client_id: env?.FIREBASE_CLIENT_ID || import.meta.env.FIREBASE_CLIENT_ID,
    auth_uri: env?.FIREBASE_AUTH_URI || import.meta.env.FIREBASE_AUTH_URI,
    token_uri: env?.FIREBASE_TOKEN_URI || import.meta.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: env?.FIREBASE_AUTH_CERT_URL || import.meta.env.FIREBASE_AUTH_CERT_URL,
    client_x509_cert_url: env?.FIREBASE_CLIENT_CERT_URL || import.meta.env.FIREBASE_CLIENT_CERT_URL,
  };

  const initApp = () => {
    // if (env.PROD) {
    //   console.info('PROD env detected. Using default service account.')
    //   return initializeApp()
    // }
    // console.info('Loading service account from env.')
    return initializeApp({
      credential: cert(serviceAccount as ServiceAccount),
    });
  };

  // Si no hay apps activas, inicializa una nueva
  return activeApps.length === 0 ? initApp() : activeApps[0];
};

export default app;