// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
  
  //helpers


// 


//   Задания:
//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
  
const employeesCountHelper = function(number) {
  number = number.toString().split('').pop()
  if (number) {
      if (number == 1) return 'сотрудник'
      else if (number > 1 && number < 5) return 'сотрудника'
      else return 'сотрудников'
  } else return '(нет сотрудников)'
};

const getDepartments = function (companies) {
    companies.forEach((company) => {
        let depts = [];
        let count = 0;
        depts.push(company.name);
        if (company.departments) {
            company.departments.forEach ((dept) => {
                count += +dept.employees_count;
                if (dept.employees_count) {
                    depts.push(`- ${dept.name} (${dept.employees_count} ${employeesCountHelper(dept.employees_count)})`)
                } else depts.push(`- ${dept.name} (нет сотрудников)`)
            })
            if (count) {
                depts[0] += `(${count} ${employeesCountHelper(count)})`
            } else depts[0] += ` (нет сотрудников)`
        }
        console.log(depts.join (`\n\ `))
    })
}
getDepartments(enterprises)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
  
const getEnterpriseByDepartment = function(val) {
  let enterprise
  enterprises.forEach(ent => {
      let department
      if(ent.departments) {
          department = ent.departments.find(dept => { return dept.id == val || dept.name == val})
      }
      if(department) {
          enterprise = ent;
      }
  })
  return enterprise ? enterprise : 'Нет организации с таким отделом'
}
console.log(getEnterpriseByDepartment('Отдел разработки'))

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

const getNewId = function(company) {
  let maxId = company[0].id;
  company.forEach((el) => {
    if (maxId < el.id) {
      maxId = el.id;
  }
  if (el.departments) {
      el.departments.forEach((elem) => {
      if (maxId < elem.id){
        maxId = elem.id;
      }
    });
  }
});
return maxId + 1;
}

const addEnterprise = function(name) {
  enterprises.push ({
    id: getNewId(enterprises),
    name : name,
    departments : []
  })
}
addEnterprise('Тестировщки')
  
// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
  
const getEnterprise = function(val) {
  let enterprise = enterprises.find(el => el.id == val || el.name == val);
  return enterprise ? enterprise : 'Нет такой организации'
  }

 const addDepartment = function(id, name, employees_count = 0) {
  const enterprise = getEnterprise(id)
  if(typeof enterprise === 'object') {
      enterprise.departments.push({
          id: getNewId(enterprises),
          name: name,
          employees_count: employees_count,
      })
  } else console.log('Нет такой организации')
}
addDepartment(11,'AQA', 20)
addDepartment(11,'Ручные тестировщики', 20)
console.log(getEnterprise(11))
  
// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
const editEnterprise = function (val, name) {
  const enterprise = getEnterprise(val)
  if (typeof enterprise == 'object') {
      enterprise.name = name;
  } else console.log(enterprise)
}
editEnterprise(11, 'QA-инженеры')
console.log(getEnterprise(11))
  
// 6. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
const deleteEnterprise = function(id) {
  enterprises.forEach((enterprise, index) => {
      if (enterprise.id === id) {
          enterprises.splice(index, 1)
      }
  })
}
  
// 7. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
let deleteDepartment = function (id) {
  enterprises.forEach(e => {
      let index = e.departments.findIndex(d => d.id === id && d.employees_count === 0);
      if (index !== -1) {
          e.departments.splice(index, 1);
      }
  })
}
deleteDepartment(10)
console.log(enterprises)
