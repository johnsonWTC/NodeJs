using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigPharma.Models
{
    public class RoleFeatures
    {
        public int ID { get; set; }
        public Role Role { get; set; }
        public Features Features { get; set; }
    }
}
