
angular.module('womenWorkingWithWomenApp')
  .factory('BoardMembers', function(){
    return {
      members: [
        {
          "name":  "Belinda Smith",
          "title": "Founder and President",
           "description": "Belinda is the founder of Women Working With Women and has worked hard to grow her community." ,
           "telephone": "(352) 872 8555",
           "email": "4wsbms@gmail.com",
           "imgSrc": "http://i.imgur.com/kv7bOlc.jpg"
        },
        {
          "name":  "Maxine Bethea B.S. Religion/ Psychology Healthcare Administration",
          "title": "Secretary/Treasurer",
           "description": "Bible Instructor, and Director of Maxine's Place (a community service facility)",
           "telephone": "(352) 871 5233",
           "email": "Crimetochrist@gmail.com",
           "imgSrc": "http://i.imgur.com/tJzo1r2.jpg"
        },
        {
          "name":  "Kayla Sutherland, MPH",
          "title": "Board Member",
           "description": "Teen and Youth Workshop Presenter and Registration Director. " ,
           "telephone": "(786) 445 7266",
           "email": "kayla.hsutherland@gmail.com",
           "imgSrc": "http://i.imgur.com/IlD1TwP.jpg"
        },
        {
          "name":  "Purette D. Mills",
          "title": "Vice President",
           "description": "Parenting specialist / counselor, keynote speaker, balloon artist, workshop presenter, Children Ministries coordinator,  40yr/elementary/secondary teacher" ,
           "telephone": "(256) 457 4766",
           "email": "my4atms@aol.com",
           "imgSrc": "http://i.imgur.com/XkiUykI.jpg"
        }
      ]
    }
  });
