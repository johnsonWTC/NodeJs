using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigPharma.Models
{
    public class UserRole
    {
        public int ID { get; set; }
        public User User { get; set; }

        public Role Role { get; set; }
    }
}
