import queryModelFunction from "../queryModelFunction";

export const resolvers = {
  Query: {
    async users() {
      const query = `SELECT * FROM "user".publicaccountschema ;`;
      const result = await queryModelFunction(query);

      return result;
    },

    async user(_: any, accountname: String) {
      const query = `SELECT * FROM "user".publicaccountschema WHERE accountname = $1 ;`;
      const result = await queryModelFunction(query, [accountname]);

      return result;
    },

    async posts(_:any, list_id?:String) {
      const query = `
        SELECT "post".post.*
        FROM "post".post
        LEFT JOIN "post".post_hierarchy
        ON "post".post.post_id = "post".post_hierarchy.child_post_id
        WHERE "post".post.list_id = $1 
          AND "post".post_hierarchy.parent_post_id IS NULL
      `;
      const result = await queryModelFunction(query, [list_id ? list_id : 0]);
    
      return result;
    },
    
    async post(_: any, post_id: String) {
      const query = `SELECT * FROM "post".post WHERE id = $1 ;`;
      const result = await queryModelFunction(query, [post_id]);

      return result;
    },

    async followers() {
      const query = `SELECT * FROM "user".followers ;`;
      const result = await queryModelFunction(query);

      return result;
    },

    async follower(_: any, user: String) {
      const query = `SELECT * FROM "user".followers WHERE user = $1 ;`;
      const result = await queryModelFunction(query, [user]);

      return result;
    },

    async followings() {
      const query = `SELECT * FROM "user".followers ;`;
      const result = await queryModelFunction(query);

      return result;
    },

    async following(_: any, user: String) {
      const query = `SELECT * FROM "user".followers WHERE user = $1 ;`;
      const result = await queryModelFunction(query, [user]);

      return result;
    },

    async post_impressions() {
      const query = `SELECT * FROM "post".impression ;`;
      const result = await queryModelFunction(query);

      return result;
    },

    async post_impression(_: any, post_id: String) {
      const query = `SELECT * FROM "post".impression WHERE post_id = $1 ;`;
      const result = await queryModelFunction(query, [post_id]);

      return result;
    },

    async post_likes() {
      const query = `SELECT * FROM "post".like ;`;
      const result = await queryModelFunction(query);

      return result;
    },

    async post_like(_: any, post_id: String) {
      const query = `SELECT * FROM "post".like WHERE post_id = $1 ;`;
      const result = await queryModelFunction(query, [post_id]);

      return result;
    },

    async post_bookmarks() {
      const query = `SELECT * FROM "post".bookmark ;`;
      const result = await queryModelFunction(query);

      return result;
    },

    async post_bookmark(_: any, post_id: String) {
      const query = `SELECT * FROM "post".bookmark WHERE post_id = $1 ;`;
      const result = await queryModelFunction(query, [post_id]);

      return result;
    },

    async post_replies() {
      const query = `SELECT * FROM "post".reply ;`;
      const result = await queryModelFunction(query);

      return result;
    },

    async post_reply(_: any, post_id: String) {
      const query = `SELECT * FROM "post".reply WHERE post_id = $1 ;`;
      const result = await queryModelFunction(query, [post_id]);

      return result;
    },

    async getPostHierarchyByID(_: any, child_post_id: String) {
      const query = `
                WITH RECURSIVE PostHierarchy AS (
                    SELECT 
                        parent_post_id,
                        child_post_id,
                        0 AS level
                    FROM "post".post_hierarchy
                    WHERE child_post_id = $1
        
                    UNION ALL
        
                    SELECT 
                        ph.parent_post_id,
                        ph.child_post_id,
                        ph.level + 1
                    FROM "post".post_hierarchy p
                    INNER JOIN PostHierarchy ph ON p.child_post_id = ph.parent_post_id
                )
                SELECT * 
                FROM PostHierarchy
                ORDER BY level DESC;
            `;

      const result = await queryModelFunction(query, [child_post_id]);

      return result;
    },
  },

  Mutation: {
    async createPost(
      _: any,
      input: {
        id: String;
        parent_id?: String;
        author: String;
        datetime: String;
        msg?: String;
        media?: String;
      },
    ) {
      if (input.msg === undefined && input.media === undefined) {
        throw "Please put in a message";
      }

      const query = input.parent_id
        ? `INSERT INTO "post".post (id, author, datetime, msg, media) VALUES ($1, $3, $4, $5, $6); 
                   INSERT INTO "post".post_hierarchy (parent_post_id, child_post_id) VALUES ($2, $1);`
        : `INSERT INTO "post".post (id, author, datetime, msg, media) VALUES ($1, $3, $4, $5, $6);`;

      const result = queryModelFunction(query, [
        input.id,
        input.parent_id ? input.parent_id : null,
        input.author,
        input.datetime,
        input.msg ? input.msg : null,
        input.media ? input.media : null,
      ]);

      return result;
    },

    async createUser(
      _: any,
      input: {
        username: String;
        accountname: String;
        type: "PUBLIC" | "PRIVATE";
        subscription: "USER" | "GOVERNMENT" | "ORGANIZATION";
        pfp?: String;
        bio?: String;
      },
    ) {
      const query = `INSERT INTO "user".publicaccountschema (username, accountname, type, subscription, pfp, bio) VALUES ($1, $2, $3, $4, $5, $6) ;`;
      const result = queryModelFunction(query, [
        input.username,
        input.accountname,
        input.type,
        input.subscription,
        input.pfp ? input.pfp : null,
        input.bio ? input.bio : "",
      ]);

      return result;
    },

    // supposed to be a updater
    async deletePost(_: any, id: String) {
      const query = `DELETE FROM "post".post WHERE id = $1 ;`;
      const result = queryModelFunction(query, [id]);

      return result;
    },

    // this too is supposed to be an updater
    async deleteAccount(_: any, accountname: String) {
      const query = `DELETE FROM "post".post WHERE accountname = $1 ;
            DELETE FROM ("post".post_like, "post".post_retweet, "post".post_reply, "post".post_bookmark ,"user".follower, "user".following, "user".publicaccountschema) WHERE accountname = $1`;
    },
  },
  user: {
    async followers(parent: any) {
      const query = `SELECT * FROM "user".follower WHERE accountname = $1 ;`;
      const result = await queryModelFunction(query, [parent.accountname]);

      return result;
    },

    async following(parent: any) {
      const query = `SELECT * FROM "user".following WHERE accountname = $1 ;`;
      const result = await queryModelFunction(query, [parent.accountname]);

      return result;
    },
  },

  Post: {
    async author(parent: any) {
      const query = `SELECT * FROM "user".publicaccountschema WHERE accountname = $1 ;`;
      const result = await queryModelFunction(query, [parent.author]);

      return result;
    },
    async list(parent:any){
      const query = `SELECT * FROM "post".list WHERE post_id = $1`
      const result  = await queryModelFunction(query, [parent.id])
      
      return result
    },
    async hierarchy_metadata(parent: any) {
      const query = `SELECT * FROM "post".post_hierarchy WHERE child_post_id = $1 ;`;
      const result = await queryModelFunction(query, [parent.id]);

      return result;
    },
    async impressions(parent: any) {
      const query = `SELECT * FROM "post".impression WHERE post_id = $1 ;`;
      const result = await queryModelFunction(query, [parent.id]);

      return result;
    },

    async likes(parent: any) {
      const query = `SELECT * FROM "post".like WHERE post_id = $1 ;`;
      const result = await queryModelFunction(query, [parent.id]);

      return result;
    },

    async retweets(parent: any) {
      const query = `SELECT * FROM "post".retweet WHERE post_id = $1 ;`;
      const result = await queryModelFunction(query, [parent.id]);

      return result;
    },

    async bookmarks(parent: any) {
      const query = `SELECT * FROM "post".bookmark WHERE post_id = $1 ;`;
      const result = await queryModelFunction(query, [parent.id]);

      return result;
    },

    async replies(parent: any) {
      const query = `SELECT * FROM "post".reply WHERE post_id = $1 ;`;
      const result = await queryModelFunction(query, [parent.id]);

      return result;
    },
  },
};
