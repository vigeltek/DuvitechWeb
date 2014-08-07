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
    public class CarriersController : ApiController
    {
        private DuvitechContext db = new DuvitechContext();

        // GET: api/Carriers
        public IQueryable<CellularCarrier> GetCellularCarriers()
        {
            return db.CellularCarriers;
        }

        // GET: api/Carriers/5
        [ResponseType(typeof(CellularCarrier))]
        public IHttpActionResult GetCellularCarrier(int id)
        {
            CellularCarrier cellularCarrier = db.CellularCarriers.Find(id);
            if (cellularCarrier == null)
            {
                return NotFound();
            }

            return Ok(cellularCarrier);
        }

        // PUT: api/Carriers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCellularCarrier(int id, CellularCarrier cellularCarrier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cellularCarrier.Id)
            {
                return BadRequest();
            }

            db.Entry(cellularCarrier).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CellularCarrierExists(id))
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

        // POST: api/Carriers
        [ResponseType(typeof(CellularCarrier))]
        public IHttpActionResult PostCellularCarrier(CellularCarrier cellularCarrier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CellularCarriers.Add(cellularCarrier);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cellularCarrier.Id }, cellularCarrier);
        }

        // DELETE: api/Carriers/5
        [ResponseType(typeof(CellularCarrier))]
        public IHttpActionResult DeleteCellularCarrier(int id)
        {
            CellularCarrier cellularCarrier = db.CellularCarriers.Find(id);
            if (cellularCarrier == null)
            {
                return NotFound();
            }

            db.CellularCarriers.Remove(cellularCarrier);
            db.SaveChanges();

            return Ok(cellularCarrier);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CellularCarrierExists(int id)
        {
            return db.CellularCarriers.Count(e => e.Id == id) > 0;
        }
    }
}