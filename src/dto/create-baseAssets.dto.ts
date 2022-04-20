import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBaseAssetsDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    assets_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    serial: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    assets_code: string;

    @ApiPropertyOptional()
    assets_category: number;

    @ApiPropertyOptional()
    assets_model: number;

    @ApiPropertyOptional()
    assets_status: number;

    //@ApiPropertyOptional()
    //assets_description: string;

    @ApiPropertyOptional()
    @IsString()
    assets_tag: string;

    @ApiPropertyOptional()
    @IsString()
    checkout_to: string;

    //@ApiPropertyOptional()
    //@IsString()
    //assets_image: string;

    @ApiPropertyOptional()
    @IsString()
    check_io: string;

    @ApiPropertyOptional()
    is_deleted: boolean;

    @ApiPropertyOptional()
    created_by: string;

    @ApiPropertyOptional()
    created_date: Date;

    //@ApiPropertyOptional()
    //update_by: string;

    //@ApiPropertyOptional()
    //update_date: Date;
}
