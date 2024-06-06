import { IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsNumber()
    @IsPositive()
    @Min(1)
    no: number;
    @IsString()
    @MinLength(1)
    name: string;
}
