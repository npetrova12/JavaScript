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

const getDepartment = function (val) {
    let department;
    enterprises.forEach((company) => {
        const dept = company.departments.find((el) => {
            return el.id == val || el.name == val;
        });
        if (dept) department = dept;
    });
    return department ? department : 'Нет такого отдела'
}
const getEnterprise = function(val) {
    let enterprise = enterprises.find(el => el.id == val || el.name == val);
    return enterprise ? enterprise : 'Нет такой организации'
}
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

//   Задания:
//   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
  
//   **Пример:**
  
//   Предприятие 1 (45 сотрудников)
//   - Отдел тестирования (10 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Администрация (15 человек)
//   Предприятие 2 (75 сотрудников)
//   - Отдел разработки (50 сотрудников)
//   - Отдел маркетинга (20 сотрудников)
//   - Отдел охраны труда (5 сотрудников)
//   Предприятие 3 (нет сотрудников)
//   - Отдел аналитики (нет сотрудников)

const employeesCountHelper = function(number) {
    number = number.toString().split('').pop()
    if (number) {
        if (number == 1) return "сотирудник"
        else if (number > 1 && number < 5) return "сотрудника"
        else return "сотрудников"
    } else return "(нет сотрудников)"
};

const getDepartments = function (companies) {
    companies.forEach((company) => {
        let depts = [];
        let count = 0;
        depts.push(company.name);
        if (company.departments) {
            company.departments.forEach((dept) => {
                count += +dept.employees_count;
                if (dept.employees_count) {
                    depts.push(`- ${dept.name} (${dept.employees_count} ${employeesCountHelper(dept.employees_count)})`)
                } else depts.push(`- ${dept.name} (нет сотрудников)`)
            })
            if (count) {
                depts[0] += `(${count} ${employeesCountHelper(count)})`
            } else depts[0] += ` (нет сотрудников)`
        }
        console.log(depts.join(`\n\ `))
    })
}
getDepartments(enterprises)


// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
  
// Пример:
//   getEnterpriseName(4) // Предприятие 1
//   getEnterpriseName("Отдел маркетинга") // Предприятие 2
  
// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  
// Пример:
//   addEnterprise("Название нового предприятия")
  
// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
  
// Пример:
//   addDepartment(1, "Название нового отдела")
  
// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
// Пример:
//   editEnterprise(1, "Новое название предприятия")
  
  
// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  
// Пример:
//   editDepartment(7, "Новое название отдела")
  
  
// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
// Пример:
//   deleteEnterprise(1)
  
  
// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
// Пример:
//   deleteDepartment(3)
  
  
// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
  
// Пример:
//   moveEmployees(2, 3)
  
  