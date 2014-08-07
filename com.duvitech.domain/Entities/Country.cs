using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace com.duvitech.domain.Entities
{
    public class Country
    {
        [Key]
        public int Id { get; set; }

        [MinLength(2), MaxLength(2)]
        public string ISO2CHAR { get; set; }

        [MinLength(3), MaxLength(3)]
        public string ISO3CHAR { get; set; }

        public string CountryName { get; set; }

    }    
}
