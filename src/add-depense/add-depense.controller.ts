import {Controller,Get,Post,Put,Delete,Body,Param,} from '@nestjs/common'
import { AddDepenseService } from './add-depense.service'
import { AddDepense } from './AddDepense.entity'

@Controller('addDepense')
export class AddDepenseController {
    constructor(private readonly addDepenseService: AddDepenseService) { }

    @Get()
    findAll(): Promise<AddDepense[]> {
        return this.addDepenseService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<AddDepense> {
        return this.addDepenseService.findOne(id)
    }

    @Post()
    create(@Body() createAddDepenseDto: AddDepense): Promise<AddDepense> {
        return this.addDepenseService.create(createAddDepenseDto)
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateAddDepenseDto: Partial<AddDepense>
    ): Promise<AddDepense> {
        return this.addDepenseService.update(id, updateAddDepenseDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.addDepenseService.remove(id)
    }
}
