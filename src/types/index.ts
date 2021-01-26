export interface VERIFYCOOKIE {
  authenticated: boolean;
  usermail: string | undefined;
}
export interface USER {
  email?: string;
  contact: string;
  genderLooking: string;
  name: string;
  uid:string
}

interface ERROR {
  code: string;
  message: string;
}
export interface SIGIN_RESPONSE {
  user?: USER;
  error?: ERROR;
}
