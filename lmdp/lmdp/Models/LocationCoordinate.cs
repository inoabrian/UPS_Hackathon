using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace lmdp.Models
{
    public class LocationCoordinate
    {
        public double lat { get; set; }
        public double lon { get; set; }
    }
}