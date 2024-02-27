// 投稿リスト
export interface postList {
  postId: number,
  accuntId: number,
  accountName: string,
  createDate: string,
  title: string,
  tags: Array<string>,
  stared: boolean
}