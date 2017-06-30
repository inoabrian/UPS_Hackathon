using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace lmdp.Models
{
    public class LockerLocation
    {
        public string lockerLocationName { get; set; }
        public LocationCoordinate lockerLatLon { get; set; }
    }
    public class LockerCode
    {
        public bool active { get; set; }
        public DateTime expiration { get; set; }
        public string code { get; set; }
        public int assignedTo { get; set; }
        public string lockerNum { get; set; }

    }
}