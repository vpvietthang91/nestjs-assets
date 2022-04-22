import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBaseAccessoriesDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    accessories_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    serial: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    accessories_code: string;

    @ApiPropertyOptional()
    accessories_category: number;

    @ApiPropertyOptional()
    accessories_model: number;

    @ApiPropertyOptional()
    accessories_status: number;

    //@ApiPropertyOptional()
    //assets_description: string;

    @ApiPropertyOptional()
    @IsString()
    accessories_tag: string;

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
    created_by: string;

    @ApiPropertyOptional()
    created_date: Date;

    @ApiPropertyOptional()
    is_deleted: boolean;

    @ApiPropertyOptional()
    department: string;

    @ApiPropertyOptional()
    direct_manager: string;

    @ApiPropertyOptional()
    check_io_date: Date;

    //@ApiPropertyOptional()
    //update_by: string;

    //@ApiPropertyOptional()
    //update_date: Date;

    @ApiPropertyOptional()
    assets_mount: string;
}