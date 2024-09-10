import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddDepense } from './AddDepense.entity'
import { AddDepenseService } from './add-depense.service'
import { AddDepenseController } from './add-depense.controller'

@Module({
  imports: [TypeOrmModule.forFeature([AddDepense])],
  providers: [AddDepenseService],
  controllers: [AddDepenseController],
})
export class AddDepenseModule { }
