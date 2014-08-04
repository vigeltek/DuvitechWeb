using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using com.duvitech.domain.Concrete;
using com.duvitech.domain.Entities;

namespace com.duvitech.web.api
{
    public class MonthlyMailersController : ApiController
    {
        private DuvitechContext db = new DuvitechContext();

        // GET: api/MonthlyMailers
        [Authorize]
        public IQueryable<MonthlyMailer> GetMonthlyMailers()
        {
            return db.MonthlyMailers;
        }

        // GET: api/MonthlyMailers/5
        [ResponseType(typeof(MonthlyMailer))]
        [Authorize]
        public IHttpActionResult GetMonthlyMailer(int id)
        {
            MonthlyMailer monthlyMailer = db.MonthlyMailers.Find(id);
            if (monthlyMailer == null)
            {
                return NotFound();
            }

            return Ok(monthlyMailer);
        }

        // PUT: api/MonthlyMailers/5
        [ResponseType(typeof(void))]
        [Authorize]
        public IHttpActionResult PutMonthlyMailer(int id, MonthlyMailer monthlyMailer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != monthlyMailer.Id)
            {
                return BadRequest();
            }

            db.Entry(monthlyMailer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MonthlyMailerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/MonthlyMailers
        [ResponseType(typeof(MonthlyMailer))]
        public IHttpActionResult PostMonthlyMailer(MonthlyMailer monthlyMailer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (db.MonthlyMailers.FirstOrDefault(p => p.EmailAddress == monthlyMailer.EmailAddress) == null)
            {
                monthlyMailer.Created = DateTime.UtcNow;
                monthlyMailer.CreatedBy = Guid.Empty;
                
                db.MonthlyMailers.Add(monthlyMailer);
                try
                {
                    if (db.SaveChanges() > 0)
                        return Ok(new { result = true, msg = "Email address added to the monthly mailer" });
                    else
                        return Ok(new { result = false, msg = "Failed to add email address to the monthly mailer" });
                }
                catch(Exception ex)
                {

                    return Ok(new { result = false, msg = "Failed to add email address to the monthly mailer" });
                }
            }
            else
                return Ok(new { result = true, msg="Email address is already registered for a monthly mailer" });

        }

        // DELETE: api/MonthlyMailers/5
        [ResponseType(typeof(MonthlyMailer))]
        [Authorize]
        public IHttpActionResult DeleteMonthlyMailer(int id)
        {
            MonthlyMailer monthlyMailer = db.MonthlyMailers.Find(id);
            if (monthlyMailer == null)
            {
                return NotFound();
            }

            db.MonthlyMailers.Remove(monthlyMailer);
            db.SaveChanges();

            return Ok(monthlyMailer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MonthlyMailerExists(int id)
        {
            return db.MonthlyMailers.Count(e => e.Id == id) > 0;
        }
    }
}