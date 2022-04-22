import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBaseAccessoriesDto {
    @ApiProperty()
    @IsNotEmpty()
    id: number;

    @ApiPropertyOptional()
    @IsString()
    accessories_name: string;

    @ApiPropertyOptional()
    @IsString()
    serial: string;

    @ApiPropertyOptional()
    @IsString()
    accessories_code: string;

    @ApiPropertyOptional()
    accessories_category: number;

    @ApiPropertyOptional()
    accessories_model: number;

    @ApiPropertyOptional()
    accessories_status: number;
    
    @ApiPropertyOptional()
    @IsString()
    accessories_tag: string;

    @ApiPropertyOptional()
    @IsString()
    checkout_to: string;

    @ApiPropertyOptional()
    checkout_date: Date;

    @ApiPropertyOptional()
    @IsString()
    check_io: string;

    @ApiPropertyOptional()
    is_deleted: boolean;

    @ApiPropertyOptional()
    department: string;

    @ApiPropertyOptional()
    direct_manager: string;

    @ApiPropertyOptional()
    update_by: string;

    @ApiPropertyOptional()
    update_date: Date;

    @ApiPropertyOptional()
    assets_mount: string;
}