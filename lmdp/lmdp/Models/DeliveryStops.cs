using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace lmdp.Models
{
    public class DeliveryStops
    {
        public int stopCount { get; set; }
        public List<Stop> stops { get; set; }
    }
}