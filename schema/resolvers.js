const {users} = require("../data/users");
var {tweets} = require("../data/tweets");
const {notifications} = require("../data/notification");
const {stats} = require('../data/stats');



const resolvers ={

    Query:{

       Sample:()=>{
           return "Everything is working fine";
       },
       Tweet:(parent,args)=>{
           const requiredTweet = tweets.filter((tweet)=>{
               return tweet.id == args.id;

           })[0];

           return requiredTweet;
       },
       Tweets:(parent,{ limit = 5, skip = 0 })=>{
        //    const f_tweets = [];
        // if(args.sort_order == 'asc'){
        //      f_tweets = tweets.sort((a,b)=>{
        //         a.args.sort_field - b.args.sort_field
        //     })
                
        // }
        // else if(args.sort_order == 'desc'){
        //      f_tweets = tweets.sort(()=>{
        //         b.args.sort_field - a.args.sort_field
        //     })

        // }

        


        return tweets
        .slice()
        .sort((a, b) => a.body - b.body)
        .slice(skip, skip + limit);

        
       },

       User:(parent,args)=>{
           const requiredUser = users.filter((user)=>{
               return user.id == args.id;
           })[0];
           return requiredUser;
       },

       Notifications:(parent,args)=>{
         const limit = args.limit;

         return notifications.slice(0,limit);

       },
       TweetsMeta:()=>{
           const tweetCount = tweets.length;
           const data = {
               count: tweetCount
           }
           return data;
       },
       NotificationsMeta:()=>{
           const notificationCount = notifications.length;
           const data = {
               count:notificationCount
           }
           return data;
       }



       

    },
    Mutation:{
        createTweet:(parent,args)=>{

            const newBody = args.body;
            const number = Math.floor(Math.random()*100);
            const newId = "T00"+number;

            const newTweet = {
                id:newId,
                body:newBody,
                data:"2022-04-12",
                Author:users[0],
                Stats:stats[2]

            }

            //push the tweet into the array.TODO

            tweets.push(newTweet);

            //return the new user.
            return newTweet;

        },

        deleteTweet:(parent,args)=>{

            const deletedTweet = tweets.filter((tweet)=>{
                    return tweet.id == args.id;
            })[0];

            tweets = tweets.filter((tweet)=>{
                    return tweet.id != args.id;
            });

            return deletedTweet;


        },
        markTweetRead:(parent,args)=>{
            objIndex = tweets.findIndex((tweet)=>{
                    return tweet.id == args.id;
            });
            if(objIndex == -1){
                return false;
            }else{
                return true;
            }
        }
    }


}

module.exports={resolvers};