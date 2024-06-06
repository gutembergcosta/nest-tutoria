import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

  private readonly songs = [];

  insert(song){
    this.songs.push(song);
    return this.songs;
  }

  listAll(){
    return this.songs;
  }

}
