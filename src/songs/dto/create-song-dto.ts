import { IsString, IsNotEmpty, IsInt, IsArray, IsDateString, IsNumber } from "class-validator";

export class CreateSongDTO {
  
  @IsString() 
  @IsNotEmpty()
  readonly name: string;
  
  @IsString() 
  @IsNotEmpty()
  readonly type: string;
  
  @IsNotEmpty()
  @IsString()
  readonly user_id: number;
  
  @IsString() 
  @IsNotEmpty()
  readonly text: string ;

  @IsNotEmpty()
  @IsString()
  readonly category_id: number;
  
  @IsNotEmpty()
  @IsString() 
  readonly info: string[];
  
  @IsNotEmpty()
  @IsString() 
  readonly city: string;
  
  @IsNotEmpty()
  readonly date_release: Date;
}