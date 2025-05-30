'use strict';

import { Service, verifyScope } from 'common-node-lib';
import dotenv from 'dotenv';
import { serviceConfig, JUDGE_API } from './constants.js';
import routes from './routes/index.js';

dotenv.config({
  path: './env',
});

class JudgeAPIService extends Service {
  registerPublicEndpoints() {
    this.app.get(`${JUDGE_API}/health`, routes.healthCheck);
  }

  registerServiceEndpoints() {}
}

serviceConfig.HOST = process.env.HOST || serviceConfig.HOST;
serviceConfig.PORT = process.env.PORT || serviceConfig.PORT;
serviceConfig.PROTOCOL = process.env.PROTOCOL || serviceConfig.PROTOCOL;

const service = new JudgeAPIService(serviceConfig, true);
service.getUserContext();
service.buildConnection();
service.testConnection();
