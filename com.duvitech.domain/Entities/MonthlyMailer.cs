/******************************************************************************
* @file    MonthlyMailer.cs
* @author  George Vigelette
* @version V1.0.0
* @date    8/2/2014 12:22:17 AM
* @brief   
******************************************************************************
* @attention
*
* COPYRIGHT 2014 Duvitech 
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
******************************************************************************
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace com.duvitech.domain.Entities
{
    public class MonthlyMailer
    {
        public MonthlyMailer()
        {
            Created = DateTime.UtcNow;
            CreatedBy = Guid.Empty;
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Email")]
        [Column("EmailAddress")]
        public string EmailAddress { get; set; }

        [Required]
        public bool Invalid { get; set; }

        public int PublicationNumber { get; set; }

        public DateTime LastEmailSent { get; set; }


        // data tracking elements
        public DateTime Created { get; set; }
        public DateTime? LastUpdate { get; set; }
        public Guid CreatedBy { get; set; }
        public Guid? UpdatedBy { get; set; }
    }
}
