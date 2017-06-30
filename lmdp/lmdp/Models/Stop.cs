using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace lmdp.Models
{
    public class Stop
    {
        public string streetName { get; set; }
        public string streetPrefix { get; set; }
        public string streetPostfix { get; set; }
        public LocationCoordinate streetCoordinates { get; set; }
        public int packageCount { get; set; }
        public int stopNumber { get; set; }
    }
}