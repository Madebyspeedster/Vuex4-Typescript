export const userAccessModuleKey = "user";

export enum USER_KEYS {
  GET_CURRENT_USER = "GET CURRENT USER",
  SET_NEW_USER = "SET NEW USER",
  CHANGE_NAME = "CHANGE A USER NAME",
}

export const ACCESS_USER_KEYS = {
  [USER_KEYS.GET_CURRENT_USER]: `${userAccessModuleKey}/${USER_KEYS.GET_CURRENT_USER}`,
  [USER_KEYS.SET_NEW_USER]: `${userAccessModuleKey}/${USER_KEYS.SET_NEW_USER}`,
  [USER_KEYS.CHANGE_NAME]: `${userAccessModuleKey}/${USER_KEYS.CHANGE_NAME}`,
};
