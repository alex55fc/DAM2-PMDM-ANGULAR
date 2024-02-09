using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProfesoresAPI.Controllers
{
    public class ProfesoresController : ApiController
    {
        public IEnumerable<Profesores> Get()
        {
            using (ColegioEntities entities = new ColegioEntities())
            {
                return entities.Profesores.ToList();
            }
        }
    }
}
