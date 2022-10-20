// 1.Simple Object (shallow copy)
// =============================================
console.log('Simple Object (shallow copy)\n------------------------------------');
let dev1 = { name: "Raghavendra" };
let dev2 = { ...dev1 };
dev2.name = "KRISHNA";
console.log("Given Object:",dev1);
console.log("Copied Object:",dev2);

//2.Nested Object (deep copy)
// =================================================
console.log('\nNested Object (deep copy)\n------------------------------------');
let dev3 = {
  name: "Ram",
  skills: {
    primary: "Full Stack",
    Secondary: "DevOps",
  },
};

let dev4 = JSON.parse(JSON.stringify(dev3));
dev4.skills.Secondary = "Cloud Apps";
console.log("Given Object:",dev3);
console.log("Copied Object:",dev4);

//3.Objects With methods & Date (using _loadash)
// =======================================================
console.log('\nObjects With methods & Date (using _loadash)\n------------------------------------');
let dev5 = {
  name: "Ram",
  skills: {
    primary: "Full Stack",
    Secondary: "DevOps",
  },
  getSalary: function () {
    return 2, 00, 000;
  },
  doj: new Date(),
};

let dev6=_.cloneDeep(dev5);

console.log("Given Object:",dev5);
console.log("Copied Object:",dev6);


