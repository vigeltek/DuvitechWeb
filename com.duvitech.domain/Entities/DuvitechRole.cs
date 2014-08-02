/******************************************************************************
* @file    DuvitechRole.cs
* @author  George Vigelette
* @version V1.0.0
* @date    8/2/2014 12:55:17 AM
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

using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;


namespace com.duvitech.domain.Entities
{
    public class DuvitechRole : IdentityRole
    {
        public DuvitechRole() : base() { }
        public DuvitechRole(string name, string description)
            : base(name)
        {
            this.Description = description;
        }
        public virtual string Description { get; set; }
                
    }
}
