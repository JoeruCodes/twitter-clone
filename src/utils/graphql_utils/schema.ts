export const typeDefs = `#graphql
  type Post {
    id: ID!
    author: user!
    datetime: String!
    msg: String
    media: String!
    list: List
    hierarchy_metadata: PostHierarchy!
    impressions: [PostImpression!]
    likes: [PostLike!]
    bookmarks: [PostBookmark!]
    retweets: [PostRetweet!]
    replies: [PostReply!]
  }
  type List {
    author: user!
    posts: [Post!]
  }

  type user {
    username: String
    accountname: String
    type: AccountType
    subscription: SubscriptionType
    pfp: String
    bio: String
    followers: [Follower!]
    following: [Following!]
  }

  type Follower {
    user: String!
    followers: user
    datetime: String
  }

  type Following {
    user: String!
    following: user
    datetime: String!
  }
  
  type PostHierarchy {
    parent_post_id: String
    child_post_id: String
  }

  type PostImpression {
    post_id: String!
    accountname: user
    datetime: String
  }

  type PostLike {
    post_id: ID!
    accountname: user
    datetime: String
  }

  type PostBookmark {
    post_id: ID!
    accountname: user
    datetime: String!
  }

  type PostRetweet {
    post_id: ID!
    accountname: user
    datetime: String
  }

  type PostReply {
    post_id: ID!
    accountname: user
    datetime: String
  }

#   type Topic {
#     name: String!
#     hashtag: String
#     rank: Int!
#     post: [Post] 
#   }

#   type Trending {
#     topics: [Topic]!
#   }

  enum AccountType {
    PUBLIC
    PRIVATE
  }
  
  enum SubscriptionType {
    USER
    GOVERNMENT
    ORGANIZATION
  }
  
  type Query {
    # getPostHierarchyID(childPostId: String!): [String]
    # getPostByID(post_id: String!): Post
    # getRandomPosts(): [Post]

    posts(list_id: ID): [Post]
    post(post_id: ID!): Post

    users: [user]
    user(accountname: String!): user

    followers: [Follower]
    follower(user: String!): Follower

    followings: [Following]
    following(user:String!): Following

    post_impressions: [PostImpression]
    post_impression(post_id: ID!): PostImpression

    post_likes: [PostLike]
    post_like(post_id: ID!): PostLike

    post_bookmarks: [PostBookmark]
    post_bookmark(post_id: ID!): PostBookmark

    post_replies: [PostReply]
    post_reply(post_id: ID!): PostReply

    getPostHierarchyByID(child_post_id: String!): [String]
    # topics: [Topic]
    # topic(post_id): Topic
    # trending_topics: [Trending]
  }

  type Mutation {
    createPost(input: PostInput!): Post
    createUser(input: NewUserInput): String
    deletePost(id: ID!): String
    deleteAccount(accountname: String): String
  }

  input PostInput {
    id: ID!
    parent_id: ID
    author: String!
    datetime: String!
    msg: String
    media: String
  }

  input NewUserInput {
    username: String!
    accountname: String!
    type: AccountType!
    subscription: SubscriptionType!
    pfp: String
    bio: String
  }
`;
