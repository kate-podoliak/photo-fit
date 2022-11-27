import { Logger } from '@nestjs/common';
import { Builder, Nuxt } from 'nuxt';

import ClientConfig from '../../../../client/nuxt.config.js';
import { NuxtConfig } from '@nuxt/types';

export type NuxtAppType = 'client';

export class NuxtRendererModule {
  private readonly logger = new Logger('NuxtRenderer');
  public nuxt;
  private readonly appType: NuxtAppType;
  private readonly config: NuxtConfig;

  constructor(appType: NuxtAppType) {
    this.appType = appType;
    this.config = this.appType === 'client' ? ClientConfig : undefined;
  }

  async init() {
    try {
      if (process.env.NODE_ENV === 'production') {
        this.config.dev = false;
      }

      this.nuxt = new Nuxt(this.config);

      await this.nuxt.ready();

      if (process.env.NODE_ENV === 'dev') {
        await new Builder(this.nuxt).build();
      }

      this.logger.log('Successfully rendered');
    } catch (err) {
      this.logger.error('Error while rendering', JSON.stringify(err.message || err));
      throw err;
    }
  }
}
