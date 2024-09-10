import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddRevenu } from './AddRevenu.entity'
import { AddRevenuService } from './add-revenu.service'
import { AddRevenuController } from './add-revenu.controller'

@Module({
  imports: [TypeOrmModule.forFeature([AddRevenu])],
  providers: [AddRevenuService],
  controllers: [AddRevenuController],
})
export class AddRevenuModule { }
