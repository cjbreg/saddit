import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';
import * as firebase from 'firebase-admin';

@Injectable()
export class PreauthMiddleware implements NestMiddleware {
  private defaultApp: any;

  constructor() {
    const firebase_params = {
      type: String(process.env.FIREBASE_TYPE),
      projectId: String(process.env.FIREBASE_PROJECT_ID),
      privateKeyId: String(process.env.FIREBASE_PRIVATE_KEY_ID),
      privateKey: String(process.env.FIREBASE_PRIVATE_KEY),
      clientEmail: String(process.env.FIREBASE_CLIENT_EMAIL),
      authUri: String(process.env.FIREBASE_AUTH_URI),
      tokenUri: String(process.env.FIREBASE_TOKEN_URI),
      authProviderX509CertUrl: String(
        process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      ),
      clientC509CertUrl: String(process.env.FIREBASE_CLIENT_X509_CERT_URL),
    };

    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebase_params),
      databaseURL: String(process.env.FIREBASE_DATABASE_URL),
    });
  }

  use(req: Request, res: Response, next: Function) {
    const token = req.headers.authorization;
    if (token != null && token != '') {
      this.defaultApp
        .auth()
        .verifyIdToken(token.replace('Bearer ', ''))
        .then(async (decodedToken: any) => {
          const user = {
            email: decodedToken.email,
          };
          req['user'] = user;
          next();
        })
        .catch((error) => {
          console.error(error);
          this.accessDenied(req.url, res);
        });
    } else {
      next();
    }
  }

  private accessDenied = (url: string, res: Response) => {
    res.status(403).json({
      statusCode: 403,
      timeStamp: new Date().toISOString(),
      path: url,
      message: 'Access Denied!',
    });
  };
}
