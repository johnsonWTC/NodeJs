using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigPharma.Models
{
    public class Features
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public bool Active { get; set; }
        public bool Deleted { get; set; }
    }
}
