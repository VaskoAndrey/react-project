import React, { useEffect, useState } from 'react';
import GetWorkoutsService from '../../../services/getWorkouts.service';
import { useNavigate } from 'react-router-dom';


import Layout from '../../layout/Layout';
import Button from '../../ui/button/Button';
import styles from './Workouts.module.scss';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await GetWorkoutsService.main(); 
            setWorkouts(data); 
            console.log(workouts)
        } catch (error) {
            console.error(error);
        }
        };

        fetchData();
    }, []); 
    
    return (

        <>
        <Layout heading='Workouts' bgImage='/workouts.jpg' />
        <div className={styles.wrapper}>
        {workouts.map((workout) => (
          <div key={workout.id} className={styles.workout}>
            <div>
              <h3>{workout.workoutName}</h3>
            </div>
            <div>
            <img className={styles.unknownImg} src="/unknown.jfif" alt="unknown img" />
            </div>
            <div>
              <span className={styles.truncateText}>{workout.workoutDescription}</span>
            </div>
            <div>
              <h2 className={styles.workoutTime}>{workout.workoutTime}</h2>
            </div>
            <Button clickHandler={() => navigate('/')}>Get started</Button> 
          </div>
          
        ))}
      </div>
        </>
    );
};

export default Workouts;