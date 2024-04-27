import { Global, Module } from '@nestjs/common';
import { LogMiddleware } from './log/log.middleware';

@Global()
@Module({
    providers: [LogMiddleware],
    exports: [LogMiddleware],
})
export class MiddlewaresModule {}
