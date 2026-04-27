declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_RECAPTCHA_SITE_KEY?: string;
  }
}

declare const process: {
  env: NodeJS.ProcessEnv;
};
