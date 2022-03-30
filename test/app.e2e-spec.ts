import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const bookMutation = `
mutation updateBook($title: String!) {
  updateBook(title: $title) {
    title
  }
}`;

describe('Book mutation', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('when the title is shorter than 3 character', () => {
    it('throws an error', async () => {
      const { statusCode, body } = await request(app.getHttpServer())
        .post('/graphql')
        .send({ query: bookMutation, variables: { title: '0' } });

      expect(statusCode).toEqual(400);
    });
  });
});
