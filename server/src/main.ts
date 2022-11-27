import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';


import { AppModule } from './app.module';
import { MysqlModule } from './services/mysql/mysql.module';
import { NuxtRendererModule } from './services/nuxtRenderer/nuxtRenderer.module';
import { NuxtHandlerFilter } from './nuxtHandler.filter';

const NuxtConfig = require('../../client/nuxt.config.js');
const sequelizeSession = require('connect-session-sequelize')(session.Store);

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    if (process.env.NODE_ENV === 'production') {
        NuxtConfig.dev = false;
    }

    // Build client renderer
    const clientRenderer = new NuxtRendererModule('client');
    await clientRenderer.init();

    // Establish mysql connection
    const mysql = new MysqlModule();
    await mysql.init();

    // Enable cors
    app.enableCors({ credentials: true });

    // Enable proxy
    app.set('trust proxy', true);

    // Enable cookies & sessions
    app.use(cookieParser(process.env.APP_SESSION_SECRET || 'secret'))
        .use(
            session({
                secret: process.env.APP_SESSION_SECRET || 'secret',
                cookie: {
                    path: '/',
                    maxAge:  24 * 60 * 60 * 1000,
                    httpOnly: true,
                },
                resave: false,
                saveUninitialized: false,
                rolling: true,
                proxy: true,
            }),
        );

    // Enable FormData upload
    app.use(compression())
        .use(bodyParser.urlencoded({
            extended: true,
        }))
        .use(bodyParser.json());

    // Client and Admin handler
    app.useGlobalFilters(new NuxtHandlerFilter(clientRenderer));

    await app.init();
    await app.listen(process.env.APP_PORT || 8080);
}

bootstrap();
