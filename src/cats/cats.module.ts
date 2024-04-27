import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { LogMiddleware } from "src/middlewares/log/log.middleware";

@Module({
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LogMiddleware).forRoutes('cats');
    }
}