import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AddDepense } from './AddDepense.entity'


@Injectable()
export class AddDepenseService {
    constructor(
        @InjectRepository(AddDepense)
        private addDepenseRepository: Repository<AddDepense>
    ) { }

    findAll(): Promise<AddDepense[]> {
        return this.addDepenseRepository.find()
    }

    findOne(id: number): Promise<AddDepense> {
        return this.addDepenseRepository.findOneBy({ id })
    }

    create(addDepense: AddDepense): Promise<AddDepense> {
        return this.addDepenseRepository.save(addDepense)
    }

    async update(id: number, updateAddDepenseDto: Partial<AddDepense>): Promise<AddDepense> {
        await this.addDepenseRepository.update(id, updateAddDepenseDto)
        return this.addDepenseRepository.findOneBy({ id })
    }

    async remove(id: number): Promise<void> {
        await this.addDepenseRepository.delete(id)
    }
}
