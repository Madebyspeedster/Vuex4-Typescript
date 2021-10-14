import axios from "../index";

export interface GithubUser {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export const getUsersList = async (): Promise<GithubUser[]> => {
  let response: Array<GithubUser> = [];
  try {
    response = (
      await axios.get<Array<GithubUser>>("https://api.github.com/users")
    ).data;
  } catch (e) {
    console.log(e);
  }
  return response;
};
