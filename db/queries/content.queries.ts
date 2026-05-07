import { DbClient } from '../dbClient';

export type TvEpisodeRow = {
  episode_title: string;
  platforms: string;
  airline: string;
};

export class ContentQueries {
  constructor(private readonly db: DbClient) {}

  async getTvEpisodes(airline: string): Promise<TvEpisodeRow[]> {
    return this.db.query<TvEpisodeRow>(
      `
      SELECT episode_title, platforms, airline
      FROM tv_episode_test_data
      WHERE airline = $1
      `,
      [airline]
    );
  }
}
