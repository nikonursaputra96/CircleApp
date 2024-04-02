

  export interface IUserData {
    id: number;
    username: string;
    fullname: string;
    profile_picture: string;
  }
  
  export interface IThread {
    id: number;
    content: string;
    user: IUserData;
    posted_at: string;
    likes: number;
    reply: number;
    isLiked: boolean;
    image: File | string;
    
  }
  
  export interface IThreadsResponse {
    status: string;
    data: {
      threads: IThread[];
    };
  }

export interface IProfile {
    id : number;
    profilePicture: string;
    author: string;
    alias : string;
    follow: boolean;
}


export interface ITestData {
  content: string;
  userId: number;
  image: File | string;
}

//................................................................//

export interface IReply {
  id: number
  content: string;
  posted_at: string;
  isLiked: any;
  image?: File | string;
  user: IUserData;
  threads: IThread;
}

export interface ITestReply {
  content: string;
  userId: number;
  threadsId: number;
  image: File | string;
}