using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace lmdp.Models
{
    public class User
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string fname { get; set; }

        public string lname { get; set; }

        public string email { get; set; }

        public string username { get; set; }

        public bool active { get; set; }
    }
}