import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import { setupGlobalA11yHooks } from 'ember-a11y-testing/test-support';

setApplication(Application.create(config.APP));

setupGlobalA11yHooks(() => true);

start();
