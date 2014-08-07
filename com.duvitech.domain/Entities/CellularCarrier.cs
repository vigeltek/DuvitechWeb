using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace com.duvitech.domain.Entities
{
    public class CellularCarrier
    {
        public CellularCarrier()
        {
            CreatedBy = Guid.Empty;
            Created = DateTime.UtcNow;
            Activation = false;
        }

        [Key]
        public int Id { get; set; }

        public int CountryId { get; set; }

        [Required]
        public string CarrierName { get; set; }
        public string Gateway { get; set; }
        public bool Activation { get; set; }
        public string Notes { get; set; }

        [ForeignKey("CountryId")]
        public virtual Country Country { get; set; }

        // data tracking elements
        public DateTime Created { get; set; }
        public DateTime? LastUpdate { get; set; }
        public Guid CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
    }
}
