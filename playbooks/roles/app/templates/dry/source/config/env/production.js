'use strict';

/**
 * Changes ignored using git update-index --assume-unchanged
 * https://coderwall.com/p/aoowpg/prevent-sensitive-data-credentials-being-committed
 */

module.exports = {
  db: 'mongodb://localhost/mean-prod',
  /**
   * Database options that will be passed directly to mongoose.connect
   * Below are some examples.
   * See http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connect-options
   * and http://mongoosejs.com/docs/connections.html for more information
   */
  dbOptions: {
    /*
    server: {
        socketOptions: {
            keepAlive: 1
        },
        poolSize: 5
    },
    replset: {
      rs_name: 'myReplicaSet',
      poolSize: 5
    },
    db: {
      w: 1,
      numberOfRetries: 2
    }
    */
  },
  app: {
    name: 'MEAN - A Modern Stack - Production'
  },
  facebook: {
    clientID: '{{ facebook_app_id }}',
    clientSecret: '{{ facebook_app_secret }}',
    callbackURL: '{{ facebook_app_redirect }}'
  },
  twitter: {
    clientID: '{{ twitter_app_id }}',
    clientSecret: '{{ twitter_app_secret }}',
    callbackURL: '{{ twitter_app_redirect }}'
  },
  github: {
    clientID: 'API_KEY',
    clientSecret: 'SECRET_KEY',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  google: {
    clientID: '{{ google_app_id }}',
    clientSecret: '{{ google_app_secret }}',
    callbackURL: '{{ google_app_redirect }}'
  },
  linkedin: {
    clientID: 'API_KEY',
    clientSecret: 'SECRET_KEY',
    callbackURL: 'http://localhost:3000/auth/linkedin/callback'
  },
  emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'SERVICE_PROVIDER',
    auth: {
      user: 'EMAIL_ID',
      pass: 'PASSWORD'
    }
  }
};
