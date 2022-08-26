import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategory1661346284378 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
