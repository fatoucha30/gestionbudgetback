import {Controller,Get,Post,Put,Delete,Body,Param,} from '@nestjs/common'
import { AddRevenuService } from './add-revenu.service'
import { AddRevenu } from './AddRevenu.entity'

@Controller('addRevenu')
export class AddRevenuController {
    constructor(private readonly addRevenuService: AddRevenuService) { }

    @Get()
    findAll(): Promise<AddRevenu[]> {
        return this.addRevenuService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<AddRevenu> {
        return this.addRevenuService.findOne(id)
    }

    @Post()
    create(@Body() createAddRevenuDto: AddRevenu): Promise<AddRevenu> {
        return this.addRevenuService.create(createAddRevenuDto)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateAddRevenuDto: Partial<AddRevenu>
    ): Promise<AddRevenu> {
        return this.addRevenuService.update(id, updateAddRevenuDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.addRevenuService.remove(id)
    }
}
