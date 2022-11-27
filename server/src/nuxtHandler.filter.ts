import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { NuxtRendererModule } from './services/nuxtRenderer/nuxtRenderer.module';

@Catch(NotFoundException)
export class NuxtHandlerFilter implements ExceptionFilter {
  private clientApp;
  constructor(clientRenderer: NuxtRendererModule) {
    this.clientApp = clientRenderer.nuxt;
  }

  async catch(exceptionq: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res: Response = ctx.getResponse();
    const req: Request = ctx.getRequest();
    const next: NextFunction = ctx.getNext();

    // if (req.path.includes('/api') || req.path.includes('/auth')) {
    //   return next();
    // }

    if (req.method === 'GET') {
      if (req.path.includes('.')) {
        res.set({
          'Cache-Control': `max-age=${7 * 24 * 60 * 60}`,
        });
      } else {
        res.header(
            'Cache-Control',
            'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0',
        );
      }

      return this['clientApp'].render(req, res);
    }

    if (req.method === 'POST') {
      return res.sendStatus(404);
    }
  }
}
