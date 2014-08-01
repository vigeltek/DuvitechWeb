using System.Web;
using System.Web.Optimization;

namespace com.duvitech.web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                      "~/assets/global/plugins/jquery-1.11.0.min.js",
                      "~/assets/global/plugins/jquery-migrate-1.2.1.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/assets/global/plugins/jquery-ui/jquery-ui-1.10.3.custom.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-2.6.2.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/assets/global/plugins/bootstrap/js/bootstrap.min.js",
                      "~/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js",
                      "~/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
                      "~/assets/global/plugins/jquery.blockui.min.js",
                      "~/assets/global/plugins/jquery.cokie.min.js",
                      "~/assets/global/plugins/uniform/jquery.uniform.min.js",
                      "~/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js",
                      "~/Scripts/respond.js"));


            bundles.Add(new ScriptBundle("~/bundles/metronicAdmin").Include(
                      "~/assets/global/scripts/metronic.js",
                      "~/assets/admin/layout/scripts/layout.js"));


            bundles.Add(new StyleBundle("~/Content/globalstyles").Include(
                      "~/assets/global/plugins/font-awesome/css/font-awesome.min.css",
                      "~/assets/global/plugins/simple-line-icons/simple-line-icons.min.css",
                      "~/assets/global/plugins/bootstrap/css/bootstrap.min.css",
                      "~/assets/global/plugins/uniform/css/uniform.default.css",
                      "~/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css"));

            bundles.Add(new StyleBundle("~/Content/themestyles").Include(
                      "~/assets/global/css/components.css",
                      "~/assets/global/css/plugins.css",
                      "~/assets/admin/layout/css/layout.css",
                      "~/assets/admin/layout/css/themes/default.css",
                      "~/assets/admin/layout/css/custom.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = true;
        }
    }
}
