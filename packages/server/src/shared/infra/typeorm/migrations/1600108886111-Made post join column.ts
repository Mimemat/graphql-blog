import {MigrationInterface, QueryRunner} from "typeorm";

export class MadePostJoinColumn1600108886111 implements MigrationInterface {
    name = 'MadePostJoinColumn1600108886111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "creatorId" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_posts"("id", "title", "content", "created_at", "creatorId") SELECT "id", "title", "content", "created_at", "creatorId" FROM "posts"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`ALTER TABLE "temporary_posts" RENAME TO "posts"`);
        await queryRunner.query(`CREATE TABLE "temporary_posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "creator_id" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_posts"("id", "title", "content", "created_at", "creator_id") SELECT "id", "title", "content", "created_at", "creatorId" FROM "posts"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`ALTER TABLE "temporary_posts" RENAME TO "posts"`);
        await queryRunner.query(`CREATE TABLE "temporary_posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "creator_id" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_posts"("id", "title", "content", "created_at", "creator_id") SELECT "id", "title", "content", "created_at", "creator_id" FROM "posts"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`ALTER TABLE "temporary_posts" RENAME TO "posts"`);
        await queryRunner.query(`CREATE TABLE "temporary_posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "creator_id" varchar NOT NULL, CONSTRAINT "FK_c810f0ccb5f80b289391454d4ad" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_posts"("id", "title", "content", "created_at", "creator_id") SELECT "id", "title", "content", "created_at", "creator_id" FROM "posts"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`ALTER TABLE "temporary_posts" RENAME TO "posts"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" RENAME TO "temporary_posts"`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "creator_id" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "posts"("id", "title", "content", "created_at", "creator_id") SELECT "id", "title", "content", "created_at", "creator_id" FROM "temporary_posts"`);
        await queryRunner.query(`DROP TABLE "temporary_posts"`);
        await queryRunner.query(`ALTER TABLE "posts" RENAME TO "temporary_posts"`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "creator_id" varchar)`);
        await queryRunner.query(`INSERT INTO "posts"("id", "title", "content", "created_at", "creator_id") SELECT "id", "title", "content", "created_at", "creator_id" FROM "temporary_posts"`);
        await queryRunner.query(`DROP TABLE "temporary_posts"`);
        await queryRunner.query(`ALTER TABLE "posts" RENAME TO "temporary_posts"`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "creatorId" varchar)`);
        await queryRunner.query(`INSERT INTO "posts"("id", "title", "content", "created_at", "creatorId") SELECT "id", "title", "content", "created_at", "creator_id" FROM "temporary_posts"`);
        await queryRunner.query(`DROP TABLE "temporary_posts"`);
        await queryRunner.query(`ALTER TABLE "posts" RENAME TO "temporary_posts"`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "content" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "creatorId" varchar, CONSTRAINT "FK_c07f375e63832303f0a5049b776" FOREIGN KEY ("creatorId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "posts"("id", "title", "content", "created_at", "creatorId") SELECT "id", "title", "content", "created_at", "creatorId" FROM "temporary_posts"`);
        await queryRunner.query(`DROP TABLE "temporary_posts"`);
    }

}
