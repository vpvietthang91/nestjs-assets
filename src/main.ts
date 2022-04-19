import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });

  const config = new DocumentBuilder()
  .setTitle('PAC Assets Management API')
  .setDescription('This site is belong to IT Department')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('pac', app, document);

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
