﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDoListApplication.Models
{
    public class Category
    {
        public virtual int Id { get; set; }
        public virtual string Title { get; set; }
    }
}