/// <reference types="vite/client" />

declare global {
  interface Window {
    app:App<Element>
  }
}

export interface Post {
  postId: number,
  accountId: string,
  accountName: string,
  createDate: string,
  title: string,
  tags: Array<string> | null,
  stared: boolean,
  opened: boolean | null
}
