import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //
      forbidNonWhitelisted: true, // 요청에 DTO에 없는 프로퍼티가 있으면 거른다.
      transform: true // 요청에 있는 데이터의 타입을 자동으로 변경해줌.
    })
  )
  await app.listen(3000);
}
bootstrap();
