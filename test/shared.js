import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';

import Phone from '../dev-server/Phone';
import App from '../dev-server/containers/App';
import brandConfig from '../dev-server/brandConfig';
import version from '../dev-server/version';
import prefix from '../dev-server/prefix';
import state from './state.json';

const apiConfig = {
  appKey: process.env.appKey,
  appSecret: process.env.appSecret,
  server: process.env.server,
};

export const getPhone = async () => {
  const phone = new Phone({
    apiConfig,
    brandConfig,
    prefix,
    appVersion: version,
  });
  await phone.client.service.platform().login({
    username: process.env.username,
    extension: process.env.extension,
    password: process.env.password
  });
  state.storage.status = 'module-initializing';
  const store = createStore(phone.reducer, state);
  phone.setStore(store);
  return phone;
};

export const getWrapper = () => {
  const phone = getPhone();
  return mount(<App phone={phone} />);
};

export const getState = wrapper => wrapper.props().phone.store.getState();

export const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
