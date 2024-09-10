import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AddRevenu } from './AddRevenu.entity'

@Injectable()
export class AddRevenuService {
  constructor(
    @InjectRepository(AddRevenu)
    private addRevenuRepository: Repository<AddRevenu>
  ) {}

  findAll(): Promise<AddRevenu[]> {
    return this.addRevenuRepository.find()
  }

  findOne(id: number): Promise<AddRevenu> {
    return this.addRevenuRepository.findOneBy({ id })
  }

  create(addRevenu: AddRevenu): Promise<AddRevenu> {
    return this.addRevenuRepository.save(addRevenu)
  }

  async update(id: number, updateAddRevenuDto: Partial<AddRevenu>): Promise<AddRevenu> {
    await this.addRevenuRepository.update(id, updateAddRevenuDto)
    return this.addRevenuRepository.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.addRevenuRepository.delete(id)
  }
}
