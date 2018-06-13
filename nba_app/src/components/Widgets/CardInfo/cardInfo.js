import React from 'react';
import FontAwesome from 'react-fontawesome';
//css
import styles from './cardInfo.css';

const teamName = (teams,teamId) => {
    let data = teams.find((item) =>{
        return item.id === teamId
    })
    if(data){
        return data.name;
    }
}

const CardInfo = (props) => {
    return(
        <div className={styles.cardInfo}>
            <span className={styles.teamName}>
                {teamName(props.teams, props.teamId)}
            </span>
            <span className={styles.date}>
                <FontAwesome name="clock-o" 
                    style={{
                        marginRight:'5px'
                    }} />
                    {props.date}
            </span>
        </div>
    )
}

export default CardInfo;