import { useState, useEffect, createContext, useContext, useReducer } from 'react';
import './dashboard.css';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class EmployeeStore {
  salary = 100;
  onBench = true;

  constructor(){
    makeAutoObservable(this);
  }


  setSalary(increment: number) {
    this.salary = this.salary + increment;
  }
}

const employeeStore = new EmployeeStore();

const Project = ({ onBench }: {onBench: boolean}) => {
  return <div className='project'>{onBench ? 'onBench' : 'Project'}</div>
}

const EmployeeCard = observer(() =>{
  const { salary, onBench } = employeeStore;
  return (
    <div className="employeeCard">
      <h2 className='employeeCard__title'>About the employee</h2>
      <div className="employeeCard__salary">
        Salary: {salary}
        <button type="button" onClick={() => employeeStore.setSalary(100)}>Increase salary</button>
      </div>
      <Project onBench={onBench} />
    </div>
  )
});

export const Dashboard = () => {
  return <div className="dashboard">
    <h1 className="dashboard__title">Dashboard</h1>
      <EmployeeCard/>
  </div>
};
