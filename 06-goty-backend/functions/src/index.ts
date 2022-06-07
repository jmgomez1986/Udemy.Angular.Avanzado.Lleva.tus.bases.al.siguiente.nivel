import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', {structuredData: true});
  response.json({
    mensaje: 'Hello from Firebase!!!!!!!',
  });
});

export const getGOTY = functions.https.onRequest(async (request, response) => {
  // const nombre = request.query.nombre || 'Sin Nombre';

  // response.json( nombre );
  const gotyRef = db.collection('goty');
  const docsSnap = await gotyRef.get();
  const juegos = docsSnap.docs.map( (doc) => doc.data() );

  response.json( juegos );
});
