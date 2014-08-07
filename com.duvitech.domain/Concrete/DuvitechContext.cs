/******************************************************************************
* @file    DuvitechContext.cs
* @author  George Vigelette
* @version V1.0.0
* @date    8/2/2014 12:59:17 AM
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
using System.Security.Claims;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

using com.duvitech.domain.Entities;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;


namespace com.duvitech.domain.Concrete
{
    public class DuvitechContext : IdentityDbContext<DuvitechUser>
    {
        public DuvitechContext()
            : base("DefaultConnection")
        {
        }

        public static DuvitechContext Create()
        {
            return new DuvitechContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

            base.OnModelCreating(modelBuilder);


        }

        public DbSet<MonthlyMailer> MonthlyMailers { get; set; }

        public DbSet<Country> Countries { get; set; }

        public DbSet<CellularCarrier> CellularCarriers { get; set; }
    }
}
