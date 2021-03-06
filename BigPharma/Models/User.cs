using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigPharma.Models
{
    public class User
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string HashedPassword { get; set; }
        public bool Active { get; set; }
        public bool Deleted { get; set; }
        public List<UserRole> UserRoles { get; set; }
    }
}
