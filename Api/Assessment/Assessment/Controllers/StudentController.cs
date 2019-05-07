using Assessment.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Assessment.Controllers
{    
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        public static List<Student> Students;

        static StudentController()
        {
            Students = new List<Student>();
            for (int i = 0; i < 10; i++)
            {
                var student = new Student()
                {
                    Id = i + 1,
                    Grade = "A",
                    Name = $"ABC{i}",
                    School = $"School {i}"
                };

                Students.Add(student);
            }
        }

        // GET api/students
        [HttpGet]
        public ActionResult<IEnumerable<Student>> Get()
        {
            return Students;
        }

        // GET api/students/5
        [HttpGet("{id}")]
        public ActionResult<Student> Get(int id)
        {
            return Students.Where(x => x.Id==id).FirstOrDefault();
        }

        // POST api/students
        [HttpPost]
        public Student Post([FromBody] Student student)
        {
            if (student == null)
            {
                throw new Exception("Please provide student details to add");
            }
            Students.Add(student);
            return student;            
        }

        // PUT api/students/5
        [HttpPut("{id}")]
        public Student Put(int id, [FromBody] Student student)
        {
            var s = Students.Where(x => x.Id == id).FirstOrDefault();

            if (s == null)
            {
                throw new Exception("Please provide existing student id to modify");
            }

            if (student == null)
            {
                throw new Exception("Please provide student details to modify");
            }

            s.Name = student.Name;
            s.Grade = student.Grade;
            s.School = student.School;

            return s;
        }

        // DELETE api/students/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var s = Students.Where(x => x.Id == id).FirstOrDefault();

            if (s == null)
            {
                throw new Exception("No student exists with this student id");
            }

            Students.Remove(s);

            return true;
        }
    }
}
