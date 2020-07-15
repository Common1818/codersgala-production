import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { StaticRouter } from 'react-router-dom';
import * as functions from 'firebase-functions';
import serialize from 'serialize-javascript';

import App from './src/App';
import firebase from './src/config/fbConfig';

import SpecialityContextProvider from './src/contexts/specialityContext';
import AuthContextProvider from './src/contexts/authContext';
import TopicsContextProvider from './src/contexts/topicContext';
import ArticlesContextProvider from './src/contexts/articleContext';
import HomeContextProvider from './src/contexts/homeContext';
import ModeContextProvider from './src/contexts/modeContext';

const admin = require('firebase-admin');
admin.initializeApp();

const path = require('path');
const fs = require('fs');
const app = express();

const { createGzip } = require('zlib');
const { SitemapStream, streamToPromise } = require('sitemap');

app.get('**', (req, res) => {
  console.log('working');

  var articlesArray = [];

  const articlesArraySnapshot = firebase
    .firestore()
    .collection('Articles')
    .get()
    .then((content) => {
      content.docs.map((doc) => {
        articlesArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return articlesArray;
    })
    .then((articlesArray) => {
      const filePath = path.resolve(__dirname, 'index.html');
      const index = fs.readFileSync(filePath, 'utf8').toString();
      const nhtml = (
        <AuthContextProvider>
          <SpecialityContextProvider>
            <TopicsContextProvider>
              <ArticlesContextProvider>
                <HomeContextProvider>
                  <ModeContextProvider>
                    <StaticRouter context={{}} location={req.url}>
                      <App articlesArray={articlesArray} />
                    </StaticRouter>
                  </ModeContextProvider>
                </HomeContextProvider>
              </ArticlesContextProvider>
            </TopicsContextProvider>
          </SpecialityContextProvider>
        </AuthContextProvider>
      );
      const html = ReactDOMServer.renderToString(nhtml);

      Loadable.preloadAll().then(() => {
        const finalHtml = index
          .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
          .replace(
            '//script',
            `window.__INITIAL_DATA__ = 
${serialize(articlesArray)}`
          );
        // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
        res.send(finalHtml);
      });
    });
});

export let ssrapp = functions.https.onRequest(app);

const siteMap = express();

let sitemap;

siteMap.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');

  console.log('generating');
  // if we have a cached entry send it
  if (sitemap) {
    console.log(sitemap);
    res.send(sitemap);
    return;
  }
  admin.functions.httpsCallable('generateSiteMap');
  res.send(sitemap);
  return;
});

export let getSiteMap = functions.https.onRequest(siteMap);

// Generating the sitemaps

exports.generateSiteMap = functions.https.onCall(() => {
  const db = admin.firestore();
  const smStream = new SitemapStream({ hostname: 'https://codersgala.com/' });
  const pipeline = smStream.pipe(createGzip());

  db.collection('Articles')
    .get()
    .then((querySnapshot) => {
      for (const doc of querySnapshot.docs) {
        const data = doc.data();
        const urlLast = data.ArticleName.split(' ').join('-');
        smStream.write({
          url: `/WebDevelopment/read/${urlLast}`,
        });
      }
    });

  console.log('generating sitemap');

  streamToPromise(pipeline).then((sm) => (sitemap = sm));
  console.log(sitemap);
  smStream.end();

  pipeline.pipe(res).on('error', (e) => {
    throw e;
  });
});

// Mailing the user

const nodemailer = require('nodemailer');
const gmailEmail = 'marketingacad.help@gmail.com';
const gmailPassword = 'abcd9876';

exports.notification = functions.firestore
  .document('Articles/{articleId}')
  .onCreate(async (snap, context) => {
    admin.auth().listUsers();
  });

exports.addAdminRole = functions.https.onCall((data, context) => {
  console.log('request recieved');
  console.log(data);
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      console.log('it is working');
      return {
        message: 'it is working',
      };
    })
    .catch((err) => {
      return err;
    });
});

exports.sendEmail = functions.https.onCall(async (data) => {
  console.log('trying to send email');

  const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });
  const mailOptions = {
    from: '"DoItNow" <noreply@firebase.com>',
    to: data.email,
  };
  mailOptions.subject = data.subject;
  mailOptions.text = data.text;
  try {
    await mailTransport.sendMail(mailOptions);
    return { errorCode: 200 };
  } catch (error) {
    console.error('There was an error while sending the email', error);
    return { errorCode: 100 };
  }
});

exports.userList = functions.https.onCall((nextPageToken) => {
  console.log('req recieved to retreive user');

  return admin
    .auth()
    .listUsers()
    .then((listUserResult) => {
      console.log('its time to work');
      return {
        users: listUserResult.users,
        message: 'Users Fetched successfully',
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        err: errr,
        message: 'Error Fetching users',
      };
    });
});

exports.addAdminRole = functions.https.onCall((email) => {
  //get user and add custom claims (admin)
  console.log('request recieved');
  console.log(email);
  return admin
    .auth()
    .getUserByEmail(email)
    .then((user) => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      });
    })
    .then(() => {
      console.log('it is working');
      return {
        message: 'Made Admin successfully',
      };
    })
    .catch((err) => {
      return {
        err: err,
        message: 'Error making admin',
      };
    });
});

exports.blockUser = functions.https.onCall((uid) => {
  console.log('req recieved to disable user');
  return admin
    .auth()
    .updateUser(uid, {
      disabled: true,
    })
    .then((userRecord) => {
      console.log(userRecord);
      return { userRecord, message: 'Blocked Succesfully !!!' };
    })
    .catch((err) => {
      console.log(err);
      return { userRecord, message: 'Not Blocked !!! ERROR !!!!' };
    });
});

exports.unblockUser = functions.https.onCall((uid) => {
  console.log('req recieved to enable user');
  return admin
    .auth()
    .updateUser(uid, {
      disabled: false,
    })
    .then((userRecord) => {
      console.log(userRecord);
      return { userRecord, message: 'Unblocked Successfully ' };
    })
    .catch((err) => {
      console.log(err);
      return { userRecord, message: 'Not Unblocked !!! ERROR !!!' };
    });
});

exports.deleteUser = functions.https.onCall((uid) => {
  console.log('request recieved for deleting the user');
  return admin
    .auth()
    .deleteUser(uid)
    .then(() => {
      return { message: 'Deleted Successfully ' };
    })
    .catch((err) => {
      console.log(err);
      return { message: 'Not Deleted !!! ERROR !!!' };
    });
});
