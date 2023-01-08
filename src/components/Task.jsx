import React, { useMemo, useState } from 'react'
import s from './../styles/Task.module.css'

const Task = ({title}) => {

    const [list, setList] = useState([
        {title:'Paris and clothes',id:'1',price:345,type:'tourizm'},
        {title:'Animals',id:'2',price:245,type:'animals'},
        {title:'Jazz club',id:'3',price:180,type:'music'},
        {title:'Italy and tourizm',id:'4',price:125,type:'tourizm'},
        {title:'Food',id:'5',price:156,type:'food'},
        {title:'Creed',id:'6',price:197,type:'music'},
        {title:'Chanel',id:'7',price:145,type:'tourizm'},
    ])

    const [filter, setFilter] = useState({type:'',price:''});

    const [totalCount, setTotalCount] = useState(0);

    const types = useMemo(() => {
        let sTypes = list.map(item => item.type);
        return Array.from(new Set(sTypes));
    }, [list])

    const filteredArr = useMemo(() => {
        if (filter.type)
            return list.filter(item => item.type === filter.type);
        else
            return list;
    }, [filter, list])

    const sortedArr = useMemo(() => {
        if (filter.price){
            if (filter.price === 'down') 
                return filteredArr.sort((a,b) => a.price - b.price)
            else {
                return filteredArr.sort((a,b) => b.price - a.price)
            }
        }
        else
            return filteredArr;
    }, [filter, filteredArr])

    const sortByPrice = () => {
        if (filter.price === 'down')
            setFilter({...filter, price: 'up'})
        else 
            setFilter({...filter, price: 'down'})
    }

    return (
        <div className={s.wrapper}>
            <h2>{title}</h2>

            <div className={s.filter}>
                <button onClick={sortByPrice}>Price<img alt='img' className={filter.price === 'down' ? [s.arrow, s.active].join(' ') : s.arrow } src='https://cdn.icon-icons.com/icons2/2020/PNG/512/arrow_down_download_icon_123737.png'/></button>
                <select value={filter.type} onChange={(e) => {setFilter({...filter, type:e.target.value})}}>
                    <option disabled value=''>Фильтр</option>
                    <option value=''>Нет</option>
                    {types.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </div>

            <div className={s.elements}>
                {sortedArr.map(item => <div onClick={() => {setTotalCount(totalCount + +item.price)}} className={s.element} key={item.id}>
                    <span>{`${item.id} ${item.title}`}</span><span>{item.price}$</span>
                </div>)}
            </div>

            <div className={s.bucket}>
                <span>Total Count</span>
                <span className={s.price}>{totalCount}</span>
            </div>
        </div>
    )
}

export default Task