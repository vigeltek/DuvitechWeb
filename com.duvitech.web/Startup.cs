using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(com.duvitech.web.Startup))]
namespace com.duvitech.web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
