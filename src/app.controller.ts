import { Controller, Get ,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/addDepense')
  addDepense(@Body() body: { title: string, author: number }) {
    // Simule l'ajout d'une dépense, ici vous pouvez connecter à la base de données
    console.log('Dépense reçue:', body);
    return {
      message: 'Dépense ajoutée avec succès',
      data: body,
    };
  }
}
  @Controller('revenu')
export class RevenuController {

  @Post('addRevenu')
  addRevenu(@Body() createRevenuDto: { title: string, amount: number }) {
    // Logique pour ajouter le revenu
    console.log('Nouveau revenu:', createRevenuDto);
    return { message: 'Revenu ajouté avec succès' };
  }
}

