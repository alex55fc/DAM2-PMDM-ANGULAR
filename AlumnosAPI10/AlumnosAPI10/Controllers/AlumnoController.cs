﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AlumnosAPI10.Controllers
{
    public class AlumnoController : ApiController
    {
        public IEnumerable<Alumnos> Get()
        {
            using (ColegioEntities1 colegio = new ColegioEntities1())
            {
                return colegio.Alumnos.ToList();
            }
        }
        public Alumnos Get(int id)
        {
            using (ColegioEntities1 colegio = new ColegioEntities1())
            {
                return colegio.Alumnos.Find(id);
            }
        }
    }
}
