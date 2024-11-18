import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAb2oLPsSdLL-miCPZjFj_KDXKiiXUHn8Q",
  authDomain: "angular-2f739.firebaseapp.com",
  projectId: "angular-2f739",
  storageBucket: "angular-2f739.firebasestorage.app",
  messagingSenderId: "257396891057",
  appId: "1:257396891057:web:27fd4cbcc94341f5393190"
};

export const appConfig: ApplicationConfig = {
  providers: [
    //provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(()  => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
