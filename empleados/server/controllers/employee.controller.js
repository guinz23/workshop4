const Employee= require('../models/employee');
const employeecontroller={};

employeecontroller.getEmployees=async(req,res)=>{
  const employees= await Employee.find();
  res.json(employees);
}
employeecontroller.createEmployee= async (req,res)=>{
const employee= new Employee(req.body);
console.log(employee);
   employee.save();
   res.json('200');
}
employeecontroller.getEmployee=async(req,res)=>{
 const employee= await Employee.findById(req.params.id);
  res.json(employee);
}
employeecontroller.updateEmployee = async(req,res)=>{
 const{id}=req.params;
 const employee={
     name:req.body.name,
     position:req.body.position,
     office: req.body.office,
     Salary:req.body.Salary
 }
  await Employee.findByIdAndUpdate(id,{$set:employee},{new:true});
  res.json('204');
};
employeecontroller.deleteEmployee=async(req,res)=>{
  await Employee.findByIdAndRemove(req.params.id);
res.json({
    status:'empleado eliminado'
});
}
module.exports=employeecontroller;