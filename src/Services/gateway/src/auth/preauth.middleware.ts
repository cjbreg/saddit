import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, Request } from 'express';
import * as firebase from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class PreauthMiddleware implements NestMiddleware {
  private defaultApp: any;

  constructor() {
    const firebase_params = {
      type: process.env.FIREBASE_TYPE,
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      authUri: process.env.FIREBASE_AUTH_URI,
      tokenUri: process.env.FIREBASE_TOKEN_URI,
      authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      clientC509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    };

    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebase_params),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
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
      message: 'Access Denied',
    });
  };
}
