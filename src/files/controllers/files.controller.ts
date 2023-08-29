import { Controller, Post, Get, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FilesService } from '../services/files.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  UploadImage(@UploadedFile() file: Express.Multer.File) {
    return 'Hola Mundo';
    console.log(file);
}


  
  @Get('upload/:imageId')
  getImage() {
    return 'Hola Mundo';
  }
}