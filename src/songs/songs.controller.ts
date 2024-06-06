import { Controller, Delete, Get, Put,Post, Body, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller(
  'songs'
)
export class SongsController {

  constructor(private songsService: SongsService){}

  @Get()
  listAll() {
    try {
      return this.songsService.listAll();
    } catch (e) {
      throw new HttpException('Server Errror', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e
      })
    }
    
  }

  @Post()
  insert(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.insert('novo');
  }

  @Get(':id')
  getById(
    @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
    id: number
  ) {
    return `find one song by id: ${typeof id} `;
  }

  @Put(':id')
  update() {
    return 'update one songs by id';
  }

  @Delete(':id')
  delete() {
    return 'delete one songs by id';
  }

}

