import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddDepenseModule } from './add-depense/add-depense.module'
import { AddRevenuModule } from './add-revenu/add-revenu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gbudget',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AddDepenseModule,
    AddRevenuModule,
  ],
})
export class AppModule {}
